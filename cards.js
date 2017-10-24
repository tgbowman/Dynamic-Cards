
let createButton = document.getElementById("createCard")
let deleteButton = document.getElementById("reallyDelete")
let modalOutput = document.getElementById("modal")
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
    <p class="para"> ${userInputText} </p>
    <button id="delete-${currentId}">Delete</button>
    </article>
    `
}



createButton.addEventListener("click", generateCards)

body.addEventListener("click", function(event){
    if(event.target.id.startsWith("delete-")){
        let cardIdNumber = event.target.id.split("-")[1]
       modalOutput.style.display="block"
       modalOutput.innerHTML = 
       `
       <h2>Do you really want to delete this card?</h2>
       <button id = "reallyDelete-${cardIdNumber}">Delete</button>
       <button id = "cancel">Cancel</button>
       `
    } else {
        if(event.target.id.startsWith("reallyDelete-")) {
            let modalIdNumber = event.target.id.split("-")[1]
            let cardToDelete = document.getElementById("card-"+`${modalIdNumber}`)
            cardOutput.removeChild(cardToDelete)
            modalOutput.style.display="none"
        } else {
            if(event.target.id==="cancel"){
                modalOutput.style.display="none"
            }
        }
    }
    
})




// let cardIdNumber = event.target.id.split("-")[1]
// let cardToDelete = document.getElementById("card-"+`${cardIdNumber}`)
// cardOutput.removeChild(cardToDelete)