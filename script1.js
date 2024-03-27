let addCardBtn = document.querySelector("#addCard");
let todoContainer = document.querySelector("#todo");


addCardBtn.addEventListener("click", addTask);

function addTask() {
    let cardParentDiv = document.createElement("div");
    cardParentDiv.className = "card-parent";
    let card = document.createElement("div");
    card.className = "card"; 
    card.innerText = "Test Card";
    card.setAttribute("contenteditable", "true")
    cardParentDiv.append(card)
    todoContainer.append(cardParentDiv)
    // pointer will be in editable zone automaicaally
    card.focus();
    

    // problem 1 ( empty card should automatically be removed)
     // foucs lost => blur event
     card.addEventListener("blur" , (eventDetails)=>{
          let blurredCard = eventDetails.target;
          console.log("Blurred Card", blurredCard)
          let parentOfBlurredCard = blurredCard.parentElement;
          console.log("Parent of Blurred Card", parentOfBlurredCard)
          if(blurredCard.innerText.trim() == ""){
              parentOfBlurredCard.remove();
          }
     } )

    // problem 2 => make default text empty
    card.addEventListener("click", (eventDetails)=>{
         let clickedCard = eventDetails.target;
         
         if(clickedCard.innerText.trim() == `Test Card`){
                clickedCard.innerText = "";
         }
    })
    
    let selector = document.createElement("select") 
    selector.innerHTML = `
       <option value="todo1">Todo</option>
       <option value="progress1">Progress</option>
       <option value="done1">Done</option>
    `
    

    cardParentDiv.append(selector);

   let selectedIdMapping = {
         todo1 : "todo",
         progress1 : "progress",
         done1 : "done"
   }

    selector.addEventListener("change" , (eventDetails)=>{
         console.log(eventDetails.target)
         console.log(eventDetails.target.value)
         let currentValueOfSelection = eventDetails.target.value;
         console.log("Column to be moved", selectedIdMapping[currentValueOfSelection]) // todo, progress, done
         let columnId = selectedIdMapping[currentValueOfSelection];

         let selectedContainer = document.querySelector(`#${columnId}`)
         console.log(selectedContainer)

         let parentOfSelector = eventDetails.target.parentElement;
         selectedContainer.append(parentOfSelector);
       
    })
    


}




