$(document).ready(function () {
    $('#loginForm').submit(function (event) {
        event.preventDefault();
        var username = $('#username').val();
        var password = $('#password').val();
        // Assume successful login
        // TODO: Make a check against sessionStorage db
        sessionStorage.setItem('loggedInUser', username);
        window.location.href = 'bartender.html';
    });
});

function buttonClicked(type) {
    if (type === 'vip') {
        var popup = document.getElementById('popup');
        popup.style.display = 'flex';
        document.getElementById('loginForm').action = 'customer.html';
    } else if (type === 'order') {
        location.href='customer.html';
    } else if (type === 'employee') {
        var popup = document.getElementById('popup');
        popup.style.display = 'flex';
        document.getElementById('loginForm').action = 'employee.html';
    }
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}





