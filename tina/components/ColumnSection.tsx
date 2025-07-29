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
      <li className="list-disc" {...props}>
        {props.children}
      </li>
    );
  },
};

type ColumnSectionProps =
  | PagesPageSectionsColumnSection
  | HomePageSectionsColumnSection;

export default function ColumnSection(props: ColumnSectionProps) {
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
          className="grid gap-6 mx-auto"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(0, 1fr))",
            maxWidth: `${props.columnAmount * 400}px`,
          }}
        >
          {props.columnBlocks?.map((block, i) => {
            return (
              <div className="card w-full md:w-1/2 lg:w-1/3 mx-auto" key={i}>
                {block?.image && props.title && (
                  <figure>
                    <img
                      data-tina-field={tinaField(block, "image")}
                      src={block?.image}
                      alt={props.title}
                      width={160}
                      height={90}
                      loading="lazy"
                      decoding="async"
                      className="mask mask-square"
                    />
                  </figure>
                )}
                <div className="card-body items-center text-center">
                  <h2 data-tina-field={tinaField(block, "title")}>
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
