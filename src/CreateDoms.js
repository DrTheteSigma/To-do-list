export function CreateDoms(title,description,date,priority,projectname,index){
  

    //capture the .right div
    const right = document.querySelector(".right")

    const onetodo=document.createElement("div")
    onetodo.classList.add("onetodo")
    onetodo.classList.add(priority)
    onetodo.classList.add(index)

    onetodo.innerHTML=`<input type="checkbox"><div>${title}</div><div>${description}</div><div>${date}</div><div>${projectname}</div><div><button class="deletebutton">delete</button><button class="edit">edit</button></div>`
    right.appendChild(onetodo)
    
}