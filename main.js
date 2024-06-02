
let style = "flat";
const card = document.querySelector("#card");
const button = document.querySelector("#change-3d");
const wrapper = document.querySelector("#wrapper");

const change3d = async () => {  
  if (style === "flat") {
    style = "preserve-3d";    
    await TORUS.Main.init(card, "mouse(x):ry(20deg <method: parallax, 1s>)");    
  } else {
    style = "flat";
    TORUS.Main.destroy();
  }
  
  wrapper.style.setProperty("--3d-style", style);
};

button.addEventListener("click", change3d);