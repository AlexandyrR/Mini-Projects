const expenseForm = document.getElementById('expenseForm');
const expenseList = document.getElementById('expenseList');
const totalAmount = document.getElementById('totalAmount');

let expenses = [];

function addExpense(description, amount) {
    const expense = {
        id: Date.now(),
        description,
        amount: parseFloat(amount)
    };

    expenses.push(expense);
    updateUI();
}

function updateUI() {
    expenseList.innerHTML = '';
    let total = 0;

    expenses.forEach(expense => {
        const expenseItem = document.createElement('div');
        expenseItem.classList.add('expense-item');
        expenseItem.innerHTML = `
            <span>${expense.description}</span>
            <span>$${expense.amount.toFixed(2)}</span>
            <button onclick="deleteExpense(${expense.id})">Delete</button>
        `;
        expenseList.appendChild(expenseItem);
        total += expense.amount;
    });

    totalAmount.textContent = total.toFixed(2);
}

function deleteExpense(id) {
    expenses = expenses.filter(expense => expense.id !== id);
    updateUI();
}

expenseForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const description = document.getElementById('description').value;
    const amount = document.getElementById('amount').value;
    if (description && amount) {
        addExpense(description, amount);
        expenseForm.reset();
    } else {
        alert('Please enter both description and amount.');
    }
});
