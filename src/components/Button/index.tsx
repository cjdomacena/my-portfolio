import React from 'react'
type Props = {
	type?:string,
	text: string,
  file?:string
}

const Button = ({type = "default", text, file}:Props) => {

  if(type === 'outline') {
    return (
      <a
        href="https://github.com/cjdomacena/my-portfolio/raw/master/src/assets/Christian-Domacena-resume-2022.pdf"
        className={`font-black text-sm rounded border leading-none py-3 px-4  ${
          type === 'outline'
            ? 'border hover:border-secondary hover:text-secondary transition-colors'
            : 'bg-secondary text-white hover:bg-secondary/70 transition-colors'
        }`}
        download>
        {text}
      </a>
    );
  }

  return (
    <button
      className={`font-black text-sm rounded leading-none py-3 px-4  ${
        type === 'outline'
          ? 'border hover:border-secondary hover:text-secondary transition-colors'
          : 'bg-secondary text-white hover:bg-secondary/70 transition-colors'
      }`}>
      {text}
    </button>
  );
}
export default Button;