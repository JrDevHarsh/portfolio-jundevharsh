import MainImg from "../images/illustration-mockups.svg";

export const HeaderIntro = () => {
  return (
    <section className="header__intro" id="Home">
      <div className="container">
        <div className="left__box">
          <h2 className="title__2">Hi there, My name is</h2>
          <h3 className="title__3">Harshdeep Singh</h3>
          <h4 className="title__4">I am Front-End Developer</h4>
          <p className="intro__text">
            I'm a self-taught front-end developer trying to specialize in
            building accessible, user-friendly websites.
          </p>
          <a className="intro__btn" href="#About">
            About Me
          </a>
        </div>
        <div className="right__box">
          <img src={MainImg} alt="illustration mockup" />
        </div>
      </div>
    </section>
  );
};
