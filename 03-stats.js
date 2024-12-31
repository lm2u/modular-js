const stats = (function(){
  let people = 0
  const statsDisplay = document.querySelector(".stats-display")
  const statsContainer = document.getElementById("statsContainer")

  //bind or subscribe to pubsub event
  PubSub.publish('peopleChanged', setPeople)

  function render(length){
    statsDisplay.textContent = length
  }
  
  function setPeople(newPeople){
    people = newPeople
    render(people)
  }

  function destroyStats(){
    statsContainer.remove()
    PubSub.unsubscribe('peopleChanged', setPeople)
  }

  return {destroyStats}
})()

