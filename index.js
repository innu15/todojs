
function div_show(){
    document.getElementById('abc').style.display = "block";
   
}
// let s=""
let todo=[]
//let s=""
function addtask(){
   
   document.getElementById("parent").innerHTM=""
    event.preventDefault()
   name=document.getElementById("name").value;
   let task={name:name,task:[]} 
   todo.push(task)
    // console.log(name)
    // console.log("looping")
    //  let s=""
    // for(let i=0;i<todo.length;i++)
    // {
    //     console.log(todo[i])
    //     s+="<div class='child"+i+"' id='child"+i+"'>"
    //     s+="<div class='title' style='height:10%;width:200px'>"+todo[i].name+"<hr style='width:100%'/></div>"
    //     s+="<div style='height:10%;width:200px' id='tdo"+i+"'></div>"
    //      for(let j=0;j<todo[i].task.length;j++)
    //      {
    //     s+="<div style='height:10%;width:200px' id='todo"+i+"'>"+todo[i].task[j]+"<button style='height:2vh;width:5vw;font-size:1vh' onclick='done()'>Mark done</button></div>"
    //     }
    //     s+="<div style='height:20%'><i class='far fa-trash-alt' onclick='deletetodo("+i+")'></i><i class='fas fa-plus-circle' onclick='show("+i+")'></i></div>"
    //     s+="</div>";
    //    document.getElementById("parent").innerHTML=s
        
    // }
    showData()
  //  document.getElementById("parent").innerHTML=s
  document.getElementById("name").value=""
    document.getElementById('abc').style.display = "none";

}
function showData(){
    let s=""
    for(let i=0;i<todo.length;i++)
    {
        console.log(todo[i])
        s+="<div class='child"+i+"' id='child"+i+"'>"
        s+="<div class='title' style='height:10%;width:200px'>"+todo[i].name+"<hr style='width:100%'/></div>"
        // s+="<div style='height:10%;width:200px' id='tdo"+i+"'></div>"
         for(let j=0;j<todo[i].task.length;j++)
         {
             if(todo[i].task[j].completed==='false')
             {
                 console.log("false")
        s+="<div style='height:10%;width:200px' id='todo"+j+"'>"+todo[i].task[j].task+"<button style='height:2vh;width:5vw;font-size:1vh' onclick='done("+j+","+i+")'>Mark done</button></div>"
             }
        if(todo[i].task[j].completed==='true')
        {
            console.log("true")
        s+="<div style='height:10%;width:200px;text-decoration: line-through;' id='todo"+j+"'>"+todo[i].task[j].task+"</div>"
        }
    }
        s+="<div style='height:20%'><i class='far fa-trash-alt' onclick='deletetodo("+i+")'></i><i class='fas fa-plus-circle' onclick='show("+i+")'></i></div>"
        s+="</div>";
       document.getElementById("parent").innerHTML=s
        
    }
}
function done(j,i){
console.log(j+""+i)
//document.getElementById("todo"+j).style.textDecoration='line-through'
console.log(todo[i].task[j].task)
todo[i].task[j].completed='true'
for(let i=0;i<todo.length;i++)
    {
        console.log(todo[i])        
    }
    showData()
}
function div_hide(){
    event.preventDefault()
        document.getElementById('abc').style.display = "none";
        
        }

  var index;      
function show(i){
    window.index=i
     document.getElementById('abc1').style.display = "block"; 
    //  for(let i=0;i<todo.length;i++)
    // {
    //     console.log(todo[i])        
    // }
}
let subdiv=""
function submit(){
    event.preventDefault()
//console.log(window.index)
let todoID="tdo"+window.index
//console.log(todoID)
task=document.getElementById("name1").value;
let status={task:task,completed:'false'}
console.log("task"+task)
/** */
//todo[window.index].task=task

//todo[window.index].task.push(task)

todo[window.index].task.push(status)

//  document.getElementById(todoID).innerHTML=task
document.getElementById("name1").value=""
 document.getElementById('abc1').style.display = "none";
 for(let i=0;i<todo.length;i++)
    {
        console.log(todo[i])        
    }
 
//document.getElementById(todoID).innerHTML=task
// subdiv+="<div >"+task+"<button style='height:2vh;width:5vw;font-size:1vh' onclick='done()'>Mark done</button></div>"
// document.getElementById(todoID).innerHTML=subdiv
showData()
}

