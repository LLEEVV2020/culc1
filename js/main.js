const dataRegion = [
    // Data set #1
    {
        "index": 0,
          "region": "Дагестан",
          "city": "Махачкала",
          "winter": "+1.7",
          "summer": "+23.5"
      },
      {
        "index": 1,
          "region": "Краснодарский край",
          "city": "Краснодар",
          "winter": +6.6,
          "summer": +22.4
      },
      {
        "index": 2,
          "region": "Чечня",
          "city": "Грозный",
          "winter": -2,
          "summer": +22.7
      },
      {
        "index": 3,
          "region": "Ингушения",
          "city": "Магас",
          "winter": -4.1,
          "summer": +20.3
      },
      {
        "index": 4,
          "region": "Северная Осетия",
          "city": "Владикавказ",
          "winter": -1.4,
          "summer": +19.6
      },
      {
        "index": 5,
          "region": "Кабардино-Балкария",
          "city": "Нальчик",
          "winter": -1.4,
          "summer": +20.4
      },
      {
        "index": 6,
          "region": "Адыгея",
          "city": "Майкоп",
          "winter": +0.5,
          "summer": +21.2
      },
      {
        "index": 7,
          "region": "Ставропольский край",
          "city": "Ставрополь",
          "winter": -1.9,
          "summer": +20.9
      },
      {
        "index": 8,
          "region": "Калмыкия",
          "city": "Элиста",
          "winter": -3.5,
          "summer": +23.5
      },
      {
        "index": 9,
          "region": "Астраханская область",
          "city": "Астрахань",
          "winter": -3.1,
          "summer": +24.2
      },
      {
        "index": 10,
          "region": "Ростовская область",
          "city": "Ростов-на-Дону",
          "winter": -2.6,
          "summer": +22.3
      },
      {
        "index": 11,
          "region": "Республика Крым",
          "city": "Симферополь",
          "winter": -3,
          "summer": +21.8
      },
      {
        "index": 12,
          "region": "Калининградская область",
          "city": "Калининград",
          "winter": -1.0,
          "summer": +17.1
      },
      {
        "index": 13,
          "region": "Волгоградская область",
          "city": "Волгоград",
          "winter": -5.9,
          "summer": +22.2
      },
      {
        "index": 14,
          "region": "Воронежская область",
          "city": "Воронеж",
          "winter": -5.9,
          "summer": +19.4
      },
      {
        "index": 15,
          "region": "Белгородская область",
          "city": "Белгород",
          "winter": -5.9,
          "summer": +20.8
      },
      {
        "index": 16,
          "region": "Курская область",
          "city": "Курск",
          "winter": -5.8,
          "summer": +18.6
      },
      {
        "index": 17,
          "region": "Липецкая область",
          "city": "Липец",
          "winter": -8.2,
          "summer": +18.5
      },
      {
        "index": 18,
          "region": "Тульская область",
          "city": "Тула",
          "winter": -6.9,
          "summer": +17.7
      },
      {
        "index": 19,
          "region": "Орловская область",
          "city": "Орел",
          "winter": -6.1,
          "summer": +18.3
      },
      {
        "index": 20,
          "region": "Калужская область",
          "city": "Калуга",
          "winter": -7.7,
          "summer": +16.5
      },
      {
        "index": 21,
          "region": "Брянская область",
          "city": "Брянск",
          "winter": -5.7,
          "summer": +17.8
      },
      {
        "index": 22,
          "region": "Смоленская область",
          "city": "Смоленск",
          "winter": -5.9,
          "summer": +16.7
      },
      {
        "index": 23,
          "region": "Москва",
          "city": "Москва",
          "winter": -6.1,
          "summer": +17.7
      },
      {
        "index": 24,
          "region": "Московская область",
          "city": "Москва",
          "winter": -6.1,
          "summer": +17.7
      },
      {
        "index": 25,
          "region": "Рязанская область",
          "city": "Рязань",
          "winter": -8.6,
          "summer": +17.9
      },
      {
        "index": 26,
          "region": "Тамбовская область",
          "city": "Тамбов",
          "winter": -7.2,
          "summer": +19.2
      },
      {
        "index": 27,
          "region": "Саратовская область",
          "city": "Саратов",
          "winter": -7.4,
          "summer": +21.1
      },
      {
        "index": 28,
          "region": "Пензенская область",
          "city": "Пенза",
          "winter": -8.6,
          "summer": +18.6
      },
      {
        "index": 29,
          "region": "Мордовия",
          "city": "Саранск",
          "winter": -8.9,
          "summer": +18.1
      },
      {
        "index": 30,
          "region": "Ульяновская область",
          "city": "Ульяновск",
          "winter": -9.5,
          "summer": +18.8
      },
      {
        "index": 31,
          "region": "Самарская область",
          "city": "Самара",
          "winter": -9.4,
          "summer": +20.1
      },
      {
        "index": 32,
          "region": "Владимирская область",
          "city": "Владимир",
          "winter": -8.0,
          "summer": +17.2
      },
      {
        "index": 33,
          "region": "Ивановская область",
          "city": "Иваново",
          "winter": -9.7,
          "summer": +17.5
      },
      {
        "index": 34,
          "region": "Ярославская область",
          "city": "Ярославль",
          "winter": -9.5,
          "summer": +16.6
      },
      {
        "index": 35,
          "region": "Тверская область",
          "city": "Тверь",
          "winter": -7.0,
          "summer": +17.2
      },
      {
        "index": 36,
          "region": "Псковская область",
          "city": "Псков",
          "winter": -4.9,
          "summer": +16.9
      },
      {
        "index": 37,
          "region": "Новгородская область",
          "city": "Великий Новгород",
          "winter": -7.8,
          "summer": +16.1
      },
      {
        "index": 38,
          "region": "Ленинградская область",
          "city": "Санкт-Петербург",
          "winter": -5.0,
          "summer": +17.2
      },
      {
        "index": 39,
          "region": "Санкт-Петербург",
          "city": "Санкт-Петербург",
          "winter": -5.0,
          "summer": +17.2
      },
      {
        "index": 40,
          "region": "Карелия",
          "city": "Петрозаводск",
          "winter": -8.5,
          "summer": +15.1
      },
      {
        "index": 41,
          "region": "Мурманская область",
          "city": "Мурманск",
          "winter": -9.3,
          "summer": +11.1
      },
      {
        "index": 42,
          "region": "Архангельская область",
          "city": "Архангельск",
          "winter": -11.3,
          "summer": +14.1
      },
      {
        "index": 43,
          "region": "Вологодская область",
          "city": "Вологда",
          "winter": -9.7,
          "summer": +15.8
      },
      {
        "index": 44,
          "region": "Костромская область",
          "city": "Кострома",
          "winter": -8.6,
          "summer": +17
      },
      {
        "index": 45,
          "region": "Нижегородская область",
          "city": "Нижний Новгород",
          "winter": -8.3,
          "summer":  +17.9
      },
      {
        "index": 46,
          "region": "Чувашия",
          "city": "Чебоксары",
          "winter": -10.9,
          "summer": +17.3
      },
      {
        "index": 47,
          "region": "Марий Эл",
          "city": "Йошкар-Ола",
          "winter": -10.7,
          "summer": +17.4
      },
      {
        "index": 48,
          "region": "Татарстан",
          "city": "Казань",
          "winter": -9.7,
          "summer": +18.7 
      },
      {
        "index": 49,
          "region": "Кировская область",
          "city": "Киров",
          "winter": -10.9,
          "summer": +17
      },
      {
        "index": 50,
          "region": "Удмуртия",
          "city": "Ижевск",
          "winter": -11.6,
          "summer": +17.3
      },
      {
        "index": 51,
          "region": "Оренбургская область",
          "city": "Оренбург",
          "winter": -10.9,
          "summer": +21.1
      },
      {
        "index": 52,
          "region": "Башкортостан",
          "city": "Уфа",
          "winter":  -11.6,
          "summer": +18.3
      },
      {
        "index": 53,
          "region": "Челябинская область",
          "city": "Челябинск",
          "winter": -13.4,
          "summer": +17.6
      },
      {
        "index": 54,
          "region": "Пермский край",
          "city": "Пермь",
          "winter": -11.8,
          "summer": +16.8
      },
      {
        "index": 55,
          "region": "Коми",
          "city": "Сыктывкар",
          "winter": -12.8,
          "summer": +15.3
      },
      {
        "index": 56,
          "region": "Ненецкий автономный округ",
          "city": "Нарьян-Мар",
          "winter": -15.9,
          "summer": +10.9
      },
      {
        "index": 57,
          "region": "Свердловская область",
          "city": "Екатеринбург",
          "winter": -11.5,
          "summer": +17.4
      },
      {
        "index": 58,
          "region": "Курганская область",
          "city": "Курган",
          "winter": -14.1,
          "summer": +18.5
      },
      {
        "index": 59,
          "region": "Алтай",
          "city": "Горно-Алтайск",
          "winter": -12.4 ,
          "summer": +17.3
      },
      {
        "index": 60,
          "region": "Тюменская область",
          "city": "Тюмень",
          "winter": -13.7,
          "summer": +17.2
      },
      {
        "index": 61,
          "region": "Ханты-мансийский АО",
          "city": "Сургут",
          "winter": -18.8,
          "summer": +15.7
      },
      {
        "index": 62,
          "region": "Ямало-Ненецкий АО",
          "city": "Салехард",
          "winter": -21.6,
          "summer": +12.3
      },
      {
        "index": 63,
          "region": "Омская область",
          "city": "Омск",
          "winter": -15.0,
          "summer": +18.2
      },
      {
        "index": 64,
          "region": "Новосибирская область",
          "city": "Новосибирск",
          "winter": -14.7 ,
          "summer": +17.5
      },
      {
        "index": 65,
          "region": "Томская область",
          "city": "Томск",
          "winter": -15.6,
          "summer": +16.7
      },
      {
        "index": 66,
          "region": "Алтайский край",
          "city": "Барнаул",
          "winter": -14.0,
          "summer": +18.3
      },
      {
        "index": 67,
          "region": "Кемеровская область",
          "city": "Кемерово",
          "winter": -15.4,
          "summer": +17.2
      },
      {
        "index": 68,
          "region": "Хакасия",
          "city": "Абакан",
          "winter": -16.3,
          "summer": +18
      },
      {
        "index": 69,
          "region": "Красноярский край",
          "city": "Красноярск",
          "winter": -13.9,
          "summer": +16.8
      },
      {
        "index": 70,
          "region": "Тыва",
          "city": "Кызыл",
          "winter": -25.8,
          "summer": +18.6
      },
      {
        "index": 71,
          "region": "Иркутская область",
          "city": "Иркутск",
          "winter": -16.0,
          "summer": +16.5
      },
      {
        "index": 72,
          "region": "Бурятия",
          "city": "Улан-Удэ",
          "winter": -20.2,
          "summer": +17.9
      },
      {
        "index": 73,
          "region": "Забайкальский край",
          "city": "Чита",
          "winter": -22.1,
          "summer": +17
      },
      {
        "index": 74,
          "region": "Саха (Якутия)",
          "city": "Якутск",
          "winter": -36.7,
          "summer": +17 
      },
      {
        "index": 75,
          "region": "Амурская область",
          "city": "Благовещенск",
          "winter": -19.2,
          "summer":  +20.2
      },
      {
        "index": 76,
          "region": "Еврейская автономная область",
          "city": "Биробиджан",
          "winter": -19.2,
          "summer": +19.7
      },
      {
        "index": 77,
          "region": "Приморский край",
          "city": "Владивосток",
          "winter": -9.9,
          "summer": +17.8
      },
      {
        "index": 78,
          "region": "Сахалинская область",
          "city": "Южно-Сахалинск",
          "winter": -10.8,
          "summer": +15.3
      },
      {
        "index": 79,
          "region": "Хабаровский край",
          "city": "Хабаровск",
          "winter": -17.6,
          "summer": +19.8
      },
      {
        "index": 80,
          "region": "Магаданская область",
          "city": "Магадан",
          "winter": -15.6,
          "summer": +10.5
      },
      {
        "index": 81,
          "region": "Камчатский край",
          "city": "Петропавловск-Камчатский",
          "winter": -6.9,
          "summer": +11.1
      },
      {
        "index": 82,
          "region": "Чукотский автономный округ",
          "city": "Анадырь",
          "winter": -21.3,
          "summer": +9.3
      },
      {
        "index": 83,
          "region": "Севастополь",
          "city": "Севастополь",
          "winter": -3,
          "summer": +21.8
      },
      {
        "index": 84,
          "region": "Карачаево-Черкесия",
          "city": "Черкесск",
          "winter": -1.6,
          "summer": +21.3
      },

  ];

