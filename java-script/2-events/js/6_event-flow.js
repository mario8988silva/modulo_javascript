/*
function showElement() {
  alert(this.innerHTML);
}
*/
/*
function showElement() {
 debugger;
}
*/

function showElement(evt) {
console.log('Target: ', evt.target);
console.log('Current Rarget: ', evt.currentTarget);
console.log('---------------------------');

alert(this.innerHTML);

// cessa o flow do evento:
evt.stopPropagation();
}

el = document.getElementById("list");   // <<< el is reused and not defined
el.addEventListener('click', showElement, false);

el = document.getElementById("item");
el.addEventListener('click', showElement, false);

el = document.getElementById("link");
el.addEventListener('click', showElement, false);



el = document.getElementById("list2");
el.addEventListener('click', showElement, true);

el = document.getElementById("item2");
el.addEventListener('click', showElement, true);

el = document.getElementById("link2");
el.addEventListener('click', showElement, true);