import type {
  PostsQuery,
  PostsQueryVariables,
} from "@tina/__generated__/types";
import { useTina } from "tinacms/dist/react";
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

export default function Post(props: {
  data: PostsQuery;
  variables: PostsQueryVariables;
  query: string;
}) {
  const { data } = useTina(props);

  return (
    <div className="max-w-7xl px-4 sm:px-8 md:px-16 py-8 space-y-8 mx-auto h-full">
      <h1 className="font-righteous uppercase text-5xl font-bold text-center">
        {data.posts.title}
      </h1>
      <p className="font-josefin-sans uppercase text-sm text-center">
        {data.posts.date}
      </p>
      <div data-tina-field={tinaField(data.posts, "body")}>
        <TinaMarkdown content={data.posts.body} components={components} />
      </div>
    </div>
  );
}
