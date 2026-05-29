import { skills } from "../content";

export function Skills() {
  return (
    <section id="skills" className="py-16 border-t border-ink/10">
      <h2 className="text-3xl font-semibold mb-8">{skills.heading}</h2>
      <div className="space-y-6">
        {skills.groups.map((group, i) => (
          <div key={i} className="grid md:grid-cols-[120px_1fr] gap-3 md:gap-6">
            <p className="text-sm font-medium text-ink/60 pt-1">{group.label}</p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item, j) => (
                <span
                  key={j}
                  className="px-3 py-1 text-sm rounded-full border border-ink/15 bg-ink/5"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
