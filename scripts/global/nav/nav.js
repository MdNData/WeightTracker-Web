var nav_bar = new navigationBarData(

);

function createNavigationBar(path, data){
    //container for the hole navigation bar, need to be already on the page 
    const navbarContainer = document.getElementById("navbar");

    //create the internal main container 
    const intNavBarContainer = createElement("div");
    //give the bs container class 
    changeClass(intNavBarContainer, "container");
    //add to container
    addChildToParent(intNavBarContainer, navbarContainer);

    //logo container and link
    const logoLinkContainer = createElement("a");
    changeClass(logoLinkContainer, "navbar-brand fs-3");
    changeHrefLink(logoLinkContainer, path, "index.htm");
    addChildToParent(logoLinkContainer, intNavBarContainer);

    //logo image 
    const logoImage = createElement("img");
    changeClass(logoImage, "me-2");
    changeSrcImg(logoImage, path, "img/logo/logo-simple.png");
    logoImage.width = "40";
    changeAltImg(logoImage, "Online Weight Tracker Logo, a light blue scale minimized");
    addChildToParent(logoImage, logoLinkContainer);

    //logo text 
    const logoText = createElement("span");
    changeText(logoText, "Weight Tracker");
    addChildToParent(logoText, logoLinkContainer);

    //open/close menu button 
    
}