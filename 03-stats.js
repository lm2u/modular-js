const stats = (function(){
  let people = 0
  const statsDisplay = document.querySelector(".stats-display")

  function render(length){
    statsDisplay.textContent = length
  }
  
  function setPeople(newPeople){
    people = newPeople
    render(people)
  }

  return {setPeople}
})()

