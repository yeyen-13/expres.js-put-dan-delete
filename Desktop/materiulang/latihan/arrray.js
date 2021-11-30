// Reverse Array
// ketentuan :

// membalikkan sebuah array
// Buat fungsi yang menerima parameter data array
// kembalikan dalam bentuk array

function reverseArray(arr){
    let newArr = [];
    
    for(let i = arr.length - 1; i >= 0; i--){
        newArr.push(arr[i]);
    }
    
    return newArr;
}
console.log(reverseArray([1,4,6,7]))

// Sum Array
// Ketentuan:

// menghitung total nilai yang terdapat pada sebuah array
// Buat fungsi yang menerima parameter data array
// kembalikan dalam bentuk number
// Note: bisa pakai reducer()

function sumAray(jumlahsemua){
    let total= 0;
    for(let i= 0;i< jumlahsemua.length;i++){
        total =total+ jumlahsemua[i]
    }
    return total
}
console.log(sumAray([8,3,9,2,5]))

// Linear Search
// Ketentuan:

// Mencari data pada array
// Buat fungsi yang menerima parameter angka yg ingin dicari dan data array
// Kembalikan dalam bentuk number
// Kembalikan undefined jika tidak dikembalikan
// Contoh :

function fineData(finedata){
    for(let i = 0;i<finedata.length;i++){
       if(finedata[i] === 3){
           console.log(finedata[i])
       }
   }
   return finedata
   
   }
   console.log(fineData([8, 3, 9, 2, 5]))



// Fizz Buzz Array
// Ketentuan:

// Mencari mengubah angka fizz buzz
// Buat fungsi yang menerima parameter data array
// Kembalikan dalam bentuk boolean
// Contoh :
// for(i=0;i<100;)console.log((++i%3?'':'Fizz')+(i%5?'':'Buzz')||i)
// [8 ,3 ,9 ,2 ,5] -> return [8 ,"fizz" ,9 ,2 ,"buzz"]
function fizz(fizbus){
    for(let i=0;i<fizbus.length ;i++){
        if(fizbus[i] % 15 === 0){
          fizbus[i]="fizzbuzz"
        
        }else if(fizbus[i]%5=== 0){
            fizbus[i]="buzz"
           
        }else if(fizbus[i] %3 === 0){
          fizbus[i]='fizz'
        }
    }
    return  fizbus
    }
    console.log(fizz([8 ,3 ,9 ,2 ,5,15]))




