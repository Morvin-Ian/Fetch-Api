document.getElementById('get_text').addEventListener('click', get_text)
document.getElementById('get_json').addEventListener('click', get_json)
document.getElementById('get_api').addEventListener('click', get_api)

function get_text(){
    fetch('sample.txt')
    .then((res)=>res.text())
    .then((data)=>{
        console.log(data)
        document.getElementById("output").innerHTML = data;
    })
   
}

function get_json(){
    fetch('db.json')
    .then((res)=>res.json())
    .then((data)=>{
        data.forEach(user=>{
            output = `
            <ul>
            <h1>Json Data </h1>
                <li>Id: ${user.id}</li>
                <li>Name: ${user.name}</li>
                <li>Date: ${user.date}</li>
            </ul>`
            document.getElementById("output").innerHTML = output;
        });
       
    })
   
}

function get_api(){
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>{
        return response.json()

    })
    .then(data=>{
        data.forEach(user => {
            console.log(`${user.email}-${user.name}`)
            document.getElementById("output").innerHTML = `Email: ${user.email} Name: ${user.name}`;
        });
    })
   
}