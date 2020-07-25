 var list = document.getElementById("list");

 function addtodo(){
     var item = document.getElementById('item');
    //console.log(li)
     var li = document.createElement('li')
     var litext =document.createTextNode(item.value)
     li.appendChild(litext)
     //delte
    var delbtn = document.createElement('button')
     var seltext = document.createTextNode("delete")
   delbtn.appendChild(seltext)
    delbtn.setAttribute("class","btn2")
  //  delbtn.setAttribute("class","fa fa-trash")
    delbtn.setAttribute("onclick","deleteitem(this)")
   li.appendChild(delbtn)
//edit

     var editbtn = document.createElement("button")
     var edittext = document.createTextNode("edit")
     editbtn.setAttribute("class","fa fa-edit")
     editbtn.setAttribute("class","btn1")
     

     editbtn.appendChild(edittext)
     li.appendChild(editbtn)
     editbtn.setAttribute("onclick" , "editiem(this)")
// //     editbtn.setAttribute(this)
// //     console.log(li)

list.appendChild(li)
item.value= ""
 console.log(li)
// console.log(delbtn)
 }

 function deleteitem(e) {

    e.parentNode.remove()

    console.log(e)}
    
 function delteall(k){
        list.innerHTML = ""
 }
        
     function editiem(e){
         

     var  val = prompt('new value',e.parentNode.firstChild.nodeValue)
     e.parentNode.firstChild.nodeValue = val;
console.log(e.parentNode.firstChild.nodeValue)

 }