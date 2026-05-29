import { about } from "../content";

export function About() {
  return (
    <section id="about" className="py-16 border-t border-ink/10">
      <h2 className="text-3xl font-semibold mb-6">{about.heading}</h2>
      <div className="space-y-4 text-lg text-ink/80 leading-relaxed">
        {about.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}
