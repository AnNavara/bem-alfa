
(function () {
  $('.filter__input--date').pickmeup({
    format  : 'd.m.Y',
    locale  : {
      days		: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
      daysShort	: ['Вос', 'Пон', 'Вт', 'Ср', 'Чт', 'Пят', 'Суб', 'Вос'],
      daysMin		: ['Вс', 'Пн', 'Вт', 'Ср', 'Ср', 'Пт', 'Сб', 'Вс'],
      months		: ['Январь', 'Феврать', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сеньтябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
      monthsShort	: ['Ян', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек']
    }
  });
})();
