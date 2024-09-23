console.log('connected')
document.getElementById('calculate').addEventListener('click', function (event) {
    event.preventDefault();
    const income = getInputValueById('income');
    const software = getInputValueById('software');
    const courses = getInputValueById('courses');
    const internet = getInputValueById('internet');
    console.log(income, software, courses, internet);
    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;
    // total Expenses 
    const totalExpensesValue = document.getElementById('total-expenses');
    totalExpensesValue.innerText = totalExpenses.toFixed(4);

    // Balance total 
    const balanceValue = document.getElementById('balance');
    balanceValue.innerText = balance.toFixed(4);

    const result = document.getElementById('results');
    result.classList.remove('hidden')



    const historyContainer = document.getElementById('history-list')
    const div = document.createElement('div');
    div.className = "bg-white p-3 rounded-md border-l-2 border-indigo-600"
    div.innerHTML = `
    <p class ="text-sx text-gray-600">${new Date().toLocaleDateString()}</p>
    <p class ="text-sx text-gray-600">Income: ${income}</p>
    <p class ="text-sx text-gray-600">Total Expenses: ${totalExpenses}</p>
    <p class ="text-sx text-gray-600">Balance: ${balance}</p>
    `
    historyContainer.insertBefore(div, historyContainer.firstChild);
    
    
})
// clculate savings button 
document.getElementById('calculate-savings').addEventListener('click', function (event) {
    event.preventDefault();
    const income = getInputValueById('income');
    const software = getInputValueById('software');
    const courses = getInputValueById('courses');
    const internet = getInputValueById('internet');
    console.log(income, software, courses, internet);
    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;
    const saving = getInputValueById('savings');
    console.log(saving)
    const savingAmount = (saving * balance) / 100;
    document.getElementById('savings-amount').innerText = savingAmount;

    // remainning balance 
    const remainingBalanceTotal = balance - savingAmount;
    document.getElementById('remaining-balance').innerText = remainingBalanceTotal;


})
// history button 
document.getElementById('history-tab').addEventListener('click', function(){
    const assitanceTabBtn = document.getElementById('assistant-tab');
    const historyTabBtn = document.getElementById('history-tab');
    historyTabBtn.classList.add('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600')
    assitanceTabBtn.classList.remove('bg-gradient-to-r' ,'from-blue-500' ,'to-purple-600', 'text-white')
    assitanceTabBtn.classList.add('text-gray-600')

    const expensesForm = document.getElementById('expense-form');
    expensesForm.classList.add('hidden')

    const historySection = document.getElementById('history-section')
    historySection.classList.remove('hidden')
})

// assistance button 
document.getElementById('assistant-tab').addEventListener('click', function(){
    const assitanceTabBtn = document.getElementById('assistant-tab');
    const historyTabBtn = document.getElementById('history-tab');
    assitanceTabBtn.classList.add('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600')
    historyTabBtn.classList.remove('bg-gradient-to-r' ,'from-blue-500' ,'to-purple-600', 'text-white')
    historyTabBtn.classList.add('text-gray-600')

    const expensesForm = document.getElementById('expense-form');
    expensesForm.classList.remove('hidden')
})