const name = document.getElementById("name");
const age = document.getElementById("age");
const button = document.getElementById("btn");
let nameVal,ageVal
name.addEventListener("input",(e)=>{
	nameVal = e.target.value;
})
age.addEventListener("input",(e)=>{
	 ageVal = e.target.value;
})
button.addEventListener("click",(e)=>{
	e.preventDefault();
	promise(nameVal,ageVal)
		.then((data) => alert(data))
		.catch((err) => alert(err))
})

function promise(name, age) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });
}





