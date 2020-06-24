const menusamping = document.querySelector('.menusamping');
const penutup_samping = document.querySelector('.penutup_samping');
const bars = document.getElementById('bars-me');

bars.addEventListener("click", () => {
    menusamping.classList.add("aktif");
    penutup_samping.classList.add("tampil");
});

penutup_samping.addEventListener("click", () => {
    menusamping.classList.remove("aktif");
    penutup_samping.classList.remove("tampil");
});