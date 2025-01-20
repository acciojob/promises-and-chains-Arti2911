//your JS code here. If required.
let form=document.getElementById("form")
form.addEventListener("submit",submitHandler)
function submitHandler(event){
	event.preventDefault()
    let nameInput=document.getElementById("name").value.trim();
    let ageInput=document.getElementById("age").value.trim();
    // console.log(event)
    if(!nameInput || !ageInput){
        alert("Please fill in all fields")
        return ;
    }

    let age=Number(ageInput)
    const ageCheckPromise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
	        if(age>18)resolve(`Welcome, ${nameInput}. You can vote.`)
	        else reject(`Oh sorry ${nameInput}. You aren't old enough.`)
        },4000)
    })
    ageCheckPromise.then((message)=>alert(messag)).catch((error)=>alert(error))
            
}