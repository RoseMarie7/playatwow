export default function Section({ tinaField, ...props }: any) {
  return (
    <section
      data-tina-field={tinaField}
      className={props.className}
      style={props.style}
    >
      <div className="max-w-7xl mx-auto h-full">{props.children}</div>
    </section>
  );
}
