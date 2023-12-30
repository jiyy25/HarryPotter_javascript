document.addEventListener('DOMContentLoaded', function () {
    const gotop = document.querySelector('#go-top');

    //스크롤 이벤트
    window.addEventListener('scroll', function () {

        let scrollPosition = window.pageYOffset;
        console.log(scrollPosition) //스크롤 내렸을 때의 위치를 볼 수 있음

        if (scrollPosition < 1020) {
            gotop.classList.add('none')
        } else {
            gotop.classList.remove('none')

        }
    })

    //클릭 스크롤 이벤트
    gotop.addEventListener('click', function (e) {
        e.preventDefault()
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    })




})