/** Создание бутофорной кнопки для селекта */
const $bodyBtn = document.querySelector('body');
let $div = document.createElement('div');
$div.setAttribute( 'class', 'add_select' );
$bodyBtn.prepend($div);

let storona ;
let oblastAll = document.querySelectorAll('.oblast');
for (let i = 0; i < oblastAll.length; i++) {

  Storona(i);
  tippy('#oblast' + i, {
    //triggerTarget: [...document.querySelectorAll('[data-value="' + objRegion4.region + '"]')],
    //triggerTarget: [...document.querySelectorAll('.oblast' + i)],
    content: getDa(i),
    allowHTML: true,
    placement: storona,
    trigger: 'click',
  });
}


function Storona(i) {
  storona = "top";
  if(i == 69 || i == 74 || i == 82 || 
      i == 81 || i == 80 || i == 78 ||
      i == 77 || i == 79 || i == 76 || i == 75){
        storona = "left";
  }
  if(i == 42){
    storona = "bottom";
  }

}

function getDa(index) {
  return '<b>'+dataRegion[index].region+'</b><br>Ср. t зимой <span>'+dataRegion[index].winter+'&deg;C</span><br>Ср. t летом <span>'+dataRegion[index].summer+'&deg;C</span>';
}

var arrObjects = [];
var arrObjects2 = [];
function getData(i) {
  for (let j = 0; j < oblastAll.length; j++) {
      
    oblastAll[j].setAttribute("fill","#1076C8");
  }

  //console.log(oblastAll[i].dataset.region);
  oblastAll[i].setAttribute("fill","#004A80");

  let objRegion2  = dataRegion[oblastAll[i].dataset.region];
  //console.log(objRegion.region);

  let map_region = document.querySelector('.map-region');
  let map_winter = document.querySelectorAll('.map-winter');
  let map_summer = document.querySelector('.map-summer');
  map_region.value = objRegion2.region;
  for (let j = 0; j < map_winter.length; j++) {
    map_winter[j].value = objRegion2.winter;
  }
  map_summer.value = objRegion2.summer;

  let map_winter_text = document.querySelectorAll('.map-winter-text');
  let map_summer_text = document.querySelector('.map-summer-text');
  for (let j = 0; j < map_winter_text.length; j++) {
    map_winter_text[j].innerHTML  = objRegion2.winter;
  }
  map_summer_text.innerHTML = objRegion2.summer;

  let spollers__wrapper =  document.querySelector(".spollers__wrapper");
  spollers__wrapper.style.display = "block";


}


