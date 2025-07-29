import type {
  HomePageSectionsDescriptionSection,
  PagesPageSectionsDescriptionSection,
} from "@tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import Section from "./Section";
import { tinaField } from "tinacms/dist/react";

type DescriptionSectionProps =
  | PagesPageSectionsDescriptionSection
  | HomePageSectionsDescriptionSection;

const components = {
  h2: (props: any) => {
    return (
      <h2 className="uppercase text-5xl font-bold text-[#c49800]" {...props}>
        {props.children}
      </h2>
    );
  },
  p: (props: any) => {
    return (
      <p className="font-josefin-sans mb-4" {...props}>
        {props.children}
      </p>
    );
  },
  li: (props: any) => {
    return (
      <li className="font-josefin-sans list-disc" {...props}>
        {props.children}
      </li>
    );
  },
};

export default function DescriptionSection(props: DescriptionSectionProps) {
  return (
    <Section>
      <h2
        data-tina-field={tinaField(props, "title")}
        className="font-righteous uppercase text-3xl font-bold text-[#c49800] text-center"
      >
        {props.title}
      </h2>
      {props.descriptionBlocks?.map((block, i) => {
        return (
          <div
            key={i}
            className={`flex flex-col gap-4 items-center justify-around ${
              i % 2 ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
          >
            {block?.image && props.title && (
              <img
                data-tina-field={tinaField(block, "image")}
                src={block?.image}
                alt={props.title}
                width={400}
                height={225}
                loading="lazy"
                decoding="async"
                className="mask mask-squircle shrink-0"
              />
            )}
            <div className="flex flex-col gap-4 items-center justify-center">
              <h3
                data-tina-field={tinaField(block, "title")}
                className="font-josefin-sans capitalize text-2xl font-bold text-[rgb(27, 27, 27)]"
              >
                {block?.title}
              </h3>
              <div data-tina-field={tinaField(block, "content")}>
                <TinaMarkdown
                  content={block?.content}
                  components={components}
                />
              </div>
            </div>
          </div>
        );
      })}
    </Section>
  );
}
