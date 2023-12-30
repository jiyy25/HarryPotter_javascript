document.addEventListener('DOMContentLoaded', function () {
    var footer = document.getElementById('footer')
    var fdcontent = `
    <p class="text-center">© 마법사 세계 디지털 2023 <br>
        포터모어를 찾고 계시나요? Wizarding World는 Harry Potter와 Fantastic Beasts의 새로운 공식 홈입니다. 팬클럽에 가입하여 당신의 특성을 가져오세요. <br>
        Warner Bros.와 Pottermore의 파트너십인 Wizarding World Digital이 제공합니다. Wizarding World와 파트너의 최신 뉴스와 공식 제품을 전달합니다.
        <br>
        TM & © WBEI. WIZARDING WORLD 출판 및 연극 무대 권리 © JK Rowling.
    </p>
`
    footer.innerHTML = fdcontent;

})