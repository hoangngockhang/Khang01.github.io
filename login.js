const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    handleLogin(email, password);
});

function handleLogin(email, password) {
    // Xử lý logic đăng nhập ở đây
    // ...

    // Điều hướng đến trang Thông tin người dùng
    window.location.href = 'user-info.html';
}