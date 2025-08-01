import type {
  HomePageSectionsColumnSection,
  PagesPageSectionsColumnSection,
} from "@tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import Section from "./Section";

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
      <p className="font-josefin-sans font-bold mb-4 text-[#a4a4a4]" {...props}>
        {props.children}
      </p>
    );
  },
  li: (props: any) => {
    return (
      <li className="font-josefin-sans text-start list-disc" {...props}>
        {props.children}
      </li>
    );
  },
  ul: (props: any) => {
    return (
      <ul className="grid font-josefin-sans justify-center mb-4" {...props}>
        {props.children}
      </ul>
    );
  },
};

type ColumnSectionProps =
  | PagesPageSectionsColumnSection
  | HomePageSectionsColumnSection;

export default function ColumnSection(props: ColumnSectionProps) {
  const columnsAsPercent =
    String(Math.floor(100 / (props.columnAmount || 2))) + "%";
  return (
    <Section>
      <h1
        data-tina-field={tinaField(props, "title")}
        className="font-righteous uppercase text-5xl font-bold text-center"
      >
        {props.title}
      </h1>
      {props.columnAmount && (
        <div
          className="grid"
          style={{
            // Grid will have at most n columns (n = columnAmount), where each column is at least 35ch wide
            gridTemplateColumns: `repeat(auto-fit, minmax(max(35ch, ${columnsAsPercent}), 1fr))`,
          }}
        >
          {props.columnBlocks?.map((block, i) => {
            return (
              <div className="card" key={i}>
                {block?.image && props.title && (
                  <figure>
                    <img
                      data-tina-field={tinaField(block, "image")}
                      src={block?.image}
                      alt={props.title}
                      width={288}
                      height={162}
                      loading="lazy"
                      decoding="async"
                      className="mask mask-square"
                    />
                  </figure>
                )}
                <div className="card-body max-w-[40ch] self-center items-center text-center">
                  <h2 className="font-josefin-sans capitalize text-2xl font-bold">
                    {block?.title}
                  </h2>
                  <div
                    data-tina-field={tinaField(block, "content")}
                    className="min-h-[60%] md:min-h-[80%]"
                  >
                    <TinaMarkdown
                      content={block?.content}
                      components={components}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </Section>
  );
}
