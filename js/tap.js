document.addEventListener("DOMContentLoaded", function () {

    //변수선언
    const Qstep = document.querySelectorAll('.Qchapter li');
    const content = document.querySelectorAll(".contentBox .imgbox");
    const highlight = document.querySelector('.highlight');


    //각탭의 인덱스와 div의 인덱스가 같을때 display block
    //style로는 d-none이 되지않아서 클래스리스트로 처리함
    function showContent(num) {
        content.forEach((el) => {
            el.classList.add('none')
        })
        content[num].classList.remove('none')
    }

    //각 챕터를 클릭하면 발생하는 이벤트
    Qstep.forEach((el, i) => {
        el.addEventListener('click', function (e) {
            e.preventDefault();
            showContent(i)
            moveHighlight(i)
        })
    })

    //클릭이동, 넓이 이벤트
    function moveHighlight(num) {
        let left = Qstep[num].offsetLeft; //클릭했을 때 각 list의 위치를 알려줌
        let width = Qstep[num].offsetWidth; //클릭했을 때 각 list의 넓이를 알려줌
        console.log(left, width)

        highlight.style.left = left + 'px'
        highlight.style.width = width + 'px'
    }
})