import type {
  HomePageSectionsBlogSection,
  PagesPageSectionsBlogSection,
} from "@tina/__generated__/types";
import Section from "./Section";
import { tinaField } from "tinacms/dist/react";
import type { InferEntrySchema, RenderedContent } from "astro:content";

type Post = {
  id: string;
  body?: string;
  collection: "posts";
  data: InferEntrySchema<"posts">;
  rendered?: RenderedContent;
  filePath?: string;
};

type BlogSectionProps =
  | (PagesPageSectionsBlogSection & { posts: Post[] })
  | (HomePageSectionsBlogSection & { posts: Post[] });

export default function TestimonialsSection(props: BlogSectionProps) {
  return (
    <Section
      className="bg-center p-8 bg-no-repeat bg-cover"
      // Background image must be applied inline, as Tailwind CSS does not support dynamic background images
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <h2
        data-tina-field={tinaField(props, "title")}
        className="font-righteous uppercase text-5xl font-bold text-center"
      >
        {props.title}
      </h2>
      {props.posts.length > 0 && (
        <div className="flex gap-4 items-center justify-center">
          <div className="carousel w-full">
            {props.posts.map((post, i) => {
              return (
                <div
                  className="carousel-item card rounded-none p-2 md:p-4 w-full md:w-1/2 lg:w-1/3 max-w-[200px] mx-auto bg-white shadow-2xl"
                  key={i}
                >
                  <div className="card-body justify-between items-center text-center min-h-[300px]">
                    <p className="flex-none">{post.data.date}</p>
                    <h2 className="card-title">{post.data.title}</h2>
                    <a
                      href={`/posts/${post.id}`}
                      className="hover:underline hover:text-[#c49800]"
                    >
                      Continue Reading
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </Section>
  );
}