for (let i = 0; i < oblastAll.length; i++) {
  
  //чтоб кликалось
  oblastAll[i].onclick = function() {
    getData(i);
  };

  let objRegion = dataRegion[oblastAll[i].dataset.region];
  arrObjects[i] = 
  { value:  objRegion.region, 
    label: objRegion.region 
  };
  arrObjects2[i] = 
  { value:  objRegion.city, 
    label: objRegion.city 
  };
}


// страна
var countres = new Choices(document.getElementById('countres'), { 
  allowHTML: true,
  itemSelectText: 'Выбрать',
  noResultsText: "!ОШИБКА! Введена не корректная информация"
});

// регион   
var cities = new Choices(document.getElementById('cities'), { 
  allowHTML: true,
  itemSelectText: 'Выбрать',
  noResultsText: "!ОШИБКА! Введена не корректная информация"
});

cities.setChoices(
  arrObjects,
);
// города
var cities2 = new Choices(document.getElementById('cities2'), { 
  allowHTML: true,
  itemSelectText: 'Выбрать',
  noResultsText: "!ОШИБКА! Введена не корректная информация"
});

cities2.setChoices(
  arrObjects2,
);

function getChange(i, index, city) {

  // если нажиаем на красную кнопку
  if(index === undefined ){
    index = dataRegion[i].index;
    let region = dataRegion[i].region;
    let city = dataRegion[i].city;

    for (let j = 0; j < oblastAll.length; j++) {
      let objRegion3 = dataRegion[oblastAll[j].dataset.region];
      if(objRegion3.region === region ){
        i = j;
      } 
    }

    cities2.setChoiceByValue(city);
  }
  if(city !== undefined){
    let city = dataRegion[i].city;

    cities2.setChoiceByValue(city);
    
  }

  let addSelect =  document.querySelector('.add_select');
  $bodyBtn.removeChild(addSelect);
  let $divNew = document.createElement('div');
  $divNew.setAttribute( 'class', 'add_select' );
  $bodyBtn.prepend($divNew);
  
  getData(i);

  Storona(i);
  tippy('#oblast' + index, {
    triggerTarget: [...document.querySelectorAll('.add_select')],
    trigger: 'click',
    content: getDa(index),
    allowHTML: true,
    placement: storona,
  
  });

  // dataRegio

  countres.setChoiceByValue('Россия');
  cities.setChoiceByValue(oblastAll[i].dataset.value);

  

  let add_select =  document.querySelector('.add_select');
  add_select.click();

  

}

