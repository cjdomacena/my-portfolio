import React from "react";
type Props = {
  type?: string;
  text: string;
  file?: string;
};

const Button = ({
  type = "default",
  text,
  file,
}: Props) => {
  if (type === "outline") {
    return (
      <a
        href="https://github.com/cjdomacena/my-portfolio/raw/master/src/assets/Christian-domacena-2023-resume.pdf"
        className={`font-black text-sm rounded border leading-none py-3 px-4  ${
          type === "outline"
            ? "border hover:border-secondary hover:text-secondary transition-colors"
            : "bg-secondary text-white hover:bg-secondary/70 transition-colors"
        }`}
        download>
        {text}
      </a>
    );
  }
  if (type === "email") {
    return (
      <a
        href="mailto:cjdomacena@yahoo.com"
        className={`font-black text-sm rounded leading-none py-3 px-4 bg-secondary text-white hover:bg-secondary/70 transition-colors
         `}
        download>
        {text}
      </a>
    );
  }

  return (
    <button
      className={`font-black text-sm rounded leading-none py-3 px-4  ${
        type === "outline"
          ? "border hover:border-secondary hover:text-secondary transition-colors"
          : "bg-secondary text-white hover:bg-secondary/70 transition-colors"
      }`}>
      {text}
    </button>
  );
};
export default Button;
