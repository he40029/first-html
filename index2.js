function send(otvet1){ 
var senddata={"q0":"","q1":"","q2":"","q3":"","q4":"","q5":"","q6":"","q7":"","q8":"","q9":""};
senddata.q0=otvet1[0];
senddata.q1=otvet1[1];
senddata.q2=otvet1[2];
senddata.q3=otvet1[3];
senddata.q4=otvet1[4];
senddata.q5=otvet1[5];
senddata.q6=otvet1[6];
senddata.q7=otvet1[7];
senddata.q8=otvet1[8];
senddata.q9=otvet1[9];

$.getJSON(
  "ajaxtest3.php",
	  senddata, 
  onAjaxSuccess
);
}
function onAjaxSuccess(obj)
{   
	var coun=0;
	var elementChildrens = document.querySelector(".number ul").children;
	//elementChildrens - коллеция детей списка
    //child - последовательно, каждый из элементов elementChildrens
  	$.each(obj,function(i,res){
		child=elementChildrens[i];
		child.innerHTML = "\b";

		if (res=="true") {
			child.style.backgroundImage = "url('images/test/OK.png')";
			coun++;
		}
		else 
			child.style.backgroundImage = "url('images/test/noOK.png')";	
		if (coun==10) {
			document.getElementById('test').innerHTML="Поздравляем!";
			document.getElementById('question').innerHTML= "Вы набрали <b>"+coun+" из 10</b>.";
			document.getElementById('next').style.display="none";
			document.getElementById('options').style.display="none";
		}
		else {
			document.getElementById('test').innerHTML="Результат!";
			document.getElementById('question').innerHTML= "Вы набрали <b>"+coun+" из 10</b>.";
			document.getElementById('question').style.fontSize="20px";
			document.getElementById('question').style.marginLeft= "80px";
			document.getElementById('options').style.display="none";
			document.getElementById('next').style.display="none";
			document.getElementById('repeat').style.display="block";
		}
	}); 
}
/*SON – это способ записи данных, который позволяет прогнать эту запись через функцию eval() и получить полноценный Javascript-объект.
 Для работы с данными в таком формате jQuery предлагает метод $.getJSON:*/