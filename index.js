
function div_show() {
    document.getElementById('abc').style.display = "block";

}
// let s=""
let todo = []
//let s=""
function addtask() {

    document.getElementById("parent").innerHTM = ""
    event.preventDefault()
    name = document.getElementById("name").value;
    let task = { name: name, task: [] }
    todo.push(task)

    showData()
    //  document.getElementById("parent").innerHTML=s
    document.getElementById("name").value = ""
    document.getElementById('abc').style.display = "none";

}
function showData() {
    let s = ""
    for (let i = 0; i < todo.length; i++) {
        console.log(todo[i])
        s += "<div class='child" + i + "' id='child" + i + "'>"
        s += "<div class='title' style='height:10%;width:200px'>" + todo[i].name + "<hr style='width:100%'/></div>"
        s+="<div style='height:70%;width:200px'>"
        for (let j = 0; j < todo[i].task.length; j++) {
            if (todo[i].task[j].completed === 'false') {
                console.log("false")
                s += "<div style='width:200px' id='todo" + j + "'>" + todo[i].task[j].task + "<button style='height:2vh;width:5vw;font-size:1vh' onclick='done(" + j + "," + i + ")'>Mark done</button></div>"
            }
            if (todo[i].task[j].completed === 'true') {
                console.log("true")
                s += "<div style='width:200px;height:70%;text-decoration: line-through;' id='todo" + j + "'>" + todo[i].task[j].task + "</div>"
            }
        }
        s+="</div>"
        s += "<div style='height:20%;'><i class='far fa-trash-alt' onclick='deletetodo(" + i + ")'></i><i class='fas fa-plus-circle' onclick='show(" + i + ")'></i></div>"
        s += "</div>";
        document.getElementById("parent").innerHTML = s

    }
}
function done(j, i) {
    console.log(j + "" + i)

    console.log(todo[i].task[j].task)
    todo[i].task[j].completed = 'true'
    for (let i = 0; i < todo.length; i++) {
        console.log(todo[i])
    }
    showData()
}
function div_hide() {
    event.preventDefault()
    document.getElementById('abc').style.display = "none";

}

var index;
function show(i) {
    window.index = i
    document.getElementById('abc1').style.display = "block";
    //  for(let i=0;i<todo.length;i++)
    // {
    //     console.log(todo[i])        
    // }
}
let subdiv = ""
function submit() {
    event.preventDefault()
    //console.log(window.index)
    let todoID = "tdo" + window.index
    //console.log(todoID)
    task = document.getElementById("name1").value;
    let status = { task: task, completed: 'false' }
    console.log("task" + task)
    /** */
    //todo[window.index].task=task

    //todo[window.index].task.push(task)

    todo[window.index].task.push(status)

    //  document.getElementById(todoID).innerHTML=task
    document.getElementById("name1").value = ""
    document.getElementById('abc1').style.display = "none";
    for (let i = 0; i < todo.length; i++) {
        console.log(todo[i])
    }

    //document.getElementById(todoID).innerHTML=task
    // subdiv+="<div >"+task+"<button style='height:2vh;width:5vw;font-size:1vh' onclick='done()'>Mark done</button></div>"
    // document.getElementById(todoID).innerHTML=subdiv
    showData()
}

function deletetodo(i) {
    document.getElementById("child" + i).style.display = 'none'
    todo.splice(i, 1)
}

function hide() {
    event.preventDefault()
    document.getElementById('abc1').style.display = "none";

}





















