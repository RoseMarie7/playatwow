import type {
  HomePageSectionsQuoteSection,
  PagesPageSectionsQuoteSection,
} from "@tina/__generated__/types";
import Section from "./Section";
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

const components = {
  h2: (props: any) => {
    return (
      <h2 className="uppercase text-5xl font-bold" {...props}>
        {props.children}
      </h2>
    );
  },
  p: (props: any) => {
    return (
      <p
        className="font-righteous uppercase text-center text-3xl tracking-widest"
        {...props}
      >
        {props.children}
      </p>
    );
  },
};

type QuoteSectionProps =
  | PagesPageSectionsQuoteSection
  | HomePageSectionsQuoteSection;

export default function QuoteSection(props: QuoteSectionProps) {
  return (
    <Section className="bg-[#c49800]">
      <div className="flex flex-col gap-4 items-center justify-center lg:flex-row">
        {props.image && props.author && (
          <img
            data-tina-field={tinaField(props, "image")}
            src={props.image}
            alt={props.author}
            decoding="async"
            className="mask mask-circle shrink-0"
          />
        )}
        <div className="font-josefin-sans flex flex-col gap-4 items-center justify-center">
          <div data-tina-field={tinaField(props, "quote")}>
            <TinaMarkdown content={props.quote} components={components} />
          </div>
          <hr className="w-[24px] border" />
          <p data-tina-field={tinaField(props, "author")}>{props.author}</p>
        </div>
      </div>
    </Section>
  );
}
