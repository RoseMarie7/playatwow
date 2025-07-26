import type {
  HomePageSectionsTestimonialsSection,
  PagesPageSectionsTestimonialsSection,
} from "@tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
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
      <p className="font-josefin-sans text-2xl font-bold text-white" {...props}>
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
    <div>
      <h1>{props.title}</h1>
      <div className="carousel w-full">
        {props.testimonialsBlocks?.map((block, i) => {
          return (
            <div className="carousel-item card" key={i}>
              {block?.image && props.title && (
                <figure>
                  <img
                    data-tina-field={tinaField(block, "image")}
                    src={block?.image}
                    alt={props.title}
                    width={1600}
                    height={900}
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
              )}
              <div className="card-body">
                <h2 className="card-title">{block?.title}</h2>
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
      </div>
    </div>
  );
}
