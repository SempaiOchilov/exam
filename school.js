


// * // ИСХОДНЫЕ ДАННЫЕ НЕ ТРОГАТЬ!*

let discount = prompt('Какая скидка?')

let totalSale = 0

let total = 0

let max = {}

let min = {}

let average = 0

let arr = [

    {

        name: 'Milk',

        price: 3.25

    },

    {

        name: 'Coffee',

        price: 1.5

    },

    {

        name: 'Ice Cream',

        price: 7.85

    },

    {

        name: 'Tomatos',

        price: 4.14

    },

    {

        name: 'Onion',

        price: 2.25

    }

]

let arr_sale = []





// * // 1. Сохранить самый дорогой товар в переменную`max`*

// * // 2. Сохранить самый дешевый товар в переменную`min`*

// * // 3. Сохранить общую цену без скидок в переменную`total`*

// * // 4. Сохранить общую цену со скидкой в переменную`totalSale`*

// * // 6. Сохранить в переменной`average` среднюю цену всех продуктов без скидок*



const setup = () => {
  

//////////////

for ( item of arr){

    total = arr.reduce((acc, item) => acc + item.price, 0);

   console.log(total); 
}


for ( item of arr){

(total * 100% )  /  discount 


   console.log(totalSale) ; 
}


}
setup()