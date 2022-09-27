import React, { useState } from "react";
import Input from "./Input";
const Form = ({
  topText,
  onTopTextChange,
  bottomText,
  onBottomTextChange,
  randomImg,
  onRandomImgChange,
  textCase,
  onTextCaseChange,
  fontColor,
  onFontColorChange,
  fontSize,
  onFontSizeChange,
  isShadow,
  onIsShadowChange,
}) => {
  return (
    <form>
      <Input
        label="Top Text"
        inputType="text"
        inputId="top-text"
        value={topText}
        onInputChange={onTopTextChange}
      />
      <Input
        label="Bottom Text"
        inputType="text"
        inputId="bottom-text"
        value={bottomText}
        onInputChange={onBottomTextChange}
      />
      <Input
        label="Image URL"
        inputType="text"
        inputId="image-url"
        value={randomImg}
        onInputChange={onRandomImgChange}
      />
      <Input
        label="UPPERCASE"
        inputType="radio"
        inputId="case"
        value={textCase}
        onInputChange={onTextCaseChange}
      />
      <Input
        label="lowercase"
        inputType="radio"
        inputId="case"
        value={textCase}
        onInputChange={onTextCaseChange}
      />
      <Input
        label="Font Color"
        inputType="color"
        inputId="color"
        value={fontColor}
        onInputChange={onFontColorChange}
      />
      <Input
        label="Shadow"
        inputType="checkbox"
        inputId="shadow"
        value={isShadow}
        onInputChange={onIsShadowChange}
      />
      <Input
        label="Font Size"
        inputType="range"
        inputId="font-size"
        value={fontSize}
        onInputChange={onFontSizeChange}
      />
      <button>Reset</button>
    </form>
  );
};

export default Form;
