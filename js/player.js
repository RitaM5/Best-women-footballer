let arrayObject = [];
let count = 0;
function showName(arrayObject) {
    const showData = document.getElementById('show-name');
    showData.innerHTML = "";
    for (let i = 0; i < arrayObject.length; i++) {
        console.log(arrayObject.length);
        if(arrayObject.length == 6){
            return;
        }
        else{
            const li = document.createElement("li");
            li.innerHTML = `
            <li class="text-white ms-2" style='list-style-type: none;'}>${i + 1}. ${arrayObject[i]}</li>`
            showData.appendChild(li);
        }
    }
}
function addToCart(element) {
    let playerName = element.parentNode.children[0].innerText;
    arrayObject.push(playerName);
    showName(arrayObject);
}

function calculate() {
    let perPlayer = document.getElementById('per-player');
    let perPrice = parseInt(perPlayer.value);
    let playerExpenses = document.getElementById('player-expenses');
    playerExpenses.innerText = perPrice * arrayObject.length;

}
function calculateTotal() {
    let perPlayer = document.getElementById('per-player');
    let perPrice = parseInt(perPlayer.value);
    let playerExpenses = document.getElementById('player-expenses');
    let Expenses = playerExpenses.innerText;
    Expenses = perPrice * arrayObject.length;
    let manager = document.getElementById('manager');
    let managerTaka = parseInt(manager.value);
    let coach = document.getElementById('coach');
    let coachTaka = parseInt(coach.value);
    let showTotal = document.getElementById('show-total');
    showTotal.innerText = parseInt(Expenses + managerTaka + coachTaka);

}