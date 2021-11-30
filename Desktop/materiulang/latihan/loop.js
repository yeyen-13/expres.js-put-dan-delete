// let buah=['nanas','apel']
// for(let i=0; i < buah.length; i++){
//     console.log(buah[i])
// }
// console.log(buah)
//menampilkan nilai dari yang terakhir
// dikurangi 1(-1)karena jumlah variabel buah ada 2,jika
//jika tidak di kurnagi makaakan unfinetloop
// for(let i= buah.length-1; i>=0;i--){
//     console.log(buah[i])
// }

//menjumlahkan data
// let angka=[1,2,3]
// let total=0

// for(let i= 0; i < angka.length;i++ ){
// total +=angka[i]
// console.log(total)
// }

//menjumlahkan dari index terakhir
// let jumlah=0
// for(let i= angka.length-1; i>=0; i--){
//    jumlah +=angka[i]
//     console.log(jumlah)

// }

// angka prima= faktor pembaginya adalah 1 dan bilangan itu sendiri/tidak bisa di bagi 2 dan
// dimulai dari angka 2
//memiliki 2 vaktor .
// %(modulus) =angka di bagi dengan 2 dan memiliki sisa (1)
// for (index = 2; index <= 100; index++) {
//     if (index >= 2) {
//       prima = true;
// //   console.log(prima)
//   for (angka = 2; angka < index; angka++) {
//     if (index % angka == 0) {
//       prima = false;
//     }
// console.log(prima)
//     }
//   }

//   if (prima == true) {
//     console.log(" " + index + " ");
//   }
// }

//bilangn prima ke 50 menggunakan while loop

// let primeCounter = 0;
// let fiftiethPrime;
// let i = 2;
// while (primeCounter < 50) {
//   let Prime = true;
//   for (let j = 2; j <= i; j++) {
//     if (i % j === 0 && i !== j) {
//       Prime = false;
//     }
//   }
//   if (Prime === true) {
//     primeCounter++;
// console.log( primeCounter)
//     fiftiethPrime = i;
//   }
//   i++;
// }
// console.log(fiftiethPrime);
// console.log(i);

// ex bilangan prima sampai 100

// for (let i = 2; i <= 100; i++) {
//    console.log(p)

//   let prima = true;
//   for (let angka = 2; angka <= i; angka++) {
//     if (i % angka === 0 && i !== angka) {
//       prima = false;
//     }
//   }
//   if (prima === true) {
//     console.log(i);
//   }
// }

// let primeCounter = 0;
// let fiftiethPrime;
// let i = 2;
// while (primeCounter < 50) {
//   let Prime = true;
//   for (let j = 2; j <= i; j++) {
//     if (i % j === 0 && i !== j) {
//       Prime = false;
//     }
//   }
//   if (Prime === true) {
//     primeCounter++;
//     fiftiethPrime = i;
//   }
//   i++;
// }
// console.log(fiftiethPrime);

/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
// let oddCounter = 0;
// let fiftiethOdd;
// let a = 1;
// do {
//   if (a % 2 === 1) {
//     oddCounter++;
//     fiftiethOdd = a;
//   }
//   a++;
// } while (oddCounter < 50);
// console.log(fiftiethOdd);

// for(let i = 2; i<=100; i++){
//     for(let prima= 2; prima< i; prima++){
//         if(i % prima===1){
//             prim= true
//         }else{
//             ptima= false
//         }
//         console.log(i)
//     }
// }
// let i = 2
// while(i<10){
//   console.log(i)
//   i++
// }

//mencari bilangan ganjil menggunakan do while

let i = 1;
let bilganjil;
let g = 0;
do {

    if (i % 2 == 1) {

      g++
      bilganjil=i

  }
  i++

} while (g < 3);
console.log(i);
