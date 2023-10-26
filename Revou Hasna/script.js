// script.js

// JavaScript untuk menggulir ke bagian yang dipilih dari menu
const menuLinks = document.querySelectorAll("#menu a");

menuLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault(); // Mencegah navigasi bawaan
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// script.js

// Mengakses elemen HTML dengan ID "someElement"
const element = document.getElementById("someElement");

// Mengubah warna latar belakang elemen menjadi merah
element.style.backgroundColor = "red";

// Mengubah ukuran font elemen
element.style.fontSize = "20px";

// script.js

// Mengakses elemen HTML dengan ID "someElement"
const element = document.getElementById("someElement");

// Menambahkan kelas CSS "highlight" ke elemen
element.classList.add("highlight");

// Menghapus kelas CSS "active" dari elemen
element.classList.remove("active");
