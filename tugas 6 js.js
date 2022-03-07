function angka1() {
  let frm = document.getElementById("formulir");
  frm.number.value = "";
}
function angka2() {
  let frm = document.getElementById("formulir");
  frm.nomor.value = "";
}

function tambah() {
  let frm = document.getElementById("formulir");
  let satu = frm.number.value;
  let dua = frm.nomor.value;

  //jika inputan salah
  if (isNaN(satu) || (satu == "" && isNaN(dua)) || dua == "") {
    alert("Harap isi data berupa angka");
  } else {
    //jika inputan benar
    let total = parseInt(satu) + parseInt(dua);
    frm.hasil.value = total;
  }
}
function kurang() {
  let frm = document.getElementById("formulir");
  let satu = frm.number.value;
  let dua = frm.nomor.value;

  //jika inputan salah
  if (isNaN(satu) || (satu == "" && isNaN(dua)) || dua == "") {
    alert("Harap isi data berupa angka");
  } else {
    //jika inputan benar
    let total = parseInt(satu) - parseInt(dua);
    frm.hasil.value = total;
  }
}
function kalian() {
  let frm = document.getElementById("formulir");
  let satu = frm.number.value;
  let dua = frm.nomor.value;

  //jika inputan salah
  if (isNaN(satu) || (satu == "" && isNaN(dua)) || dua == "") {
    alert("Harap isi data berupa angka");
  } else {
    //jika inputan benar
    let total = parseInt(satu) * parseInt(dua);
    frm.hasil.value = total;
  }
}
function bagian() {
  let frm = document.getElementById("formulir");
  let satu = frm.number.value;
  let dua = frm.nomor.value;

  //jika inputan salah
  if (isNaN(satu) || (satu == "" && isNaN(dua)) || dua == "") {
    alert("Harap isi data berupa angka");
  } else {
    //jika inputan benar
    let total = parseInt(satu) / parseInt(dua);
    frm.hasil.value = total;
  }
}
function pangkat() {
  let frm = document.getElementById("formulir");
  let satu = frm.number.value;
  let dua = frm.nomor.value;

  //jika inputan salah
  if (isNaN(satu) || (satu == "" && isNaN(dua)) || dua == "") {
    alert("Harap isi data berupa angka");
  } else {
    //jika inputan benar
    let total = parseInt(satu) ** parseInt(dua);
    frm.hasil.value = total;
  }
}

function kosongAll() {
  let frm = document.getElementById("formulir");
  frm.number.value = "";
  frm.nomor.value = "";
  frm.hasil.value = "";
}