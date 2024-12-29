const people = {
  people: ["Alex", "Lexa","Lexus","Lexis"],
  init: function() {
    this.cacheDom();
    this.render();
  },
  cacheDom: function() {
    this.wrapper = document.getElementById("peopleModule");
    this.input = this.wrapper.querySelector("input");
    this.btn = this.wrapper.querySelector("button");
    this.ul = this.wrapper.querySelector("ul");
    this.li = this.ul.querySelector("li");
    this.span = this.li.querySelector("span");
    this.template = `
    <li>
      <span>{{name}}</span>
      <i class="del">X</i>
    </li>`;
  },
  render: function() {
    let data = {
      people: this.people,
    };
    data.people.forEach(person=>{
      const renderedHTML = this.template.replace("{{name}}", person);
      this.ul.insertAdjacentHTML("beforeend", renderedHTML);
    });
  }

};

people.init();
