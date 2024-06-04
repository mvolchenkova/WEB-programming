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
    overlay.style.display = 'flex';
    body.classList.add('bodyOverflow');
    
  }
});
const signBut = document.querySelector('.signBut');
const signBut1 = document.querySelector('.signBut1');
const regDiv = document.querySelector('.regDiv');
signBut.addEventListener('click', function(){
  body.classList.remove('bodyOverflow');
    regDiv.style.marginLeft = '0';
    authorizationDiv.style.marginLeft = '-4000px';
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
  authorizationDiv.style.marginLeft = '-4000px';
});
const sigInBut = document.querySelector('.signINbox');
const authorizationDiv = document.querySelector('.authorizationDiv');
const signInBut1 = document.querySelector('.signInBut1');

sigInBut.addEventListener('click', function(){
  authorizationDiv.style.marginLeft = '0'
  regDiv.style.marginLeft = '-4000px';
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

//слайдер
let slid1 = document.getElementById("slid1");
let slid2 = document.getElementById("slid2");
let slid = document.querySelector(".kaktuses");
let countOfItems; 

function updateCountOfItems() {
  if(window.innerWidth <= 350){
    countOfItems = 5;
  }
  else if   (window.innerWidth <= 768) {
    countOfItems = 7;
  } else {
    countOfItems = 5;
  }
}
updateCountOfItems();

window.addEventListener('resize', updateCountOfItems);

let currentItem = 0;

slid2.addEventListener('click', function() {
  if (currentItem < countOfItems - 1) {
    currentItem++;
  } else {
    currentItem = 0;
  }

  slid.style.transform = `translateX(-${currentItem * 242}px)`;
});

slid1.addEventListener('click', function() {
  if (currentItem > 0) {
    currentItem--;
  } else {
    currentItem = countOfItems - 1;
  }

  slid.style.transform = `translateX(-${currentItem * 242}px)`;
}); 


//REGISTRATION
// Получаем ссылку на форму регистрации
let registrationForm = document.getElementById('formregistr');
let isAuthenticated = false;
// Получаем ссылки на все поля формы
const surnameInput = registrationForm.querySelector('input[placeholder="Surname"]');
const nameInput = registrationForm.querySelector('input[placeholder="Name"]');
const fatherNameInput = registrationForm.querySelector('input[placeholder="Father Name"]');
const mobilePhoneInput = registrationForm.querySelector('input[placeholder="Mobile phone"]');
const emailInput = registrationForm.querySelector('input[placeholder="E-mail"]');
const birthDateInput = registrationForm.querySelector('input[placeholder="Birth date"]');
const usernameInput = registrationForm.querySelector('input[placeholder="Username"]');
const passwordInput = registrationForm.querySelector('input[placeholder="Create a password"]');
const repeatPasswordInput = registrationForm.querySelector('input[placeholder="Repeat a password"]');
let agreeCheckbox = document.querySelector('.agreeCheckbox');
const registrateBut = document.querySelector('.registrateBut');
const signUPbox = document.querySelector('.signUPbox');

agreeCheckbox.addEventListener('change', function() {
  if (agreeCheckbox.checked) {
    // Checkbox отмечен
    // Ваш код, который выполняется при согласии пользователя
  } else {
    // Checkbox не отмечен
    // Ваш код, который выполняется при отказе пользователя
  }
});

// Добавляем обработчик события при отправке формы
registrationForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Отменяем отправку формы по умолчанию
  // Проверяем заполнение обязательных полей
  if (
    surnameInput.value === '' ||
    nameInput.value === '' ||
    mobilePhoneInput.value === '' ||
    emailInput.value === '' ||
    birthDateInput.value === '' ||
    passwordInput.value === '' ||
    repeatPasswordInput.value === '' ||
    !agreeCheckbox.checked
  ) {
    // Если хотя бы одно обязательное поле не заполнено или checkbox не отмечен, добавляем текстовое сообщение об ошибке
    showErrorMessage();
  }
});

