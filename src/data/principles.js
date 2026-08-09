export const PRINCIPLES = [
  {
    title: "Leave a decision trail",
    principle:
      "Every project keeps a written record of what was decided, what was tried, what was abandoned, and which traps not to fall into again.",
    example:
      'After auditing a document generation system, the deliverable wasn’t the fix. It was a written rule listing the six ways a field can silently vanish from a generated document, plus the exclusions nobody should ever "correct". The next person doesn’t have to redo the investigation.',
  },
  {
    title: "Verify the system, not the documentation",
    principle:
      "Documentation describes a system on a given date. The code describes the system today.",
    example:
      "The documentation said a template was written by hand, field by field. It wasn’t. It looped over a list of sections, so a section missing from that list vanished entirely, with no error. Two had been missing for over a year. Found by testing 943 fields one by one.",
  },
  {
    title: "Always keep a way back",
    principle:
      "A dated snapshot before touching an automation. A rollback script written and filed before any database migration.",
    example:
      "The automation platform in use has no version control, so I built one: a snapshot before every change, a changelog per automation. When replacing a critical media pipeline, the old system stayed live in reserve, with a rollback that fits on one line.",
  },
  {
    title: "Silent failure is failure",
    principle:
      "A visible failure gets fixed. A silent one gets discovered too late.",
    example:
      'Two runs reported "Success" while losing every photo attached to a property. We found out two days later. The most important thing shipped that day wasn’t a code fix, it was the alert behind them: a clean run sends nothing, a lossy run sends one message with the exact count.',
  },
  {
    title: "AI agents work under constraints",
    principle:
      "Agents write the code. Review, arbitration and the decision to ship stay with me.",
    example:
      "On a system that created customer accounts, the agent proposed filling missing data with defaults. I ruled the opposite way: if a required field is missing, log the error and don’t create the account. A valid-looking account built on invented data is worse than an error, because nobody notices it.",
  },
];
