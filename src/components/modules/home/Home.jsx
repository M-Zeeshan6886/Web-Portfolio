// import React, { useState } from "react";
import React from "react";
import "./Home.scss";
// import Socialsbar from "../socialSideBar/Socialsbar";
import FormInput from "../FormInput/FormInput";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Aicon, Pfimg } from "../../../assets";
import BuiltItemContainer from "../imageSlider/Imgslider";

const Home = () => {
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is Required"),
    name: Yup.string().required("name is Required"),
  });
  // const [previewImg, setPreviewImg] = useState("adeel-bux.png");

  // const changeImage = (fileName) => {
  //   setPreviewImg(fileName);
  // };

  return (
    <>
      <div className="header-container">
        <div className="header-container-content">
          <div className="header-container-content-left">
            <hr />
            <div className="header-container-content-left-pdata">
              <pre>Hi my name is </pre>
              <h1>Imran Ahmad.</h1>
              <h2>I bring your vision to life online.</h2>
              <p>
                I am a highly skilled and motivated freelance developer with a
                passion for creating elegant, efficient and innovative
                solutions. With [number of years] of experience in the field, I
                have a strong understanding of various programming languages,
                platforms, and technologies. Whether it's building a website,
                developing a mobile application, or automating a tedious
                process, I have the expertise to bring your ideas to life. My
                commitment to staying up-to-date with the latest industry trends
                and advancements allows me to deliver high-quality work that
                exceeds your expectations. Let's work together to bring your
                project to the next level.
                <span>Read More</span>
              </p>
              <button>See my work</button>
            </div>
            <img src={Aicon} alt="ArrowIcon" />
          </div>
          <div className="header-container-content-right">
            <div className="header-container-content-right-menu">
              <button>01 About</button>
              <button>02 Things I Built</button>
              <button>03 Contact</button>
            </div>
          </div>
        </div>
      </div>
      <div className="about-container">
        <div className="about-container-content">
          <div className="about-container-content-left">
            <h1>About</h1>
          </div>
          <div className="about-container-content-right">
            {/* <h1>Horizental Line</h1> */}
            <hr />
          </div>
        </div>
      </div>
      <div className="aboutdata-container">
        <div className="aboutdata-container-content">
          <div className="aboutdata-container-content-left">
            <ul>
              <li>
                <span>8+ years </span>
                of professional experience in MERN-Stack development including
                React Native, React JS, Javascript, Typescript, and GraphQL.
              </li>
              <li>
                <span>4+ years </span>
                of professional experience in mobile application development
                using Flutter, and Dart.
              </li>
              <li>
                Rich experience in the <span>“Artificial Intelligence” </span>{" "}
                with additional expertise in “Scikit Learn”, “TensorFlow”,
                “Theano”, ”Caffe”, and “MxNet”.
              </li>
              <li>
                Actively involved in researching and improving code structure
                and code quality using <span>React Hooks</span>, and
                <span> Unit Tests </span>
                using Jest.
              </li>
              <li>
                Expertise in Developing Reusable Components from Mockups using
                CSS Preprocessors including SASS, SCSS, and LESS and UI Packages
                such as React-strap, Material UI, Ant Design, Tailwind UI, D3,
                Semantic UI, Styled components as well as custom UI.
              </li>
              <li>
                Experience in essential <span>ReactJs </span> Libraries such as
                Redux, Redux-Saga, React Router, Redux- Thunk, Redux Toolkit,
                Axios, API Sauce. Expertise in taking over existing applications
                and making the end to end <span>Front-End development </span>{" "}
                lifecycle from development to production after working closely
                with both internal and external stakeholders.
              </li>
              <li>
                Able to implement Custom Scaffolding using plop, stubs, and
                generators.
              </li>
              <li>
                Multilingual, Multi Time Zones, and Multicurrency systems using
                i18n, intl js.
              </li>
              <li>
                Advanced State management using Hooks, Immer, ImmutableJs, Redux
                and Redux Middlewares.
              </li>
              <li>
                Experience in backend technologies and React Frameworks
                including <span>NodeJS, ExpressJs, MongoDB.</span>
              </li>
            </ul>
          </div>
          <div className="aboutdata-container-content-right">
            <img src={Pfimg} alt="Profile-picture" />
          </div>
        </div>
      </div>
      <div className="built-container">
        <div className="built-container-content">
          <div className="built-container-content-left">
            <h1>Thisngs I Built</h1>
          </div>
          <div className="built-container-content-right">
            <hr />
          </div>
        </div>
      </div>
      <BuiltItemContainer />
      {/* <div className="builtItem-container">
        <div className="builtItem-container-content">
          <div className="builtItem-container-content-left">
            <button onClick={() => changeImage("adeel-bux.png")}>
              01 ADEEL BUX
            </button>
            <button onClick={() => changeImage("juga-health.png")}>
              02 JUGA HEALTH
            </button>
            <button onClick={() => changeImage("cook.png")}>
              03 COOK IN THE NOOK
            </button>
            <button onClick={() => changeImage("vivawell.png")}>
              04 VIVA WELL
            </button>
            <button onClick={() => changeImage("bostom.png")}>05 BOSTOM</button>
          </div>
          <div className="builtItem-container-content-right">
            <img id="previewImgs" src={previewImg} alt="Project preview" />
          </div>
        </div>
      </div> */}
      <div className="contact-container">
        <div className="contact-container-content">
          <div className="contact-container-content-left">
            <h1>Let's Talk</h1>
            <p>Get in touch with and together let’s make Internet better.</p>
            <h4>Email</h4>
            <p>Imran.ahmed21991@gmail.com</p>
            <h4>Socials</h4>
            <button>Instagram</button>
            <button>Twitter</button>
            <button>Facebook</button>
          </div>
          <div className="contact-container-content-right">
            <Formik
              initialValues={{
                email: "",
                name: "",
              }}
            >
              {(formik) => (
                <div>
                  <Form>
                    <FormInput
                      label="Name"
                      name="name"
                      type="text"
                      place="Enter your name"
                    />
                    <FormInput
                      label="Email"
                      name="email"
                      type="email"
                      place="Enter your email"
                    />
                  </Form>
                </div>
              )}
            </Formik>
            <div className="contact-container-content-right-inputfield">
              <label>What service are you interested in</label>
              <select required>
                <option value="" disabled selected hidden>
                  Select project type
                </option>
                <option>Mobile App</option>
                <option>Websites</option>
              </select>
              <label>Budget</label>
              <select required>
                <option value="" disabled selected hidden>
                  Select project budget
                </option>
                <option>Dollar</option>
                <option>PKR</option>
              </select>
              <label for="textarea">Message</label>
              <textarea id="textarea"></textarea>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="Sticky">
        <Socialsbar />
      </div> */}
    </>
  );
};

export default Home;
