import type {
  HomePageSectionsTestimonialsSection,
  PagesPageSectionsTestimonialsSection,
} from "@tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import Section from "./Section";
import { tinaField } from "tinacms/dist/react";

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
      <p className="font-josefin-sans font-bold" {...props}>
        {props.children}
      </p>
    );
  },
};

type TestimonialsSectionProps =
  | PagesPageSectionsTestimonialsSection
  | HomePageSectionsTestimonialsSection;

export default function TestimonialsSection(props: TestimonialsSectionProps) {
  return (
    <Section>
      <h1
        data-tina-field={tinaField(props, "title")}
        className="font-righteous uppercase text-5xl font-bold text-center"
      >
        {props.title}
      </h1>
      <div className="flex gap-4 items-center justify-center">
        <div className="carousel scrollbar-default overflow-y-hidden pb-4 w-full">
          {props.testimonialsBlocks?.map((block, i) => {
            return (
              <div
                className="carousel-item card w-full md:w-1/2 lg:w-1/3 mx-auto"
                key={i}
              >
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
                      className="mask mask-circle"
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
                  <p data-tina-field={tinaField(block, "profession")}>
                    {block?.profession}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
