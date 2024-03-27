let addCardBtn = document.querySelector("#addCard");
let todoContainer = document.querySelector("#todo");


addCardBtn.addEventListener("click", addTask);

function addTask() {
    let card = document.createElement("div");
    card.className = "card"; 
    card.innerText = "Test Card";
    card.setAttribute("contenteditable", "true")
    todoContainer.append(card)
    // pointer will be in editable zone automaicaally
    card.focus();
    

    // problem 1 ( empty card should automatically be removed)
     // foucs lost => blur event
     card.addEventListener("blur" , (eventDetails)=>{
          let blurredCard = eventDetails.target;
          if(blurredCard.innerText.trim() == ""){
              blurredCard.remove();
          }
     } )

    // problem 2 => make default text empty
    card.addEventListener("click", (eventDetails)=>{
         let clickedCard = eventDetails.target;
         console.log("Text",clickedCard.innerText.replaceAll("\n", " "))
         console.log("HTML", clickedCard.innerHTML)
         
         if(clickedCard.innerText.replaceAll("\n", " ").trim() == `Test Card Todo Progress Done`){
                clickedCard.innerText = "";
         }
    })

    let selector = document.createElement("select") 
    selector.innerHTML = `
       <option value="todo1">Todo</option>
       <option value="progress1">Progress</option>
       <option value="done1">Done</option>
    `
    // let option1 = document.createElement("option");
    // option1.value = "todo";
    // option1.innerText = "Todo";

    // selector.append(option1);

    // let option2 = document.createElement("option");
    // option2.value = "progress";
    // option2.innerText = "Progress";

    // selector.append(option2);


    card.append(selector);

    // selector will change something in dropdown => change event


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

         selectedContainer.append(card);
        //   let selctedOption = eventDetails.target.value; // todo1, progress1, done1
        //   let realid = selectedIdMapping[selctedOption]
        //   let selectedContainer = document.querySelector(`#${realid}`);
        //     selectedContainer.append(card);
    })
    


}


// id => todo, progress, done 

// value => todo1, progress1, done1
