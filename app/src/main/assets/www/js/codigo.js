function fisicos(){
var sexo = document.getElementById("sexo").value;
var abdominal = document.getElementById("abdominal").value;
if(sexo == 1){
if (abdominal == 0 ) {var abdomenresult = "-> Fraco"};
	//abaixo

if (abdominal >= 33) {
	var abdomenresult = "-> Abaixo da Média"}else{ var abdomenresult = "-> Fraco"};
// fim abaixo
 
 // normal
if (abdominal >= 38) {var abdomenresult = "-> Normal "};
// fim normal
// acima da media 
if (abdominal >= 42) {var abdomenresult = "-> Acima da Média"};
// fim acima da media

// Excelente 
if (abdominal >= 48) {var abdomenresult = "-> Excelente !"};
// fim Excelente
// fim abdomen homem
        };
	// inicio mulher
// abaixo
if (sexo == 2) {
//-----------------------
if (abdominal == 0) {var abdomenresultt = "-> Fraco"};

if (abdominal >= 27) {var abdomenresultt = "-> Abaixo da Média"}else{var abdomenresultt = "-> Fraco"};
// fim abaixo
//   normal
if (abdominal >= 32) {var abdomenresultt = "-> Normal "};
// fim normal 

// acima da media
if (abdominal >= 36) {var abdomenresultt = "-> Acima da Média"};
// fim acima da media
//Excelente
if (abdominal >= 42) {var abdomenresultt = "-> Excelente !"};
  // fim Excelente
};

if (sexo == 1 ) {
document.getElementById("resultadoabdominal").innerHTML = abdomenresult;
 
}else {
	document.getElementById("resultadoabdominal").innerHTML =  abdomenresultt;
};
//----------------------------------- fim abdominal
var flexao = document.getElementById("flexao").value;

if(sexo == 1){
	//abaixo
if (flexao == 0 ) {var flexaoresult = "-> Fraco"};
if (flexao < 18) {var flexaoresult = "-> Abaixo da Média"};
if (flexao >= 18) {var flexaoresult = "-> Abaixo da Média"};
// fim abaixo
 
 // normal
if (flexao  >= 23) {var flexaoresult = "-> Normal "};
// fim normal

// acima da media 
if (flexao >= 29) {var flexaoresult = "-> Acima da Média"};
// fim acima da media

// Excelente 
if (flexao >= 39) {var flexaoresult = "-> Excelente !"};
// fim Excelente
// fim abdomen homem
        };
        if (sexo == 2) {
	// inicio mulher
if (flexao == 0 ) {var flexaoresultt = "-> Fraco"};

if (flexao >= 12) {var flexaoresultt = "-> Abaixo da Média"}else{var flexaoresultt = "-> Fraco"};
// fim abaixo
 
 // normal
if (flexao  >= 18) {var flexaoresultt = "-> Normal "};
// fim normal

// acima da media 
if (flexao >= 25) {var	flexaoresultt = "-> Acima da Média"};
// fim acima da media

// Excelente 
if (flexao >= 33) {flexaoresultt = "-> Excelente !"};

};

if (sexo == 1 ) {
document.getElementById("resultadoflexao").innerHTML = flexaoresult;
 // fim abdominal 
}else {
	document.getElementById("resultadoflexao").innerHTML =  flexaoresultt;
};

if (sexo == 1) {
	var elasticidade  = document.getElementById("els").value;
};

};


function imcti() {
     var peso = document.getElementById("peso").value ;
    var altura =  document.getElementById("altura").value;
    alturav2 = altura * altura;
     imc = peso/alturav2;

  if (imc <= 17.999999999999999 ) {imcrr = "Muito Abaixo do Peso!"};
  if (imc >= 17.499999999999999  ) {imcrr = "Abaixo do Peso"};
  if (imc >= 18.999999999999999 ) {imcrr = "Peso Normal"}; 
  if (imc >= 25.999999999999999  ) {imcrr = "Acima do Peso"};
  if (imc >= 30.999999999999999) {imcrr = "Obesidade"};
  if (imc >= 35.999999999999999 ) {imcrr = "Obesidade Estágio 2 (Severa)"};
  if (imc > 40.999999999999999) {imcrr = "Obesidade Estágio 3 (Mórbida)"};

  document.getElementById("imcr").innerHTML = imcrr;
  document.getElementById("imc").innerHTML = imc;
// ---------------------------------------------------- fim imc 

  var idade = document.getElementById("idadi").value;
  var sexo = document.getElementById("sexo").value;

  if (sexo == 1) {
      fcmm = 220

  } else {
 
      fcmm = 226
  };

 fcm =  fcmm - idade
document.getElementById("fcmd").innerHTML = fcm;

var ff = document.getElementById("fff").value;
fh = ff * 4;
document.getElementById("ft").innerHTML = fh;
}
// --------------------------------------------------------- fim fcm

