let ismlar=JSON.parse(localStorage.getItem("ismlar")) || [];

const ol=document.getElementById("ol");
const input=document.getElementById("input");
const btn=document.getElementById("btn");

function chizish(malumot){
   ol.innerHTML="";
   malumot.map(ism=> {
    const li=document.createElement("li");
    li.textContent=ism;
    ol.appendChild(li);
   })
}

chizish(ismlar);

btn.addEventListener("click",()=>{
    if(input.value.length<1){
       alert("ism kiriting")
    }
    else{
        ismlar.push(input.value);
         localStorage.setItem("ismlar",JSON.stringify(ismlar));
        chizish(ismlar);
        input.value="";
    }
})