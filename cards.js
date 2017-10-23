
let createButton = document.getElementById("createCard")
const body = document.getElementsByTagName("BODY")[0]
 const idGenerator = function* () {
    let id= 1
    while (true){
        yield id 
        id ++
    }
}

let idOutput = idGenerator()

let cardOutput = document.getElementById("cards")

function generateCards(){
    let currentId = idOutput.next().value
    let userInputText = document.getElementById("inputText").value
    cardOutput.innerHTML += 
    `
    <article class = "card" id = "card-${currentId}">
    <p> ${userInputText} </p>
    <button id="delete-${currentId}">Delete</button>
    </article>
    `
}


createButton.addEventListener("click", generateCards)

body.addEventListener("click", function(event){
    if(event.target.id.startsWith("delete-")){
        let cardIdNumber = event.target.id.split("-")[1]
        let cardToDelete = document.getElementById("card-"+`${cardIdNumber}`)
        cardOutput.removeChild(cardToDelete)
    }
})