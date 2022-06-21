let myrow=document.querySelector(".row")

let cart=document.getElementById("cart")


fetch("./data.json").then (res => res.json()).then( data => {
    console.log(data)
 let productCard=""
 data.forEach(product => {
    productCard+=`
    <div class="col-md-6 col-sm-6 " > 
  <div class="card" style="width: 18rem;">
    <img  class="cardimg" src="${product.img}" class="card-img-top" alt="..." hight="50vw">
    
      <h5 class="card-title">${product.name}</h5>
      <p class="card-text"><span >Price:${product.price}</span></p>


      
      <button type="button" class="btn btn-outline-warning"  class="save"  onclick='getData(this)' > Add to cart </button>
      
  
</div>


</div>
    `
    
 });
 myrow.innerHTML=productCard
}  ).catch((err)=>console.log(err))

function addToCart(pData){
    const cartdata= document.createElement("div")
    cartdata.innerHTML=`
    <div class="col-md-4 col-sm-4 " > 
  <div class="card" style="width: 18rem;">
    <img  class="cardimg" src="${pData.productImg}" class="card-img-top" alt="...">
    
      <h5 class="card-title">${pData.productName}</h5>
      <p class="card-text"><span >${pData.productPrice}</span></p>


      
      <button type="button" class="btn btn-outline-warning"  class="delete"  onclick='deleteCard(this)' ><i class="fa-solid fa-heart "   hight="50vw"></i> Remove from cart </button>
      
  
</div>


</div>
    `
    cart.appendChild(cartdata)
}

function getData(el){
    const cl = el.parentNode
    let productData= {
        productImg: cl.children[0].getAttribute("src"),
        productName : cl.children[1].textContent,
        productPrice: cl.children[2].textContent

    }
  console.log(productData)
  addToCart(productData)

}
function deleteCard(el){
    const cl =el.parentNode.parentNode


    cl.remove()
}
