// Latihan Object
// Exercise 1
// Buatlah sebuah object hewan yang berisikan:
let hewan = {
  nama: "Kucing",
  kaki: 4,
  warna: [" putih ", "coklat ", "abu-abu"],
  spesies: "mamalia",
  makanan: ["ikan", "daging"],
  keahliannya: function () {
    return " berburu";
  },
};
console.log(
  `Ini adalah hewan ${hewan.nama}\nMemiliki ${hewan.kaki} kaki\nSpesies ${
    hewan.spesies
  }\nKucing ini berwarna${hewan.warna}\nMakanan kesukaannya ${
    hewan.makanan
  }\nSuaranya ${hewan.keahliannya()}`
);
// console.log("Ini adalah hewan", hewan.nama + " memiliki", hewan.kaki, " kaki");

// ciri-ciri (property) :
//   nama: String
//   kaki: Number
//   warna: Array
//   spesies: String (mamalia/unggas/dll)
//   makanan: Array
// keahliannya (method) :
//   terbang / loncat / berburu / dll
// Tampilkan dengan console.log seperti ini, Contoh :

// Ini adalah hewan Kucing
// Memiliki 4 kaki
// Spesiesnya Mamalia
// Kucing ini berwarna oren, putih, item
// Makanan kesukaannya Ikan dan Ayam
// Suaranya Miaaaaw

// Exercise 2
// // Terdapat sebuah data:
//
let data = [
  {
    name: "Alpha",
    class: "Dragon",
    club: ["Bola", "Bulutangkis"],
  },
  {
    name: "Beta",
    class: "Lizard",
    club: ["Membaca", "Bulutangkis"],
  },
];

console.log(
  data[0].name +
    " ada di kelas " +
    data[0].class +
    " dia mengikuti club " +
    data[0].club
);
console.log(
  data[1].name +
    " ada di kelas " +
    data[1].class +
    " dia mengikuti club " +
    data[1].club
);

// Tampilkan dengan console.log seperti ini :

// Alpha ada di kelas Dragon, dia mengikuti club Bola, Bulutangkis
// Beta ada di kelas Lizard, dia mengikuti club Membaca, Bulutangkis

// Exercise 3
// Terdapat sebuah data:
//CRUD merupakan kependekan dari Create, Read, Update and Delete sehingga untuk mempermudah pengucapannya disingkat menjadi CRUD.

let todos = [
  { id: 3, todo: "belajar coding" },
  { id: 7, todo: "nanti tidur" },
];
console.log(todos);

// hasil:
// 3, "belajar coding"
// 7, "nanti tidur"

console.log(todos[0].id, todos[0].todo);
console.log(todos[1].id, todos[1].todo);

// hasil
// 3, "belajar coding"
console.log(todos[0].id, todos[0].todo);

// hasil
// 3, "belajar coding"
// 7, "nanti tidur"
// 8, "ngerjain tugas"
todos.push({ id: 8, todo: "ngerjain tugas" });
console.log(todos);
console.log(todos[0].id, todos[0].todo);
console.log(todos[1].id, todos[1].todo);
console.log(todos[2].id, todos[2].todo);

// hasil
// 3, "belajar coding"
// 8, "ngerjain tugas"
todos.shift(1.1);
console.log(todos);

// hasil
// 3, "belajar CRUD"
// 8, "ngerjain tugas"
todos[0].todo = "belajar CRUD";
console.log(todos);
