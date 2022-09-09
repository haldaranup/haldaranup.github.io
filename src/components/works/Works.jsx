import { useState } from "react";
import "./works.scss";

import { GitHub } from "@mui/icons-material";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "",
      title: "Milaap Clone",
      desc: "Milaap is an online crowdfunding platform that enables anyone across India to raise funds for healthcare, education,disaster relief and other personal causes, with great ease.",
      tech: "React Redux Sass Firebase",
      img: "https://camo.githubusercontent.com/05a071883d80ff5c16fd4a370a71e89ef69aefadb1c393fbbb02fb5833dc9b9d/68747470733a2f2f692e696d6775722e636f6d2f6a454e624a6f522e706e67",
      deploy: "https://milaap-clone.vercel.app/",
      github: "https://github.com/anowar265/sordid-authority-4005",
    },
    {
      id: "2",
      icon: "",
      title: "Paytm-mall Clone",
      desc: "Cloning the Paytm Mall website for the construct week project. We also worked on the back-end for this project.",
      tech: "HTML CSS JavaScript Nodejs Expressjs MongoDB",
      img: "https://github.com/haldaranup/paytm-mall/raw/master/src/assets/homepage.png",

      deploy: "https://paytm-mall-masai.netlify.app",
      github: "https://github.com/haldaranup/paytm-mall",
    },
    {
      id: "3",
      icon: "",
      title: "Adidas Clone",
      desc: "Cloning the adidas website for the construct week project. We worked only on front-end for this project and the site is fully responsive. ",
      tech: "HTML CSS JavaScript ",
      img: "https://github.com/haldaranup/adidas-clone/raw/main/src/assets/homepage.png",
      deploy: "https://adidas-clone12.netlify.app",
      github: "https://github.com/haldaranup/adidas-clone",
    },
    {
      id: "4",
      icon: "",
      title: "Bathandbodyworks Clone",
      desc: "Cloning the Bathandbodyworks website for the construct week project. We used reactjs as our main tech for this project.",
      tech: "Reactjs, Redux, JavaScript",
      img: "https://miro.medium.com/max/1400/1*ywxvWib79n2i6Mkc8PU1-A.png",

      deploy: "https://bathandbodyworks-clone-nu.vercel.app/",
      github: "https://github.com/haldaranup/bathandbodyworks-clone",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div>
              <h1>{d.title}</h1>
              <p>{d.desc}</p>
              <h3>{d.tech}</h3>
            </div>
            <div className="item">
              <img src={d.img} alt="img" />
            </div>

            <div className="links">
              <a href={d.github} target="_blank" rel="noreferrer">
                <GitHub className="github" />
              </a>

              <a href={d.deploy} target="_blank" rel="noreferrer">
                <button>Live</button>
              </a>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
