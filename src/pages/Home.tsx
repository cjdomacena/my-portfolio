import React from 'react';
import Button from '../components/Button';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

type Props = {};

const Home: React.FC = (props: Props) => {
  return (
    <section className="max-w-2xl mx-auto my-12 h-full">
      <h1 className="text-6xl font-heading leading-relaxed tracking-tight font-black">
        {' '}
        Passion, dedication and a lot of coffee
      </h1>
      <p className="font-medium leading-loose text-white/80 mt-8">
        Hello! I'm Christian Domacena, a front-end developer, currently pursuing a bachelor degree
        in IT. I specialize in creating websites that are both simple and interactive.
      </p>
      <div className="flex gap-4 mt-12">
        <Button type="default" text="say hello!" />
        <Button type="outline" text="download cv" />
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
