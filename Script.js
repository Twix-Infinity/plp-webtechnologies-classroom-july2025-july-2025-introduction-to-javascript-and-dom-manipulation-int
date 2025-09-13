let cat_name = "Whiskers";
const cat_speak = "Meow";

let Function_1 = function() {
    let paragraph = document.getElementById('Cat');
    paragraph.textContent = cat_name + " says " + cat_speak + "!";
    paragraph.style.color = "purple";
    paragraph.style.fontSize = "24px";
}


let dog_name = "Dash";
const dog_speak = "Woof";

let Function_2 = function() {
    let paragraph = document.getElementById('Dog');
    paragraph.textContent = dog_name + " says " + dog_speak + "!";
    paragraph.style.color = "magenta";
    paragraph.style.fontSize = "24px";
}


let Loop_Function_1 = function() {
    let paragraph = document.getElementById('Loop 1');
    Input = prompt("How many cats? ");
    if (Input <= 0) {
        paragraph.textContent = "Wrong input. No cats for you :( ";
        paragraph.style.color = "maroon"
    } else {
        paragraph.textContent = "Your furry friend is waiting :) ";
        paragraph.style.color = "green"
    }
}

let Loop_Function_2 = function() {
    let paragraph = document.getElementById('Loop 2');
    Input = prompt("How many dogs? ");
    if (Input <= 0) {
        paragraph.textContent = "Wrong input. No dogs for you :( ";
        paragraph.style.color = "maroon"
    } else {
        paragraph.textContent = "Your furry friend is waiting :) ";
        paragraph.style.color = "green"
    }
}


let DOM_Function_1 = function() {
    let paragraph = document.getElementById('DOM 1');
    console.log(paragraph.textContent);
    paragraph.style.color = "aquamarine";
    paragraph.style.fontSize = "20px";
}

let DOM_Function_2 = function() {
    let paragraph = document.getElementById('DOM 2');
    console.log(paragraph.textContent);
    paragraph.style.color = "Silver";
    paragraph.style.fontSize = "20px";
}

let DOM_Function_3 = function() {
    let paragraph = document.getElementById('DOM 3');
    console.log(paragraph.textContent);
    paragraph.style.color = "Pink";
    paragraph.style.fontSize = "20px";
}