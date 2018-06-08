document.addEventListener('DOMContentLoaded', function () {

    // Задача №1
    const btnMsg = document.getElementById('btn-msg');
    btnMsg.addEventListener('click', displayText);
    function displayText(evn) {
        evn.preventDefault();
        alert(evn.target.innerHTML);
    }
    // Задача №2
    btnMsg.addEventListener('mouseover', btnRed);
    function btnRed(evn) {
        evn.preventDefault();
        evn.target.style.backgroundColor = 'red';
    }
   
    btnMsg.addEventListener('mouseout', reverseColor);
    function reverseColor(evn) {
        evn.preventDefault();
        evn.target.style.backgroundColor = null;
    }
    // Задача №3
    const tag = document.getElementById('tag');
    const body = document.querySelector('body');
    body.onclick = function(event) {  
        let targetTag = event.target; 
        tag.innerHTML = targetTag.tagName;
      }

    // Задача №2. Формы.
    const seasonsArr = [
        {'лето' : 'одень футболку и шорты'},
        {'осень' : 'одень куртку и штаны'},
        {'зима' : 'одень шубу и теплые штаны'},
        {'весна' : 'одень ветровку и джинсы'}
    ]

    const selectList = document.createElement('select'); // create select
    selectList.id = 'selectSeasons';
    body.appendChild(selectList);

    seasonsArr.forEach(function(element){ // create option for each obj in array
        let option = document.createElement('option');
        for (let key in element){
            option.value = element[key];
            option.text = key;
        }
        selectList.appendChild(option); // add option to select
    });
    const input = document.createElement('input'); // create input
    input.type = 'text';
    input.className = 'clothes';
    body.appendChild(input);
    input.value = selectList.value;
    input.size = '28';
    input.style.borderRadius = '7px';

    selectList.addEventListener('change', selectSeason); // change value of input by select season
    function selectSeason(evn){
        input.value = evn.target.value;
    }
});
