import type { PagesPageSectionsQuoteSection } from "@tina/__generated__/types";

export default function QuoteSection(props: PagesPageSectionsQuoteSection) {
  return (
    <div>
      <h1>{props.author}</h1>
      <div dangerouslySetInnerHTML={{ __html: props.quote }} />
    </div>
  );
}
