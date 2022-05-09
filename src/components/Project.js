import CryptoImg from "../images/crypto-city.png";
import DeliciousImg from "../images/delicious.png";
import ShoppingImg from "../images/shopping.png";

export const Project = () => {
  const projects = [
    {
      title: "Crytpo City",
      info: "Assembled a web application for cryptocurrency to represent a real-time price action with Chart library and market capital of the cryptocurrency coin. ",
      tools: ["React", "Chart", "VsCode", "API"],
      img: CryptoImg,
      github: "https://github.com/JunDevHarsh/crypro-city-app",
      preview: "https://crypto-tracker-0.netlify.app/",
    },
    {
      title: "Delicious App",
      info: "Build a recipe making app with some cool effects with Motion library.",
      tools: ["React", "Motion", "API", "VsCode"],
      img: DeliciousImg,
      github: "https://github.com/JunDevHarsh/delicious-app",
      preview: "https://delicious-app-00.netlify.app/",
    },
    {
      title: "Shopping Cart",
      info: "Build an e-commerce shopping web app handling muitlpe state management at once.",
      tools: ["React", "Faker", "API", "VsCode"],
      img: ShoppingImg,
      github: "https://github.com/JunDevHarsh/shopping-cart-app",
      preview: "https://shopping-cart-react-js-00.netlify.app/",
    },
  ];

  return (
    <section className="projects__section" id="Projects">
      <h2 className="projects__title">Projects</h2>
      {projects.map((project, index) => (
        <div className="project" key={index}>
          <div className="project__text">
            <h3 className="project__title">{project.title}</h3>
            <p className="project__info">{project.info}</p>
            <ul className="tools__menu">
              {project.tools.map((tool, idx) => (
                <li className="tools__menu_item" key={idx}>
                  {tool}
                </li>
              ))}
            </ul>
            <div className="row">
              <a href={project.github} target="_blank" rel="noreferrer">
                <svg
                  width="496"
                  height="484"
                  viewBox="0 0 496 484"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M165.9 389.4C165.9 391.4 163.6 393 160.7 393C157.4 393.3 155.1 391.7 155.1 389.4C155.1 387.4 157.4 385.8 160.3 385.8C163.3 385.5 165.9 387.1 165.9 389.4ZM134.8 384.9C134.1 386.9 136.1 389.2 139.1 389.8C141.7 390.8 144.7 389.8 145.3 387.8C145.9 385.8 144 383.5 141 382.6C138.4 381.9 135.5 382.9 134.8 384.9ZM179 383.2C176.1 383.9 174.1 385.8 174.4 388.1C174.7 390.1 177.3 391.4 180.3 390.7C183.2 390 185.2 388.1 184.9 386.1C184.6 384.2 181.9 382.9 179 383.2ZM244.8 0C106.1 0 0 105.3 0 244C0 354.9 69.8 449.8 169.5 483.2C182.3 485.5 186.8 477.6 186.8 471.1C186.8 464.9 186.5 430.7 186.5 409.7C186.5 409.7 116.5 424.7 101.8 379.9C101.8 379.9 90.4 350.8 74 343.3C74 343.3 51.1 327.6 75.6 327.9C75.6 327.9 100.5 329.9 114.2 353.7C136.1 392.3 172.8 381.2 187.1 374.6C189.4 358.6 195.9 347.5 203.1 340.9C147.2 334.7 90.8 326.6 90.8 230.4C90.8 202.9 98.4 189.1 114.4 171.5C111.8 165 103.3 138.2 117 103.6C137.9 97.1 186 130.6 186 130.6C206 125 227.5 122.1 248.8 122.1C270.1 122.1 291.6 125 311.6 130.6C311.6 130.6 359.7 97 380.6 103.6C394.3 138.3 385.8 165 383.2 171.5C399.2 189.2 409 203 409 230.4C409 326.9 350.1 334.6 294.2 340.9C303.4 348.8 311.2 363.8 311.2 387.3C311.2 421 310.9 462.7 310.9 470.9C310.9 477.4 315.5 485.3 328.2 483C428.2 449.8 496 354.9 496 244C496 105.3 383.5 0 244.8 0ZM97.2 344.9C95.9 345.9 96.2 348.2 97.9 350.1C99.5 351.7 101.8 352.4 103.1 351.1C104.4 350.1 104.1 347.8 102.4 345.9C100.8 344.3 98.5 343.6 97.2 344.9ZM86.4 336.8C85.7 338.1 86.7 339.7 88.7 340.7C90.3 341.7 92.3 341.4 93 340C93.7 338.7 92.7 337.1 90.7 336.1C88.7 335.5 87.1 335.8 86.4 336.8ZM118.8 372.4C117.2 373.7 117.8 376.7 120.1 378.6C122.4 380.9 125.3 381.2 126.6 379.6C127.9 378.3 127.3 375.3 125.3 373.4C123.1 371.1 120.1 370.8 118.8 372.4ZM107.4 357.7C105.8 358.7 105.8 361.3 107.4 363.6C109 365.9 111.7 366.9 113 365.9C114.6 364.6 114.6 362 113 359.7C111.6 357.4 109 356.4 107.4 357.7Z"
                    fill="black"
                  />
                </svg>
              </a>
              <a href={project.preview} target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M352 256C352 278.2 350.8 299.6 348.7 320H163.3C161.2 299.6 159.1 278.2 159.1 256C159.1 233.8 161.2 212.4 163.3 192H348.7C350.8 212.4 352 233.8 352 256zM503.9 192C509.2 212.5 512 233.9 512 256C512 278.1 509.2 299.5 503.9 320H380.8C382.9 299.4 384 277.1 384 256C384 234 382.9 212.6 380.8 192H503.9zM493.4 160H376.7C366.7 96.14 346.9 42.62 321.4 8.442C399.8 29.09 463.4 85.94 493.4 160zM344.3 160H167.7C173.8 123.6 183.2 91.38 194.7 65.35C205.2 41.74 216.9 24.61 228.2 13.81C239.4 3.178 248.7 0 256 0C263.3 0 272.6 3.178 283.8 13.81C295.1 24.61 306.8 41.74 317.3 65.35C328.8 91.38 338.2 123.6 344.3 160H344.3zM18.61 160C48.59 85.94 112.2 29.09 190.6 8.442C165.1 42.62 145.3 96.14 135.3 160H18.61zM131.2 192C129.1 212.6 127.1 234 127.1 256C127.1 277.1 129.1 299.4 131.2 320H8.065C2.8 299.5 0 278.1 0 256C0 233.9 2.8 212.5 8.065 192H131.2zM194.7 446.6C183.2 420.6 173.8 388.4 167.7 352H344.3C338.2 388.4 328.8 420.6 317.3 446.6C306.8 470.3 295.1 487.4 283.8 498.2C272.6 508.8 263.3 512 255.1 512C248.7 512 239.4 508.8 228.2 498.2C216.9 487.4 205.2 470.3 194.7 446.6H194.7zM190.6 503.6C112.2 482.9 48.59 426.1 18.61 352H135.3C145.3 415.9 165.1 469.4 190.6 503.6V503.6zM321.4 503.6C346.9 469.4 366.7 415.9 376.7 352H493.4C463.4 426.1 399.8 482.9 321.4 503.6V503.6z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="project__img">
            <img src={project.img} alt="" />
          </div>
        </div>
      ))}
    </section>
  );
};
