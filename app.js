const startBtn = document.querySelectorAll("input");
const word = document.getElementById("sangmi");

/* 버튼과 작성될 곳의 html 가져옴 */

a=['','상','일','미','디','어','고','등','학','교'];
/* a의 배열 추가 첫번째 자리는 공백으로 해놓음 */
click = 0;
/* 클릭 되는 수 */
function btnClick() {
    if (click > 8) {
        click = 0;
        word.innerText = '';
        /* 만약 클릭수가 9를 넘어가면 공백으로 변경 */
    } else {
        click++;
        word.innerText += a[click];
        /* 클릭 될떄마다 클릭수 1증가 배열의 1증가한 값 더해서 출력 */
    }
};

startBtn[0].addEventListener("click", btnClick);
/* 버튼 이벤트를 확인 */