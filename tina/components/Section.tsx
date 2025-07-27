export default function Section({ tinaField, ...props }: any) {
  return (
    <section
      data-tina-field={tinaField}
      className={props.className}
      style={props.style}
    >
      <div className="max-w-7xl px-16 py-8 space-y-8 mx-auto h-full">
        {props.children}
      </div>
    </section>
  );
}
