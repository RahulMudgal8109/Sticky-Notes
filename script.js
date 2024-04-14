
let title = document.getElementById('title');
let color = document.getElementById('color');
let ipText = document.getElementById('ip-textt');
let btn = document.getElementById('btn');
let main = document.getElementById('main');
let row = document.getElementsByClassName("row")[0];
let months=["Jan","Feb","March","April","May","June","July","August","September","October","November","December"];
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
color.addEventListener('input', function () {
    ipText.style.backgroundColor = color.value;
})



btn.addEventListener("click", function () {
    const dateObj = new Date();
const month   = dateObj.getUTCMonth() + 1; // months from 1-12
const day     = dateObj.getUTCDate();
const year    = dateObj.getUTCFullYear();


const currentDayOfWeek = daysOfWeek[dateObj.getDay()];

    let hrs=dateObj.getHours();
    
    
    const mins=dateObj.getMinutes();
    let time;
    if(hrs>=12)
    {
        if(mins<10)
        {
            time=hrs-12+":"+"0"+mins+" "+"PM"

        }
        else{
            time=hrs-12+":"+mins+" "+"PM"

        }
       

    }
    else{
        if(mins<10)
        {
            time=hrs+":"+"0"+mins+" "+"AM"

        }
        else{
            time=hrs+":"+mins+" "+"AM"

        }
        
    }
    if (title.value.trim() === "") {

        alert("Please Enter Title");
        title.value = "";
        ipText.value = "";
        return;
    }
    if (ipText.value.trim() === "") {
        alert("Please Enter Todo");
        title.value = "";
        ipText.value = "";
        return;
    }
    console.log(color.value);

    let div = document.createElement('div');
    div.classList.add('col-4');
    div.style.width = "300px";
    div.style.height = "300px";
    div.style.position = "relative";
    div.style.margin = "35px 10px 10px 10px";
    // div.style.backgroundColor=color.value;
    div.innerHTML = `<h2>${title.value} </h2>
        <div class="op-text m-1" id="op-text" style="background-color:${color.value}">
        <textarea class="p-box-text p-1" id="p-box-text" style="background-color:${color.value}" readonly="readonly">${ipText.value}</textarea>
        <div class="btns">
            <button class="delete m-1" id="delete">X</button>

            

            <button class="edit m-1"><i class="material-icons" id="edit">border_color</i></button>
        </div>
    </div>
    <div class="date-time">${currentDayOfWeek},${months[month]},${day},${year},${time}</div>`;





    row.appendChild(div);
    title.value = "";
    ipText.value = "";
    document.getElementById("p-box-text").readOnly = true;



    let deleteBtn = document.querySelectorAll('.delete');

    deleteBtn.forEach(element => {

        element.addEventListener('click', function () {
            let toRemove = element.parentNode.parentNode.parentNode;
            toRemove.remove();
        })
    });
    let edit = document.querySelectorAll(".edit");
    let pBoxText = document.getElementById("p-box-text");
    //let op-text=document.
    let flag = false;
    edit.forEach(element => {


        element.addEventListener('click', function () {
            if (flag === false) {
                element.parentNode.parentNode.parentNode.style.width = "600px";
                element.parentNode.parentNode.parentNode.style.height = "500px!important";
                element.parentNode.parentNode.parentNode.style.transition = "0.7s ease-in-out";

                element.parentNode.parentNode.firstChild.nextElementSibling
                    .style.border = "2px solid black";
                    element.parentNode.parentNode.firstChild.nextElementSibling.readOnly = false;
                flag = true;

            }
            else {
                element.parentNode.parentNode.parentNode.style.width = "300px";
                element.parentNode.parentNode.parentNode.style.height = "300px";
                element.parentNode.parentNode.parentNode.style.transition = "0.7s ease-in-out";
                element.parentNode.parentNode.firstChild.nextElementSibling
                    .style.border = "none";
                    element.parentNode.parentNode.firstChild.nextElementSibling.readOnly = true;
                flag = false;

            }



        })

    })

});