// Функция для добавления текстового сообщения об ошибке
function showErrorMessage() {
  let requiredFields = [
    { input: surnameInput, placeholder: 'Surname' },
    { input: nameInput, placeholder: 'Name' },
    { input: mobilePhoneInput, placeholder: 'Mobile phone' },
    { input: emailInput, placeholder: 'E-mail' },
    { input: birthDateInput, placeholder: 'Birth date' },
    { input: usernameInput, placeholder: 'Username' },
    { input: passwordInput, placeholder: 'Create a password' },
    { input: repeatPasswordInput, placeholder: 'Repeat a password' },
  ];

  for (let field of requiredFields) {
    if (field.input.value === '') {
      if (!field.input.nextElementSibling || !field.input.nextElementSibling.classList.contains('error-message')) {
        let errorMessage = document.createElement('span');
        errorMessage.style.color = 'red';
        errorMessage.classList.add('error-message');
        errorMessage.textContent = `Please enter ${field.placeholder}`;
        field.input.insertAdjacentElement('afterend', errorMessage);
      }
    } else {
      removeErrorMessage(field.input);
    }
  }

  requiredFields.forEach(field => {
    field.input.addEventListener('input', function() {
      // Если в поле есть текст, удаляем сообщение об ошибке
      if (field.input.value !== '') {
        removeErrorMessage(field.input);
      }
    });
  });
}
function matchPasswords(passwordInput, repeatPasswordInput){
  if(passwordInput!==repeatPasswordInput)
  {
    alert('Check passwords')
  }
  else{
    return true;
  }
}
function removeErrorMessage(input) {
  let errorMessage = input.nextElementSibling;
  if (errorMessage && errorMessage.classList.contains('error-message')) {
    errorMessage.remove();
  }
}


  function validatePhone(phone)
  {
    var phoneRegex = /^\+375\d{9}$/;
    if (!phoneRegex.test(phone)) {
      invalidphone = true;
      alert('Invalid mobile phone input');
    }
    else{
      return true;
    }
  }
  let url = 'logins.json';

registrateBut.addEventListener('click', function(){

  let pass1 = document.getElementById('pass1').value;
  let pass2 = document.getElementById('pass2').value;
  let surname = document.getElementById('surname').value;
  let name = document.getElementById('name').value;
  let date = document.getElementById('date').value;
  let username = document.getElementById('username').value;
  let phone = document.getElementById('phone').value;
  let email = document.getElementById('email').value;
  const validationMessage = validatePassword(pass1); 

  if(validationMessage){
    alert(validationMessage);
  }

  // Добавляем обработчик события, чтобы проверять состояние checkbox'а
  
  if(validateEmail(email)===true&&validatePassword(pass1)===null&&
  validatePhone(phone)===true&&matchPasswords(pass1, pass2)===true&&
  agreeCheck(agreeCheckbox)===true){
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('username', username);
    localStorage.setItem('surname', surname);
    localStorage.setItem('name', name);
    localStorage.setItem('date', date);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('password', pass1);

    //запись в файл
    // Получаем данные из localStorage
let username1 = localStorage.getItem('username');
let surname1 = localStorage.getItem('surname');
let name1 = localStorage.getItem('name');
let date1 = localStorage.getItem('date');
let email1 = localStorage.getItem('email');
let phone1 = localStorage.getItem('phone');
let password1 = localStorage.getItem('password');

// Создаем объект с необходимым форматом
const loginData = {
  surname: surname1,
  name: name1,
  phone: phone1,
  email: email1,
  birthDate: date1,
  login: username1,
  password: password1
};

// Записываем данные в файл logins.json
fetch('logins.json', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(loginData)
})
.then(response => {
  console.log('Данные успешно записаны в файл logins.json');
})
.catch(error => {
  console.error('Ошибка при записи данных в файл logins.json:', error);
});
    window.location = 'landing.html';
  }
});
function agreeCheck(agreeCheckbox){
  if (!agreeCheckbox.checked) {
    alert('Read terms of user agreement');
  }
  else{
    return true;
  }
}
function validateEmail(email){
  // Проверка email
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    invalidmail = true;
    alert('Invalid E-mail input');
  }
  else
  {
    return true;
  }
};
//проверка пароля
function validatePassword(password) { 
  // Проверяем длину пароля 
  if (password.length < 8) { 
    return "Пароль должен содержать не менее 8 символов"; 
  } 
  // Проверяем наличие специальных символов 
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) { 
    return "Пароль должен содержать не менее одного специального символа"; 
  } 
  // Проверяем наличие заглавных букв 
  if (!/[A-Z]/.test(password)) { 
    return "Пароль должен содержать не менее одной заглавной буквы"; 
  } 
  // Проверяем наличие английских букв 
  if (!/[a-zA-Z]/.test(password)) { 
    return "Пароль должен содержать только английские буквы"; 
  } 
  // Если все проверки пройдены, пароль считается валидным 
  return null; 
}
// Функция для генерации имени пользователя
let genBut = document.querySelector('.genBut');
genBut.addEventListener('click', function(username) {
  username = generateUsername();
});

