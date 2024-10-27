
import restaurantImgPath from "./assets/home.jpg";

function buildHomePage(){   

    const contentDiv = document.getElementById("content");
    
    const header = document.createElement("h1");
    header.textContent = "Amazing Bacon Center";
    
    const restaurantImg = new Image();
    restaurantImg.src = restaurantImgPath;
    restaurantImg.alt = "Restaurant Interior";
    
    const subHeader = document.createElement("h2");
    subHeader.textContent = "What is this amazing place?"
    
    const paragraph = document.createElement("p");
    paragraph.textContent = "Welcome to the Amazing Bacon Center where bacon is at the center of an amazing dining experience!"
    
    contentDiv.appendChild(header);
    contentDiv.appendChild(restaurantImg);
    contentDiv.appendChild(subHeader);
    contentDiv.appendChild(paragraph);
   
};

export {buildHomePage};

