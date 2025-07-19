import type { Template } from "tinacms";

export const HeroSection: Template = {
  name: "heroSection",
  label: "Hero Section",
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
};

export const DescriptionSection: Template = {
  name: "descriptionSection",
  label: "Description Section",
  fields: [
    {
      name: "title",
      label: "Title",
      type: "string",
      required: true,
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
};

export const AppointmentsSection: Template = {
  name: "appointmentsSection",
  label: "Appointments Section",
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
};

export const QuoteSection: Template = {
  name: "quoteSection",
  label: "Quote Section",
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
};

export const TestimonialsSection: Template = {
  name: "testimonialsSection",
  label: "Testimonials Section",
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
};

export const ColumnSection: Template = {
  name: "columnSection",
  label: "Column Section",
  fields: [
    {
      name: "title",
      label: "Title",
      type: "string",
      required: true,
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
};
