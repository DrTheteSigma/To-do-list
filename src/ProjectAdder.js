export function ProjectAdder(){
    const form = document.querySelector(".userInputProject")
    let classesarray=[]

    const retrieved = localStorage.getItem("Projects")
    const retrievedParsed = JSON.parse(retrieved)
    if (retrievedParsed!=null) {
        retrievedParsed.forEach(element => {
        classesarray.push(element)
    
    });
    
        }

    //LOAD OLD PROJECTS
    classesarray.forEach(singleclass => {
         //main form
        const directory = document.querySelector(".Projects_Choice")
        //creating label
        const element = document.createElement("label")
        element.setAttribute("for",singleclass)
        element.innerText=singleclass
        //creating input
        const elementradio = document.createElement("input")
        elementradio.setAttribute("type", "radio")
        elementradio.classList.add(singleclass)
        elementradio.setAttribute("name","selection")
        directory.appendChild(element)
        directory.appendChild(elementradio)

        
    });


    // FOR NEW PROJECTS
    form.addEventListener("submit", (e)=>{
        e.preventDefault()
    
        const input = document.querySelector(".projectName").value
        //main form
        const directory = document.querySelector(".Projects_Choice")
        //creating label
        const element = document.createElement("label")
        element.setAttribute("for",input)
        element.innerText=input
        //creating input
        const elementradio = document.createElement("input")
        elementradio.setAttribute("type", "radio")
        elementradio.classList.add(input)
        elementradio.setAttribute("name","selection")
        
        classesarray.push(input)
        directory.appendChild(element)
        directory.appendChild(elementradio)


        const jsonOBj = JSON.stringify(classesarray);
        localStorage.setItem("Projects", jsonOBj)
       
    })
    console.log(classesarray)
    return classesarray
}