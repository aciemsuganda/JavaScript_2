function upDate(previewPic) {
    console.log("Mouse over atau focus terpicu pada gambar:", previewPic.alt);
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
    document.getElementById('image').innerHTML = previewPic.alt;
}

function undo() {
    console.log("Mouse out atau blur terpicu");
    document.getElementById('image').style.backgroundImage = "url('')";
    document.getElementById('image').innerHTML = "Arahkan kursor ke gambar di bawah ini untuk ditampilkan di sini.";
}

function addTabindex() {
    console.log("Fungsi addTabindex dipanggil saat onload");
    const images = document.querySelectorAll('.preview');
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
        console.log("Tabindex ditambahkan ke gambar ke-" + (i + 1));
    }
}

// Event listener untuk mouse
const images = document.querySelectorAll('.preview');
images.forEach(img => {
    img.addEventListener('mouseover', function () { upDate(this); });
    img.addEventListener('mouseout', undo);
    // Event listener untuk keyboard (focus/blur)
    img.addEventListener('focus', function () { upDate(this); });
    img.addEventListener('blur', undo);
});