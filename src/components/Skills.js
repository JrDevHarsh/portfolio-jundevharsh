import React from "react";

export const Skills = () => {
  const skills = [
    {
      title: "Languages",
      list: [
        {
          name: "HTML5",
          info: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
        },
        {
          name: "CSS3",
          info: "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.",
        },
        {
          name: "JavaScript(ES6)",
          info: "JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
        },
      ],
    },
    {
      title: "CSS Frameworks",
      list: [
        {
          name: "Bootstrap",
          info: "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.",
        },
        {
          name: "Tailwind Css",
          info: "ailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.",
        },
      ],
    },
    {
      title: "CSS Pre-Processor",
      list: [
        {
          name: "Sass",
          info: "Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets. SassScript is the scripting language itself.",
        },
      ],
    },
    {
      title: "JS Library/Framework",
      list: [
        {
          name: "React",
          info: "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.",
        },
        {
          name: "Redux",
          info: "Redux is an open-source JavaScript library for managing and centralizing application state.",
        },
      ],
    },
    {
      title: "Tools",
      list: [
        {
          name: "Git",
          info: "Git is a distributed revision control and source code management system with an emphasis on speed.",
        },
        {
          name: "Github",
          info: "GitHub, Inc. is a provider of Internet hosting for software development and version control using Git.",
        },
        {
          name: "VsCode",
          info: "Visual Studio Code, also commonly referred to as VS Code, is a source-code editor made by Microsoft for Windows, Linux and macOS. ",
        },
      ],
    },
  ];

  return (
    <div className="timeline" id="Skills">
      <h2 className="timeline__title">Skills</h2>
      {skills.map((skill, index) => (
        <div className="container" key={index}>
          <div className="content">
            <h3>{skill.title}</h3>
            <ul>
              {skill.list.map((s, idx) => (
                <li key={idx}>
                  <h4>{s.name}</h4>
                  <p>{s.info}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};
