import type { HomeQuery, HomeQueryVariables } from "@tina/__generated__/types";
import { useTina, tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

type Props = {
  data: HomeQuery;
  variables: HomeQueryVariables;
  query: string;
};

export default function Test(props: Props) {
  const { data } = useTina({
    data: props.data,
    variables: props.variables,
    query: props.query,
  });
  const home = data.home;
  return (
    <div data-tina-field={tinaField(home.heroSection, "content")}>
      <TinaMarkdown content={home.heroSection?.content} />
    </div>
  );
}
