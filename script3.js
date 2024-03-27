let addCardBtn = document.querySelector("#addCard");
let todoContainer = document.querySelector("#todo");


addCardBtn.addEventListener("click", addTask);
let count = 1000000
function addTask() {
    let card = document.createElement("div");
    card.id= `card-${count++}`
    card.className = "card"; 
    card.innerText = "Test Card";
    card.setAttribute("contenteditable", "true")
    // allow drag
    card.setAttribute("draggable", "true")
    todoContainer.append(card)
    // pointer will be in editable zone automaicaally
    card.focus();
    

    // problem 1 ( empty card should automatically be removed)
     // foucs lost => blur event
    //  card.addEventListener("blur" , (eventDetails)=>{
    //       let blurredCard = eventDetails.target;
    //       if(blurredCard.innerText.trim() == ""){
    //           blurredCard.remove();
    //       }
    //  } )

    // problem 2 => make default text empty
    // card.addEventListener("click", (eventDetails)=>{
    //      let clickedCard = eventDetails.target;
    //      console.log("Text",clickedCard.innerText.replaceAll("\n", " "))
    //      console.log("HTML", clickedCard.innerHTML)
         
    //      if(clickedCard.innerText.replaceAll("\n", " ").trim() == `Test Card Todo Progress Done`){
    //             clickedCard.innerText = "";
    //      }
    // })

    
    // step 1 => start the dragging

    // drag start
    card.addEventListener("dragstart", (eventDetails)=>{
        let draggedCard = eventDetails.target
        // we store that unique that of that element
        eventDetails.dataTransfer.setData("text/plain", draggedCard.id)
        draggedCard.style.opacity = 0.5;
    })

    // drag end
    card.addEventListener("dragend", (eventDetails)=>{
        let draggedCard = eventDetails.target
        draggedCard.style.opacity = 1;
    })

    
    // drop 
    // dragenter 
    // dragover

     let todo = document.querySelector("#todo");
     let progress = document.querySelector("#progress");
     let done = document.querySelector("#done");


    //  todo.addEventListener("dragover", (eventDetails)=>{
    //         eventDetails.preventDefault();
    //  })
    //  todo.addEventListener("dragenter", (eventDetails)=>{
    //     eventDetails.preventDefault();
    //  })
    //  todo.addEventListener("drop", (eventDetails)=>{
    //     eventDetails.preventDefault();
    //  })

    let dragEvents = ["dragover", "dragenter", "drop"];

     dragEvents.forEach((dropEvent)=>{ // dragover

        let columns = document.querySelectorAll(".column");
        for(let c of columns){ // todo, progress, done
              c.addEventListener(dropEvent, (eventDetails)=>{
                  eventDetails.preventDefault()
             

              if(dropEvent == "drop"){
                  //get that id of the card that has been dragged here:
                  let cardId = eventDetails.dataTransfer.getData("text/plain");
                let draggedCard = document.querySelector(`#${cardId}`);
                let currentColumn = eventDetails.target;
               currentColumn.append(draggedCard);
              }
            })
        }

     })



}


