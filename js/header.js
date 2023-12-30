document.addEventListener('DOMContentLoaded', function () {
    var header = document.getElementById('hd');
    var headerContent = ` <div class="">
        <h1 class="text-center p-2"><a href="./index.html"><img src="./img/logo.png" alt="로고"></a></h1>
        <div class="hdbg">
            <ul class="gnb d-flex align-items-center justify-content-between container mb-0">
                <li><a href="">NEWS & FEATURES</a></li>
                <li><a href="">QUIZZES & PUZZLES</a></li>
                <li><a href="">HOGWARTS SORTING</a></li>
                <li><a href="">CHRISTMAS</a></li>
                <li><a href="">SHOP</a></li>
            </ul>
        </div>
    </div>
`;
    header.innerHTML = headerContent;

})
