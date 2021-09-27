`use script`
let text =`One: 'Hi Mary.'<br> 
Two: 'Oh, hi.'<br>
One: 'How are you doing?'<br>
Two: 'I'm doing alright. How about you?'<br>
One: 'Not too bad. The weather is great isn't it?'<br>
Two: 'Yes. It's absolutely beautiful today.'<br>
One: 'I wish it was like this more frequently.'<br>
Two: 'Me too.'<br>
One: 'So where are you going now?'<br>
Two: 'I'm going to meet a friend of mine at the department store.'<br>
One: 'Going to do a little shopping?'<br>
Two: 'Yeah, I have to buy some presents for my parents.'<br>
One: 'What's the occasion?'<br>
Two: 'It's their anniversary.'<br>
One: 'That's great. Well, you better get going. You don't want to be late.'<br>
Two: 'I'll see you next time.'<br>
One: 'Sure. Bye.'`;

// первая задача:
//document.querySelector('.text').innerHTML = text.replace(/'/g ,'"');
//вторая задача:
document.querySelector('.text').innerHTML = text.replace(/\B'|'\B/g,'"');
 
document.querySelector('.form-btn').addEventListener('click',(e)=>{
    e.preventDefault();
    function checkName(){
        let regName = new RegExp(/\w/);
        let nameValue = document.querySelector('.name').value;
       let checkValue= regName.test(nameValue);
       if(checkValue){
           document.querySelector('.error-name').textContent = `Имя введено верно`
       }else{
           document.querySelector('.name').style.borderColor = 'red';
        document.querySelector('.error-name').textContent = `Ошибка! Используйте только буквенные символы `
       }
    };
    
    function checkPhone(){
        let regPhone = new RegExp(/^\+\d{1}\(\d{3}\)\d{3}-\d{4}$/);
        let phoneValue = document.querySelector('.phone').value;
       let checkValue= regPhone.test(phoneValue);
       if(checkValue){
           document.querySelector('.error-phone').textContent = `Телефон введен верно`
       }else{
        document.querySelector('.phone').style.borderColor = 'red';
        document.querySelector('.error-phone').textContent = `Ошибка! Используйте заполнение по образцу `
       }
    };
    function checkEmail(){
        let regEmail = new RegExp((/^[a-zа-я0-9._-]+@[a-z0-9-_]+\.[a-z0-9-_]{2,4}/iu));
        let emailValue = document.querySelector('.email').value;
       let checkValue= regEmail.test(emailValue);
       if(checkValue){
           document.querySelector('.error-email').textContent = `Email введен верно`
       }else{
        document.querySelector('.phone').style.borderColor = 'red';
        document.querySelector('.error-phone').textContent = `Ошибка! Используйте заполнение по образцу `
       }
    }
    checkName();
    checkPhone();
    checkEmail();
})
