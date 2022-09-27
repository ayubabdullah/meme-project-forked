import Form from "./Components/Form";
import Preview from "./Components/Preview";
import { useState } from "react";
export default function App() {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [randomImg, setRandomImg] = useState("http://i.imgflip.com/1bij.jpg");
  const [textCase, setTextCase] = useState("uppercase");
  const [fontColor, setFontColor] = useState("#ffffff");
  const [isShadow, setIsShadow] = useState(false);
  const [fontSize, setFontSize] = useState(20);

  const handleTopTextChange = (event) => {
    setTopText(event.target.value);
  };

  const handleBottomTextChange = (event) => {
    setBottomText(event.target.value);
  };

  const handleRandomImgChange = (event) => {
    setRandomImg(event.target.value);
  };

  const handleTextCaseChange = (event) => {
    setTextCase(event.target.value);
  };

  const handleFontColorChange = (event) => {
    setFontColor(event.target.value);
  };

  const handleIsShadowChange = (event) => {
    setIsShadow(event.target.checked);
  };

  const handleFontSizeChange = (event) => {
    setFontSize(event.target.value);
  };

  return (
    <div className="grid grid-cols-1 gap-1">
      <Form
        topText={topText}
        onTopTextChange={handleTopTextChange}
        bottomText={bottomText}
        onBottomTextChange={handleBottomTextChange}
        randomImg={randomImg}
        onRandomImgChange={handleRandomImgChange}
        textCase={textCase}
        onTextCaseChange={handleTextCaseChange}
        fontColor={fontColor}
        onFontColorChange={handleFontColorChange}
        isShadow={isShadow}
        onIsShadowChange={handleIsShadowChange}
        fontSize={fontSize}
        onFontSizeChange={handleFontSizeChange}
      />
      <Preview
        topText={topText}
        bottomText={bottomText}
        randomImg={randomImg}
        textCase={textCase}
        fontColor={fontColor}
        isShadow={isShadow}
        fontSize={fontSize}
      />
    </div>
  );
}
