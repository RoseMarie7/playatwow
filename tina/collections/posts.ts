import type { Collection } from "tinacms";

export const Posts: Collection = {
  name: "posts",
  label: "Posts",
  path: "src/posts",
  format: "md",
  ui: {
    router: ({ document }) => {
      return `/posts/${document._sys.filename}`;
    },
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "string",
    },
    {
      name: "date",
      label: "Date",
      type: "string",
    },
    {
      name: "body",
      label: "Body",
      type: "rich-text",
    },
  ],
};
