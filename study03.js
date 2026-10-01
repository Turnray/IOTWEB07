// Operator
// 1.Arithmetic Operators + - * / % **
console.log(10+3)
console.log(10-3)
console.log(10*3)
console.log(10/3)
console.log(10%3)
console.log(10**3)
console.log('+++++++++++++++++')
// 2.Comparison Operators == != === !== > < >= <=
// เปรียเทียบได้ทั้งตัวเลขและตัวอักษร
//ตัวเลข น้อยกว่า ตัวอักษร ตัวอักษรใหญ่กว่า น้อยกว่า ตัวอักษรเล็กกว่า
// ตัวอักษรมาก่อน น้อยกว่า ตัวอัการที่มาที่หลัง
console.log("Somvat" < "somjai")//true
console.log("sau" >= "SAU")//false
console.log('Io5T' <= 'I37')//false
console.log("5" == 5)
console.log("5" === 5)
console.log('+++++++++++++++++')
// 3.Logical Operators && || !
console.log(!true)
console.log(!false)
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)
console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)
console.log('++++++++++++++')
// 4.Increment and Decrement Operators ++ --
let a = 10, b = 100
console.log(++a)
console.log(--b)
// 5.Ternary Operator _?_:_ ให้ 10 ดาวเพราะเห็นบ่อย
// ตรวจสอบหน้าเครื่องหมาย ? หากจริงได้หลังคำถาม ? หากเท็จได้หลัง :
let score = 75
console.log(score >= 50 ? "pass" : "Not Pass")
// 6.Assignment Operators = += -= *= /= %= **=
// 7.Nullish Coalescing Operator && ให้ 3 ดาวเพราะกลัวสับสนกับเครื่องหมาย/logical &&
let x = 30
let y = null
console.log(x && "Wow")
console.log(y && "Hi...")
