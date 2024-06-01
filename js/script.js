clickbtn('1000');

async function homePage(){
    const url=`https://openapi.programming-hero.com/api/videos/categories`;
    const res = await fetch(url);
    const data = await res.json();
    displayCategory(data.data);
}
homePage();

 function displayCategory(data){
    const category=document.getElementById('category');
    console.log(category);
    data.forEach(element => {
        const div=document.createElement('div');
        div.innerHTML=`<button id="${element.category}" onclick="clickbtn('${element.category_id}')" class="btn">${element.category}</button>`;
        category.appendChild(div);
    })
    const all= document.getElementById("ALL");
    console.log(all);
}

async function clickbtn(id){
    const url=`https://openapi.programming-hero.com/api/videos/category/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayVideos(data.data);
}

function displayVideos(data){
    const videos=document.getElementById('videos');
    const videoSection=document.getElementById("video-section");
    videos.innerHTML="";
    if(data.length==0){
        videoSection.hidden=false;
    }
    else{
        videoSection.hidden=true;
    }
    data.forEach(element => {
        const div=document.createElement('div');
        div.innerHTML=`
        <div class="card h-full bg-base-100 shadow-xl">
            <figure><img src="${element.thumbnail}" class="h-48" /></figure>
            <div class="card-body">
                <div class="flex gap-2">
                    <img src="${element.authors[0].profile_picture}" alt="" class="w-10 h-10 rounded-full">
                    <div class="">
                        <h2 class="card-title">${element.title}</h2>
                        <div class="flex gap-3">
                            <div>
                                <p>${element.authors[0].profile_name}</p>
                            </div>
                            <div><img src="image/fi_10629607.png" alt=""></div>
                        </div>
                        <p>${element.others.views}</p>
                    </div>
                </div>
            </div>
        </div>`;
        videos.appendChild(div);
    });
}
