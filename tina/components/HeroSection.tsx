import type { PagesPageSectionsHeroSection } from "@tina/__generated__/types";
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
      <p className="font-josefin-sans text-2xl font-bold text-white" {...props}>
        {props.children}
      </p>
    );
  },
};

export default function HeroSection(props: PagesPageSectionsHeroSection) {
  return (
    <Section
      tinaField={tinaField(props, "image")}
      className="bg-center bg-no-repeat bg-cover h-screen"
      // Background image must be applied inline, as Tailwind CSS does not support dynamic background images
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div className="font-righteous flex flex-col gap-4 items-center justify-center h-full">
        <h1
          data-tina-field={tinaField(props, "title")}
          className="uppercase text-5xl font-bold text-[#c49800]"
        >
          {props.title}
        </h1>
        <div
          data-tina-field={tinaField(props, "content")}
          className="text-center"
        >
          <TinaMarkdown content={props.content} components={components} />
        </div>
      </div>
    </Section>
  );
}
