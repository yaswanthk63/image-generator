const key="xpTJRfQTmsg_HkfulydnPo7t_5PFcPKrO_oOZJm-r8o"
let form=document.querySelector("form");
let input=document.querySelector(".input");
let btn=document.querySelector(".btn");
let page=1;
let data;
let results;
let search=document.querySelector(".search-image");
let more=document.querySelector(".more");
let but=document.querySelector(".but")
async function searchimage(){
    let newele=input.value;
    const url=`https://api.unsplash.com/search/collections?page=${page}&query=${newele}&per_page=6&client_id=${key}`
    let response= await fetch(url);
    data= await response.json();
    results=data.results;
    if(page===1){
        search.innerHTML=""
    }
    if(results.length==0){
        alert("no matches found")
    }
    results.forEach((results)=> {
        let div=document.createElement("div");
        div.classList.add("image")
        search.appendChild(div);
        let img=document.createElement("img");
        img.src=`${results.preview_photos[0].urls.small}`
        let a=document.createElement("a");
        a.href=`${results.preview_photos[0].urls.small}`
        a.textContent=`${results.cover_photo
            .alt_description}`;
        
        div.appendChild(img);
        div.appendChild(a);

 
   
    });
    page++;
    if(page>1){
        but.style.display="flex";
    }

}
 
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    
   
    page=1;
    searchimage();
    
    
})

more.addEventListener("click",(e)=>{
    
    searchimage();
    
})
