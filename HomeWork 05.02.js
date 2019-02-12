
var lName = prompt('Как у вас фомилия?');
if (lName != '' && lName != null) {
    var lastName = lName;
} else {
    alert('Не понятное значение')
}

var fName = prompt('Как вас зовут?');
if (fName != '' && fName != null) {
    var firstName = fName;
} else {
    alert('Не понятное значение');
}


var sName = prompt('Как вас по батьку звать?');
if (sName != '' && sName != null) {
    var secondName = sName;
} else {
    alert('Не понятное значение')
}


var old = +prompt('Ваш возраст в годах');
if (old != '' && old != null) {
    var age = old;
} else {
    alert('Не понятное значение')
}

if (confirm('Ваш пол мужской?')) {
    var female = 'Мужской';
} else {
    var female = 'Женский';
}

if (age > 65) {
    var pens = 'Да';
} else {
    var pens = 'Нет';
}

alert("Ваше ФИО: " + lastName + ' ' + firstName + ' ' + secondName
      +'\n\r'+ 'Ваш возраст в годах: ' + age
      +'\n\r'+ 'Ваш возраст в днях: ' + age*365
      +'\n\r'+ 'Через 5 лет вам будет: ' + (+age + 5)
      +'\n\r'+ 'Ваш пол: ' + female
      +'\n\r'+ 'Вы на пенсии: ' + pens);
