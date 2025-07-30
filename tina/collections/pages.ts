import type { Collection } from "tinacms";
import {
  HeroSection,
  DescriptionSection,
  AppointmentsSection,
  QuoteSection,
  TestimonialsSection,
  BlogSection,
  ColumnSection,
} from "../templates/page-sections";

export const Pages: Collection = {
  name: "pages",
  label: "Pages",
  path: "src/content",
  match: {
    exclude: "home",
  },
  format: "md",
  ui: {
    router: ({ document }) => {
      return `/${document._sys.filename}`;
    },
  },
  fields: [
    { name: "seoTitle", label: "Title", type: "string", required: true },
    {
      name: "pageSections",
      label: "Page Sections",
      type: "object",
      list: true,
      templates: [
        HeroSection,
        DescriptionSection,
        AppointmentsSection,
        QuoteSection,
        TestimonialsSection,
        BlogSection,
        ColumnSection,
      ],
    },
  ],
};
