function Even(K){
    return K % 2 == 0;
}
function Odd(N){
    return N % 2 == 0;
}

var arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let minArr = arr[0];
let maxArr = arr[0];

for(var i=0, poV=0, povEv=0, neG=0, SumK=0, SumN=0, Dobut=1, minI=0, maxI=0, SumP=0, p=0; i<arr.length; i++){
    if(arr[i] > 0){
	Dobut = Dobut*arr[i] //Знайти добуток позитивних елементів.
	SumP = SumP+arr[i];  p++ //Знайти суму та кількість позитивних елементів.
	
	if(Even(arr[i]))
	{
        poV++ //Знайти кількість парних позитивних елементів.
		SumK = SumK + arr[i] //Знайти суму парних позитивних елементів.
	}else {
		povEv++ //Знайти кількість непарних позитивних елементів.
		SumN = SumN + arr[i] //Знайти суму непарних позитивних елементів.
	}
}else {
	neG++ //Визначити кількість негативних елементів.
}	
if(arr[i] <= minArr){ minArr = arr[i]; minI=i} //Знайти мінімальний елемент масиву та його порядковий номер.
if(arr[i] >= maxArr){ maxArr = arr[i]; maxI=i} //Знайти максимальний елемент масиву та його порядковий номер.
}

for( i=0; i<arr.length; i++)
	if (i !== maxI){ arr[i]=0} //Знайти найбільший серед елементів масиву, ост альні обнулити.

	


alert(poV + ' Кількість парних позитивних елементів \n' + 
povEv + ' Кількість непарних позитивних елементів \n' +
neG + ' Кількість негативних елементів \n' + 
SumK + ' Сума парних позитивних елементів \n' + 
SumN + ' Сума непарних позитивних елементів \n' + 
Dobut +' Добуток позитивних елементів \n'+
minArr + ' ' + minI+' Мінімальний елемент масиву та його порядковий номер \n'+
maxArr + ' ' + maxI+' Максимальний елемент масиву та його порядковий номер \n'+
SumP + ' ' + p +' Сума та кількість позитивних елементів\n' +
arr + ' ' +' Найбільший серед елементів масиву, остальні обнулити\n');
