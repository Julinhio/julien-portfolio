export const PRINCIPLES = [
  {
    title: "Leave a decision trail",
    principle:
      "Every project keeps a written record of what was decided, what was tried, what was abandoned, and which traps not to fall into again.",
    example:
      'After auditing a document generation system, the deliverable wasn’t the fix. It was a written rule listing the six mechanisms that can make a field silently disappear from a generated document, plus the exclusions that should never be "corrected". The next person doesn’t have to redo the investigation.',
  },
  {
    title: "Verify the system, not the documentation",
    principle:
      "Documentation describes a system on a given date. The code describes the system today.",
    example:
      'Project documentation stated that a document template was written by hand, field by field. It wasn’t. It looped over a list of sections, which meant a section missing from that list vanished entirely from the output, with no error at all. Two sections had been in that state for over a year. Found by testing 943 fields one by one, across four record variants, to tell "never rendered" apart from "condition not met". 80 fields were missing before, 19 after, all of them documented as deliberate.',
  },
  {
    title: "Always keep a way back",
    principle:
      "A dated snapshot before touching an automation. A rollback script written and filed before any database migration.",
    example:
      "The automation platform in use has no version control, so I built one: one folder per automation, a snapshot before every change, a changelog. When replacing a critical media pipeline, the old system stayed live in reserve, with a rollback that fits on one line.",
  },
  {
    title: "Silent failure is failure",
    principle:
      "A visible failure gets fixed. A silent one gets discovered too late.",
    example:
      'Two runs reported "Success" while losing every photo attached to a property. We found out two days later. The most important thing shipped that day wasn’t one of the four code fixes, it was the alert behind them: a normal run sends nothing, a lossy run sends one message with the exact count and a direct link. The worst case, where nothing at all comes through, was tested on purpose.',
  },
  {
    title: "AI agents work under constraints",
    principle:
      "Agents write the code. Review, arbitration and the decision to ship stay with me.",
    example:
      "Two development agents running in parallel under different rules depending on how much I trust them: one gets four review rounds and can merge a green pull request itself, the other is capped at two rounds and never merges. On a system that created customer accounts, the agent proposed filling missing data with defaults. I ruled the opposite way: if a required field is missing, log the error and don’t create the account. A valid-looking account built on invented data is worse than an error, because nobody ever notices it.",
  },
];
