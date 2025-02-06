import menuArray from "./data.js"

const container = document.getElementById('main-container')
const itemsContainer = document.getElementById('items-container')
const orderContainer = document.getElementById('order-container')

function itemsRender(){
    const itemsList = menuArray.map(item => 
    `
    <div class="item">
        <div class="item-inner">
            <p class="emoji">${item.emoji}</p>
            <div class="item-details">
                <div class="item-title">
                    ${item.name}
                </div>
                <div class="item-ingredients">
                    ${item.ingredients}
                </div>
                <div class="item-price">
                    $${item.price}
                </div>
            </div>
        </div>
        <div class="add" data-id="${item.id}">
            <p>+</p>
        </div>
    </div>
        `).join('')
        return itemsList
}

let cart = []

container.addEventListener('click', (e) => {

    const clickedElement = e.target.closest('.add')

    if(clickedElement){

        const selectedItem = parseInt(clickedElement.getAttribute('data-id'))

        const itemIndex = cart.findIndex(item => item.id === selectedItem)

        if(itemIndex !== -1){
            cart.splice(itemIndex, 1)
            clickedElement.classList.toggle('active')
        } else {
            cart.push(menuArray[selectedItem])
            clickedElement.classList.toggle('active')
        }
    }
    orderRender()

})

orderContainer.addEventListener('click', (e) => {
    const completeBtn = e.target.closest('button')?.id === 'complete-order-btn'
    const formPay = document.querySelector('.checkout')
    
    if(completeBtn){
        formPay.classList.remove('hide')
    }
})

function orderRender() {
    const orderTotal = cart.reduce((total, current) => total + current.price, 0)
    const orderRecap = cart.map(item => 
       `
        <div class="order-item">
            <h1>${item.name}</h1>
            <p>$${item.price}</p>
        </div>
       `
    ).join('')

    orderContainer.innerHTML = `
       <h1>Your order</h1>
       <div class="order-overview">
            <div class="order-items">
                ${orderRecap}
            </div>
            <div class="total">
                <h2>Total</h2>
                <h2>$${orderTotal}</h2>
            </div>
       </div>
       <button id="complete-order-btn">Checkout</button>
       `
}

orderRender()

function handleSubmit(e){

    console.log("handleSubmit function is called!");

    e.preventDefault()

    const formName = document.getElementById('nameInput').value

    const form = document.querySelector('.checkout')

    setTimeout(() => {

        form.classList.add('hide')

        form.classList.remove('checkout')

        cart = []
        orderRender()

        orderContainer.innerHTML = `
        <h1 class="message">Thanks, <span>${formName}!</span> Your order is on its way!</h1>
    `
    }, 600)

}

window.onload = function() {
    document.querySelector(".checkout").onsubmit = handleSubmit
};

itemsContainer.innerHTML = itemsRender()
