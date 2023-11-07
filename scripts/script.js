// JavaScript Document
console.log("hi");




// Hamburger menu //

function openMenu() {
       var hamburgerMenu = document.querySelector("header nav");

    // Checkt of het menu een 'active' class heeft
    if (hamburgerMenu.classList.contains("active")) {
        // Als het 'active' class heeft, wordt deze verwijderd (dan gaat deze dicht)
        hamburgerMenu.classList.remove("active");
    } else {
        // Als het geen 'active' class heeft, wordt deze toegevoegd (dan gaat deze open)
        hamburgerMenu.classList.add("active");
    }
}

// Functie uitvoeren
var clickButtonMenu = document.querySelector("header nav section:nth-of-type(2) button");
clickButtonMenu.addEventListener("click", openMenu);




// Accordion Specificaties //

function openAccordionSpecs() {
       var accordionSpecs = document.querySelector(".product main > section:nth-of-type(2) > article:nth-of-type(2)");

    // Checkt of de accordion een 'active' class heeft
    if (accordionSpecs.classList.contains("active")) {
        // Als de accordion 'active' class heeft, wordt deze verwijderd (dan gaat deze dicht)
        accordionSpecs.classList.remove("active");
    } else {
        // Als de accordion geen 'active' class heeft, wordt deze toegevoegd (dan gaat deze open)
        accordionSpecs.classList.add("active");
    }
}

// Functie uitvoeren
var clickSpecs = document.querySelector(".product main > section:nth-of-type(2) > article:nth-of-type(2) div");
clickSpecs.addEventListener("click", openAccordionSpecs);




// Accordion Specificaties //

function openAccordionAfmetingen() {
    var accordionAfmetingen = document.querySelector(".product main > section:nth-of-type(2) > article:last-of-type");

    // Checkt of de accordion een 'active' class heeft
    if (accordionAfmetingen.classList.contains("active")) {
        // Als de accordion 'active' class heeft, wordt deze verwijderd (dan gaat deze dicht)
        accordionAfmetingen.classList.remove("active");
    } else {
        // Als de accordion geen 'active' class heeft, wordt deze toegevoegd (dan gaat deze open)
        accordionAfmetingen.classList.add("active");
    }
}

// Functie uitvoeren
var clickAfmetingen = document.querySelector(".product main > section:nth-of-type(2) > article:last-of-type div");
clickAfmetingen.addEventListener("click", openAccordionAfmetingen);