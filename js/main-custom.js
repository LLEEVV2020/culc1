function ChangeStep(act,next){
    let activestep = document.getElementsByClassName("step-wrapper")[act];
    let nextstep = document.getElementsByClassName("step-wrapper")[next];
    let progressbar = document.getElementsByTagName("main")[0];
    
    activestep.style.display = "none";
    nextstep.style.display = "block";
    
    next++;
    act++;
    
    progressbar.classList.remove("step"+act);
    progressbar.classList.add("step"+next);
}


function WallRadioAutoSelect(){
    var checkhouse = document.getElementsByClassName("construction__radio");
    if (checkhouse[6].checked || checkhouse[7].checked) {
        
    } else {checkhouse[5].checked=true;};
    if (checkhouse[8].checked || checkhouse[9].checked|| checkhouse[10].checked|| checkhouse[11].checked){
        checkhouse[6].checked=true;
    }
}

function ConstructionSelectVisible(){
    var selectmaterial = document.getElementsByClassName("construction__box-content")[2];
    var checkhouse = document.getElementsByClassName("construction__radio");
    if (checkhouse[6].checked){
        selectmaterial.style.display = "flex";
    } else{
        selectmaterial.style.display = "none";
        checkhouse[8].checked = false;
        checkhouse[9].checked = false;
        checkhouse[10].checked = false;
        checkhouse[11].checked = false;
    }
}

function ConstructionOptions(){
   var checkhouse = document.getElementsByClassName("construction__radio");
    
    document.getElementsByClassName("construction__box-content")[2].style.display = "flex"; 
}


var RowsCount = 1;
var btnString1 = "<button class='btn-control move'><img src='./img/all/move.png'></button>\n"; 



var RowsArray = [];
function MaterialChecked(val){
    var tbodyRef = document.getElementById('climtable').getElementsByTagName('tbody')[0];
    var InfoArray = [RowsCount+".",'<img class="js-open-modal" data-modal="2" src="./img/all/kladka.png">', " ",'<input class="aligntxt"  type="text" value="180">',"0,16","0,085",""];
    RowsCount--;
    var btnString2 = "<button class='js-open-modal btn-control edit' data-modal='3'' onclick='CreateMaterialSettings("+RowsCount+")'><img src='./img/all/settings.png'></button>\n";
    
    var btnString3 = "<button onclick='VisibleRow("+RowsCount+")' class='btn-control visible'><img src='./img/all/dontsee.png'></button>\n"; 
    RowsCount++;
    var btnString4 = "<button onclick='DeleteRow("+RowsCount+")' class='btn-control delite'><img src='./img/all/delete-blue.png'></button>"; 

    InfoArray[6]= btnString1+btnString2+btnString3+btnString4;
    var newRow = tbodyRef.insertRow(RowsCount-1);
    RowsCount++;

    var newCell;
    for(let i=0;i<7;i++){
        newCell = newRow.insertCell();
        if(i===2){
        newCell.innerHTML = val;
        InfoArray[2] = val;
        continue;
        }
        newCell.innerHTML = InfoArray[i];
        };
    InfoArray[0] = InfoArray[0].replace(".","");
    RowsArray[RowsCount-2] = InfoArray;
    
    document.querySelector('.modal.active').classList.remove('active');
    document.querySelector('.overlay').classList.remove('active');    
}

function DeleteRow(num){
    var tbodyRef = document.getElementById('climtable').getElementsByTagName('tbody')[0];
    tbodyRef.deleteRow(num-1);
    RowsCount--;
}

function VisibleRow(num){
    var tbodyRef = document.getElementById('climtable').getElementsByTagName('tbody')[0];
    tbodyRef.rows[num].classList.toggle("non");
}
function CreateMaterialSettings(num){
    modalform = document.getElementsByClassName("modal")[2];
    console.log(RowsArray);
    modalform.innerHTML = '<div class="wrapper-modal__cross js-modal-close"> <svg class="modal__cross " xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/></svg> </div><div class="modal-wpapper modal-wpapper--none_flex"><div class="climate__spollers-box "><h2 class="modal__title climate__title"><img src="img/all/setting.png" alt="">Редактирование характеристик материала</h2> <div class="wrapper-climate__spollers"><h3 class="h3">Материал: '+RowsArray[num][2]+'</h3> <table> <tr><td>Плотность p: </td> <td>'+RowsArray[num][0]+'</td> <td>кг/м³</td> </tr> <tr> <td>Удельная теплоемкость (с)</td> <td>'+RowsArray[num][0]+'</td> <td>кДж/(кг·°С)</td> </tr> <tr> <td>Коэфициент теплопроводности для условий А λ(А):</td> <td>'+RowsArray[num][0]+'</td> <td>Вт/(м·°С)</td> </tr> <tr> <td>Коэфициент теплопроводности для условий Б λ(Б):</td> <td>'+RowsArray[num][0]+'</td> <td>Вт/(м·°С)</td> </tr> <tr> <td>Коэфициент паропроницаемости μ:</td> <td>'+RowsArray[num][0]+'</td> <td>мг/(м·ч·Па)</td> </tr> <tr> <td>Предельно допустимое приращение расчетного массового отношения <br> влаги в материале ограждающей конструкции Δwcp</td> <td>'+RowsArray[num][0]+'</td> <td>%</td> </tr> </table> </div> </div> <div class="wrapper-btn"> <div class="btn js-modal-close">Отмена</div> <div class="btn btn-red js-modal-close">Выбрать</div> </div> </div>'
}
function CloseBoxes(){ return;
    
}