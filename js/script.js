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

const imgData = [
  {
    src: "img/2020/LE_CAFE_SEASON/lecafeseason4.JPG",
    text: "CAFE",
    address: "광주 서구",
    info: "LE CAFE SEASON",
    link: "detailPage/leCafeSeason.html",
    className: "cafe",
  },
  {
    src: "img/2021/molito/molito_main.jpg",
    text: "STUDIO", // br 태그로 줄바꿈 추가
    address: "광주 서구",
    info: "MOLITO",
    link: "detailPage/molito.html",
    className: "studio",
  },
  {
    src: "img/2022/bagel_bazel/bagel_main.jpg",
    text: "BAKERY CAFE", // br 태그로 줄바꿈 추가
    address: "광주 동구",
    info: "Bagel Bazel",
    link: "detailPage/bagelBazel.html",
    className: "cafe",
  },
  {
    src: "img/2021/Aube/SZ_02864.jpg",
    text: "HAIR SHOP", // br 태그로 줄바꿈 추가
    address: "광주 광산구",
    info: "Aube",
    link: "detailPage/aube.html",
    className: "hairShop",
  },
];

const imageWrap = document.querySelector(".imageWrap");

imgData.forEach((data, index) => {
  const imgBox = document.createElement("div");
  imgBox.classList.add("imgBox", "section", data.className);

  // data-anchor 속성 추가
  imgBox.setAttribute("data-anchor", `section${index + 1}`);

  // a 태그 생성
  const anchor = document.createElement("a");
  anchor.href = data.link;

  // imgBoxTextBox 생성
  const imgBoxTextBox = document.createElement("div");
  imgBoxTextBox.classList.add("imgBoxTextBox");

  const p1 = document.createElement("p");
  p1.classList.add("p1Text", "english");
  p1.textContent = data.text;

  const p2 = document.createElement("p");
  p2.classList.add("p2Text");
  p2.textContent = data.address;

  const p3 = document.createElement("p");
  p3.classList.add("p3Text", "english");
  p3.textContent = data.info;

  imgBoxTextBox.appendChild(p1);
  imgBoxTextBox.appendChild(p2);
  imgBoxTextBox.appendChild(p3);

  // activeHover div 생성
  const activeHover = document.createElement("div");
  activeHover.classList.add("activeHover");

  // 이미지 생성
  const img = document.createElement("img");
  img.src = data.src;
  img.alt = "";

  // anchor에 imgBoxTextBox, activeHover, img 추가
  anchor.appendChild(activeHover);
  anchor.appendChild(imgBoxTextBox);
  anchor.appendChild(img);
  imgBox.appendChild(anchor);
  imageWrap.appendChild(imgBox);
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
    mobileSubMenu.style.height = "110px"; // 서브메뉴 열기
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
