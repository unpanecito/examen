function login(user,pass){
	var usuario=user;
	var passwd=pass;

	if (usuario=="admin" && passwd=="adminUT3N"){
		alert("Bienvenido a la base de datos");

	}else{
		document.getElementById("resultado").innerHTML="Error! usuario no encontrado: " + user;
		document.getElementById("resultado").innerHTML="Contraseña no corresponde con el usuario";
	}

}

function mayormenor(edad){
	let age;
	age=parseFloat(edad);

	if (age<18){
		alert("Esta edad corresponde a un menor: "+edad);
	}else if (age>17 && age<60){
		alert("Esta edad corresponde a un mayor de edad: "+edad);
	}else if (age>59 && age<120){
		alert("Esta edad corresponde a un adulto mayor de edad: "+edad)
	}
}

function factit(numfact){
	let num1;
	var n;
	var res;
	num1=parseFloat(numfact);
	n=num1;
	res=num1;
	while (n>1){
		n--;
		res=res*n;
	}
	alert("Resultado: "+res);
}

function iva(precio){
	var iv=parseFloat(precio);
	var total;
	var ivamin;
	ivamin=iv*0.15;
	total=iv*1.15;
	ivamin=Math.ceil(ivamin);
	total=Math.ceil(total);
	alert("Tu total original es de $"+iv+" , el iva es de $"+ivamin+" , siento tu total con iva de $"+total);

}

function meses(mes){
	var month=parseFloat(mes);
	switch(month){
		case 1:
		alert("Enero")
		break

		case 2:
		alert("Febrero")
		break

		case 3:
		alert("Marzo")
		break

		case 4:
		alert("Abril")
		break

		case 5:
		alert("Mayo")
		break

		case 6:
		alert("Junio")
		break

		case 7:
		alert("Julio")
		break

		case 8:
		alert("Agosto")
		break

		case 9:
		alert("Septiembre")
		break
		case 10:
		alert("Octubre")
		break

		case 11:
		alert("Noviembre")
		break

		case 12:
		alert("Diembre")
		break
	}
}