function append(){
    let data=JSON.parse(localStorage.getItem("students"))||[];
    let container=document.getElementById("container")
    container.innerHTML=null;

    data.forEach(function (element,index){
        let div= document.createElement("div")
     
     let img=document.createElement("img")
     img.src=element.img;
     let name=document.createElement("p")
     name.innerText=element.name;
   
     let course=document.createElement("p")
     course.innerText=element.course;
     let unit=document.createElement("p")
     unit.innerText=element.unit;
     let batch=document.createElement("p")                                                                                                                                                      
     batch.innerText=element.batch;
     let btn=document.createElement("button")
     btn.innerText="Remove";
     btn.addEventListener("click", function() {
         remove(index)
        });

     div.append(img,name,course,unit,batch,btn)
     container.append(div);
     
    });
   
}
append()  

function remove(index)
{
    let data=JSON.parse(localStorage.getItem("students"))||[];

    let newData=data.filter(function(el,i){
        if(i===index)
        {
            let trash=JSON.parse(localStorage.getItem("trash"))||[];
            trash.push(el);
            localStorage.setItem("trash",JSON.stringify(trash));

        }
        else
        {
            return i!==index;
        }
    });
    localStorage.setItem("students",JSON.stringify(newData));
    append();
    location.reload()

  
}
function calculte(){
    let navbar=document.getElementById("navbar");
    let data=JSON.parse(localStorage.getItem("students"))||[];
  let  obj={};

    for(let i=0; i<data.length; i++)
    {
        if(!obj[data[i].batch])
        {
            obj[data[i].batch] = 0;
        }
    }  

for(let i=0; i<data.length; i++)
    {
    obj[data[i].batch]++;
        
    }
    console.log(obj);
    arr=[]
    for (var key in obj){
        arr.push(`${key}-${obj[key]}`);
    }
    console.log(arr)
    navbar.innerText=arr.join(" | ");
}

calculte();