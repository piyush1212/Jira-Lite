let addCardBtn = document.querySelector("#addCard")
let todoContainer = document.querySelector("#todo")


addCardBtn.addEventListener("click", addTask)

function addTask(){
    let card = document.createElement("div")
    card.className = "card"
    card.innerText = "Test card"
    card.setAttribute("contenteditable", "true")
    todoContainer.append(card)
    // pointer will be editable zone automatically
    card.focus();


    // problem 1 ( empty card should automatically be removed)
    // Focus lost => blur event 
    card.addEventListener("blur", (eventDetails) => {
        let blurredCard = eventDetails.target;
        if(blurredCard.innerText.trim() == ""){
            blurredCard.remove();
        }
    })


    // problem 2 => make default text empty
    card.addEventListener("click", (eventDetails) => {
        let clickedCard = eventDetails.target;
        if(clickedCard.innerText == "Test card"){
            clickedCard.innerText = "";
        }
    })

    let selector = document.createElement("select")
    selector.innerHTML = `
    <option value="todo">Todo</option>
    <option value="progress">Progress</option>
    <option value="done">Done</option>
    `

    // let option1 = document.createElement("option")
    // option1.value = "todo";
    // option1.innerText = "Todo"

    // selector.append(option1)

    // let option2 = document.createElement("option")
    // option2.value = "progress";
    // option2.innerText = "Progress"

    // selector.append(option2)



    card.append(selector)

    // selector will change something in dropdown => change event 

    selector.addEventListener("change", (eventDetails) => {
        let selectedOption = eventDetails.target.value;
        let selectedContainer = document.querySelector(`#${selectedOption}`)
        selectedContainer.append(card)
    })
}