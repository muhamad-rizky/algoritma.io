 // 1.mencari keliling persegi panjang
// memasukan nilai panjang,lebar
// menghitung rumus: 2*p + 2*L
// menampilkan Hasil

// memasukan nilai panjang,lebar
let panjang = 150;
let lebar = 40

// menghitung rumus
let hasil = 2 * panjang + 2 * lebar;

console.log(`keliling persegi panjang nya adalah ${hasil}`)

//  2.luas lingkaran
 
// tentukan phi dan r 
let phi = 3.14;
let r = 100

let hasil1 = phi * r
console.log(`${hasil1}`)


let luas =64;

let sisi= Math.sqrt(luas)

let hasil2 = 4* sisi;

console.log(hasil2)

// syarat umur membuat ktp
// input
let umur = 18;

// proses
if (umur >= 17){
    result = "Membuat KTP"
}else {
    result= "Belum bisa membuat KTP"
}

// output
console.log(result)

let pabp = 86;
let Mathk= 82;
let Dpk= 77;

let Rata2 = (pabp + Mathk + Dpk) /3;
if (Rata2 >= 80 && Rata2 <= 100) {
    grade ="A"

}else if( Rata2 >= 75 && Rata2 <= 80) {
    grade ="B"
}else if (Rata2 >= 65 && Rata2 <= 75) {
    grade="C"
}else if( Rata2 >= 45 && Rata2 <= 65) {
    grade="D"
}else if( Rata2 >= 0 && Rata2 <= 45) {
    grade="E"
}else{
    grade="K"
}
console.log(grade )
console.log(Rata2 )