const container = createElement("div");

function loading(){
    changeClass(container, "loading");
    addChildToParent(container, document.body);

    const internalContainer = createElement("div");
    addChildToParent(internalContainer, container);

    const spinner = createElement("div");
    changeClass(spinner, "loading-spinner");
    addChildToParent(spinner, internalContainer);

    const textLoading = createElement("p");
    changeText(textLoading, "Loading");
    addChildToParent(textLoading, internalContainer);
}

function endLoading(){
    container.innerHTML = " ";
    container.remove();
}

// Start the loading animation when the page is opening
window.addEventListener("DOMContentLoaded", function() {
    loading();
});

//check the user 


    // End the loading animation when the page finishes loading
window.addEventListener("load", function() {
    endLoading();
});