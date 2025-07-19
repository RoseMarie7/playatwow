import type {
  PagesQuery,
  PagesQueryVariables,
} from "@tina/__generated__/types";
import { useTina } from "tinacms/dist/react";
import HeroSection from "../../tina/components/HeroSection";
import DescriptionSection from "../../tina/components/DescriptionSection";
import AppointmentsSection from "../../tina/components/AppointmentsSection";
import QuoteSection from "../../tina/components/QuoteSection";
import TestimonialsSection from "../../tina/components/TestimonialsSection";
import ColumnSection from "../../tina/components/ColumnSection";

export function PageComponent(props: {
  data: PagesQuery;
  variables: PagesQueryVariables;
  query: string;
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
