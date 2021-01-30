// --Ticket Booking--//

function ticketClassChange(ticket,isIncreseQuantity){
    const ticketInput = document.getElementById(ticket + "-quantity");
    const ticketQuantity = parseInt(ticketInput.value);

    let ticketNewQunatity = ticketQuantity;
    if(isIncreseQuantity == true && ticketQuantity < 6){   //--One Passenger Can book Maximum - 6 - tickets at a time--//
        ticketNewQunatity = ticketQuantity + 1;
    }
    if(isIncreseQuantity == false && ticketQuantity >= 1){     
        ticketNewQunatity = ticketQuantity - 1;
    }
    ticketInput.value = ticketNewQunatity;

    let ticketTotalPrice = ticketNewQunatity;
    if(ticket == "first"){
        ticketTotalPrice = ticketNewQunatity * 150;  //--First class per ticket price $150 --//
    }
    if(ticket == "economy"){
        ticketTotalPrice = ticketNewQunatity * 100;  //--Economy class per ticket price $100 --//
    }
    document.getElementById(ticket + "-price").innerText = "$" + ticketTotalPrice;
    calculateTotal();
}




// ---Calculation---//

function calculateTotal(){
    const firstTicketQuantity  = getInput("first");
    const economyTicketQuantity = getInput("economy");
  
    const subtotalPrice = firstTicketQuantity * 150 + economyTicketQuantity * 100;   //--Total Ticket price--//
    document.getElementById("subtotal-price").innerText = "$ " + subtotalPrice;
  
    const tax = subtotalPrice * 0.1;  //--Vat Calculation --/
    const taxAmount = Math.ceil(tax);  //--Ceiling the vat --//
    document.getElementById("tax-amount").innerText = "$ " + taxAmount;
  
    const grandTotal = subtotalPrice + taxAmount;  //--Grand total price with 10% vat included--//
    document.getElementById("total-price").innerText ="$ " + grandTotal;
  }

//   --Quntity 
  function getInput(ticketClass){
    const ticketInput = document.getElementById(ticketClass + "-quantity");
    const ticketQuantity = parseInt(ticketInput.value);
    return ticketQuantity ;
  
  }











// function handleProductChange(product, isIncreseQuantity) {
//   const productInput = document.getElementById(product + "-quantity");
//   const productQuantity = parseInt(productInput.value);

//   let productNewQuantity = productQuantity;
//   if (isIncreseQuantity == true && productQuantity < 6) {
//     productNewQuantity = productQuantity + 1;
//   }
//   if (isIncreseQuantity == false && productQuantity > 1) {
//     productNewQuantity = productQuantity - 1;
//   }
//   productInput.value = productNewQuantity;

//   let productTotalPrice = productNewQuantity;
//   if (product == "phone") {
//     productTotalPrice = productNewQuantity * 1219;
//   }
//   if (product == "case") {
//     productTotalPrice = productNewQuantity * 59;
//   }

//   document.getElementById(product + "-price").innerText =
//     "$" + productTotalPrice;
//   calculateTotal();
// }
