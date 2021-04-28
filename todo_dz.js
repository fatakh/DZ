let app = new Vue({
  el: '#app',
  data() { 
    return {
      //showModal: false,
      valueInput: '',
      needDoList: [],
      completeList: []
    };
  },
  
  methods:{
    handlyInput (event) {
      this.valueInput = event.target.value

    },
    addTodo() {
      if(this.valueInput === '') {return};
      this.needDoList.push({
        title:this.valueInput,
      });
      this.valueInput ='';
    },
    removeTodo(index, type) {
      const toDoList = type === 'need' ? this.needDoList : this.completeList;
      toDoList.splice(index, 1);
    }
  }
 
})