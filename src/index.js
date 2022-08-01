import { ProjectAdder } from "./ProjectAdder";
import {Theclass} from "./Theclass";
import { CreateDoms } from "./CreateDoms";

// This function controls the adding of new projects in the bottom left form.
var Object_array = ProjectAdder()


//This array hold the objects from Theclass.js file
var Projects_array=[];

//activates the code
document.querySelector(".userInput").addEventListener("submit", (e)=>{
    e.preventDefault()
    Projects_array.push(Theclass())
    display()
    EditToDo()
    })


// Filtering the array to different project and doing the dom of each
function display(){

    //delete everything inside
    const rightdiv = document.querySelector(".right")
    rightdiv.replaceChildren()

    // get which project is selected
    const TheProjectName= document.querySelector(".Projects_Choice")
    const radios = TheProjectName.getElementsByTagName("input")
    var TheProjectNameValue;

    // runs a loop on all the radio buttons and return the value of the selected
    for (let index = 0; index < radios.length; index++) {
        if (radios[index].checked) {
          TheProjectNameValue = radios[index].classList.value
          
        }
       
    }
    //Used the creatDoms file to create the doms, if statment to filter based on the project name
    for (let index = 0; index < Projects_array.length; index++) {
        if(Projects_array[index].projectname==TheProjectNameValue){
            CreateDoms(Projects_array[index].title,Projects_array[index].description,Projects_array[index].date,Projects_array[index].priority,Projects_array[index].projectname,index)
        }
       
    }

}

//loads the correct project when the radios are pressed
document.querySelector(".Projects_Choice").addEventListener("click", (e)=>{
    display()
    EditToDo()
})

function EditToDo(){
    const editbutton = document.querySelectorAll(".edit")
    editbutton.addEventListener("click", (e)=>{
      //grab the information from the parent of the button to edit
       const titleGetter = e.target.parentNode.parentNode.getElementsByTagName("div")[0].innerText
       const descriptionGetter = e.target.parentNode.parentNode.getElementsByTagName("div")[1].innerText
       const dateGetter = e.target.parentNode.parentNode.getElementsByTagName("div")[1].innerText
       const priorityGetter= e.target.parentNode.parentNode.classList.item(1)
    
       const editerdiv = document.createElement("div")
       editerdiv.innerText="doing nothing"
       const theRightDiv = e.target.parentNode.parentNode.parentNode
       theRightDiv.insertBefore(editerdiv, e.target.parentNode.parentNode)


       console.log(e.target.parentNode.parentNode)
    })

}




