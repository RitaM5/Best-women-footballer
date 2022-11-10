console.log('heloo');
let arrayObject = [];
let count = 0;
function showName(arrayObject) {
    //count++;
    const showData = document.getElementById('show-name');
    //showName.innerText = arrayObject.length;
    for (let i = 0; i < arrayObject.length; i++) {
        console.log(arrayObject.length);
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td class="text-white">${i + 1}</td>
        <td class="text-white ms-2">${arrayObject[i].playerName}</td>`
    }
    showData.appendChild(tr);
}
function addToCart(element) {
    let playerName = element.parentNode.children[0].innerText;
    arrayObject.push(playerName);
    showName(arrayObject);
}