
async function getdata(){
const response=await fetch("https://jsonplaceholder.typicode.com/todos/1")
console.log("response",response)

const data=await response.json()
console.log("data",data)
}

async function postData(){
const response=await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'My info',
      body: 'data',
      userId: 4
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
});
console.log("response",response)

const data=await response.json()
console.log("data",data)
}

//getdata()
postData()