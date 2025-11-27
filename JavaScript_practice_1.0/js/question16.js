function ageCheck(){
	const inputAge = document.getElementById('name');
	const age=  inputAge.value;
	
	if(age >= 0 && age < 20){
		alert('年齢:'+age+'歳\n未成年です');
	}else if(age >= 20){
		alert('年齢:'+age+'歳\n成人です');	
	}else{
		alert('正しく入力して下さい');
	}
}