let countdownTime = localStorage.getItem('countdownTime') ? parseInt(localStorage.getItem('countdownTime')) : 2 * 60 * 60; // 2 giờ mặc định

// Lấy phần tử để hiển thị thời gian
const countdownDisplay = {
    hours: document.getElementById('hours').querySelector('.time-number'),
    minutes: document.getElementById('minutes').querySelector('.time-number'),
    seconds: document.getElementById('seconds').querySelector('.time-number')
};

// Hàm cập nhật đồng hồ đếm ngược
function updateCountdown() {
    let hours = Math.floor(countdownTime / 3600); // Tính số giờ
    let minutes = Math.floor((countdownTime % 3600) / 60); // Tính số phút
    let seconds = countdownTime % 60; // Tính số giây

    // Hiển thị số giờ, phút, giây
    countdownDisplay.hours.textContent = hours.toString().padStart(2, '0');
    countdownDisplay.minutes.textContent = minutes.toString().padStart(2, '0');
    countdownDisplay.seconds.textContent = seconds.toString().padStart(2, '0');

    // Giảm thời gian còn lại
    if (countdownTime > 0) {
        countdownTime--;
        localStorage.setItem('countdownTime', countdownTime); // Lưu lại thời gian còn lại vào localStorage
    } else {
        // Khi hết thời gian, thông báo
        alert('Thời gian đã hết!');
    }
}

// Cập nhật mỗi giây
setInterval(updateCountdown, 1000);

const FLASH_SALE = [
    { id: 1, brand: "PUMA", name: "Giày Sneaker Unisex Puma Ca Pro Suede Fs -Archive - Trắng", price: 100000, updatedAt: "2026-04-25T10:00:00"},
    { id: 2, brand: "ADIDAS", name: "Giày Chạy Bộ Nữ Adidas Duramo Speed - Xanh Dương", price: 100000, updatedAt: "2026-04-25T10:00:00" },
    { id: 3, brand: "MIZUNO", name: "Giày Chạy Bộ Nữ Mizuno Wave Rider 28 - Xanh Dương", price: 100000, updatedAt: "2026-04-25T10:00:00" },
    { id: 4, brand: "NIKE", name: "Giày Chạy Bộ Nam Nike Zoomx Streakfly - Trắng", price: 100000, updatedAt: "2026-04-25T10:00:00" },
    { id: 5, brand: "UNDER ARMOUR", name: "Giày Sneaker Unisex Puma Ca Pro Suede Fs -Archive - Trắng", price: 100000, updatedAt: "2026-04-25T10:00:00" },
]
function render() {
    function timeAgo(date) {
        const now = new Date();
        const diffInSeconds = Math.floor((now - new Date(date)) / 1000);
        const diffInMinutes = Math.floor(diffInSeconds / 60);
        const diffInHours = Math.floor(diffInMinutes / 60);
        const diffInDays = Math.floor(diffInHours / 24);

        if (diffInMinutes < 60) return `${diffInMinutes} phút trước`;
        if (diffInHours < 24) return `${diffInHours} giờ trước`;
        return `${diffInDays} ngày trước`;
    }
    const html = FLASH_SALE.map((products) => `
    <div class="card card-product">
        <img src="https://res.cloudinary.com/dqdf85kny/image/upload/q_auto/f_auto/v1777103790/38732710-1_pcxdg7.webp" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title card-title-sale">${products.brand}</h5>
            <p class="card-text">${products.name}</p>
        </div>
        <div class="card-footer">
            <small class="text-muted"> Cập nhật ${timeAgo(products.updatedAt)}</small>
        </div>
    </div>
    `).join()
    document.getElementById("card-group").innerHTML = html
}
render()