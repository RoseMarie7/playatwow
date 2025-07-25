import type {
  HomePageSectionsTestimonialsSection,
  PagesPageSectionsTestimonialsSection,
} from "@tina/__generated__/types";

type TestimonialsSectionProps =
  | PagesPageSectionsTestimonialsSection
  | HomePageSectionsTestimonialsSection;

export default function TestimonialsSection(props: TestimonialsSectionProps) {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.testimonialsBlocks?.map((block, i) => {
        return (
          <div key={i}>
            <h2>{block?.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: block?.content }} />
          </div>
        );
      })}
    </div>
  );
}
