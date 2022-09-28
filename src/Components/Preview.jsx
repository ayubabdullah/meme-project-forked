import React from "react";

const Preview = ({
  topText,
  bottomText,
  randomImg,
  textCase,
  fontColor,
  isShadow,
  fontSize,
  fontFamily,
  selectedText,
  onSelectedTextChange,
}) => {
  const textStyles = {
    top: {
      color: fontColor["top"],
      textShadow: isShadow["top"] ? "2px 2px 2px black" : "",
      fontSize: `${fontSize["top"]}px`,
      fontFamily: fontFamily["top"],
    },
    bottom: {
      color: fontColor["bottom"],
      textShadow: isShadow["bottom"] ? "2px 2px 2px black" : "",
      fontSize: `${fontSize["bottom"]}px`,
      fontFamily: fontFamily["bottom"],
    },
  };

  const topBorder = selectedText === "top" ? "border-2 border-red-500" : "";
  const bottomBorder =
    selectedText === "bottom" ? "border-2 border-red-500" : "";
  return (
    <div className="relative w-1/2 mx-auto md:w-full md:mx-0">
      <p
        className={`absolute left-1/2 -translate-x-1/2 ${textCase["top"]} ${topBorder}`}
        style={textStyles["top"]}
        onClick={() => onSelectedTextChange("top")}
      >
        {topText}
      </p>
      <img
        className="w-4/5 md:w-full md:h-full mx-auto"
        src={randomImg}
        alt="Random Image meme"
      />
      <p
        className={`absolute left-1/2 -translate-x-1/2 bottom-0 ${textCase["bottom"]} ${bottomBorder}`}
        style={textStyles["bottom"]}
        onClick={() => onSelectedTextChange("bottom")}
      >
        {bottomText}
      </p>
    </div>
  );
};

export default Preview;
