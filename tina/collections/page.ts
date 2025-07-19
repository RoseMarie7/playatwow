import type { Collection } from "tinacms";
import {
  HeroSection,
  DescriptionSection,
  AppointmentsSection,
  QuoteSection,
  TestimonialsSection,
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
        ColumnSection,
      ],
    },
  ],
};
