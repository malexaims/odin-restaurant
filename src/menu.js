
import menuImgPath from "./assets/menu.jpeg";

function buildMenuPage(){   

    const contentDiv = document.getElementById("content");

    contentDiv.innerHTML = ""
    
    const header = document.createElement("h1");
    header.textContent = "Amazing Bacon Center";
    
    const menuImg = new Image();
    menuImg.src = menuImgPath;
    menuImg.alt = "Restaurant Menu";
    
    const subHeader = document.createElement("h2");
    subHeader.textContent = "What is this amazing place?"
    
    const paragraph = document.createElement("p");
    paragraph.textContent = "Welcome to the Amazing Bacon Center where bacon is at the center of an amazing dining experience!"
        
    contentDiv.appendChild(header);
    contentDiv.appendChild(menuImg);
    contentDiv.appendChild(subHeader);
    contentDiv.appendChild(paragraph);
   
};

export {buildMenuPage};

