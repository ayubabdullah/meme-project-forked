import React from "react";

const Preview = ({
  topText,
  bottomText,
  randomImg,
  textCase,
  fontColor,
  isShadow,
  fontSize,
}) => {
  
  return (
    <div>
          <p>{topText}</p>
          <img src={randomImg} alt="Random Image meme" />
          <p>{bottomText}</p>
    </div>
  );
};

export default Preview;
