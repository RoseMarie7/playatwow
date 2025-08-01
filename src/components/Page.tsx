import type {
  PagesQuery,
  PagesQueryVariables,
} from "@tina/__generated__/types";
import { useTina } from "tinacms/dist/react";
import HeroSection from "../../tina/pages/HeroSection";
import DescriptionSection from "../../tina/pages/DescriptionSection";
import AppointmentsSection from "../../tina/pages/AppointmentsSection";
import QuoteSection from "../../tina/pages/QuoteSection";
import TestimonialsSection from "../../tina/pages/TestimonialsSection";
import BlogSection from "../../tina/pages/BlogSection";
import ColumnSection from "../../tina/pages/ColumnSection";

export default function Page(props: {
  data: PagesQuery;
  variables: PagesQueryVariables;
  query: string;
  posts: any;
}) {
  const { data } = useTina(props);

  return (
    <>
      {data.pages.pageSections?.map((section, i) => {
        switch (section?.__typename) {
          case "PagesPageSectionsHeroSection": {
            return <HeroSection key={i} {...section} />;
          }
          case "PagesPageSectionsDescriptionSection": {
            return <DescriptionSection key={i} {...section} />;
          }
          case "PagesPageSectionsAppointmentsSection": {
            return <AppointmentsSection key={i} {...section} />;
          }
          case "PagesPageSectionsQuoteSection": {
            return <QuoteSection key={i} {...section} />;
          }
          case "PagesPageSectionsTestimonialsSection": {
            return <TestimonialsSection key={i} {...section} />;
          }
          case "PagesPageSectionsBlogSection": {
            return <BlogSection key={i} {...section} posts={props.posts} />;
          }
          case "PagesPageSectionsColumnSection": {
            return <ColumnSection key={i} {...section} />;
          }
          default: {
            return null;
          }
        }
      })}
    </>
  );
}
