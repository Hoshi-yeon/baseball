// (1) 컴퓨터는 0에서 9사이의 서로 다른 숫자 3개를 무작위로 뽑는다.

const arr = [];   // 값을 저장할 array 생성

while (arr.length < 3){    // 상수 arr 값의 길이가 3보다 작은동안, 길이가 딱 3이 됐을 때 벗어나기
    const num = Math.floor(Math.random()*10);     // 상수 num에 숫자 0~9까지의 랜덤한 숫자를 저장
    if(arr.indexOf(num) === -1){     // 만약 arr의 indexOf 값이 -1 (숫자가 없을 때)이 되었을 때
        arr.push(num);   // arr에 랜덤숫자 num을 push
    }
}

// console.log(typeof num2);  // string 값으로 받음
// console.log(num2.split(''));   // string 값을 array로 변환

let result = 0;
let num2 = prompt('신나는 숫자 야구게임~~'); // 사용자가 입력하는 값;
let box = document.getElementsByClassName('box');

while (true) {
    result++;  // 시도한 값 추가
    const arr2 = num2.split('');   // 사용자가 입력한 값을 string 배열로 변환
    let ball = 0;   // 숫자 값
    let strike = 0;  // 위치 값
    for(let i = 0; i < 3; i++){   // 3번 돌거야
        if(arr[i] == arr2[i]){   // 처음 생성 된 랜덤 값의 i번째와 사용자가 입력한 값의 배열 i번째의 값이 일치하는지 확인
            strike++;           // 일치하면 strike 값을 1 추가
        } else if(arr.indexOf(Number(arr2[i])) !== -1){   // 만약 아니라면 사용자가 입력한 값의 배열을 number로 변환해주고, 그 값이 arr 배열에 있다면 ball 값을 1 추가
            ball++;
        }
    }
    // alert(ball+'B'+strike+'S');
    if(strike === 3){     // 위에서 추가한 strike 값이 3이 되었을 때
        alert(`${result}번만에 성공함ㅊㅊ`);    // 알림창으로 총 시도한 값을 표기, 
        alert('게임 종료!');  // 게임 종료 선언
        break;   // while문 빠져 나오기
    }
    num2 = prompt(`${ball}B ${strike}S`);   // 위 for문에서 시도한 수만큼 숫자 표기 및 맞출 때까지 반복
}
