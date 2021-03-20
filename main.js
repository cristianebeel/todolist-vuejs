const vm = new Vue({
    el: '#app',
    data(){
        return{
            title: '',
            taskList: []
        }
    },
    computed:{
        isDisabled(){
            if(!this.title) return true
            else return false
        }
    },
    methods:{
        addItem(){
            this.taskList.push({
                title: this.title
            })
            this.title=''
        }
    }
})

let expanded = false;
function showCheckboxes(){
  let checkboxes = document.getElementById("checkboxes");
  if(!expanded){
    checkboxes.style.display = "block";
    expanded = true;
  }else{
    checkboxes.style.display = "none";
    expanded = false;
  }
}