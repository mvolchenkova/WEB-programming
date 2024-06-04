if(localStorage.getItem('isAuthenticated')==true){
    
}
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