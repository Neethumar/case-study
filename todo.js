let Count = 0;
function displayList(){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status == 200) {
        let myobj = JSON.parse(this.responseText);
        setTable(myobj);
    }
    };
    xhr.open("GET","https://jsonplaceholder.typicode.com/todos");
    xhr.send();
     $(".todolist").css("visibility", "visible");
}
function setTable(obj) {
    let row = "";   
    for(let i = 0; i < obj.length; i++) {
        let status = obj[i].completed;
        
        if(status == true) {

            row += `<input type = "checkbox" id = "c${i}" disabled checked>`;
        
        }
        else
        {   
            row += `<input type = "checkbox" id = "c${i}" onchange = "popUp(this)">`;
        }

        row += `<label for = "c${i}">${obj[i].title}</label><br><hr>`;
    }
    document.querySelector(".todolist").innerHTML += row; 
}

function popUp(checkBox) {


    if(checkBox.checked == true){
        Count++;
    }
    else {
        Count--;
    }
    if(Count == 5) {
        $(".popup").css("visibility", "visible");
        
            
    }
    $("#popbtn").on("click", () => {
        $(".popup").css("visibility", "hidden");
      }); 
}