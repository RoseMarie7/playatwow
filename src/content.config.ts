import { defineCollection, z } from "astro:content";
import { client } from "../tina/__generated__/client"; // Import Tina client

const pages = defineCollection({
  loader: async () => {
    const postsResponse = await client.queries.pagesConnection();

    return postsResponse.data.pagesConnection.edges
      ?.filter((p) => !!p)
      .map((p) => {
        const node = p?.node;

        // The 'pageSections' data will automatically be part of the 'node' object
        return {
          ...node,
          id: node?._sys.relativePath.replace(/\.mdx?$/, ""),
          tinaInfo: node?._sys,
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
