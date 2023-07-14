const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    handleRegister(name, email, password);
});

function handleRegister(name, email, password) {
    // Xử lý logic đăng ký tài khoản ở đây
    // ...

    // Điều hướng đến trang Thông tin người dùng
    window.location.href = 'user-info.html';
}