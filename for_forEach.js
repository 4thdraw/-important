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