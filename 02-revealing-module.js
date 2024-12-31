const people = (function(){
  let people = ["Test"];
  
  //Cache DOM
  const wrapper = document.getElementById("peopleModule");
  const input = wrapper.querySelector("input");
  const btn = wrapper.querySelector("button");
  const ul = wrapper.querySelector("ul");
  const template = `
  <li>
    <span>{{name}}</span>
    <i class="del">X</i>
  </li> `;

  //Bind events
  // btn.addEventListener("click", ()=>addPerson());
  btn.addEventListener("click", addPerson)
  ul.addEventListener("click", (e)=>deletePerson(e));

  render();
    
  // events.on('peopleChanged',function(count){
  //   alert(count);
  // });
  function render() {
    input.value = "";
    ul.innerHTML = "";
    // if(people.length===0) return    
    people.forEach((person)=>{
      const renderedHTML = template.replace("{{name}}", person);
      ul.insertAdjacentHTML("beforeend", renderedHTML);
    });

    // stats.setPeople(people.length)
    PubSub.subscribe('peopleChanged', people.length)
  };

  function addPerson(value){
    const isInputEmpty = (!input.value);
    const isString = (typeof value === "string")
    // isPointerEvent = (value instanceof PointerEvent)

    if(isInputEmpty){
      // console.log(value)
      if(isString && (value != "")){
        addPersonToList(value)
        render();
      }
      return;
    }
    addPersonToList(input.value)
    // people.push(input.value || value);
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

  function addPersonToList(person){
    people.push(person)
  }

  return {addPerson, deletePerson}
})()





