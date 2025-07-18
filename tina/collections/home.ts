import type { Collection } from "tinacms";

export const HomeCollection: Collection = {
  name: "home",
  label: "Home",
  path: "src/content/home",
  format: "md",
  ui: {
    router: ({ document }) => {
      return "/";
    },
  },
  fields: [
    {
      name: "heroSection",
      label: "Hero Section",
      type: "object",
      fields: [
        {
          name: "title",
          label: "Title",
          type: "string",
          required: true,
        },
        {
          name: "content",
          label: "Content",
          type: "rich-text",
          required: true,
        },
        {
          name: "image",
          label: "Image",
          type: "image",
          required: true,
        },
        {
          name: "link",
          label: "Link",
          type: "string",
          required: true,
        },
      ],
    },
    {
      name: "introSection",
      label: "Intro Section",
      type: "object",
      fields: [
        {
          name: "title",
          label: "Title",
          type: "string",
          required: true,
        },
        {
          name: "introBlocks",
          label: "Intro Blocks",
          type: "object",
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: item?.title };
            },
          },
          fields: [
            {
              name: "title",
              label: "Title",
              type: "string",
              required: true,
            },
            {
              name: "content",
              label: "Content",
              type: "rich-text",
              required: true,
            },
            {
              name: "image",
              label: "Image",
              type: "image",
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: "appointmentsSection",
      label: "Appointments Section",
      type: "object",
      fields: [
        {
          name: "title",
          label: "Title",
          type: "string",
          required: true,
        },
        {
          name: "appointmentsBlocks",
          label: "Appointments Blocks",
          type: "object",
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: item?.title };
            },
          },
          fields: [
            {
              name: "title",
              label: "Title",
              type: "string",
              required: true,
            },
            {
              name: "duration",
              label: "Duration",
              type: "string",
              required: true,
            },
            {
              name: "cost",
              label: "Cost",
              type: "string",
              required: true,
            },
            {
              name: "content",
              label: "Content",
              type: "rich-text",
              required: true,
            },
            {
              name: "image",
              label: "Image",
              type: "image",
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: "quoteSection",
      label: "Quote Section",
      type: "object",
      fields: [
        {
          name: "author",
          label: "Author",
          type: "string",
          required: true,
        },
        {
          name: "quote",
          label: "Quote",
          type: "rich-text",
          required: true,
        },
        {
          name: "image",
          label: "Image",
          type: "image",
          required: true,
        },
      ],
    },
    {
      name: "testimonialsSection",
      label: "Testimonials Section",
      type: "object",
      fields: [
        {
          name: "title",
          label: "Title",
          type: "string",
          required: true,
        },
        {
          name: "testimonialsBlocks",
          label: "Testimonials Blocks",
          type: "object",
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: item?.title };
            },
          },
          fields: [
            {
              name: "title",
              label: "Title",
              type: "string",
              required: true,
            },
            {
              name: "profession",
              label: "Profession",
              type: "string",
              required: true,
            },
            {
              name: "content",
              label: "Content",
              type: "rich-text",
              required: true,
            },
            {
              name: "image",
              label: "Image",
              type: "image",
              required: true,
            },
          ],
        },
      ],
    },
  ],
};
