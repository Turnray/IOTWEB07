// Callback Function 
// คือ การเขียน Anonymous Function/Arror Function 
// ให้เป็นอาร์กิวเมนต์ส่งให้พารามิเตอร์

function funcA(x, y, z) {
    console.log(`Hello ${x}`);
    console.log(`Hi ${y}`);
    z() // callback function
}

function funcB(data) {
    let result = 10 * 20

    console.log(`Value is ${data(result, 100)}`); // callback function
}

// ------------ call function --------------

funcA('Dog', 'cat', function () {
    console.log(`Goodbye`);
})

funcB((a, b) => {
    return a * b * 10
})