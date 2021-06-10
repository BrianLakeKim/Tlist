// script.js
var button = document.getElementById('button');
var input = document.getElementById('input');
var list = document.getElementById('list');
var cnt = 1;

button.addEventListener('click', clickButton);

function clickButton() {
  var tempp = document.createElement('ul');
  tempp.setAttribute('class', 'item');
  tempp.setAttribute('id', 'list');
  tempp.setAttribute('id', 'ul'+cnt);
  var tempc = document.createElement('li');
  tempc.setAttribute('class', 'list-group-item');
  tempc.innerHTML = input.value;
  tempc.innerHTML += "<button style='float: right;' class='btn btn-outline-secondary' type='button' onclick='remove("+cnt+")'>삭제</button>";
  tempc.innerHTML += "<button style='float: right;' class='btn btn-outline-secondary' type='button' onclick='modify()'>수정</button>";
  tempp.appendChild(tempc);
  list.appendChild(tempp);
  cnt++;
}

//삭제기능
function remove(cnt) {
  var ul = document.getElementById('ul'+cnt);
  list.removeChild(ul);
}

//수정기능
function modify(cnt)
{
    var value = prompt("Modify", "What is your list?");
    
    /* 수정하는 글에 어떠한 내용도 넣지않는다면 기존의 글 유지 */
    if(value)
    {
      document.getElementById(input).innerHTML = value;
        
    }
}

//검색기능

function filter(){

  var value, name, item, i;

  value = document.getElementById("value").value.toUpperCase();
  item = document.getElementsByClassName("item");

  for(i=0;i<item.length;i++){
    name = item[i].getElementsByClassName("list-group-item");
    if(name[0].innerHTML.toUpperCase().indexOf(value) > -1){
      item[i].style.display = "inline";
    }else{
      item[i].style.display = "none";
    }
  }
}
