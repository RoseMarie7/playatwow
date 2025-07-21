import { defineCollection, z } from "astro:content";
import { client } from "../tina/__generated__/client"; // Import Tina client

const pages = defineCollection({
  loader: async () => {
    const pagesResponse = await client.queries.pagesConnection();

    // 1. Ensure 'edges' is always an array (even if empty)
    const edges = pagesResponse.data.pagesConnection.edges || [];

    return edges
      .filter((edge) => {
        // 2. More robust filtering: ensure edge and its node are not null/undefined,
        // and that relativePath is definitely a string.
        return (
          !!edge &&
          !!edge.node &&
          typeof edge.node._sys?.relativePath === "string" // Ensure relativePath is a string
        );
      })
      .map((edge) => {
        // 3. After filtering, we can safely assert that node and _sys are non-null
        // (using '!' non-null assertion or destructuring with defaults)
        const node = edge!.node!;
        const relativePath = node._sys!.relativePath; // Assert non-null after filter

        // 4. Ensure 'id' is always a string.
        // It should be after the above filters, but a final check is good.
        const id = relativePath.replace(/\.mdx?$/, "");
        if (!id) {
          // This case should ideally not happen if relativePath is valid,
          // but robust error handling might be needed depending on your data.
          // For now, let's assume valid paths are guaranteed by Tina.
          throw new Error(
            `Tina page at ${relativePath} yielded an empty ID after processing.`
          );
        }

        return {
          ...node, // Spreads all properties from the Tina node (seoTitle, pageSections, etc.)
          id: id, // Explicitly assign the non-optional string ID
          tinaInfo: node._sys, // Include Tina system info for further use if needed
        };
      });
  },
  schema: z.object({
    tinaInfo: z.object({
      filename: z.string(),
      basename: z.string(),
      path: z.string(),
      relativePath: z.string(),
    }),
    seoTitle: z.string(),
    // NEW: Map your 'pageSections' field from Tina's schema
    // For complex section structures, z.any() is often the most practical
    // way to represent it in Astro's Zod schema, as Tina already handles
    // the internal validation of the section structure.
    pageSections: z.any().optional(), // Make it optional in case a page has no sections
  }),
});

export const collections = { pages };
