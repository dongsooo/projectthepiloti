const swiper = new Swiper(".swiper-container", {
  loop: true, // 반복 여부
  slidesPerView: 1, // 한 번에 보여줄 슬라이드 개수
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// 카카오톡 문의하기
// SDK 초기화
Kakao.init("db34edd42b36e8b1c566a73f5e7a709c");
Kakao.isInitialized();
console.log(Kakao.isInitialized());

let kakaoBtn = document.querySelector(".kakaoBtn");

kakaoBtn.addEventListener("click", (e) => {
  e.preventDefault();
  Kakao.Channel.chat({
    channelPublicId: "_XxaAxhn", // 카카오톡 채널 홈 URL에 명시된 id로 설정합니다.
  });
});

// 사진 더보기 버튼 관련
// const moreViewBtn = document.querySelector(".moreViewBtn");
// const hiddenImages = document.querySelectorAll(".deImgBox:not(.show)");

// moreViewBtn.addEventListener("click", () => {
//   hiddenImages.forEach((imgBox) => {
//     imgBox.classList.add("show");
//   });
//   hiddenImages.forEach((imgBox) => (imgBox.style.display = "block"));
//   moreViewBtn.style.display = "none";
// });

// 맨위로 가기 버튼
document.querySelector(".goToUpBtn").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // 부드러운 스크롤
  });
});

// 모바일 메뉴바 관련
let mobileMenuBtn = document.querySelector(".mobileMenuBtn");
let mobileMenuBar = document.querySelector(".mobileMenuBar");
let mobileMenuCancleBtn = document.querySelector(".mobileMenuCancleBtn");
let wrap = document.querySelector(".articleWrap");

mobileMenuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  mobileMenuBar.style.right = "0";
  mobileMenuCancleBtn.style.display = "block";
});

mobileMenuCancleBtn.addEventListener("click", () => {
  mobileMenuBar.style.right = "-180px"; // 필요한 만큼 이동
  mobileMenuCancleBtn.style.display = "none";
});

mobileMenuBar.addEventListener("click", (e) => {
  e.stopPropagation();
});

// 모바일 서브 메뉴 관련
const mobileSubMenuBtn = document.querySelector(".mobileSubMenuBtn");
const mobileSubMenu = document.querySelector(".mobileSubMenu");
let isMobileSubMenu = true;

mobileSubMenuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (isMobileSubMenu) {
    mobileSubMenu.style.height = "80px";
  } else {
    mobileSubMenu.style.height = "0px";
  }
  isMobileSubMenu = !isMobileSubMenu;
});

// 하위 메뉴 링크에 stopPropagation 추가
const mobileSubMenuItems = document.querySelectorAll(".mobileSubMenu a");
mobileSubMenuItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.stopPropagation(); // 이벤트 전파 방지
    // 이 경우 기본 링크 동작이 실행되도록 e.preventDefault()는 사용하지 않습니다.
  });
});

mobileMenuCancleBtn.addEventListener("click", () => {
  mobileSubMenu.style.height = "0px";
});