function fisi(){
var sexo = document.getElementById("sexo").value;
var abdominal = document.getElementById("abdominal").value;
if(sexo == 1){
	//abaixo
if (abdominal == 0 ) {abdomenresult = "-> Fraco"};

if (abdominal >= 33) {abdomenresult = "-> Abaixo da Média"};
// fim abaixo
 
 // normal
if (abdominal >= 38) {abdomenresult = "-> Normal "};
// fim normal
// acima da media 
if (abdominal >= 42) {abdomenresult = "-> Acima da Média"};
// fim acima da media

// Excelente 
if (abdominal >= 48) {abdomenresult = "-> Excelente !"};
// fim Excelente
// fim abdomen homem
        }else{
	// inicio mulher
// abaixo
if (abdominal < 0) {
	abdomenresultt = "-> Fraco"
};
//-----------------------
if (abdominal >= 27) {abdomenresultt = "-> Abaixo da Média"};
// fim abaixo
//   normal
if (abdominal >= 32) {abdomenresultt = "-> Normal "};
// fim normal 

// acima da media
if (abdominal >= 36) {abdomenresultt = "-> Acima da Média"};
// fim acima da media
//Excelente
if (abdominal >= 42) {abdomenresultt = "-> Excelente !"};
  // fim Excelente
};

if (sexo == 1 ) {
document.getElementById("resultadoabdominal").innerHTML = abdomenresult;
 
}else {
	document.getElementById("resultadoabdominal").innerHTML =  abdomenresultt;
};
//----------------------------------- fim abdominal
var flexao = document.getElementById("flexao").value;

if(sexo == 1){
	//abaixo
if (flexao >= 18) {
flexaoresult = "-> Abaixo da Média"


}else{
	flexaoresult = "Fraco"
};
// fim abaixo
 
 // normal
if (flexao  >= 23) {
	flexaoresult = "-> Normal "
};
// fim normal

// acima da media 
if (flexao >= 29) {
	flexaoresult = "-> Acima da Média"
};
// fim acima da media

// Excelente 
if (flexao >= 39) {
	 flexaoresult = "-> Excelente !"
};
// fim Excelente
// fim abdomen homem
        }else{
	// inicio mulher
if (flexao >= 12) {
flexaoresultt = "-> Abaixo da Média"


};
// fim abaixo
 
 // normal
if (flexao  >= 18) {
	flexaoresultt = "-> Normal "
};
// fim normal

// acima da media 
if (flexao >= 25) {
	flexaoresultt = "-> Acima da Média"
};
// fim acima da media

// Excelente 
if (flexao >= 33) {
	 flexaoresultt = "-> Excelente !"
};

};

if (sexo == 1 ) {
document.getElementById("resultadoabdominal").innerHTML = flexaoresult;
 // fim abdominal 
}else {
	document.getElementById("resultadoflexao").innerHTML =  flexaoresultt;
};

};









function formatatempo(segs) {
min = 0;
hr = 0;
/*
if hr < 10 then hr = "0"&hr
if min < 10 then min = "0"&min
if segs < 10 then segs = "0"&segs
*/
while(segs>=60) {
if (segs >=60) {
segs = segs-60;
min = min+1;
}
}

while(min>=60) {
if (min >=60) {
min = min-60;
hr = hr+1;
}
}

if (hr < 10) {hr = "0"+hr}
if (min < 10) {min = "0"+min}
if (segs < 10) {segs = "0"+segs}
fin = hr+":"+min+":"+segs
return fin;
}

var segundos = 0; //inicio do cronometro
function conta() {
segundos++;
document.getElementById("counter").innerHTML = formatatempo(segundos);
}

function inicia(){																																							
interval = setInterval("conta();",1000);
if (segs == 15) {

	alert('acabou o tempo');
};
}

function para(){
clearInterval(interval);
}

function zera(){
clearInterval(interval);
segundos = 0;
document.getElementById("counter").innerHTML = formatatempo(segundos);

}