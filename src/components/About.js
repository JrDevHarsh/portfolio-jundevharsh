import Avatar from "../images/avatar.svg";

export const About = () => {
  return (
    <section className="about__section" id="About">
      <div className="container">
        <div className="left__box">
          <img src={Avatar} alt="avatar logo" />
        </div>
        <div className="right__box">
          <h2 className="about__heading">About</h2>
          <p className="about__text">
            I'm a junior-end developer looking for a new role in an exciting
            company. I focus on writing accessible{" "}
            <span className="colored">HTML</span>, using modern{" "}
            <span className="colored">CSS</span> practices and writing clean{" "}
            <span className="colored">JavaScript</span>. I mostly use{" "}
            <span className="colored">React</span>, but I can adapt to whatever
            tools are required. I'm based in Punjab, India, but I'm happy
            working remotely.
          </p>
          <ul className="social__menu">
            <li className="social__item">
              <a href="https://github.com/JunDevHarsh">
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32.000000pt"
                  height="32.000000pt"
                  viewBox="0 0 32.000000 32.000000"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g
                    transform="translate(0.000000,32.000000) scale(0.100000,-0.100000)"
                    fill="#000000"
                    stroke="none"
                  >
                    <path
                      d="M12 308 c-17 -17 -17 -279 0 -296 17 -17 279 -17 296 0 17 17 17 279
                          0 296 -17 17 -279 17 -296 0z m208 -77 c47 -34 52 -99 10 -141 -27 -27 -50
                          -26 -50 4 0 15 7 26 20 29 20 5 27 38 14 71 -9 23 -99 23 -108 0 -13 -33 -6
                          -66 14 -71 11 -3 20 -9 20 -14 0 -13 -24 -11 -39 4 -10 10 -11 9 -6 -5 4 -10
                          16 -20 27 -24 11 -3 17 -8 15 -11 -12 -11 -48 10 -62 37 -29 57 -10 110 49
                          136 35 15 59 11 96 -15z"
                    />
                  </g>
                </svg>
              </a>
            </li>
            <li className="social__item">
              <a href="https://www.linkedin.com/in/harshdeep-singh-293003186/">
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32.000000pt"
                  height="32.000000pt"
                  viewBox="0 0 32.000000 32.000000"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g
                    transform="translate(0.000000,32.000000) scale(0.100000,-0.100000)"
                    fill="#000000"
                    stroke="none"
                  >
                    <path
                      d="M12 308 c-17 -17 -17 -279 0 -296 17 -17 279 -17 296 0 17 17 17 279
                        0 296 -17 17 -279 17 -296 0z m96 -76 c3 -16 -2 -22 -17 -22 -24 0 -35 15 -27
                        36 9 23 40 13 44 -14z m132 -52 c15 -15 20 -33 20 -70 0 -43 -3 -50 -20 -50
                        -16 0 -20 7 -20 38 0 45 -13 67 -34 59 -11 -5 -16 -19 -16 -52 0 -38 -3 -45
                        -20 -45 -18 0 -20 7 -20 66 0 65 1 66 24 62 14 -3 31 -1 38 3 19 13 26 11 48
                        -11z m-130 -55 c0 -58 -2 -65 -20 -65 -18 0 -20 7 -20 65 0 58 2 65 20 65 18
                        0 20 -7 20 -65z"
                    />
                  </g>
                </svg>
              </a>
            </li>
            <li className="social__item">
              <a href="https://twitter.com/Jas35510740">
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32.000000pt"
                  height="32.000000pt"
                  viewBox="0 0 32.000000 32.000000"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g
                    transform="translate(0.000000,32.000000) scale(0.100000,-0.100000)"
                    fill="#000000"
                    stroke="none"
                  >
                    <path
                      d="M183 275 c-13 -9 -23 -27 -23 -41 0 -15 -6 -24 -15 -24 -24 0 -79 25
                        -94 43 -28 34 -48 6 -26 -37 8 -15 10 -24 5 -21 -21 13 -9 -35 12 -49 12 -9
                        17 -16 10 -16 -21 0 -13 -19 16 -34 l27 -14 -25 -10 c-14 -5 -34 -12 -45 -14
                        -38 -9 66 -30 112 -23 60 9 127 72 142 135 6 25 16 53 21 62 13 24 13 31 -2
                        22 -9 -6 -9 -3 0 9 12 14 11 16 -15 16 -15 0 -39 2 -53 6 -16 4 -33 0 -47 -10z"
                    />
                  </g>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
