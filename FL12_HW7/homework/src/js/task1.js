// Your code goes here

let login = prompt('Enter your e-mail');

if ( login === '' ) {
    alert('Canceled');
}else if ( login.length < 5 ) {
    alert("I don't know any emails having name length less than 5 symbols");
}else if ( login === 'user@gmail.com' || login === 'admin@gmail.com' ) {
    let password = prompt('Enter your password');
    if ( password === '' ) {
        alert('Canceled');
    }else if ( (login === 'user@gmail.com' && password !== 'UserPass') || (login === 'admin@gmail.com' && password !== 'AdminPass') ) {
        alert('Wrong password');
    }else{
    let changePass = confirm('Do you want to change your password?');

    if ( changePass === true ) {
    let oldPassword = prompt('Enter your OLD password');
    if ( password === '' ) {
        alert('Canceled');
    }else if ( (login === 'user@gmail.com' && oldPassword.value !== password.value ) || (login === 'admin@gmail.com' && oldPassword.value !== password.value) ) {
        alert('Wrong password');
    } else {
        let newPassword = prompt('Enter your NEW password');
        if ( newPassword === '' ) {
            alert('Canceled');
        }else if ( newPassword.length < 6 ) {
            alert("It’s too short password. Sorry.");
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
    alert("I don’t know you");
}


