console.log('connected')
document.getElementById('calculate').addEventListener('click', function(event){
    event.preventDefault();
    const income = getInputValueById('income');
    const software = getInputValueById('software');
    const courses = getInputValueById('courses');
    const internet = getInputValueById('internet');
    console.log(income, software, courses, internet);
    const totalExpenses = software + courses+ internet;
    const balance = income - totalExpenses;
    // total Expenses 
    const totalExpensesValue = document.getElementById('total-expenses');
    totalExpensesValue.innerText = totalExpenses;
})