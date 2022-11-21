import React from "react";
import './App.css';


// sprites copie from the dicebear api
const sprites = [
  "male",
  "female",
  "human",
  "identicon",
  "initials",
  "bottts",
  "avataaars",
  "jdenticon",
  "gridy",
  "micah"
];

function App() {
  const [imgURL, setImgURL] = React.useState("");
  const [inputVal, setInputVal] = React.useState("");
  const [selectedSprite, setSelectedSprite] = React.useState(sprites[0]);

  const handleInputChange = (e) => {
    setInputVal(() => {
      if (e.target.value.length > 0) {
        setImgURL(

          // changing values in url on changing input
          `https://avatars.dicebear.com/api/${selectedSprite}/${e.target.value}.svg`
        );
      }
      return e.target.value;
    });
  };

  const handleSpriteChange = (e) => {
    setSelectedSprite(() => {
      if (e.target.value.length > 0) {
        setImgURL(

          // changing url based on dropdown option
          `https://avatars.dicebear.com/api/${e.target.value}/${inputVal}.svg`
        );
      }
      return e.target.value;
    });
  };

  return (
          
    
    <div className="parent">

   
    <div className="container">
          <img src={imgURL} alt='dicebear'
          style={{height:'5rem',width:'5rem'}}
          ></img>
          <h4>Select Your Sprite</h4>

         <input className='input' placeholder="Enter what you want" onChange={handleInputChange} ></input>
          <select className="options"  onClick={handleSpriteChange }>
            {
             sprites.map((item)=>{
              return(
                <option  >{item}</option>
              )
             })
            }
          </select>
    </div>

    </div>



   
  );
}

export default App;