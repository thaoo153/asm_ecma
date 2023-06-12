// const user = ["thaoptn", "hangpt", "phuongpt"];

// for (let i in user) {
//     console.log(i);
// }

// for (let item of user) {
//     console.log(item);
// }

// user.forEach((item, index) => {
//     console.log(item, index);
// })

const product = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 }
]

//map
const result = product.map((item) => {
    return `
        <div>${item.name}</div>
        <div>${item.price}</div>
    `
})
console.log(result);
// const app = document.querySelector("#app")
// app.innerHTML = result.join("");

//find
const prd1 = product.find((item) => {
    return item.id == 2
})
console.log(prd1);

//filter
const prd2 = product.filter((item) => {
    return item.id != 1
})
console.log(prd2);
