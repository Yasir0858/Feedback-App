let form=document.querySelector("form");
let ul=document.querySelector("ul");
let textarea=document.querySelector("textarea");
let select=document.querySelector("select");

const saveReview=(e)=>{
    e.preventDefault();
    let li=document.createElement("li");
    let h1=document.createElement("h1");
    let p=document.createElement("p");
    let detbtn=document.createElement("button");
    h1.innerText=`Rating: ${select.value}`;
    p.innerText=`Review:${textarea.value}`;
    detbtn.innerText="Delete";
    console.log(ul);
    li.appendChild(h1);
    li.appendChild(p);
    li.appendChild(detbtn);
    
    li.className="list-group-item rounded-0"
    detbtn.className="btn btn-danger rounded-0 float-end btn-sm"
    
    ul.appendChild(li);

    // alert("heloo")
    form.reset();
}


form.addEventListener("submit" , saveReview);

const removeUl=(e)=>{
    if(e.target.className.includes("btn-danger")){    
        let li=e.target.parentElement;
        ul.removeChild(li);

    }
}
ul.addEventListener("click",removeUl);