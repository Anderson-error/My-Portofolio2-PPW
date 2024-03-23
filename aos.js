document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        // Pengaturan global:
        disable: false, // Menerima nilai 'phone', 'tablet', 'mobile', boolean, ekspresi, atau fungsi
        startEvent: 'DOMContentLoaded', // nama acara yang dipicu pada dokumen, yang harus diinisialisasi AOS
        initClassName: 'aos-init', // kelas yang diterapkan setelah inisialisasi
        animatedClassName: 'aos-animate', // kelas yang diterapkan pada animasi
        useClassNames: false, // jika benar, akan menambahkan isi `data-aos` sebagai kelas saat digulir
        disableMutationObserver: false, // menonaktifkan deteksi mutasi otomatis (lanjutan)
        debounceDelay: 50, // penundaan pada debounce yang digunakan saat mengubah ukuran jendela (lanjutan)
        throttleDelay: 99, // penundaan pada throttle yang digunakan saat menggulir halaman (lanjutan)

        // Pengaturan yang dapat ditimpa pada basis elemen per elemen, dengan atribut `data-aos-*`:
        offset: 120, // pergeseran (dalam px) dari titik pencetus asli
        delay: 100, // nilai dari 0 hingga 3000, dengan langkah 50ms
        duration: 500, // nilai dari 0 hingga 3000, dengan langkah 50ms
        easing: 'ease', // penyelesaian default untuk animasi AOS
        once: false, // apakah animasi harus terjadi hanya sekali - saat menggulir ke bawah
        mirror: false, // apakah elemen harus animasi keluar saat melewati mereka saat menggulir
        anchorPlacement: 'top-bottom', // mendefinisikan posisi mana elemen terkait dengan jendela yang harus memicu animasi
    });
});