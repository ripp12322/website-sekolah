// Ambil tombol
const backToTopBtn = document.getElementById("backToTop");

// Saat user scroll 100px kebawah, tampilkan tombol
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

// Saat tombol diklik, kembali ke atas
backToTopBtn.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

// Ambil tombol
const toggleButton = document.getElementById('toggleMode');

// Saat tombol diklik
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Simpan preferensi ke localStorage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('mode', 'dark');
  } else {
    localStorage.setItem('mode', 'light');
  }
});

// Saat halaman dimuat, periksa preferensi sebelumnya
window.addEventListener('DOMContentLoaded', () => {
  const savedMode = localStorage.getItem('mode');
  if (savedMode === 'dark') {
    document.body.classList.add('dark-mode');
  }
});
