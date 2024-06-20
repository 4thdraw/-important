const store = ["사과","파인애플","수박","체리"];
// 변수 const 선언 데이터를 저장한 변수는 추후 절대 수정하지않는다.
// 그래서 const로 선언
// 유지보수할때는 값을 편집할 뿐 변수를 삭제하거나 하면 절대 안됨


for(let x =0;  x < store.length; x++ ){
    // index로만 접근 할 수 있고 그 index는 숫자데이터임
    console.log("for문",store[x], typeof x);
}

// for in으로 하기
for(x in store){
    // index로만 접근 할 수 있고 index는 문자임 (사칙연산불가)
    console.log("for in 문",store[x], typeof x);
}

store.forEach(function(ele,idx){
    // array에 직접 접근해서 값과 index 모두 접근가능
    // 2개의 매개인자 중 앞의 것이 값이 저장되고, 뒤의 변수가 index를 저장함
    console.log("forEach문",ele, idx , typeof idx )
})


const storetest = [ 
       ["사과", 10000, 7000 ]
      ,["파인애플", 5000, "" ]
      ,["수박", 15000, ""]
      ,["체리", 13000, 9000]]

// 체리는 원가가 13000이고 할인해서 9000 판매중입니다.
// 벡틱을 써서 표현식

// 1. 하나의 패턴 확인
// console.log(`${storetest[1][0]}는 
//              원가가 ${storetest[1][1]}원이고 
//              할인해서 ${storetest[1][2]}원에 
//              판매중입니다`)

// 2. x 가 받아야 할 변수 확인
for(x in storetest){
    console.log(`${storetest[x][0]}는 
             원가가 ${storetest[x][1]}원이고 
             할인해서 ${storetest[x][2]}원에 
             판매중입니다`)
}

// 3. forEach value 타입확인 정렬임
storetest.forEach((vv, ii)=>{
    console.log(`${vv[0]}는 원가가 ${vv[1]}이고 할인해서 ${vv[2]}에 판매합니다`);
})

const stringdataapi ="서울|종로구|명륜3가|감나무집";
// string [], {} -> JSON.parse 
// string -> array 전환 split메서드
// array -> string 전환 join 메서드

let charArray = ["H", "e", "l", "l", "o"];
let word = charArray.join("");
console.log(word, typeof word);
// 출력: "Hello"

let characters = "Hello";
let charArray2 = characters.split("");
console.log(charArray, typeof charArray2 );
// 출력: ["H", "e", "l", "l", "o"]
