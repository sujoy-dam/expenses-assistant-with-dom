function getInputValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = Number(inputValue);
    return inputValueNumber;
}