import type { PagesPageSectionsHeroSection } from "@tina/__generated__/types";

export default function HeroSection(props: PagesPageSectionsHeroSection) {
  return (
    <div>
      <h1>{props.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: props.content }} />
    </div>
  );
}
