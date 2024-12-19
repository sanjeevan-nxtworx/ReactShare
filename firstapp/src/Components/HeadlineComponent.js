import ItemImage from "./ImageComponent";
import ItemDescription from "./ItemDescription";

function Headline({ Image, Desc, HideHandler }) {
  const HandleHideClick = (event) => {
    console.log(event);
    console.log("Hide Me has been Clicked");
    HideHandler();
  };

  return (
    <>
      <ItemImage Name={Image} />
      <ItemDescription Desc={Desc} />
      <button onClick={HandleHideClick}>Hide Me!</button>
    </>
  );
}

export default Headline;
