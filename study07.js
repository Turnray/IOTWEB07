// Expression Function แบบ Anonymus Function
// นิยมเขียนอยู่ 2 แบบคือ
// กำหนดให้ตัวแปร หรือ เป็นอาร์กิวเมนต์ส่งให้พารามิเตอร์
const sum = function (a, b) {
    return a + b;
}

const hello = function (fname, lname) {
    console.log(`Hello...${fname} ${lname}`);
}

let showWow = function () {
    console.log('Wow wow wow');
}

// +++++++++++++++++++++++++++++++++++++++++
// เมื่อใดก็ตามตัวแปรกับฟังก์ชั่น การใช้งานตัวแปรเขียนเหมือนกัน
// การเรียกใช้ฟังก์ชั่น

console.log(sum(100, 200));

hello('John', 'Doe')

showWow()