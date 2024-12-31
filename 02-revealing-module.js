const people = (function(){
  let people = ["Test"];
  
  //Cache DOM
  wrapper = document.getElementById("peopleModule");
  input = wrapper.querySelector("input");
  btn = wrapper.querySelector("button");
  ul = wrapper.querySelector("ul");
  template = `
  <li>
    <span>{{name}}</span>
    <i class="del">X</i>
  </li> `;

  //Bind events
  // btn.addEventListener("click", ()=>addPerson());
  btn.addEventListener("click", addPerson)
  ul.addEventListener("click", (e)=>deletePerson(e));

  render();
    
  function render() {
    input.value = "";
    ul.innerHTML = "";
    // if(people.length===0) return    
    people.forEach((person)=>{
      const renderedHTML = template.replace("{{name}}", person);
      ul.insertAdjacentHTML("beforeend", renderedHTML);
    });
  };

  function addPerson(value){
    isInputEmpty = (!input.value);
    isString = (typeof value === "string")
    // isPointerEvent = (value instanceof PointerEvent)

    if(isInputEmpty){
      // console.log(value)
      if(isString){
        people.push(value)
        render();
      }
      return;
    }
    people.push(input.value || value);
    render();
  };

  function deletePerson(e){
    let index;
    if (typeof e === "number"){
      index = e
    }else{
      const li = event.target.closest("li");
      const siblings = Array.from(li.parentNode.children);
      index = siblings.indexOf(li)
    }
    people.splice(index, 1)
    render()
  };

  return {addPerson, deletePerson}
})()





