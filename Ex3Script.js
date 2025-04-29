function changeHeading(columnID, headingID) {

    //colors of rainbow defined in array
    const colorsList = ['Red','Orange','Yellow','Green','Blue','Purple','Violet'];
    let element = document.getElementById(columnID);
    let heading = document.getElementById(headingID);
    let bgColor = window.getComputedStyle(element).backgroundColor;

    //list rgb values of rainbow to colour's name
    const rgbToColorName = {
        "rgb(255, 0, 0)": "Red",
        "rgb(255, 165, 0)": "Orange",
        "rgb(255, 255, 0)": "Yellow",
        "rgb(0, 128, 0)": "Green",
        "rgb(0, 0, 255)": "Blue",
        "rgb(128, 0, 128)": "Purple",
        "rgb(238, 130, 238)": "Violet"
    };

    //use list of rainbow colour's with rgb values to convert to useable name string
    let currentColorName = rgbToColorName[bgColor] || null;
    let colorIndex = colorsList.indexOf(currentColorName);

    //cycle colour index, if null or not rainbow colour, start from 0 / 'red'
    if (colorIndex === -1){
        colorIndex = 0;
    } else {
        //overflow / reset index by using remainder
        colorIndex = (colorIndex + 1) % colorsList.length;
    }
    
    //set new colour and text
    element.style.backgroundColor = colorsList[colorIndex];
    heading.textContent = colorsList[colorIndex];
}

function changeText(textField, headingID) {
    
    let element = document.getElementById(headingID);
    let inputField = document.getElementById(textField)
    let inputText = inputField.value;

    //set text to null if no input to avoid blank heading
    if (inputText == ""){
        element.textContent = "null";
    } else {
        element.textContent = inputText;
    }
}

/* Test case selection 
switch (bgColor){
    case red:
        document.getElementById(headingID).style.backgroundColor = "orange";
        break;
    case orange:
        document.getElementById(headingID).style.backgroundColor = "yellow";
        break;
    case yellow:
        document.getElementById(headingID).style.backgroundColor = "green";
        break;
    case green:
        document.getElementById(headingID).style.backgroundColor = "blue";
        break;
    case blue:
        document.getElementById(headingID).style.backgroundColor = "purple";
        break;
    case purple:
        document.getElementById(headingID).style.backgroundColor = "violet";
        break;
    case violet:
        document.getElementById(headingID).style.backgroundColor = "red";
        break;
    default:
        document.getElementById(headingID).style.backgroundColor = "red";
        break;
} */