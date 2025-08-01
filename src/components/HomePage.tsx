import type { HomeQuery, HomeQueryVariables } from "@tina/__generated__/types";
import { useTina } from "tinacms/dist/react";
import HeroSection from "../../tina/pages/HeroSection";
import DescriptionSection from "../../tina/pages/DescriptionSection";
import AppointmentsSection from "../../tina/pages/AppointmentsSection";
import QuoteSection from "../../tina/pages/QuoteSection";
import TestimonialsSection from "../../tina/pages/TestimonialsSection";
import BlogSection from "../../tina/pages/BlogSection";
import ColumnSection from "../../tina/pages/ColumnSection";

export default function Page(props: {
  data: HomeQuery;
  variables: HomeQueryVariables;
  query: string;
  posts: any;
}) {
  const { data } = useTina(props);

  return (
    <>
      {data.home.pageSections?.map((section, i) => {
        switch (section?.__typename) {
          case "HomePageSectionsHeroSection": {
            return <HeroSection key={i} {...section} />;
          }
          case "HomePageSectionsDescriptionSection": {
            return <DescriptionSection key={i} {...section} />;
          }
          case "HomePageSectionsAppointmentsSection": {
            return <AppointmentsSection key={i} {...section} />;
          }
          case "HomePageSectionsQuoteSection": {
            return <QuoteSection key={i} {...section} />;
          }
          case "HomePageSectionsTestimonialsSection": {
            return <TestimonialsSection key={i} {...section} />;
          }
          case "HomePageSectionsBlogSection": {
            return <BlogSection key={i} {...section} posts={props.posts} />;
          }
          case "HomePageSectionsColumnSection": {
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
