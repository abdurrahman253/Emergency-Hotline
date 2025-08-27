function getElement(id){
    const element = document.getElementById(id);
    return element;
}

// Adding cards on the call history. 

getElement("card_box").addEventListener("click", function(event){
    if(event.target.id === "call_button" ){
       const callButton = event.target;
       const helpLineName = callButton.parentNode.parentNode.children[0].children[0].textContent;
       const helpLineNumber = callButton.parentNode.parentNode.children[1].children[0].textContent;
       
       const cardContainer = document.getElementById("card_container");
       const newCard = document.createElement("div")
       
       
       const currentTime = new Date().toLocaleTimeString()

       newCard.innerHTML = `<div class="new_card flex items-center justify-between p-4 mt-4 bg-gray-100 rounded-lg shadow-md">
            <div>
            <h4 class="text-lg font-medium text-black">${helpLineName}</h4>
            <p class="text-lg font-normal text-gray-500">${helpLineNumber}</p>
            </div>

           <p> ${currentTime} </p>
        </div> `

        cardContainer.appendChild(newCard) 
       
    }

  
  
})




 // Call history clear.
   getElement("clear_button").addEventListener("click", function(){
    const newCard = document.querySelectorAll(".new_card")

    for(const card of newCard){
        card.remove();
    }
   })
  