// Функция для генерации случайного имени пользователя
function generateUsername() { 
  const adjectives = ['Adventurous', 'Brave', 'Curious', 'Daring', 'Energetic', 'Friendly', 'Helpful', 'Imaginative', 'Kind', 'Optimistic',"Abacus","Candle","Eavesdrop","Gurgle","Icicle","Kaleidoscope","Marigold","Opaline","Quibble","Tangle","Vanguard","Xenial","Zephyr","Ambrosia","Daffodil","Frangipani","Gingko","Illusion"]; 
  const nouns = ['Sunflower', 'Raindrop', 'Firefly', 'Pebble', 'Bumblebee', 'Starfish', 'Snowflake', 'Wildflower', 'Seashell', 'Dragonfly',"Bangle","Dangle","Fascinate","Hazelnut","Jargon","Limelight","Nimble","Panacea","Ramble","Serenade","Unravel","Whimsical","Yearn","Brocade","Camellia","Effervescent","Hinterland","Juniper"]; 
 
  const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)]; 
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)]; 
 
  return `${randomAdjective}${randomNoun}`; 
} 
let count = 0 
 
const randombutton = document.querySelector('.genBut'); 
randombutton.addEventListener('click',function(){ 
   
  let account = document.getElementById('username'); 
  if(count < 5){ 
   const username = generateUsername(); 
   
    account.value = username;  
    count++; 
  } 
  else{ 
    if(!checkerror){ 
    let errorMessge = document.createElement('p'); 
    errorMessge.innerText = "You cant generate more than 5 count"; 
    errorMessge.style = "color: red; font-size: 12px" ; 
    account.insertAdjacentElement('afterend', errorMessge); 
    checkerror = true; 
    } 
  } 
});
const logOut = document.querySelector('.logOut');
const logOut1 = document.querySelector('.logOut1');
const userDiv = document.getElementById('user');
const user1Div = document.getElementById('user1');
if (JSON.parse(localStorage.getItem('isAuthenticated'))) {
  userDiv.style.display = 'flex';
  user1Div.style.display = 'flex';

  if (sigInBut) {
    sigInBut.style.display = 'none';
  }
  if (signUPbox) {
    signUPbox.style.display = 'none';
  }
  if (logOut) {
    logOut.style.display = 'flex';
  }
  if (logOut1) {
    logOut1.style.display = 'flex';
  }
  if (signInBut1) {
    signInBut1.style.display = 'none';
  }
  if (signBut1) {
    signBut1.style.display = 'none';
  }
}
// // Получаем элемент с id="user"
// const userElement = document.getElementById('user');

// // Проверяем, есть ли в localStorage значение "isAuthenticated"
// if (localStorage.getItem('isAuthenticated') === 'true') {
//   // Получаем значение "userName" из localStorage
//   const userName = localStorage.getItem('userName');

//   // Создаем новый элемент div и устанавливаем его текстовое содержимое
//   const userDiv = document.createElement('div');
//   userDiv.textContent = userName;

//   // Добавляем созданный элемент div в родительский элемент с id="user"
//   userElement.appendChild(userDiv);
// }
logOut.addEventListener('click', function(){
  localStorage.setItem('isAuthenticated', false);
  window.location = 'landing.html';
})

