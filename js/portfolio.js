// SDK 초기화
Kakao.init("db34edd42b36e8b1c566a73f5e7a709c");
Kakao.isInitialized();
console.log(Kakao.isInitialized());

// 카카오톡 문의하기 버튼 커스텀
let kakaoBtn = document.querySelector(".kakaoBtn");
kakaoBtn.addEventListener("click", (e) => {
  e.preventDefault();
  Kakao.Channel.chat({
    channelPublicId: "_XxaAxhn",
  });
});

/***********************************************************************/

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

/***********************************************************************/
// 위로 버튼 관련 함수
const pageUpBtn = document.querySelector(".pageUpBtn");

// 초기 상태: 버튼 숨기기
pageUpBtn.style.opacity = "0";
pageUpBtn.style.visibility = "hidden";
pageUpBtn.style.transform = "translateY(50%)"; // 아래로 이동

// 스크롤 이벤트 리스너 추가
window.addEventListener("scroll", () => {
  // 현재 스크롤 위치
  const scrollY = window.scrollY;

  // 스크롤이 300px 이상일 경우
  if (scrollY > 300) {
    pageUpBtn.style.opacity = "1"; // 완전 보이기
    pageUpBtn.style.visibility = "visible"; // 보이게 설정
    pageUpBtn.style.transform = "translate(-50%, 0%)"; // 원래 위치로 이동
  } else {
    pageUpBtn.style.opacity = "0"; // 완전 숨기기
    pageUpBtn.style.visibility = "hidden"; // 숨기기 설정
    pageUpBtn.style.transform = "translate(-50%,50%)"; // 아래로 이동
  }
});

// pageUpBtn 클릭 이벤트 리스너 추가 (스크롤을 맨 위로 이동)
pageUpBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/***********서치바 관련**********/
const searchBtn = document.querySelector(".searchIcon");
const searchBtn2 = document.querySelector(".searchIcon2");
const searchBar = document.querySelector(".searchBar");
const searchBar2 = document.querySelector(".searchBar");
let isSearchBar = true;

searchBtn.addEventListener("click", () => {
  if (isSearchBar) {
    searchBar.style.opacity = "1";
    searchBar.style.visibility = "visible";
  } else {
    searchBar.style.opacity = "0";
    searchBar.style.visibility = "hidden";
  }
  isSearchBar = !isSearchBar; // 상태를 토글
});

searchBtn2.addEventListener("click", () => {
  if (isSearchBar) {
    searchBar2.style.opacity = "1";
    searchBar2.style.visibility = "visible";
  } else {
    searchBar2.style.opacity = "0";
    searchBar2.style.visibility = "hidden";
  }
  isSearchBar = !isSearchBar; // 상태를 토글
});
