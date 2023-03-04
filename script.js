function setfilter() {
    document.querySelector(".share-icon").style.filter = "brightness(0) invert(1)";
}

function resetfilter() {
    document.querySelector(".share-icon").style.removeProperty("filter");
}

function active() {
    document.querySelector(".share-btn").classList.toggle("active");
    document.querySelector(".share-icon").classList.toggle("img-filter");
    if(window.innerWidth < "825") {
        if(document.querySelector(".author-details").style.display === "none") {
            document.querySelector(".author-details").style.display = "flex";
        }
        else {
            document.querySelector(".author-details").style.display = "none";
        }
        if(document.querySelector(".platforms").style.display === "flex") {
            document.querySelector(".platforms").style.display = "none";
        }
        else {
            document.querySelector(".platforms").style.display = "flex";
        }
        document.querySelector(".platforms-container").classList.toggle("show");
        document.querySelector(".contact-details").classList.toggle("no-margin");
    }
    else {
        if(document.querySelector(".tooltip").style.display === "flex") {
            document.querySelector(".tooltip").style.display = "none";
        }
        else {
            document.querySelector(".tooltip").style.display = "flex";
        }
    }
    
}