//АВТОРИЗАЦИЯ
const Login = document.querySelector('.loginButton')
document.addEventListener('DOMContentLoaded', function() {

  Login.addEventListener('click', function(event) {
    event.preventDefault();

    let logup = document.getElementById("Logup").value;
    let userpassword = document.getElementById("PasswordLog").value;
    let username = logup;
    let password = userpassword;
    let url = 'logins.json';
    fetch(url)
      .then(response => response.json())
      .then(result => {
        let isAuthenticated = false;
        for (let element of result) {
          if (element.login === username && element.password === password) {
            isAuthenticated = true;
            break;
          }
        }
        if (isAuthenticated) {
          location.reload();
          localStorage.setItem('isAuthenticated', 'true');
        
          localStorage.setItem('username', username);
        } else {
          alert('Ошибка входа. Пожалуйста, проверьте логин и пароль.');
        }
        
      });
  });
});


//ПЛЕЕР
const randomAudio = [
  'audio1.mp3',
  'audio2.mp3',
  'audio3.mp3',
  'audio4.mp3',
  'audio5.mp3',
  'audio6.mp3'
];

const imageContainer = document.querySelector('.image-container img');
const audioElement = document.querySelector('.audio-element');
const playPauseBtn = document.querySelector('.play-pause-btn');
const playPauseIcon = document.querySelector('.play-pause-icon');
const prev = document.querySelector('.prev-btn');
const next = document.querySelector('.next-btn');

let isPlaying = false;
let currentAudioIndex = 0;
const randomImages = [
  "free-icon1.png",
  "free-icon-2.png",
  "free-icon-3.png",
  "free-icon-4.png",
  "free-icon-5.png",
  "free-icon-6.png",
  "free-icon-7.png",
  "free-icon-8.png",
  "free-icon-9.png",
  "free-icon-0.png"
];

function updateImage() {
  const randomIndex = Math.floor(Math.random() * randomImages.length);
  imageContainer.src = `${randomImages[randomIndex]}`;
}

function updateAudio() {
  audioElement.src = randomAudio[currentAudioIndex];
  audioElement.play();
  isPlaying = true;
}

playPauseBtn.addEventListener('click', () => {
  if (isPlaying) {
    audioElement.pause();
  } else {
    audioElement.play();
  }
  isPlaying = !isPlaying;
});

prev.addEventListener('click', () => {
  currentAudioIndex = (currentAudioIndex - 1 + randomAudio.length) % randomAudio.length;
  updateAudio();
  updateImage();
});

next.addEventListener('click', () => {
  currentAudioIndex = (currentAudioIndex + 1) % randomAudio.length;
  updateAudio();
  updateImage();
});

userDiv.addEventListener('click',function(){
  window.location = 'userInfo.html';
});
user1Div.addEventListener('click',function(){
  window.location = 'userInfo.html';
});
//DARKMODE
const toggle = document.getElementById('checkbox');
if (toggle) {
  toggle.addEventListener('change', function() {
    if (toggle.checked) {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
const rectName = document.querySelectorAll('.rectName');
const rectLorem = document.querySelectorAll('.rectLorem');

const kfm = document.querySelector('.KFM');
function enableDarkMode() {
  body.style.backgroundColor = 'rgb(0,100,100)';
  logOut.style.color = 'white';
  kfm.style.color = 'white';
  rectName.forEach((element) => {
    element.style.color = 'white';
  });
  rectLorem.forEach((element) => {
    element.style.color = 'white';
  });

  localStorage.setItem('theme', 'dark');
  toggle.checked = true;
}

function disableDarkMode() {
  body.style.backgroundColor = '';
  logOut.style.color = '';
  kfm.style.color = '';
  rectName.forEach((element) => {
    element.style.color = '';
  });
  rectLorem.forEach((element) => {
    element.style.color = '';
  });
  toggle.checked = false;
  localStorage.setItem('theme', 'light');
}
let resetButton = document.querySelector('.resetButton');
resetButton.addEventListener('click', function() {
    
    localStorage.setItem('translate', 'ru');
    let lang1 = localStorage.getItem('translate');
    loadLanguage(lang1);
    const da = languageselect.querySelector('option[value="ru"]');
  if (da) {
    da.selected = true;
  }
  disableDarkMode();

  toggle.checked = false;
});
const visit = document.querySelector('.visitShop');
visit.addEventListener('click', function(){
  if(localStorage.getItem('isAuthenticated')=='true'){
    window.location = 'orderPage.html';
  }
  else {
    window.scrollTo(0, 0); 
    window.reload;
    authorizationDiv.style.marginLeft = '0';
}
})