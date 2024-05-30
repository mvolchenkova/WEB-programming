const burgJS = document.querySelector('.burgJS');
const burgerMenu = document.querySelector('.burger');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');
burgJS.addEventListener('click', function() {
  if (burgerMenu.classList.contains('slide-from-top')) {
    burgerMenu.classList.remove('slide-from-top');
    body.classList.remove('bodyOverflow');
    overlay.style.display = 'none';

  } else {
    burgerMenu.classList.add('slide-from-top');
    body.classList.add('bodyOverflow');
    overlay.style.display = 'flex';
  }
});
const signBut = document.querySelector('.signBut');
const signBut1 = document.querySelector('.signBut1');
const regDiv = document.querySelector('.regDiv');
signBut.addEventListener('click', function(){
  body.classList.remove('bodyOverflow');
    regDiv.style.marginLeft = '0';
  
});
signBut1.addEventListener('click', function(){
  burgerMenu.classList.remove('slide-from-top');
    regDiv.style.marginLeft = '0';
    body.classList.remove('bodyOverflow');
    overlay.style.display = 'none';
});
const exit3 = document.querySelector('.exit3');
exit3.addEventListener('click', function(){
  regDiv.style.marginLeft = '-4000px';
});
const exit2 = document.querySelector('.exit2');
exit2.addEventListener('click', function(){
  authorizationDiv.style.marginLeft = '-3000px';
});
const sigInBut = document.querySelector('.signINbox');
const authorizationDiv = document.querySelector('.authorizationDiv');
const signInBut1 = document.querySelector('.signInBut1');

sigInBut.addEventListener('click', function(){
  authorizationDiv.style.marginLeft = '0'
  overlay.style.display = 'none';
  body.classList.remove('bodyOverflow');
})
signInBut1.addEventListener('click', function(){
  burgerMenu.classList.remove('slide-from-top');
  authorizationDiv.style.marginLeft = '0'
  body.classList.remove('bodyOverflow');
  overlay.style.display = 'none';
})

//интернационализация
const languageselect = document.querySelector('.change-lang');
const initialLang = 'ru';
function loadLanguage(language) { 
  let url = '/inter.json'; 
  fetch(url) 
    .then(response => response.json()) 
    .then(data => { 
      // Обновление текстовых значений элементов 
      const elements = document.querySelectorAll('.data-lang'); 
   
      for (let element of elements) { 
        const key = element.getAttribute('data-lang'); 
        let translation = data[language][key]; 
        localStorage.setItem(key,translation); 
        element.innerHTML = translation; 
      } 
    }); 
} 

if (languageselect) {
  languageselect.addEventListener('change', function() {
    let select = languageselect.value;
    loadLanguage(select);

    localStorage.setItem('translate', select);
  });
}

const isEnLanguage = localStorage.getItem('translate');
if (isEnLanguage === 'en') {
  loadLanguage(isEnLanguage);
  const EnOption = languageselect.querySelector('option[value="en"]');
  if (EnOption) {
    EnOption.selected = true;
  }
} else {
  loadLanguage('ru');
  const ruOption = languageselect.querySelector('option[value="ru"]');
  if (ruOption) {
    ruOption.selected = true;
  }
}