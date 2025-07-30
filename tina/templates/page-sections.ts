import type { Template } from "tinacms";

export const HeroSection: Template = {
  name: "heroSection",
  label: "Hero Section",
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
    },
    {
      name: "content",
      label: "Content",
      type: "rich-text",
    },
    {
      name: "image",
      label: "Image",
      type: "image",
    },
  ],
};

export const DescriptionSection: Template = {
  name: "descriptionSection",
  label: "Description Section",
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
    },
    {
      name: "descriptionBlocks",
      label: "Description Blocks",
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
        },
        {
          name: "content",
          label: "Content",
          type: "rich-text",
        },
        {
          name: "image",
          label: "Image",
          type: "image",
        },
      ],
    },
  ],
};

export const AppointmentsSection: Template = {
  name: "appointmentsSection",
  label: "Appointments Section",
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
        },
        {
          name: "duration",
          label: "Duration",
          type: "string",
        },
        {
          name: "cost",
          label: "Cost",
          type: "string",
        },
        {
          name: "content",
          label: "Content",
          type: "rich-text",
        },
        {
          name: "image",
          label: "Image",
          type: "image",
        },
      ],
    },
  ],
};

export const QuoteSection: Template = {
  name: "quoteSection",
  label: "Quote Section",
  ui: {
    itemProps: (item) => {
      return { label: item?.author };
    },
  },
  fields: [
    {
      name: "author",
      label: "Author",
      type: "string",
    },
    {
      name: "quote",
      label: "Quote",
      type: "rich-text",
    },
    {
      name: "image",
      label: "Image",
      type: "image",
    },
  ],
};

export const TestimonialsSection: Template = {
  name: "testimonialsSection",
  label: "Testimonials Section",
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
        },
        {
          name: "profession",
          label: "Profession",
          type: "string",
        },
        {
          name: "content",
          label: "Content",
          type: "rich-text",
        },
        {
          name: "image",
          label: "Image",
          type: "image",
        },
      ],
    },
  ],
};

export const BlogSection: Template = {
  name: "blogSection",
  label: "Blog Section",
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
    },
    {
      name: "image",
      label: "Image",
      type: "image",
    },
    {
      name: "blogBlocks",
      label: "Blog Blocks",
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
        },
        {
          name: "date",
          label: "Date",
          type: "string",
        },
      ],
    },
  ],
};

export const ColumnSection: Template = {
  name: "columnSection",
  label: "Column Section",
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
    },
    {
      name: "columnAmount",
      label: "Column Amount",
      type: "number",
    },
    {
      name: "columnBlocks",
      label: "Column Blocks",
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
        },
        {
          name: "content",
          label: "Content",
          type: "rich-text",
        },
        {
          name: "image",
          label: "Image",
          type: "image",
        },
      ],
    },
  ],
};
