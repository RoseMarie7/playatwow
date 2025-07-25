import type {
  HomePageSectionsQuoteSection,
  PagesPageSectionsQuoteSection,
} from "@tina/__generated__/types";

type QuoteSectionProps =
  | PagesPageSectionsQuoteSection
  | HomePageSectionsQuoteSection;

export default function QuoteSection(props: QuoteSectionProps) {
  return (
    <div>
      <h1>{props.author}</h1>
      <div dangerouslySetInnerHTML={{ __html: props.quote }} />
    </div>
  );
}
