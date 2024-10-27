import "./styles.css";
import { buildHomePage } from "./home";
import { buildMenuPage } from "./menu";
import { buildAboutPage } from "./about";


//Add imports for the Menu and About modules.

document.addEventListener("DOMContentLoaded", () => {

    //Make bindings for the Home, Menu, and About buttons.
    //Add function calls for the Home, Menu, and About buttons 
    //that build the appropriate page

    const homeBtn = document.getElementById("home-btn");
    homeBtn.addEventListener("click", () => {
        buildHomePage();
    });

    const menuBtn = document.getElementById("menu-btn");
    menuBtn.addEventListener("click", () => {
        buildMenuPage();
    });

    const aboutBtn = document.getElementById("about-btn");
    aboutBtn.addEventListener("click", () => {
        buildAboutPage();
    });

    buildHomePage();
});

// console.log("Why isn't this working!");
