import { ProjectAdder } from "./ProjectAdder";
import {Theclass} from "./Theclass";
import { CreateDoms } from "./CreateDoms";



// This function controls the adding of new projects in the bottom left form.
var Object_array = ProjectAdder()


//This array hold the objects from Theclass.js file
var Projects_array=[];


// retrieve Localstorage and push to the array

const retrieved = localStorage.getItem("Objects")
const retrievedParsed = JSON.parse(retrieved)
if (retrievedParsed!=null) {
    
    retrievedParsed.forEach(element => {
        Projects_array.push(element)
    
    });
}


console.log(Projects_array)


//activates the code
document.querySelector(".userInput").addEventListener("submit", (e)=>{
    e.preventDefault()
    Projects_array.push(Theclass())
    
    display()
    EditToDo()
    })


// Filtering the array to different project and doing the dom of each
function display(){

    //localStorage code

    const jsonOBj = JSON.stringify(Projects_array);
    localStorage.setItem("Objects", jsonOBj)
    ///////////////////////

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
    //reomove button
    const deletebutton = document.querySelectorAll(".deletebutton")
    deletebutton.forEach(dltbtn => {
        dltbtn.addEventListener("click", (e)=>{
           const thedeletbuttonindex = e.target.parentNode.parentNode.classList.item(2)
           Projects_array.splice(thedeletbuttonindex,1)
           display()
           EditToDo()

        })
        
    });


    //edit button
    const editbutton = document.querySelectorAll(".edit")
    editbutton.forEach(button => {
        button.addEventListener("click", (e)=>{
            console.log(Object_array)
            //grab the information from the parent of the button to edit
             const titleGetter = e.target.parentNode.parentNode.getElementsByTagName("div")[0].innerText
             const descriptionGetter = e.target.parentNode.parentNode.getElementsByTagName("div")[1].innerText
             const dateGetter = e.target.parentNode.parentNode.getElementsByTagName("div")[2].innerText
             const indexGetter= e.target.parentNode.parentNode.classList.item(2)
          
             const editerdiv = document.createElement("div")
             editerdiv.innerHTML=`<form id="editform"> <label for="edittitle">Title</label> <input type="text" value="${titleGetter}" class="edittitle"> <label for="editdescription">Description</label> <input type="text" value="${descriptionGetter}" class="editdescription"> <label for="editdate">Title</label> <input type="datetime-local" value="${dateGetter}" class="editdate"> <select name="priority" class="editpriority"> <option value="High" >High</option> <option value="Mid">Mid</option> <option value="Low">Low</option> </select>  <input type="submit" class="editsubmit" value="Edit"> </form>`


             // puts the edit div before the div which has the edit button
             const theRightDiv = e.target.parentNode.parentNode.parentNode
             theRightDiv.insertBefore(editerdiv, e.target.parentNode.parentNode)

             //When edit button gets clicked changed values in the object library
            const editsubmit= document.querySelector(".editsubmit")
            editsubmit.addEventListener("click", (e)=>{
                e.preventDefault()

                //grab the new input field and change the object
                const newtitlegetter = document.querySelector(".edittitle").value
                const newdescription = document.querySelector(".editdescription").value
                const newdate = document.querySelector(".editdate").value
                const newpriority = document.querySelector(".editpriority").value

                
                Projects_array[indexGetter].title=newtitlegetter
                Projects_array[indexGetter].description=newdescription
                Projects_array[indexGetter].newdate=newdate
                Projects_array[indexGetter].priority=newpriority
                display()
                EditToDo()
                  
            })
            
          })
       
    });

}