cities.passedElement.element.addEventListener('change', function(e) {
  for (let i = 0; i < oblastAll.length; i++) {
    let objRegion3 = dataRegion[oblastAll[i].dataset.region];
    if(objRegion3.region === e.detail.value ){
      getChange(i, objRegion3.index, objRegion3.city);
    } 
  }
});

cities2.passedElement.element.addEventListener('change', function(e) {
  for (let i = 0; i < oblastAll.length; i++) {
    let objRegion3 = dataRegion[oblastAll[i].dataset.region];
    if(objRegion3.city === e.detail.value ){
      getChange(i, objRegion3.index);
    } 
  }
});


/**Выбирается регион */
window.onload = function () {
  let user_region =  document.querySelector('#user-region');
  user_region.innerText = ymaps.geolocation.region;
}

let wmodalbtn = document.querySelectorAll('.wrapper-modal .btn');
for (let i = 0; i < wmodalbtn.length; i++) {

  wmodalbtn[i].addEventListener('click', function(){
    let wrapper_modal = document.querySelector(".wrapper-modal");
    wrapper_modal.style.display = "none";
  });
}

let oblast = document.querySelectorAll('.oblast');
for (let i = 0; i < oblast.length; i++) {
  let reg =  Number(oblast[i].dataset.region);
  console.log(reg);


  oblast[i].addEventListener('click', function(){
   
    getChange(reg);
  });
}



