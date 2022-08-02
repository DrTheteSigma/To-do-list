export function ProjectAdder(){
    const form = document.querySelector(".userInputProject")
    let classesarray=["All"]
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
       
    })
    return classesarray
}