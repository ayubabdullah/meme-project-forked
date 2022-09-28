import React, { useState } from "react";
import Input from "./Input";
const Form = ({
  memes,
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
  fontFamily,
  onFontFamilyChange,
  selectedText,
  onImageClick,
  onFormReset,
}) => {
  return (
    <form className="flex flex-col justify-center items-center py-10 bg-white w-screen md:w-full rounded-xl space-y-2">
      <div className="flex flex-col justify-center items-center">
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
      </div>
      <Input
        label="Image URL"
        inputType="text"
        inputId="image-url"
        value={randomImg}
        onInputChange={onRandomImgChange}
      />
      <div className="grid grid-cols-2 gap-x-3 gap-y-2">
        <p className="col-span-2 mx-auto">Text Transform</p>
        <Input
          label="UPPERCASE"
          inputType="radio"
          inputId="uppercase"
          name="case"
          value="uppercase"
          onInputChange={onTextCaseChange}
        />
        <Input
          label="Capitalize"
          inputType="radio"
          inputId="capitalize"
          name="case"
          value="capitalize"
          onInputChange={onTextCaseChange}
        />
        <Input
          label="Normal"
          inputType="radio"
          inputId="normal"
          name="case"
          value="normal-case"
          onInputChange={onTextCaseChange}
        />
        <Input
          label="lowercase"
          inputType="radio"
          inputId="lowercase"
          name="case"
          value="lowercase"
          onInputChange={onTextCaseChange}
        />
      </div>
      <Input
        label="Font Color"
        inputType="color"
        inputId="font-color"
        value={fontColor[selectedText]}
        onInputChange={onFontColorChange}
      />
      <Input
        label="Shadow"
        inputType="checkbox"
        inputId="shadow"
        value={isShadow[selectedText]}
        onInputChange={onIsShadowChange}
      />
      <Input
        label="Font Size"
        inputType="range"
        inputId="font-size"
        value={fontSize[selectedText]}
        onInputChange={onFontSizeChange}
      />
      <select
        name="font-family"
        id="font-family"
        value={fontFamily[selectedText]}
        onChange={onFontFamilyChange}
      >
        <option value="impact">Impact</option>
        <option value="Noto Sans Mono">Noto Sans Mono</option>
        <option value="Josefin Sans">Josefin Sans</option>
      </select>
      <button
        onClick={onFormReset}
        className="py-1 px-6 bg-red-500 text-white rounded-lg"
      >
        Reset
      </button>
    </form>
  );
};

export default Form;