let btn_select_region =  document.querySelector(".btn-select-region");
btn_select_region.addEventListener('click', function(){

  if(ymaps.geolocation.region === "Республика Адыгея"){
    
    getChange(6);
  }
  if(ymaps.geolocation.region === "Республика Алтай"){
    getChange(59);
  }
  if(ymaps.geolocation.region === "Республика Башкортостан"){
    console.log("52");
    getChange(52);
  }
  if(ymaps.geolocation.region === "Республика Дагестан"){
    console.log("0");
    getChange(0);
  }
  if(ymaps.geolocation.region === "Республика Северная Осетия"){
    console.log("4");
    getChange(4);
  }
  if(ymaps.geolocation.region === "Кабардино-Балкарская Республика"){
    console.log("5");
    getChange(5);
  }
  if(ymaps.geolocation.region === "Республика Калмыкия"){
    console.log("8");
    getChange(8);
  }
  if(ymaps.geolocation.region === "Карачаево-Черкесская Республика"){
    console.log("84");
    getChange(84);
  }
  if(ymaps.geolocation.region === "Республика Карелия"){
    console.log("40");
    getChange(40);
  }
  if(ymaps.geolocation.region === "Республика Коми"){
    console.log("55");
    getChange(55);
  }
  if(ymaps.geolocation.region === "Республика Марий Эл"){
    console.log("47");
    getChange(47);
  }
  if(ymaps.geolocation.region === "Республика Мордовия"){
    console.log("29");
    getChange(29);
  }
  if(ymaps.geolocation.region === "Республика Ингушетия"){
    console.log("3");
    getChange(3);
  }
  if(ymaps.geolocation.region === "Республика Татарстан"){
    console.log("48");
    getChange(48);
  }
  if(ymaps.geolocation.region === "Республика Тыва"){
    console.log("70");
    getChange(70);
  }
  if(ymaps.geolocation.region === "Удмуртская Республика"){
    console.log("50");
    getChange(50);
  }
  if(ymaps.geolocation.region === "Республика Хакасия"){
    console.log("68");
    getChange(68);
  }
  if(ymaps.geolocation.region === "Чеченская Республика"){
    console.log("2");
    getChange(2);
  }
  if(ymaps.geolocation.region === "Чувашская Республика"){
    console.log("46");
    getChange(46);
  }
  if(ymaps.geolocation.region === "Алтайский край"){
    console.log("66");
    getChange(66);
  }
  if(ymaps.geolocation.region === "Краснодарский край"){
    console.log("1");
    getChange(1);
  }
  if(ymaps.geolocation.region === "Пермский край"){
    console.log("54");
    getChange(54);
  }
  if(ymaps.geolocation.region === "Ставропольский край"){
    console.log("7");
    getChange(7);
  }
  if(ymaps.geolocation.region === "Амурская область"){
    console.log("75");
    getChange(75);
  }
  if(ymaps.geolocation.region === "Астраханская область"){
    console.log("9");
    getChange(9);
  }
  if(ymaps.geolocation.region === "Белгородская область"){
    console.log("15");
    getChange(15);
  }
  if(ymaps.geolocation.region === "Брянская область"){
    console.log("21");
    getChange(21);
  }
  if(ymaps.geolocation.region === "Владимирская область"){
    console.log("32");
    getChange(32);
  }
  if(ymaps.geolocation.region === "Волгоградская область"){
    console.log("13");
    getChange(13);
  }
  if(ymaps.geolocation.region === "Вологодская область"){
    console.log("43");
    getChange(43);
  }
  if(ymaps.geolocation.region === "Воронежская область"){
    console.log("14");
    getChange(14);
  }
  if(ymaps.geolocation.region === "Ивановская область"){
    console.log("33");
    getChange(33);
  }
  if(ymaps.geolocation.region === "Иркутская область"){
    console.log("71");
    getChange(71);
  }
  if(ymaps.geolocation.region === "Калининградская область"){
    console.log("12");
    getChange(12);
  }
  if(ymaps.geolocation.region === "Калужская область"){
    console.log("20");
    getChange(20);
  }
  if(ymaps.geolocation.region === "Кемеровская область"){
    console.log("67");
    getChange(67);
  }
  if(ymaps.geolocation.region === "Кировская область"){
    console.log("49");
    getChange(49);
  }
  if(ymaps.geolocation.region === "Костромская область"){
    console.log("44");
    getChange(44);
  }
  if(ymaps.geolocation.region === "Курганская область"){
    console.log("58");
    getChange(58);
  }
  if(ymaps.geolocation.region === "Курская область"){
    console.log("16");
    getChange(16);
  }
  if(ymaps.geolocation.region === "Ленинградская область"){
    console.log("38");
    getChange(38);
  }
  if(ymaps.geolocation.region === "Липецкая область"){
    console.log("17");
    getChange(17);
  }
  if(ymaps.geolocation.region === "Москва и Московская область"){
    //console.log("24");
    getChange(24);
  }
  if(ymaps.geolocation.region === "Нижегородская область"){
    console.log("45");
    getChange(45);
  }
  if(ymaps.geolocation.region === "Новгородская область"){
    console.log("37");
    getChange(37);
  }
  if(ymaps.geolocation.region === "Новосибирская область"){
    console.log("64");
    getChange(64);
  }
  if(ymaps.geolocation.region === "Омская область"){
    console.log("63");
    getChange(63);
  }
  if(ymaps.geolocation.region === "Оренбургская область"){
    console.log("51");
    getChange(51);
  }
  if(ymaps.geolocation.region === "Орловская область"){
    console.log("19");
    getChange(19);
  }
  if(ymaps.geolocation.region === "Пензенская область"){
    console.log("28");
    getChange(28);
  }
  if(ymaps.geolocation.region === "Псковская область"){
    console.log("36");
    getChange(36);
  }
  if(ymaps.geolocation.region === "Ростовская область"){
    console.log("10");
    getChange(10);
  }
  if(ymaps.geolocation.region === "Рязанская область"){
    console.log("25");
    getChange(25);
  }
  if(ymaps.geolocation.region === "Самарская область"){
    
    getChange(31);
  }
  if(ymaps.geolocation.region === "Саратовская область"){
    console.log("27");
    getChange(27);
  }
  if(ymaps.geolocation.region === "Сахалинская область"){
    console.log("78");
    getChange(78);
  }
  if(ymaps.geolocation.region === "Свердловская область"){
    console.log("57");
    getChange(57);
  }
  if(ymaps.geolocation.region === "Смоленская область"){
    console.log("22");
    getChange(22);
  }
  if(ymaps.geolocation.region === "Тамбовская область"){
    console.log("26");
    getChange(26);
  }
  if(ymaps.geolocation.region === "Тверская область"){
    console.log("35");
    getChange(35);
  }
  if(ymaps.geolocation.region === "Томская область"){
    console.log("65");
    getChange(65);
  }
  if(ymaps.geolocation.region === "Тульская область"){
    console.log("18");
    getChange(18);
  }
  if(ymaps.geolocation.region === "Тюменская область"){
    console.log("60");
    getChange(60);
  }
  if(ymaps.geolocation.region === "Ульяновская область"){
    console.log("30");
    getChange(30);
  }
  if(ymaps.geolocation.region === "Челябинская область"){
    console.log("53");
    getChange(53);
  }
  if(ymaps.geolocation.region === "Ярославская область"){
    console.log("34");
    getChange(34);
  }
  if(ymaps.geolocation.region === "Еврейская автономная область"){
    console.log("76");
    getChange(76);
  }
  if(ymaps.geolocation.region === "Ненецкий автономный округ"){
    console.log("56");
    getChange(56);
  }
  if(ymaps.geolocation.region === "Ямало-Ненецкий автономный округ"){
    console.log("62");
    getChange(62);
  }
  if(ymaps.geolocation.region === "Республика Крым"){
    console.log("11");
    getChange(11);
  }
  if(ymaps.geolocation.region === "Ханты-Мансийский автономный округ"){
    console.log("61");
    getChange(61);
  }
  if(ymaps.geolocation.region === "Мурманская область"){
    console.log("41");
    getChange(41);
  }
  if(ymaps.geolocation.region === "Архангельская область"){
    console.log("42");
    getChange(42);
  }
  if(ymaps.geolocation.region === "Республика Бурятия"){
    console.log("72");
    getChange(72);
  }
  if(ymaps.geolocation.region === "Приморский край"){
    console.log("77");
    getChange(77);
  }
  if(ymaps.geolocation.region === "Забайкальский край"){
    console.log("73");
    getChange(73);
  }
  if(ymaps.geolocation.region === "Хабаровский край"){
    console.log("79");
    getChange(79);
  }
  if(ymaps.geolocation.region === "Красноярский край"){
    console.log("69");
    getChange(69);
  }
  if(ymaps.geolocation.region === "Магаданская область"){
    console.log("80");
    getChange(80);
  }
  if(ymaps.geolocation.region === "Республика Саха (Якутия)"){
    console.log("74");
    getChange(74);
  }
  if(ymaps.geolocation.region === "Чукотский автономный округ"){
    console.log("82");
    getChange(82);
  }
  if(ymaps.geolocation.region === "Камчатский край"){
    console.log("81");
    getChange(81);
  }
  if(ymaps.geolocation.region === ""){
    console.log("нет ни чего");
  }

});



