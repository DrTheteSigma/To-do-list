export function CreateDoms(title,description,date,priority,projectname,index){
  

    //capture the .right div
    const right = document.querySelector(".right")

    const onetodo=document.createElement("div")
    onetodo.classList.add("onetodo")
    onetodo.classList.add(priority)

    onetodo.innerHTML=`<input type="checkbox"><div>${title}</div><div>${description}</div><div>${date}</div><div>${projectname}</div><div><button>delete</button><button class="edit">edit</button></div>`
    right.appendChild(onetodo)
    
}