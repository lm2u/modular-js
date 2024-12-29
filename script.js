const inputText = document.querySelector("input")
function getInput() {
  let text = inputText.value
  if (text) {
    return text
  }else{
    alert("Empty")
  }
}

const addPersonBtn = document.getElementById('addPerson');
const ul = document.getElementById("people")
addPersonBtn.addEventListener("click",()=>{
  value = getInput()
  
  const itemLi = document.createElement("li")
  const itemSpan = document.createElement("span")
  const itemI = document.createElement("i")

  if(value){
    itemSpan.textContent = value + " ";
    itemI.textContent = "X";
  }else{
    return
  }
  
  ul.appendChild(itemLi)
  itemLi.appendChild(itemSpan)
  itemLi.appendChild(itemI)
  console.log(value)

  inputText.value = "";
})

const wrapper = document.getElementById("peopleModule")
wrapper.addEventListener("click",(e)=>{
  function deleteItem() {
    if(e.target.matches("i")) {
      liRemove = e.target.closest("li");
      ul.removeChild(liRemove)
    }
  }

  deleteItem()
  
  
})

