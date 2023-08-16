const arr = [];     // 랜덤 숫자 3개를 담을 빈 배열 생성

while (arr.length < 3){     // 배열 arr의 길이가 3보다 작거나 같을 때까지
    const num = Math.floor(Math.random()*10);    // num 배열에 랜덤 0~9까지 숫자를 담고
    if(arr.indexOf(num) === -1){      // 만약 arr 배열에 랜덤 숫자 num이 없다면
        arr.push(num);        // 랜덤 숫자를 arr 배열에 추가한다.
    }
}
let result = 0;    // 정답 시도 함수생성

// console.log(arr);

function num(){
    let num2 = document.getElementById('textResult').value;      // html 코드 중 input의 value 값을 num2에 저장
    result++;      // 정답 시도 +1
    const arr2 = num2.split('');    // arr2 함수에 num2값을 배열로 변환
    let ball = 0; 
    let strike = 0;
    for(let i = 0; i < 3; i++){
        if(arr[i] == arr2[i]){   // 처음 뽑은 랜덤 숫자 arr의 i번째와 사용자가 입력한 arr2의 i번째의 숫자가 위치까지 맞을 때 
            strike++;  // strike +1
        } else if(arr.indexOf(Number(arr2[i])) !== -1){     // 사용자가 입력한 arr2의 i번째 값을 number 속성으로 변환하고, 처음 뽑은 랜덤 숫자 arr 배열에 있는지 확인해봤을 때 있다면
            ball++;   // ball +1
        }
    }
    const main1 = document.getElementsByClassName('mainBox1')[0];  
    const main2 = document.getElementsByClassName('mainBox2')[0];
    const chk = document.getElementById('reset');

    const newTag1 = document.createElement('li');
    newTag1.innerText = num2;
    main1.appendChild(newTag1);

    const newTag = document.createElement('li');
    newTag.innerText = `${ball}B ${strike}S`;
    main2.appendChild(newTag);

    if(strike === 3){
        alert(`${result}번 만에 성공함ㅊㅊ`);
        alert('게임 종료!');
        chk.setAttribute("onClick", "resetBtn()");
        document.getElementById('reset').value = '다시하기';
    }    
}

function resetBtn(){
    location.reload();
}