tippy('.question' , {
  trigger: 'mouseenter',
  content: "При расчёте используются климатические параметры, характерные для <br> местности, в которой расположен выбранный пункт:",
  allowHTML: true,
  placement: "bottom",
  theme: 'choices-t1', 
  maxWidth: 490
});
tippy('.map-winter-hover' , {
  trigger: 'mouseenter',
  content: "При расчёте используются климатические параметры, характерные для <br> местности, в которой расположен выбранный пункт:",
  allowHTML: true,
  placement: "bottom",
  theme: 'choices-t1', 
  maxWidth: 490
});

tippy('.map-summer-hover' , {
  trigger: 'mouseenter',
  content: "При расчёте используются климатические параметры, характерные для <br> местности, в которой расположен выбранный пункт:",
  allowHTML: true,
  placement: "bottom",
  theme: 'choices-t1', 
  maxWidth: 490
});



 /** Слайдер */     
 
 let activeHome = 0
 const houses = $('.RightSide img')

 const changeHouses = () => {
   $(houses[activeHome]).fadeOut(0)
   activeHome += 1
   activeHome %= 5
   $(houses[activeHome]).fadeIn(800)
   setTimeout(changeHouses, 5000)
 }
 setTimeout(changeHouses, 5000)
 
 /** =================== */
 /** модальные окна      */
 /** https://dev-postnov.ru/modal-on-javascript/ */
 /** =================== */
 !function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);

 document.addEventListener('DOMContentLoaded', function() {
 
    /* Записываем в переменные массив элементов-кнопок и подложку.
       Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
    var modalButtons = document.querySelectorAll('.js-open-modal'),
        overlay      = document.querySelector('.js-overlay-modal'),
        closeButtons = document.querySelectorAll('.js-modal-close');
 
    /* Перебираем массив кнопок */
    modalButtons.forEach(function(item){
 
       /* Назначаем каждой кнопке обработчик клика */
       item.addEventListener('click', function(e) {
 
          /* Предотвращаем стандартное действие элемента. Так как кнопку разные
             люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
             Нужно подстраховаться. */
          e.preventDefault();
 
          /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
             и будем искать модальное окно с таким же атрибутом. */
          var modalId = this.getAttribute('data-modal'),
              modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
 
 
          /* После того как нашли нужное модальное окно, добавим классы
             подложке и окну чтобы показать их. */
          modalElem.classList.add('active');
          overlay.classList.add('active');
       }); // end click
 
    }); // end foreach
 
 
    closeButtons.forEach(function(item){
 
       item.addEventListener('click', function(e) {
          var parentModal = this.closest('.modal');
 
          parentModal.classList.remove('active');
          overlay.classList.remove('active');
       });
 
    }); // end foreach
 
 
     document.body.addEventListener('keyup', function (e) {
         var key = e.keyCode;
 
         if (key == 27) {
 
             document.querySelector('.modal.active').classList.remove('active');
             document.querySelector('.overlay').classList.remove('active');
         };
     }, false);
 
 
     overlay.addEventListener('click', function() {
         document.querySelector('.modal.active').classList.remove('active');
         this.classList.remove('active');
     });
 
 
 
 
 }); // end ready


