import type { PagesPageSectionsColumnSection } from "@tina/__generated__/types";

export default function ColumnSection(props: PagesPageSectionsColumnSection) {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.columnBlocks?.map((block, i) => {
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
