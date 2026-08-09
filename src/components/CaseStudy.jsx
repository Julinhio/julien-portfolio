import Section from "./Section";
import StatBand from "./StatBand";
import FlowDiagram from "./FlowDiagram";
import ModuleReduction from "./ModuleReduction";
import Callouts from "./Callouts";
import Timeline from "./Timeline";
import { CASE_STUDY } from "../data/caseStudy";

const [DIVE_A, DIVE_B, DIVE_C] = CASE_STUDY.deepDives;

const DIVE_TITLE = "display mt-24 text-[clamp(1.625rem,4vw,2.75rem)] sm:mt-32";
const BODY = "mt-6 max-w-[62ch] text-[1.0625rem] leading-relaxed text-ink";

function Body({ paragraphs }) {
  return paragraphs.map((paragraph) => (
    <p key={paragraph.slice(0, 40)} className={BODY}>
      {paragraph}
    </p>
  ));
}

export default function CaseStudy() {
  return (
    <Section id="selected-work" className="border-t border-ink-line">
      <h2 className="display max-w-[18ch] text-[clamp(2rem,5.5vw,4rem)]">
        {CASE_STUDY.title}
      </h2>

      <p className="mt-10 max-w-[58ch] text-[clamp(1.0625rem,2vw,1.25rem)] leading-relaxed text-ink sm:mt-12">
        {CASE_STUDY.intro}
      </p>

      <div className="mt-16 sm:mt-20">
        <StatBand stats={CASE_STUDY.stats} />
      </div>

      <div className="mt-16 sm:mt-24">
        <FlowDiagram before={CASE_STUDY.flow.before} after={CASE_STUDY.flow.after} />
      </div>

      <p className="mt-16 max-w-[62ch] text-[1.0625rem] leading-relaxed text-ink sm:mt-20">
        {CASE_STUDY.role}
      </p>

      <h3 className={DIVE_TITLE}>{DIVE_A.title}</h3>
      <Body paragraphs={DIVE_A.body} />
      <Callouts items={DIVE_A.callouts} />
      <p className="mt-14 flex flex-wrap items-baseline gap-x-5 gap-y-2 border-t-2 border-ink pt-6">
        <span className="display text-[clamp(2.75rem,7vw,4rem)] leading-none text-accent [font-variant-numeric:tabular-nums]">
          {DIVE_A.highlight.value}
        </span>
        <span className="label text-ink-muted">{DIVE_A.highlight.label}</span>
      </p>

      <h3 className={DIVE_TITLE}>{DIVE_B.title}</h3>
      <Body paragraphs={DIVE_B.body} />
      <ModuleReduction />
      <Callouts items={DIVE_B.callouts} />

      <h3 className={DIVE_TITLE}>{DIVE_C.title}</h3>
      <Timeline steps={DIVE_C.steps} />
      <Callouts items={DIVE_C.callouts} />
    </Section>
  );
}
