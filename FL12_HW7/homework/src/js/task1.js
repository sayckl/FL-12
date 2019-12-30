// Your code goes here

let login = prompt('Enter your e-mail');
let maxlenght = 5;
let adminLogin = 'admin@gmail.com';
let adminPass = 'AdminPass';
let userLogin = 'user@gmail.com';
let userPass = 'UserPass';

if ( login === '' ) {
    alert('Canceled');
}else if ( login.length < maxlenght ) {
    alert("I don't know any emails having name length less than 5 symbols");
}else if ( login === userLogin || login === adminLogin ) {
    let password = prompt('Enter your password');
    if ( password === '' ) {
        alert('Canceled');
    }else if ( login === userLogin && password !== userPass 
    || login === adminLogin && password !== adminPass ) {
        alert('Wrong password');
    }else{
    let changePass = confirm('Do you want to change your password?');

    if ( changePass === true ) {
    let oldPassword = prompt('Enter your OLD password');
    if ( password === '' ) {
        alert('Canceled');
    }else if ( login === userLogin && oldPassword.value !== password.value 
    || login === adminLogin && oldPassword.value !== password.value ) {
        alert('Wrong password');
    } else {
        let newPassword = prompt('Enter your NEW password');
        if ( newPassword === '' ) {
            alert('Canceled');
        }else if ( newPassword.length < 'maxlenght+1' ) {
            alert('It’s too short password. Sorry.');
        }else{
            let repeatPassword = prompt('Repeat NEW password');
            if ( repeatPassword.value !== newPassword.value ) {
                alert('You wrote the wrong password.');
            }else{
                alert('You have successfully changed your password.');
            }
        }
    }
}else{
    alert('You have failed the change.');
}
}
}else {
    alert('I don’t know you');
}


