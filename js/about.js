// SDK 초기화
Kakao.init("db34edd42b36e8b1c566a73f5e7a709c");
Kakao.isInitialized();
console.log(Kakao.isInitialized());

// 카카오톡 문의하기 버튼 커스텀
let kakaoBtn = document.querySelector(".kakaoBtn");
kakaoBtn.addEventListener("click", (e) => {
  e.preventDefault();
  Kakao.Channel.chat({
    channelPublicId: "_QUHxdn",
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
  mobileMenuBtn.style.display = "block";
});

mobileMenuBar.addEventListener("click", (e) => {
  e.stopPropagation();
});

// 모바일 서브 메뉴 관련
const mobileSubMenuBtn = document.querySelector(".mobileSubMenuBtn");
const mobileSubMenu = document.querySelector(".mobileSubMenu");
let isMobileSubMenu = true;

mobileSubMenuBtn.addEventListener("click", (e) => {
  e.preventDefault(); // 기본 링크 이동 방지
  // 서브메뉴 열기/닫기
  if (isMobileSubMenu) {
    mobileSubMenu.style.height = "80px"; // 서브메뉴 열기
  } else {
    mobileSubMenu.style.height = "0px"; // 서브메뉴 닫기
  }
  isMobileSubMenu = !isMobileSubMenu;
});

// 서브메뉴 안의 a 태그 클릭 시 링크 이동
mobileSubMenu.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    e.stopPropagation(); // 부모 클릭 이벤트 차단
    return; // 기본 동작인 링크 이동 허용
  }
});
