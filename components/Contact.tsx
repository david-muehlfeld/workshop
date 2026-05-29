import { contact } from "../content";

export function Contact() {
  return (
    <section id="contact" className="py-16 border-t border-ink/10">
      <h2 className="text-3xl font-semibold mb-4">{contact.heading}</h2>
      <p className="text-lg text-ink/80 leading-relaxed max-w-xl">
        {contact.body}
      </p>
      <div className="mt-6 space-y-3">
        <a
          href={`mailto:${contact.email}`}
          className="block text-lg text-accent hover:underline"
        >
          {contact.email}
        </a>
        <ul className="flex flex-wrap gap-x-4 gap-y-2 text-ink/70">
          {contact.socials.map((s, i) => (
            <li key={i}>
              <a
                href={s.href}
                className="hover:text-accent transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.label} →
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
