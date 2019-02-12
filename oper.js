var lastName = prompt('Как у вас фомилия?');
var firstName = prompt('Как вас зовут?');
var secondName = prompt('Как вас по батьку звать?');
var age = +prompt('Ваш возраст в годах');


confirm('Ваш пол мужской?') ? female = 'Мужской' : female = 'Женский';
age > 65 ? pens = 'Да' : pens = 'Нет';


alert("Ваше ФИО: " + lastName + ' ' + firstName + ' ' + secondName
      +'\n\r'+ 'Ваш возраст в годах: ' + age
      +'\n\r'+ 'Ваш возраст в днях: ' + age*365
      +'\n\r'+ 'Через 5 лет вам будет: ' + (+age + 5)
      +'\n\r'+ 'Ваш пол: ' + female
      +'\n\r'+ 'Вы на пенсии: ' + pens);
