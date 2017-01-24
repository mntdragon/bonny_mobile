function addPerson(){
   
    var firstNameElement = document.getElementById("firstNameField");
    console.log("Adding a person: " + firstNameElement.value);
    viewController.addPerson(firstNameElement.value);

  //  var nameBox = document.getElementById("personNameBox");
  //    nameBox.innerText = firstNameElement.value;

}
function addSomething(){
    var inputField = document.getElementById("somethingField");
    console.log("Write thing: " + somethingField.value);
    var results = document.getElementById("resultBox");
//create result box as input box by js and can be deit directly in the screen
    var newElement = document.createElement("INPUT");
    newElement.setAttribute("type", "text");
    newElement.setAttribute("placeholder", inputField.value);
    results.appendChild(newElement);

}
