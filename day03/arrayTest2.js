// 1~10까지 Array객체에 담은 후 짝수만 출력
// var datas = new Array(10).fill();
// // datas.forEach(function(v, i, ar){
// //     ar[i] = i+1;
// // })
// datas = datas.map(function(v, i){return i+1}).filter(function(v){return v % 2 == 0;})
// console.log(datas);

// 한글을 숫자로
// var hangle = "공일이삼사오육칠팔구".split("");
// var input = "일공이사".split("");
// var result = parseInt(input.map(function(v){return hangle.indexOf(v)}).join(""))
// console.log(result);

// 숫자를 한글로
// var hangle = "공일이삼사오육칠팔구".split("");
// var input = "1024".split("");
// var result = input.map(function(v){return hangle[v]}).join("");
// console.log(result);

// 1~100까지 합 출력
// var datas = new Array(100).fill().map((v, i) => i + 1);
// var result = 0;
// datas.forEach(v => result += v);
// console.log(result);