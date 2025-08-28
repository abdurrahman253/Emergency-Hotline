function getElement(id){
    const element = document.getElementById(id);
    return element;
}

 

getElement("card_box").addEventListener("click", function(event){

     // Call Button Functionalities. 
    if(event.target.id === "call_button" ){
       
       const callButton = event.target;

       // Alert Message.
       const serviceName = callButton.parentNode.parentNode.children[0].children[1].textContent;
       const serviceNumber = callButton.parentNode.parentNode.children[1].children[0].textContent;
       alert("Calling " + serviceName +" "+ serviceNumber )
       
       

       // Deducting Coins
        const coinValue = document.querySelector(".coin_value");
        const currentCoin = parseInt(coinValue.innerText); 

            if(currentCoin > 0){
                const newCoinValue = currentCoin - 20;
                coinValue.innerText = newCoinValue;
            }
            else{
                alert("You don't have enough coins to make a call.You need at least 20 coins to make a call.");
                return;
            }
      

       // Creating Call History Section.
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


       
      // Copy Button Functionalities. 
    if(event.target.id  === "copy_button"){
        const copyButton = event.target ;
        const helpLineNumber = copyButton.parentNode.parentNode.children[1].children[0].textContent;
        navigator.clipboard.writeText(helpLineNumber);
        alert("Copied the number: " + helpLineNumber);
        // Incrementing Copy Counter.
        const copyCounter = document.querySelector(".copy_counter");
        const currentCopy = parseInt(copyCounter.innerText);
        const newCopy = currentCopy + 1;
        copyCounter.innerText = newCopy; 
    }


    // heart Button Functionalities.
    if(event.target.id  === "heart_icon"){
        const heartButton = event.target ;
        const heartValue = heartButton.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[1].children[0].children[0].textContent

        const heartCounter = document.querySelector(".heart_counter")
        const newHearValue = parseInt(heartValue) + 1;
        heartCounter.innerText = newHearValue; 
      
        

  
  
}




 // Clear Button Functionalities.
   getElement("clear_button").addEventListener("click", function(){
    const newCard = document.querySelectorAll(".new_card")

    for(const card of newCard){
        card.remove();
    }
   })
  


})