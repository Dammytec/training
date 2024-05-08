


/**const array = []



function displayArray (){
  for (let index = 0; index < displayArray.length; index++) {
    if (condition) {
        
    }
    
  }
}



const letArray = array.map(function (rate){
   let rates = tell - Date

   return rates
})

console.log(letArray);**/

/**const display_company = document.querySelector('.company')


const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
     {name: "Company Two", category: "Retail", start: 1992, end: 2008},
     {name: "Company Three", category: "Auto", start: 1999, end: 2007},
     {name: "Company Four", category: "Retail", start: 1989, end: 2010},
     {name: "Company Five", category: "Technology", start: 2009, end: 2014},
     {name: "Company Six", category: "Finance", start: 1987, end: 2010},
     {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
     {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
     {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];



  function displayArray (){
    for (let index = 0; index < companies.length; index++) {
      const {name, category, start, end} = companies[index]

        display_company.innerHTML += `<div class="register">
        <div class="name">Name:${name}</div>
        <div class="category">Category:${category}</div>
        <div class="start">Start:${start}</div>
        <div class="end">End:${end}</div>
    </div`
       
    if (companies[index].end - companies[index].start >= 10) {
        console.log(companies[index]);
    }
      
        
    }
  }


  /**let arrayYear = companies.filter(function(rate){
    let rates = rate.end - rate.start
    if (rates >= 10) {
        return rates
    }
  })

 console.log(arrayYear);**/

 /**  displayArray() **/




document.getElementById('getText').addEventListener('click', getText)
document.getElementById('getUsers').addEventListener('click', getUsers)
document.getElementById('addpost').addEventListener('submit', addpost)



function getText(){
    fetch('sample.text')
    .then(function(res){
     return res.text()
    })
    .then(function(data){
        document.getElementById('output').innerHTML = data
    })
}

function getUsers(){
    fetch('users.json')
   .then(function(res){
    return res.json()
   })
   .then(function(data){
   let output = `<h2>Users</h4>`
   data.forEach(function(users){
    output += `
             <ul>
             <li>Id: ${users.id}</li>
             <li>Name:${users.name}</li>
             <li>Email:${users.email}</li>
             </ul>
        `
   })
   document.getElementById('output').innerHTML = output
   })
}


function addpost(e){
    e.preventDefault();


    let title = document.getElementById('title').value
    let body = document.getElementById('body').value

    fetch ('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Accept':'application/json, text/plain , */*',
            'Content-type':'application/json'
        },
        body:JSON.stringify({title:title, body:body})
    })
    .then(function (res){
        return res.json()
    })
    .then(function(data){
        console.log(data);
    })

}

