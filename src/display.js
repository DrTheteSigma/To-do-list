// Filtering the array to different project and doing the dom of each
import { CreateDoms } from "./CreateDoms"
export function display(){

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
            console.log(Projects_array[index])
            CreateDoms(Projects_array[index].title,Projects_array[index].description,Projects_array[index].date,Projects_array[index].priority,Projects_array[index].projectname,index)
        }
       
        
    }

}