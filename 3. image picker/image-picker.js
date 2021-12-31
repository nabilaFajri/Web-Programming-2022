const img = document.querySelector('.image');
let hasil = document.querySelector('.hasil');

const daftarImage = {
  img1: './img kopi/menu-item-1.jpg',
  img2: './img kopi/menu-item-2.jpg',
  img3: './img kopi/menu-item-3.jpg',
  img4: './img kopi/menu-item-4.jpg',
  img5: './img kopi/menu-item-5.jpg',
  img6: './img kopi/menu-item-6.jpg',
  img7: './img kopi/menu-item-7.jpg',
  img8: './img kopi/menu-item-8.jpg',
};

const { img1, img2, img3, img4, img5, img6, img7, img8 } = daftarImage;

img.addEventListener('change', () => {
  for (const i in daftarImage) {
    if (img.value == i) {
      alert(`Gambar ${daftarImage[i]}`);
      hasil.innerHTML = `<img src="${daftarImage[i]}" />`;
    }
  }
});
