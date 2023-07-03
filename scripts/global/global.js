//Global Functions usable in all pages 
var tokenAuthAdmin = localStorage.getItem("tokenAuthAdmin") || "none";

var adminUser;


//Create and return an HTML element 
function createElement(elementType){
    return document.createElement(elementType);
}

//Change the classes
function changeClass(element, item){
    element.className = item;
}

//change element title attribute
function changeTitle(element, title){
    element.title = title;
}

//Add Child Element to Parent 
function addChildToParent(child, parent){
    parent.appendChild(child);
}

//Change href to link
function changeHrefLink(element, start, path){
    element.href = start + path;
}

//Change src to image 
function changeSrcImg(element, start, path){
    element.src = start + path;
}

//Change alt to image
function changeAltImg(element, alt){
    element.alt = alt;
}

//Change the Text of an element 
function changeText(element, text){
    element.innerText = text;
}

//create a full img element
function generateImg(path, imgPath, imgAlt, parent){
    const img = createElement("img");
    changeSrcImg(img, path, imgPath);
    changeAltImg(img, imgAlt);
    addChildToParent(img, parent);
    return img;
}

//create h2 form title
function generateFormTitle(title, parent){
    const formTitle = createElement("h2");
    changeText(formTitle, title);
    addChildToParent(formTitle, parent);
    return formTitle;
}

//generate the form element
function generateFormElement(parent){
    const formElement = createElement("form");
    formElement.action = "javascript:void(0);";
    addChildToParent(formElement, parent);
    return formElement;
}

//generate a label and an input element + the 
function generateInput({
    labelTitle, 
    inputName,
    inputType,
    required,
    error: {
        present,
        errorClass, 
        errorId
    }
}, parent){
    //create de label container for the input 
    const input = createElement("label");
    input.htmlFor = inputName;
    addChildToParent(input, parent);

    //create the paragraph element to contain the input name
    const inputTitle = createElement("p");
    changeText(inputTitle, labelTitle);
    addChildToParent(inputTitle, input);

    //create the input element 
    const inputElement = createElement("input");
    inputElement.type = inputType;
    inputElement.name = inputName;
    if(required){
        inputElement.required = "required";
    }
    addChildToParent(inputElement, input);

    //the error display paragraph
    if(present){
        const errorElement = createElement("p");
        changeClass(errorElement, errorClass);
        errorElement.id = errorId;
        errorElement.style.display = "none";
        addChildToParent(errorElement, input);
    }
    
    return input;
}