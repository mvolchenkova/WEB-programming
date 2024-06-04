window.onload = function() {
    let username1 = localStorage.getItem('username');
    let surname1 = localStorage.getItem('surname');
    let name1 = localStorage.getItem('name');
    let date1 = localStorage.getItem('date');
    let email1 = localStorage.getItem('email');
    let phone1 = localStorage.getItem('phone');
    let password1 = localStorage.getItem('password');

    // Получаем div, в который будем вставлять информацию
    const userInfoDiv = document.getElementById('userInfo');

    // Создаем и вставляем элементы с информацией пользователя
    userInfoDiv.innerHTML = `
        <p>Username: ${username1}</p>
        <p>Surname: ${surname1}</p>
        <p>Name: ${name1}</p>
        <p>Birth date: ${date1}</p>
        <p>E-mail: ${email1}</p>
        <p>Phone: ${phone1}</p>
        <p>Password: ${password1}</p>
    `;
}
const back = document.querySelector('.backBut');
back.addEventListener('click', function(){
    window.location = 'landing.html'
})