import Photo from "./1.jpg";
function ShowPhoto() {
  //return <img src={require("./1.jpg")} alt="somthing" />;
  return <img src={Photo} className="img" alt="somthing" />;
}

export default ShowPhoto;
