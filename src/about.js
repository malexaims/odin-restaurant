
function buildAboutPage(){   

    const contentDiv = document.getElementById("content");

    contentDiv.innerHTML = ""
    
    const header = document.createElement("h1");
    header.textContent = "What are we about at the Amazing Bacon Center?";
        
    const paragraph = document.createElement("p");
    paragraph.textContent = `We are about Bacon. What else is there to know? `
    
    contentDiv.appendChild(header);
    contentDiv.appendChild(paragraph);
   
};

export {buildAboutPage};

