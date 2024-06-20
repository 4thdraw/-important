const store = ["사과","파인애플","수박","체리"];
// 변수 const 선언
// 변수 존재여부 , 값 편집

for(let x =0;  x < store.length; x++ ){
    console.log("for문",store[x]);
}

// for in으로 하기
for(x in store){
    console.log("for in 문",store[x]);
}

store.forEach(function(ele,idx){
    console.log("forEach문",ele)
})