// селект 
var outside = new Choices(document.getElementById('outside'), { 
  allowHTML: true,
  itemSelectText: 'Выбрать',
  noResultsText: "!ОШИБКА! Введена не корректная информация",
  searchEnabled: false,
  searchChoices: false
});


/***
 * Вкладки таба
 */
class ItcTabs {
  constructor(target, config) {
    const defaultConfig = {};
    this._config = Object.assign(defaultConfig, config);
    this._elTabs = typeof target === 'string' ? document.querySelector(target) : target;
    this._elButtons = this._elTabs.querySelectorAll('.tabs__btn');
    this._elPanes = this._elTabs.querySelectorAll('.tabs__pane');
    this._eventShow = new Event('tab.itc.change');
    this._init();
    this._events();
  }
  _init() {
    this._elTabs.setAttribute('role', 'tablist');
    this._elButtons.forEach((el, index) => {
      el.dataset.index = index;
      el.setAttribute('role', 'tab');
      this._elPanes[index].setAttribute('role', 'tabpanel');
    });
  }
  show(elLinkTarget) {
    const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
    const elLinkActive = this._elTabs.querySelector('.tabs__btn_active');
    const elPaneShow = this._elTabs.querySelector('.tabs__pane_show');
    if (elLinkTarget === elLinkActive) {
      return;
    }
    elLinkActive ? elLinkActive.classList.remove('tabs__btn_active') : null;
    elPaneShow ? elPaneShow.classList.remove('tabs__pane_show') : null;
    elLinkTarget.classList.add('tabs__btn_active');
    elPaneTarget.classList.add('tabs__pane_show');
    this._elTabs.dispatchEvent(this._eventShow);
    elLinkTarget.focus();
  }
  showByIndex(index) {
    const elLinkTarget = this._elButtons[index];
    elLinkTarget ? this.show(elLinkTarget) : null;
  };
  _events() {
    this._elTabs.addEventListener('click', (e) => {
      const target = e.target.closest('.tabs__btn');
      if (target) {
        e.preventDefault();
        this.show(target);
      }
    });
  }
}

// инициализация .tabs как табов
new ItcTabs('.tabs');
// Конец вклади

let btn_step1 = document.querySelector('.btn-step1');
btn_step1.addEventListener('click', function() {

  let select2 = document.querySelector('#cities + .choices__list--single .choices__item--selectable');
  console.log(select2);
  //let value_step1 = btn_step1.getAttribute('value');
  console.log(select2.dataset.value);

  if(select2.dataset.value === ""){
    console.log("111111111");

  } else {
    ChangeStep(0,1);
  }
  

  
  



  //choices__list--single
  
  //

});



 
   //console.log(dataRegion[oblastAll[i].dataset.region]);
    //console.log(dataRegion[oblastAll[i].dataset.region]);
    //console.log(objRegion2.region);
    //console.log(city);
    //console.log(map_winter);
    //console.log(map_summer);