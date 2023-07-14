const cvForm = document.getElementById('cv-form');

cvForm.addEventListener('submit', (e) => {
    e.preventDefault();
    handleCreateCV();
});

function handleCreateCV() {
    // Xử lý logic tạo CV ở đây
    // ...

    // Cập nhật danh sách CV đã tạo
    const cvName = document.getElementById('cv-name').value;
    const cvList = document.getElementById('cv-list');
    const cvItem = document.createElement('li');
    cvItem.innerText = cvName;
    cvList.appendChild(cvItem);

    // Hiển thị thông báo và làm sạch form
    alert('CV của bạn đã được tạo thành công!');
    document.getElementById('cv-form').reset();
}