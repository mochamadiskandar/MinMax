// Nama : Mochamad Iskandar - FE4

const bt = document.getElementById("submit");
const number = document.getElementsByTagName("input");
const infoMinimum = document.getElementById("minimum");
const infoMaximum = document.getElementById("maximum");
const arr = [];

class Calculate {
  constructor(number) {
    this.number = number;
  }

  static input() {
    for (let i = 0; i < number.length; i++) {
      arr.push(number[i].value);
    }
    console.log(arr);
  }

  static minimum() {
    const getMinimum = Math.min(...arr);
    infoMinimum.innerHTML = `Nilai Minimum dari ke-3 bilangan diatas : ${getMinimum}`;
    console.log(getMinimum);
  }

  static maximum() {
    const getMaximum = Math.max(...arr);
    infoMaximum.innerHTML = `Nilai Maksimum dari ke-3 bilangan diatas : ${getMaximum}`;
    console.log(getMaximum);
  }

  static show() {
    for (let i = 0; i <= number.length; i++) {
      if (number[i].value == "") {
        bt.setAttribute("disabled", true); //disable the button
        alert("Anda belum mengisi dengan lengkap \nSilahkan ulangi kembali!");
        this.reset();
        return false;
      } else {
        bt.setAttribute("disabled", false); //enable the button
        this.input();
        this.minimum();
        this.maximum();
      }
    }
  }

  static reset() {
    for (let i = 0; i < number.length; i++) {
      number[i].value = "";
    }
    arr.length = 0;
    console.log(arr);
    bt.removeAttribute("disabled");
    infoMinimum.innerHTML = "";
    infoMaximum.innerHTML = "";
  }
}
