import React from "react";
import Button from "../components/Button";
import {
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import {
  IoLogoReact,
  IoLogoJavascript,
} from "react-icons/io5";
import {
  SiTailwindcss,
  SiTypescript,
  SiFirebase,
  SiRedux,
  SiFigma,
  SiStyledcomponents,
} from "react-icons/si";
type Props = {};

const Home: React.FC = (props: Props) => {
  return (
    <section className="max-w-2xl mx-auto h-full">
      <h1 className="text-6xl font-heading leading-relaxed tracking-tight font-black">
        {" "}
        Passion, dedication and a lot of coffee
      </h1>
      <p className="leading-loose text-white/90 mt-8">
        Hello! I'm Christian Domacena, a front-end
        developer, currently pursuing a bachelor degree in
        IT. I specialize in creating websites that are both
        simple and interactive.
      </p>
      <div className="mt-12">
        <h2>My toolbelt</h2>
        <ul className="flex gap-6 mt-4 items-center flex-wrap text-sm">
          <li className="flex items-center gap-1 flex-col">
            <IoLogoReact className="w-6 h-6" /> React
          </li>
          <li className="flex items-center gap-1 flex-col">
            <SiTailwindcss className="w-6 h-6" />
            Tailwind
          </li>
          <li className="flex items-center gap-1 flex-col">
            <IoLogoJavascript className="w-6 h-6" />
            Javascript
          </li>
          <li className="flex items-center gap-1 flex-col">
            <SiTypescript className="w-[1.35rem] h-[1.35rem]" />
            Typescript
          </li>
          <li className="flex items-center gap-1 flex-col">
            <SiFirebase className="w-[1.35rem] h-[1.35rem]" />
            Firebase
          </li>
          <li className="flex items-center gap-1 flex-col">
            <SiRedux className="w-[1.35rem] h-[1.35rem]" />
            Redux
          </li>
          <li className="flex items-center gap-1 flex-col">
            <SiFigma className="w-[1.35rem] h-[1.35rem]" />
            Figma
          </li>
          <li className="flex items-center gap-1 flex-col">
            <SiStyledcomponents className="w-[1.35rem] h-[1.35rem]" />
            styled-components
          </li>
        </ul>
      </div>
      <div className="gap-4 mt-12 items-center space-x-4">
        <Button text="say hello!" type="email" />
        <Button
          type="outline"
          text="download cv"
          file="./../assets/Christian-domacena-2023-resume.pdf"
        />
      </div>

      <div className="flex gap-4 mt-12 text-white">
        <a
          href="https://github.com/cjdomacena"
          className="hover:text-white/80 transition-colors"
          rel="noopener noreferrer">
          <AiFillGithub className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/christian-domacena-4548231b8/"
          className="hover:text-white/80 transition-colors"
          rel="noopener noreferrer">
          <AiFillLinkedin className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default Home;