function deletetodo(i){
document.getElementById("child"+i).style.display='none'
todo.splice(i,1)
}

function hide(){
    event.preventDefault()
        document.getElementById('abc1').style.display = "none";
        
        }



        // function done() {
            
        //     for(let i=0; i<todo.length;i++)
        //     {
        //         if(todo[i].id)
        //         {
        //             done.style.display="none";
        //             text.style.color = "orangered";
        //             text.style.textDecoration = "line-through";
        //             text.style.textDecorationColor="orangered";
        //             break;
        //         }
        //     }
        // }
/**
 * 
 * {name:name,task:""}
 * 
 */
// function add(){
//     document.getElementById("Form").style.display='contents'
// }

// // $(document).ready(function(){
// //     $("#Form").hide();
// //     $("#addbtn").on("click", function(){
// //         $("#Form").show();
// //     });
// // });
// // function check_empty() {
// //     if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
// //     alert("Fill All Fields !");
// //     } else {
// //     document.getElementById('form').submit();
// //     alert("Form Submitted Successfully...");
// //     }
// //     }
//     //Function To Display Popup
//     function div_show() {
//     document.getElementById('abc').style.display = "block";
    

//     }
//     //Function to Hide Popup
//     function div_hide(){
//     document.getElementById('abc').style.display = "none";
    
//     }



//     const tasklist=[]
//     let tempor;
//     const tempObj={

//         id:Date.now(),
//         taskName:name
//         }

// const addtask=()=>{


// const name=document.getElementById("name").value;
// console.log(name);


// // const tempObj={

// // id:Date.now(),
// // taskName:name
// // }

// tasklist.push(tempObj)
// console.log(tasklist)
// div_hide()
// addtaskonscreen(count,name)
// }

// let s=""
// let count=0;
// function addtaskonscreen(count,name){
//     event.preventDefault()
// // const element=document.createElement("div");
// // element.setAttribute("class","child")

// // element.innerText=tasklist[tasklist.length-1].taskName;
// // const existingelement=document.getElementById("parent");
// // existingelement.appendChild(element)

// s+="<div class='child"+count+"'>"
// s+="<div style='height:70%;width:200px'>"+name+"<hr style='width:100%'/></div>"

// s+="<div style='height:20%'><i class='far fa-trash-alt' onclick='delete("+count+")'></i><i class='fas fa-plus-circle' onclick='show("+count+")'></i></div>"
// s+="</div>";
// document.getElementById("parent").innerHTML=s
// count++;
// console.log(count)



// }
// function show(e){
//     document.getElementById('abc1').style.display = "block";
//     // const child=document.getElementById("child"+count);
//      console.log(e)

// }
// function submit(){
//     const name=document.getElementById("name1").value;

// }
// // function check_empty1() {
// //     if (document.getElementById('name1').value == "") {
// //     alert("Fill All Fields !");
// //     } else {
// //     document.getElementById('form').submit();
// //     alert("Form Submitted Successfully...");
// //     }
// //     }
// function hide(){
//     document.getElementById('abc1').style.display = "none";
    
//     }




//     // function hide(val){
//     //            let rem= val.parentNode;
//     //            const value = val.parentNode.id;
//     //           for(let i=0; i<tasklist.length;i++)
//     //           {
//     //               if(tasklist[i].id===Number(value)){
//     //                 tasklist.splice(i,1);
//     //                   break;
//     //               }
//     //           }
//     //         rem.remove();
//     //           if(tasklist.length==0){
//     //               let r2=document.querySelector(".r2");
//     //               r2.style.display="block";
//     //             }
                
//     //     }

//     // function submit(val2) {
//     //     console.log(val2);
//     //     if(val2!==false){ 
//     //         tempor=val2.parentNode.id;
//     //     let main = document.querySelector("#main");
//     //     let pop2 = document.querySelector("#abc1");
//     //     main.classList.toggle("active");
//     //     pop2.classList.toggle("active");
//     //     }
//     //     else{
//     //     let main = document.querySelector("#main");
//     //     let pop2 = document.querySelector("#abc1");
//     //     main.classList.toggle("active");
//     //     pop2.classList.toggle("active");
//     //     }
//     // }