const inputText = document.querySelector("input")
function getInput() {
  let text = inputText.value
  return text
}

const addPersonBtn = document.getElementById('addPerson');
addPersonBtn.addEventListener("click",()=>{
  value = getInput()
  const ul = document.getElementById("people")
  
  const itemLi = document.createElement("li")
  const itemSpan = document.createElement("span")
  const itemI = document.createElement("i")

  itemSpan.textContent = value + " ";
  itemI.textContent = "X";
  
  ul.appendChild(itemLi)
  itemLi.appendChild(itemSpan)
  itemLi.appendChild(itemI)
  console.log(value)
})

