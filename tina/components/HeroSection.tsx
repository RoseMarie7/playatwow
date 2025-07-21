import type { PagesPageSectionsHeroSection } from "@tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import Section from "./Section";

export default function HeroSection(props: PagesPageSectionsHeroSection) {
  return (
    <Section
      className="bg-center bg-no-repeat bg-cover h-screen w-screen"
      // Background image must be applied inline, as Tailwind CSS does not support dynamic background images
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <h1>{props.title}</h1>
      <TinaMarkdown content={props.content} />
    </Section>
  );
}
