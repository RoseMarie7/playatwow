export default function Section(props: any) {
  return (
    <section className={props.className} style={props.style}>
      <div className="max-w-7xl mx-auto h-full">{props.children}</div>
    </section>
  );
}
