// inisialisasi element
let uang = document.getElementById('uang');
let vales = document.getElementById('vales');
let hasil = document.getElementById('hasil');
let us = document.getElementById('use');
let singapore = document.getElementById('singapore');
let ringgit = document.getElementById('ringgit');
let yen = document.getElementById('yen');
let euro = document.getElementById('euro');
let riyal = document.getElementById('riyal');
let kurs = 0;

valas.onclick() = () => {
    // validasi ketika bernilai null / empty
    if(uang.value == ''){
        alert('masukan uang terlebih dahulu !');
    } 

        switch(valas.value){
            case us.value:
                kurs = uang.value * 9915;
                hasil.innerHTML = `Rp. ${kurs}`;
                break;
            case singapore.value:
                kurs = uang.value * 13472;
                hasil.innerHTML = `Rp. ${kurs}`;
                break; 
            case ringgit.value:
                kurs = uang.value * 874;
                hasil.innerHTML = `Rp. ${kurs}`;
                break;
            case yen.value:
                kurs = uang.value * 120;
                hasil.innerHTML = `Rp. ${kurs}`;
                break;
            case euro.value:
                kurs = uang.value * 15888;
                hasil.innerHTML = `Rp. ${kurs}`;
                break;
            case riyal.value:
                kurs = uang.value * 3592;
                hasil.innerHTML = `Rp. ${kurs}`;
                break;
            }


        // case ringgit.value:
        //      let kurs = uang.value *874;
        //      hasil.innerHTML = `Rp. ${kurs}`;
        //      break;
        }