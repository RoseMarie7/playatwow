export default function Section(props: any) {
  return (
    <section className={props.className} style={props.style}>
      <div className="max-w-7xl mx-auto">{props.children}</div>
    </section>
  );
}
