var slides = document.getElementsByClassName('home1__slide');
var currentSlideIndex = 0;

function showSlide() {
  // 현재 슬라이드의 opacity를 0으로 설정하여 투명하게 만듦
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }

  // 다음 슬라이드의 opacity를 1로 설정하여 보이도록 함
  slides[currentSlideIndex].style.opacity = 1;

  // 다음 슬라이드 인덱스 계산
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
}

// 일정 간격으로 슬라이드 전환 실행
setInterval(showSlide, 3000);

var main_logo = document.getElementById('logo');
main_logo.addEventListener('click', function () {
  window.location.href = 'joby_home.html';
});
