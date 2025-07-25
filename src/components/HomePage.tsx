import type { HomeQuery, HomeQueryVariables } from "@tina/__generated__/types";
import { useTina } from "tinacms/dist/react";
import HeroSection from "../../tina/components/HeroSection";
import DescriptionSection from "../../tina/components/DescriptionSection";
import AppointmentsSection from "../../tina/components/AppointmentsSection";
import QuoteSection from "../../tina/components/QuoteSection";
import TestimonialsSection from "../../tina/components/TestimonialsSection";
import ColumnSection from "../../tina/components/ColumnSection";

export default function Page(props: {
  data: HomeQuery;
  variables: HomeQueryVariables;
  query: string;
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
