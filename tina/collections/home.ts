import type { Collection } from "tinacms";
import {
  HeroSection,
  DescriptionSection,
  AppointmentsSection,
  QuoteSection,
  TestimonialsSection,
  ColumnSection,
} from "../templates/page-sections";

export const HomePage: Collection = {
  name: "home",
  label: "Home",
  path: "src/content",
  match: {
    include: "home",
  },
  format: "md",
  ui: {
    router: ({ document }) => {
      return "/";
    },
    allowedActions: {
      create: false,
      delete: false,
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
