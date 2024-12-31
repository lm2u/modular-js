const people = {
  people: [],
  init: function() {
    this.cacheDom();
    this.bindEvents();
    this.render();
  },

  cacheDom: function() {
    this.wrapper = document.getElementById("peopleModule");
    this.input = this.wrapper.querySelector("input");
    this.btn = this.wrapper.querySelector("button");
    this.ul = this.wrapper.querySelector("ul");
    this.template = `
    <li>
      <span>{{name}}</span>
      <i class="del">X</i>
    </li> `;
  },
  bindEvents: function(){
    //context of 'this' changes according to where it's fired (the button) 
    //bind it again to make sure it refers to people context
    this.btn.addEventListener("click", this.addPerson.bind(this));
    this.ul.addEventListener("click", this.deletePerson.bind(this));
    
  },

  render: function() {
    let data = {
      people: this.people,
    }
    if(data.people.length===0) return    
    this.ul.innerHTML = "";
    this.people.forEach((person)=>{
      const renderedHTML = this.template.replace("{{name}}", person);
      this.ul.insertAdjacentHTML("beforeend", renderedHTML);
    });
  },

  addPerson: function(){
    this.people.push(this.input.value);
    this.render();
  },

  deletePerson: function(e){
    if (e.target.matches("i.del")){
      const li = event.target.closest("li");
      const siblings = Array.from(li.parentNode.children);
      const index = siblings.indexOf(li)
      this.people.splice(index, 1);
      this.render();
    }
  }

};

people.init();
