import "./styles/App.scss"
import "./styles/colors.scss"
import "./styles/intro.scss"
import "./styles/Section.scss"
import "./styles/Footer.scss"
import "./styles/Misc.scss"
import "./styles/mediaQuey.scss"

import IntroVideo from "./components/IntroVideo";
import Section from "../src/components/Section"
import Footer from "./components/Footer.jsx"
import Misc from "./components/Misc.jsx"


import freshtopicimg from './assests/academy.png'
import freshtopic2img from './assests/story.png'
import tedTalksimg from './assests/in-the-news.gif'
import franchiseimg from './assests/franchise.gif'
import mapimg from './assests/locations.png'
import coursesimg from './assests/image2.png'
import albumimg from './assests/mba-cares.gif'
import baratimg from './assests/image1.png'
import chaiwalaimg from './assests/image3.png'
import data from './data/data.json'
import { useEffect } from "react"

const yellow = "#fff100";
const pink = "#ed1e79";
const red = "#d20120";
const white = "#fff";
const brown = "#6d3d0f";

function App() {
  const {
    freshTopic,
    freshTopic2,
    tedTalks,
    franchise,
    map,
    courses,
    album,
    barat,
    chaiwala
  } = data;

  const dotcursor = (e) => {
    const cursor = document.querySelector(".cursor");
    cursor.style.top = `$(e.pageY-14) px`;
    cursor.style.left = `$(e.pageX-14)px`;
    const element = e.target;
    if (element.getAttribute("data-cursorpointer")) {
      cursor.classList.add("cursorHover");
    }
    else if (element.getAttribute("data-cursorpointermini")) {
      cursor.classList.add("cursorHoverMini");
    }
    else {
      cursor.classList.remove("cursorHover");
      cursor.classList.remove("cursorHoverMini");
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", dotcursor);
    return () => {
      window.removeEventListener("mousemove", dotcursor);
    }
  })

  return (
    <>
      <IntroVideo />
      {/* freshtopic */}
      <Section
        h3={freshTopic.heading}
        text={freshTopic.heading}
        btnTxt={freshTopic.btn}
        imgsrc={freshtopicimg}
        bgcolor={pink}
        headingcolor={yellow}
        textcolor={yellow}
        btnbgcolor={yellow}
        btncolor={pink}
      />
      {/* freshtopic2 */}
      <Section
        h3={freshTopic2.heading}
        text={freshTopic2.heading}
        btnTxt={freshTopic2.btn}
        imgsrc={freshtopic2img}
        bgcolor={pink}
        headingcolor={yellow}
        textcolor={yellow}
        btnbgcolor={yellow}
        btncolor={pink}
      />
      {/* tedTalks */}
      <Section
        h3={tedTalks.heading}
        text={tedTalks.heading}
        btnTxt={tedTalks.btn}
        imgsrc={tedTalksimg}
        bgcolor={yellow}
        headingcolor={pink}
        textcolor={pink}
        btnbgcolor={pink}
        btncolor={yellow}
      />
      {/* franchise */}
      <Section
        h3={franchise.heading}
        text={franchise.heading}
        btnTxt={franchise.btn}
        imgsrc={franchiseimg}
        bgcolor={white}
        headingcolor={pink}
        textcolor={brown}
        btnbgcolor={brown}
        btncolor={yellow}
      />
      {/* map */}
      <Section
        h3={map.heading}
        text={map.heading}
        // btnTxt={map.btn} 
        imgsrc={mapimg}
        bgcolor={pink}
        headingcolor={yellow}
        textcolor={yellow}
        btnbgcolor={pink}
        btncolor={yellow}
        hasBtn={false}
      />
      {/* courses */}
      <Section
        h3={courses.heading}
        text={courses.heading}
        btnTxt={courses.btn}
        imgsrc={coursesimg}
        imgsize={"30%"}
        bgcolor={yellow}
        headingcolor={pink}
        textcolor={pink}
        btnbgcolor={pink}
        btncolor={yellow}
      />
      {/* album */}
      <Section
        h3={album.heading}
        text={album.heading}
        btnTxt={album.btn}
        imgsrc={albumimg}
        bgcolor={yellow}
        headingcolor={pink}
        textcolor={pink}
        btnbgcolor={pink}
        btncolor={yellow}
      />
      {/* barat */}
      <Section
        h3={barat.heading}
        text={barat.heading}
        btnTxt={barat.btn}
        imgsrc={baratimg}
        bgcolor={pink}
        headingcolor={yellow}
        textcolor={yellow}
        btnbgcolor={yellow}
        btncolor={pink}
      />
      {/* chaiwala */}
      <Section
        h3={chaiwala.heading}
        text={chaiwala.heading}
        btnTxt={chaiwala.btn}
        imgsrc={chaiwalaimg}
        bgcolor={white}
        headingcolor={pink}
        textcolor={brown}
        btnbgcolor={brown}
        btncolor={yellow}
      />
      <Footer />
      <Misc />
    </>
  );
}

export default App;
