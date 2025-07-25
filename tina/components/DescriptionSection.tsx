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

export default function DescriptionSection(props: DescriptionSectionProps) {
  return (
    <Section>
      <h2
        data-tina-field={tinaField(props, "title")}
        className="font-righteous uppercase text-3xl font-bold text-[#c49800]"
      >
        {props.title}
      </h2>
      {props.descriptionBlocks?.map((block, i) => {
        return (
          <>
            <h3
              data-tina-field={tinaField(block, "title")}
              className="font-josefin-sans capitalize text-2xl font-bold text-[rgb(27, 27, 27)]"
            >
              {block?.title}
            </h3>
            <TinaMarkdown key={i} content={block?.content} />
            {block?.image && props.title && (
              <img
                data-tina-field={tinaField(block, "image")}
                src={block?.image}
                alt={props.title}
                className="w-full h-auto"
              />
            )}
          </>
        );
      })}
    </Section>
  );
}
