//your JS code here. If required.
function promises(){
    let nameInput=document.getElementById("name").value;
    let ageInput=document.getElementById("age").value;
    // console.log(event)
    if(!nameInput || !ageInput){
        alert("Please fill in all fields")
        return ;
    }

    let age=Number(ageInput)
    new Promise((resolve,reject)=>{
	        if(age>18)resolve(nameInput)
	        else reject(nameInput)
    })
    .then((name)=>alert(`Welcome, ${nameInput}. You can vote.`))
	.catch((name)=>alert(`Oh sorry, ${nameInput}. You arn't old enough.`))
            
}