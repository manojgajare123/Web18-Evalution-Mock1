
function storeData(e){
    e.preventDefault();
    let form=document.getElementById("studets_data")
    let name=form.name.value;
    let course=form.course.value;
    let unit=form.unit.value;
    let img=form.image.value;
    let batch=form.batch.value;
  
    let s1=new Student(name,course,unit,img,batch)
    let data=JSON.parse(localStorage.getItem("students"))||[]
    data.push(s1)
    localStorage.setItem("students",JSON.stringify(data))
    location.reload()

    console.log(s1)

}
function Student(n,c,u,i,b){
    this.name=n;
    this.course=c;
    this.unit=u;
    this.img=i;
    this.batch= `Ft-Web-${b}`;
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