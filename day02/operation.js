// 문자열에 있는 includes() 메소드에 조회할 값을 전달하면,
// 포함되어 있을 때 true, 없을 때에는 false이다.
console.log("ABC".includes("A"));
console.log("ABC".includes("Z"));

// 값이 없을 때 초기값을 설정한다.
// false로 취급되는 값이 ||연산자 앞에 들어오면 뒤에 작성된 초기값이 들어가게 된다.
// false로 취급되는 값 : "", 0, undefined
var page;
page = page || 1;
console.log(page);

if(""){
    console.log("참");
}else{
    console.log("거짓");
}

if(undefined){
    console.log("홍준성");
}else{
    console.log("강철이");
}

if(0){
    console.log("조승우");
}else{
    console.log("심민성");
}

// === : 값과 타입 모두 같아야 true
let data1 = "10";
let data2 = 10;

console.log(data1 == data2);
console.log(data1 === data2);


