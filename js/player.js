console.log('heloo');
let arrayObject = [];
let count = 0;
function showName(arrayObject) {
    //count++;
    const showData = document.getElementById('show-name');
    //showName.innerText = arrayObject.length;
    showData.innerHTML="";
    for (let i = 0; i < arrayObject.length; i++) {
        console.log(arrayObject.length);
        const li = document.createElement("li");
        li.innerHTML = `
        <li class="text-white ms-2" style='list-style-type: none;'}>${i+1}. ${arrayObject[i]}</li>`
        showData.appendChild(li);
    }
  
}
function addToCart(element) {
    let playerName = element.parentNode.children[0].innerText;
    arrayObject.push(playerName);
    showName(arrayObject);
}