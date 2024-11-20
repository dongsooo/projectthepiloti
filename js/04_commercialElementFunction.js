// 자료 불러오기
import { imgData as commercialData } from "./02_commercialData.js";

const imageWraps = [
  {
    data: commercialData,
    wrap: document.querySelector(".imageWrap"),
  },
];

function createImageWrap({ data, wrap }) {
  // imgBox를 감싸는 .imgBoxWrap div 생성
  const imgBoxWrap = document.createElement("div");
  imgBoxWrap.classList.add("imgBoxWrap");
  wrap.appendChild(imgBoxWrap);

  // 모든 이미지를 표시
  function showAllImages() {
    data.forEach((item) => {
      const imgBox = document.createElement("div");
      imgBox.classList.add("imgBox");

      // 커스텀 클래스 사용
      imgBox.classList.add(item.customClass);

      const imgContentsBox = document.createElement("div");
      imgContentsBox.classList.add("imgContentsBox");

      const p1 = document.createElement("p");
      p1.textContent = item.text;

      const p2 = document.createElement("p");
      p2.textContent = item.info;
      p2.classList.add("english"); // .english 클래스 추가

      const anchor = document.createElement("a");
      anchor.href = item.link;

      const img = document.createElement("img");
      img.src = item.src;
      img.alt = "";

      imgBoxWrap.appendChild(imgBox);
      imgBox.appendChild(imgContentsBox);
      imgContentsBox.appendChild(anchor);
      anchor.appendChild(p1);
      anchor.appendChild(p2);
      anchor.appendChild(img);
    });
  }

  // 모든 이미지 표시
  showAllImages();
}

// 각 이미지 랩을 생성
imageWraps.forEach(createImageWrap);

// 페이지 로드 시 스크롤 위치 복원
window.addEventListener("load", () => {
  const scrollPosition = localStorage.getItem("scrollPosition");
  if (scrollPosition) {
    window.scrollTo(0, parseInt(scrollPosition, 10));
  }
});

// 페이지를 떠날 때 현재 스크롤 위치 저장
window.addEventListener("beforeunload", () => {
  localStorage.setItem("scrollPosition", window.scrollY);
});
