import { stats } from "../../data/siteData";
import Reveal from "../common/Reveal";

export default function Stats() {
  return (
    <section className="section">
      <div className="container">
        <div className="stats-row">
          {stats.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.08}>
              <article className="stat-circle">
                <h3>{item.value}</h3>
                <p>{item.label}</p>
                <span>{item.icon}</span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
