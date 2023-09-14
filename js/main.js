let btn1 =document.querySelector(".btn1")
let inputone =document.querySelector(".input1")
let inputtwo =document.querySelector(".input2")
let result =document.querySelector(".result ") 
let btn3 =document.querySelector(".btn3")

// console.log(".result row");
// btn1.addEventListener("click",function(){
//  inputtwo.value = inputone.value ;
// console.log(inputtwo.value)
// row.style.opacity=1
// })
// for(let index=0;index<result.length;index++){
//     btn1.addEventListener("click",function(){
//         result[index].value = inputone.value ;
//        console.log(inputtwo.value)
//        row.style.opacity=1
//        })
// } 
let alltasks=[];
let renderTask=()=>{
    if(inputone.value.trim()=="")
    {
        alert("error")
    }
    else{
        singletask={
            task: inputone.value 
    
    
        };
        alltasks.push(singletask);
        inputone.value="";
        // console.log(result)
        readtasks();
        console.log(alltasks);
       
    }
    
}
let deletetask=(index) =>{
alltasks.slice(index,1)
readtasks();
}
let readtasks = () =>{
result.innerHTML="";

alltasks.forEach((element,index) => {
    result.innerHTML +=` 

     <div class="row">
            <div class="cap">
                <h1>${element.task}</h1>
            </div>
           
            <div class="butons">
                <button class="btn2"> EDIT</button>
                 <button onclick="deletetask(${index})" class="btn3">DELETE</button>
               
            </div>
        </div>`
})

}


btn1.addEventListener("click",renderTask);

 

   
