document.addEventListener('DOMContentLoaded', function () {

    const btn = document.querySelectorAll('.title button');
    const accMenu = document.querySelectorAll('.accMenu .subTitle');
    const accdesc = document.querySelectorAll('.accMenu .desc');
    const spl = document.querySelectorAll('.accMenu .subTitle span')


    //중복코드 함수화 아코디언이 열릴때와 닫힐때의 +/-변화
    ChangePlus = (i, close) => {
        if (close) {
            spl[i].innerHTML = '-'
        } else {
            spl[i].innerHTML = '+'
        }

    }

    //해당 메뉴를 클릭했을 때 active클래스가 들어가면 열림
    accMenu.forEach(function (el, i) {
        el.addEventListener('click', function () {
            Allhide()
            accdesc[i].classList.add('active')
            // if (accdesc[i].classList.contains('active')) {
            //     spl[i].innerHTML = '-'
            // } else {
            //     spl[i].innerHTML = '+'
            // }
            ChangePlus(i, accdesc[i].classList.contains('active'))

        })

    })


    //전체 닫기
    function Allhide() {
        accdesc.forEach(function (v, i) {
            v.classList.remove("active")
            // if (accdesc[i].classList.contains('active')) {
            //     spl[i].innerHTML = '-'
            // } else {
            //     spl[i].innerHTML = '+'
            // }
            ChangePlus(i, accdesc[i].classList.contains('active'))
        })

    }

    //전체 열기
    function AllOpen() {
        accdesc.forEach(function (v, i) {
            v.classList.add("active")
            // if (accdesc[i].classList.contains('active')) {
            //     spl[i].innerHTML = '-'
            // } else {
            //     spl[i].innerHTML = '+'
            // }
            ChangePlus(i, accdesc[i].classList.contains('active'))
        })
    }

    //버튼을 클릭하면 아코디언이 토글기능으로 열렸다가 닫힘
    btn.forEach(function (el, i) {
        el.addEventListener('click', function () {
            if (AllAreOpen()) {
                Allhide();
                el.innerHTML = 'open'
            } else {
                AllOpen();
                el.innerHTML = 'close'
            }

        })
    })


    //active가 들어가지 않으면 false->true
    function AllAreOpen() {
        for (let i = 0; i < accdesc.length; i++) {
            if (!accdesc[i].classList.contains('active')) {
                return false;
            }
        }
        return true;
    }


})