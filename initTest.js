function initTest(questions,number1,number2,number3){
	document.getElementById('question').innerHTML=questions;

	document.getElementById('option1').innerHTML=number1;
	document.getElementById('option2').innerHTML=number2;
	document.getElementById('option3').innerHTML=number3;
		
	if (!number1){
		document.getElementById('ans-radio1').style.margin ="0 13% 0 13%";
		document.getElementById('ans-radio2').style.margin ="0 13% 0 13%";
		document.getElementById('ans-radio3').style.margin ="0 13% 0 13%";
	}
	document.getElementById('test').innerHTML="Тестирование по курсу";
	document.getElementById('question').style.fontSize="";
	document.getElementById('question').style.marginLeft= "";
	document.getElementById('options').style.display="block";
	document.getElementById('next').style.display="block";
	document.getElementById('repeat').style.display="none";
}