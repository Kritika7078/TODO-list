const input = document.querySelector(".input-box");
const button = document.querySelector(".add-button");
const todoList = document.querySelector(".todo-list");

button.addEventListener("click",addTodo);          //ie. if we clich on the button the funtion will be called
todoList.addEventListener("click",deleteTodo);           //we created both the new functions 

function addTodo(event){
    event.preventDefault();          //so that empty list is not added ie. stops the execution of the default function

console.log(input.value);                //input.value returns the content and can also be use to add or over wirte the text
    //adding the contents the to  ul in backend
const todoDiv=document.createElement("div");
todoDiv.classList.add("todo-container") ;         //class list is array we want to create

const todoItem=document.createElement("li");
todoItem.classList.add("todo-item")    ;
todoItem.innerText=input.value;
todoDiv.appendChild(todoItem);

//todoItem.innerText="h1";           //in innertext we can only type text where as in inner html we can add tags as well

const deleteButton=document.createElement("button");
deleteButton.classList.add("delete-btn")   ; 
deleteButton.innerHtml= '<i class="fa-solid fa-trash"></i>';
todoDiv.appendChild(deleteButton);

const completeButton=document.createElement("button");
completeButton.classList.add("complete-btn") ;   
completeButton.innerElement='<i class="fa-solid fa-check"></i>';
todoDiv.appendChild(completeButton);        //ie. add a div to the ul

todoList.appendChild(todoDiv);           //add a div to the class todo-list

input.value=" ";                      //to clear the input value for the next entry
}

function deleteTodo(event){             //event is the user action here
    console.log(event.target);

    const item=event.target;                    // target property returns the element where the event occured
    console.log(item);
    if(item.classList[0]==="delete-btn"){ 
        const delItem=item.parentElement;
        console.log(delItem);
        delItem.remove();
    }

    if(item.classList[0]==="complete-btn"){          //=== is the comparison  operator that checks for both the data type and the string value 
        const delItem=item.parentElement;            //to delete the full div
        console.log(delItem);
        delItem.classList.toggle("completed");      //click once class is removed click again class(completed is the name of the class here) is added again
    }
}