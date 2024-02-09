const accordion = [
  {
    id: 1,
    question: <>Career opportunities for Linux professionals?</>,
    answer: (
      <>
        Linux professionals are in high demand, with opportunities ranging from
        system administration and network management to cloud computing and
        cybersecurity. The skills gained open doors to diverse roles across
        industries.
      </>
    ),
    accordion_id: "One",
    collapsed: "",
    aria_expanded: "true",
    active: "tp-faq-active",
  },
  {
    id: 2,
    question: <> Is Linux difficult for beginners?</>,
    answer: (
      <>
        While there is a learning curve, Linux is accessible for beginners.
        Numerous resources, user-friendly distributions, and active community
        support make the journey into Linux manageable for those new to the
        operating system.
      </>
    ),
    accordion_id: "Two",
    collapsed: "collapsed",
    aria_expanded: "false",
    active: "",
  },
  {
    id: 3,
    question: <>How does Linux contribute to remote work?</>,
    answer: (
      <>
        Linux proficiency is a valuable asset for remote work. Many companies
        prefer Linux for server management and cloud computing, making it
        advantageous for professionals seeking remote job opportunities in the
        IT sector.
      </>
    ),
    accordion_id: "Three",
    collapsed: "collapsed",
    aria_expanded: "false",
    active: "",
  },
];
export default accordion;
