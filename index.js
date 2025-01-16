const inputExp = document.getElementById('input-exp')
const inputAmount = document.getElementById('input-amount')
const addBtn = document.getElementById('add-btn')
const container = document.getElementById('container')
const totalValue = document.getElementById('total-value')
const expenses = []
const budget = 1000


function addExpense(){
    let expense = {
        name: inputExp.value,
        amount: Number(inputAmount.value)
    }
    const duplicate = expenses.some(item => item.name === expense.name && item.amount === expense.amount)
    let total = expenses.reduce((sum, item) => sum + item.amount, 0);
    if (total + expense.amount > budget){
        alert('You are over budget!')
        inputExp.value = ''
        inputAmount.value = ''
        return
    }

    if (!expense.name.trim() || expense.amount <= 0) {
        alert('Please enter a valid expense name and amount!');
        return;
    }
    
    if (duplicate){
        alert('Expense already added!')
        inputExp.value = ''
        inputAmount.value = ''
        return
    }else{
        expenses.push(expense)
        inputExp.value = ''
        inputAmount.value = ''
    }
    console.log(expenses)
    render()
}

function render(){
    let total = 0
    container.innerHTML = ``
    expenses.forEach(function(item, index){
        container.innerHTML += `
            <div id="item">
                <p>${item.name}</p>
                <p>$${item.amount}</p>
                <button id="remove" onclick="removeItem(${index})">Remove</button>
            </div>
        `
        total += Number(item.amount)
    })
    console.log(total)
    totalValue.textContent = '$' + total
}

function removeItem(index){
    expenses.splice(index, 1)
    render()
}

addBtn.addEventListener('click', addExpense)