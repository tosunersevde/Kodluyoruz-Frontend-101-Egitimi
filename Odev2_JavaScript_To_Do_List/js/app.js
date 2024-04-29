let textInput = document.querySelector("#task");  
const listDOM = document.querySelector("#list");  
let allLiDOM = document.querySelectorAll("li"); 

function newElement() {
    if (!textInput.value || !textInput.value.trim()) {
        console.log("Listeye boş ekleme yapilamaz!");
        $(".error").toast('show')
    } else {
        let liDOM = document.createElement("li"); 
        listDOM.append(liDOM); 
        console.log(`Listeye eklendi. Girilen değer: ${textInput.value}`)
        $(".success").toast('show') 
        liDOM.innerHTML = `${textInput.value}`;
        liDOM.addEventListener("click", isaretleme);
        liDOM.innerHTML += closeButton;
        setStrorage();
    }  
    textInput.value = ""; 
}

function removeElement(erase) { 
    erase.remove();             
    eraseStrorage(erase);       
}

function isaretleme(){
    this.classList.toggle("checked");
}

let closeButton = `<button 
onclick="removeElement(parentNode)" 
style="padding: 13px;" type="button" 
class="close" 
data-dismiss="toast"
aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>`

allLiDOM.forEach(e => {
    e.addEventListener("click", isaretleme);
    e.innerHTML += `${closeButton}`;
})

//localStorage
function setStrorage(){
    let toDoList = JSON.parse(localStorage.getItem("toDoList"));  
    toDoList.push(`${textInput.value}`);                             
    localStorage.setItem("toDoList", JSON.stringify(toDoList));    
}

function eraseStrorage(erase){
    let toDoList = JSON.parse(localStorage.getItem("toDoList"));    
    if (toDoList.includes(erase.firstChild.textContent) == true) {  
        let indexbul = toDoList.findIndex(e =>                     
            e == erase.firstChild.textContent
            );
        toDoList.splice(indexbul, 1);                               
        localStorage.setItem("toDoList", JSON.stringify(toDoList)); 
    } 
}

function localSelf() {
    let toDoList = JSON.parse(localStorage.getItem("toDoList"));   
    if (!toDoList) {toDoList = []};                                 
    localStorage.setItem("toDoList", JSON.stringify(toDoList));    
}

function localDOM(){
    let toDoList = JSON.parse(localStorage.getItem("toDoList"));    
    toDoList.forEach((e, index) => {                               
        let liDOM = document.createElement("li");                   
        listDOM.append(liDOM);                                      
        liDOM.innerHTML = toDoList[index]                           
        liDOM.innerHTML += `${closeButton}`                         
        liDOM.addEventListener("click", isaretleme);             
    })
}

localSelf() 
localDOM()  
