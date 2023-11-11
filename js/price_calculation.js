

// totalPriceOfCart=0;
let totalPriceInNum;
// let y=0;
const updatePriceNum=0;

function getKitchenPrice(id, id2) {
  const priceT = document.getElementById(id);
  const priceText= priceT.innerText;
  const price = parseFloat(priceText);


  const totalPriceOfCart = document.getElementById("total_price");
  // priceText= document.getElementById('k').innerText;
   const before = totalPriceOfCart.innerText;
   const beforeNum = parseFloat(before);
  //  console.log(before);
 


    // price of the products in cart

    const totalInText = totalPriceOfCart.innerText;
    const be = parseFloat(totalInText);
    totalPriceInNum= be + price;
   totalPriceOfCart.innerText=totalPriceInNum;
  //  const updatePrice= totalPriceOfCart.innerText;
   console.log(totalPriceInNum);

  //  coupon code active
  if (totalPriceInNum >= 200){
    const coupon = document.getElementById("coupon");
    coupon.classList.remove("cursor-not-allowed");
    coupon.classList.add("cursor-allowed");

  }


    // y+=totalPriceInNum;

  // name of the products in cart
  // const name = document.getElementById(id2);
  // const name = document.getElementsByClassName("card-title");
  const nameOfProd = id2;

  const cartList = document.getElementById("cart_item");
  const count= cartList.childElementCount +1;
  const li = document.createElement("li");
  // li.innerText = nameOfProd;
  li.innerHTML = `${count}. ${nameOfProd}`
  cartList.appendChild(li);


  // purchase button activation

  if(totalPriceInNum >= 0){
    const modal = document.getElementById("modal");
    modal.classList.remove("cursor-not-allowed");
    modal.classList.add("cursor-allowed");
   
  }

}


function getDiscount() {
  const promoCode = document.getElementById("promoCode");
  const promo=promoCode.value;
  console.log(promo);
  console.log(totalPriceInNum);


  if(promo==="SELL200" && totalPriceInNum >= 200){
    let discount = totalPriceInNum * 0.2;
    let discountCart = document.getElementById("discount");
    discountCart.innerText = `${discount} TK`;
  
    // total price after discount
  
    let totalAfterDiscount = totalPriceInNum - discount;
  
    let totalCart = document.getElementById("totalAfterDiscount");
    totalCart.innerText = `${totalAfterDiscount} TK`;

  }

}


  function purchase(){
    if(totalPriceInNum >= 0){
      
      my_modal.showModal();
    }
   
  }
 
  // after purchase go home page and reset the page

  function goHome(){
//  reset price
    const resetTotalPrice=document.getElementById("total_price");
    resetTotalPrice.innerText='0';

    const resetDiscountPrice= document.getElementById("discount");
    resetDiscountPrice.innerText= "";

    const resetTotalAfterDiscountPrice = document.getElementById("totalAfterDiscount");
    resetTotalAfterDiscountPrice.innerText = "";

  //  reset of Product names in cart
const resetProductName= document.getElementById("cart_item");
resetProductName.innerHTML="";


// reset coupon code 
const resetPromoCode = document.getElementById("promoCode");
  resetPromoCode.value="";

  }









