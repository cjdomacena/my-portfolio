import React from 'react'

type Props = {
	type?:string,
	text: string
}

const Button = ({type = "default", text}:Props) => {
  return (
    <button
      className={`font-black text-sm rounded leading-none py-3 px-4  ${
        type === 'outline'
          ? 'border hover:bg-white hover:text-primary transition-colors'
          : 'bg-white  text-primary hover:bg-white/70 transition-colors'
      }`}>
      {text}
    </button>
  );
}
export default Button;