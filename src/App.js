import Form from "./Components/Form";
import Preview from "./Components/Preview";
import { useEffect, useState } from "react";
export default function App() {
  const [memes, setMemes] = useState([]);
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [randomImg, setRandomImg] = useState("");
  const [textCase, setTextCase] = useState({
    top: "normal-case",
    bottom: "normal-case",
  });
  const [fontColor, setFontColor] = useState({
    top: "#ffffff",
    bottom: "#ffffff",
  });
  const [isShadow, setIsShadow] = useState({
    top: false,
    bottom: false,
  });
  const [fontSize, setFontSize] = useState({
    top: 20,
    bottom: 20,
  });
  const [fontFamily, setFontFamily] = useState({
    top: "impact",
    bottom: "impact",
  });
  const [selectedText, setSelectedText] = useState("top");
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
    setTextCase((prevState) => {
      return { ...prevState, [selectedText]: event.target.value };
    });
  };

  const handleFontColorChange = (event) => {
    setFontColor((prevState) => {
      return { ...prevState, [selectedText]: event.target.value };
    });
  };

  const handleIsShadowChange = (event) => {
    setIsShadow((prevState) => {
      return { ...prevState, [selectedText]: event.target.checked };
    });
  };

  const handleFontSizeChange = (event) => {
    setFontSize((prevState) => {
      return { ...prevState, [selectedText]: event.target.value };
    });
  };

  const handleFontFamilyChange = (event) => {
    setFontFamily((prevState) => {
      return { ...prevState, [selectedText]: event.target.value };
    });
  };

  const handleSelectedTextChange = (selected) => {
    setSelectedText(selected);
  };

  const handleImageClick = (event) => {
    setRandomImg(event.target.src);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setTopText("");
    setBottomText("");
    setRandomImg("");
    setTextCase({
      top: "normal-case",
      bottom: "normal-case",
    });
    setFontColor({
      top: "#ffffff",
      bottom: "#ffffff",
    });
    setIsShadow({
      top: false,
      bottom: false,
    });
    setFontSize({
      top: 20,
      bottom: 20,
    });
    setFontFamily({
      top: "impact",
      bottom: "impact",
    });
    setSelectedText("top");
  };

  const fetchMemes = async () => {
    const response = await fetch("https://api.imgflip.com/get_memes");
    const data = await response.json();
    setMemes(data.data.memes);
    setRandomImg(data.data.memes[0].url);
  };

  useEffect(() => {
    fetchMemes();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:px-10 gap-3 bg-gray-200 py-10">
      <Form
        memes={memes}
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
        fontFamily={fontFamily}
        onFontFamilyChange={handleFontFamilyChange}
        selectedText={selectedText}
        onImageClick={handleImageClick}
        onFormReset={handleReset}
      />
      <Preview
        topText={topText}
        bottomText={bottomText}
        randomImg={randomImg}
        textCase={textCase}
        fontColor={fontColor}
        isShadow={isShadow}
        fontSize={fontSize}
        fontFamily={fontFamily}
        selectedText={selectedText}
        onSelectedTextChange={handleSelectedTextChange}
      />
      <div className="md:col-span-2 grid grid-cols-5 gap-2 md:gap-3 p-2 ">
        {memes &&
          memes.slice(0, 10).map((meme) => (
            <div className="w-16 h-16 md:w-32 md:h-32" key={meme.id}>
              <img src={meme.url} alt={meme.name} onClick={handleImageClick} />
            </div>
          ))}
      </div>
    </div>
  );
}
