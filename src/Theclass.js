export function Theclass(){

    class ToDoItem{
        constructor(title,description,date,priority,projectname){
            this.title=title
            this.description=description
            this.date=date
            this.priority=priority
            this.projectname=projectname
        }
    
    }  
        const TheTitle = document.querySelector(".title").value
        const TheDescription = document.querySelector(".description").value
        const TheDueDate = document.querySelector(".dueDate").value
        const ThePriority = document.querySelector(".priority").value

        //get the input of the radios, the directory form
        const TheProjectName= document.querySelector(".Projects_Choice")

        const radios = TheProjectName.getElementsByTagName("input")
        var TheProjectNameValue;

        for (let index = 0; index < radios.length; index++) {
            if (radios[index].checked) {
              TheProjectNameValue = radios[index].classList.value     
            }
        }

        //Using the class creating objects
        const ToDOElement = new ToDoItem(TheTitle,TheDescription,TheDueDate,ThePriority,TheProjectNameValue)
        return ToDOElement


}


