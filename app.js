let search=document.querySelector("#search")

function func(){


fetch(`https://newsapi.org/v2/everything?q=tesla&from=2024-05-11&sortBy=publishedAt&apiKey=2c1b609c5d3a4694b46c08516dfda942`)
.then((res)=>{
    return  res.json()
})
.then((data)=>{
    let gdiv=document.querySelector(".getdiv")
    gdiv.innerHTML +=`<div class="card" style="width: 18rem;">
  <img src=${data.articles.urlToImage} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.articles.name}</h5>
    <h3>${data.articles.author}</h3>
    <p>${data.articles.description}</p>
  </div>
  <div class="card-body">
  <a href="#" class="card-link">${data.articles.publishedAt}</a>
  <a href="#" class="card-link">${data.articles.url}</a>
  </div>
</div>`
    
})
.catch((err)=>{
    console.log(err)
})

 }