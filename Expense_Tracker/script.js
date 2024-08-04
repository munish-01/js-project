const expenseForm = document.getElementById('expenseForm')
const expenseList = document.getElementById('expenseList')

expenseForm.addEventListener('submit', function (e) {
    // preventDefault() - add pe click hone par page refresh nahi hone dega
    e.preventDefault();

    const description = document.getElementById('description').value
    const category = document.getElementById('category').value
    const amount = document.getElementById('amount').value

    if (document && category && !isNaN(amount)) {
        const newRow = document.createElement('tr')

        newRow.innerHTML = `<td>${description}</td> <td>${category}</td> <td>${amount}</td>`

        expenseList.appendChild(newRow)

        // submit karne ke baad data input fields se data remove v to hona chaiye without refreshing the page

        document.getElementById('description').value = ''
        document.getElementById('category').value = ''
        document.getElementById('amount').value = ''
    } else {
        alert('Please fill out all fields with valid data!!!')
    }
})