import type {
  PostsQuery,
  PostsQueryVariables,
} from "@tina/__generated__/types";
import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";

export default function Post(props: {
  data: PostsQuery;
  variables: PostsQueryVariables;
  query: string;
}) {
  const { data } = useTina(props);

  return (
    <>
      <h1 data-tina-field={tinaField(data.posts, "title")}>
        {data.posts.title}
      </h1>
      <p data-tina-field={tinaField(data.posts, "date")}>{data.posts.date}</p>
      <div data-tina-field={tinaField(data.posts, "body")}>
        <TinaMarkdown content={data.posts.body} />
      </div>
    </>
  );
}
