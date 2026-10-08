// function
// 1. no prameter no return
function showhi(){
    console.log("Hi");
    console.log("555");
}

// 2. have parameter no return
function sumNumber(n1, n2 , n3){
    console.log(`${n1} + ${n2} + ${n3} = ${n1+n2+n3}`);
    console.log("555");
}

// 3. no parameter have return
function showWow(){
    console.log("เธอสบายดีไหม.....");
    return "wow wow wow"
}

// 4. have parameter have return
function showSong(songName){
    return `${songName}นายแน่มาก (ง-ง)`
}

// call function เรียกใช้
showhi()
showhi()
sumNumber(10,20,10) //ข้อมูลที่ส่งพารามิเตอร์เรียกว่า อาร์กิวเมนนต์

let result = showWow()
console.log(result);

console.log(showSong('เน่เน่'));