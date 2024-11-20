import create from "zustand";

// Zustand 상태 관리 스토어 생성
const useStore = create((set) => ({
  currentIndex: 0,
  setCurrentIndex: (index) => set({ currentIndex: index }),
}));

// 자료 불러오기
import { imgData as cafeData } from "./01_cafeData.js";
import { imgData as restaurantData } from "./01_restaurantData.js";
import { imgData as studioData } from "./01_studioData.js";
import { imgData as hairShopData } from "./01_hairShopData.js";

const imageWraps = [
  {
    data: cafeData,
    wrap: document.querySelector(".cafeImageWrap"),
    buttonClass: ".imgMoreViewBtn1",
  },
  {
    data: restaurantData,
    wrap: document.querySelector(".restaurantImageWrap"),
    buttonClass: ".imgMoreViewBtn2",
  },
  {
    data: studioData,
    wrap: document.querySelector(".studioImageWrap"),
    buttonClass: ".imgMoreViewBtn3",
  },
  {
    data: hairShopData,
    wrap: document.querySelector(".hairShopImageWrap"),
    buttonClass: ".imgMoreViewBtn4",
  },
];

function createImageWrap({ data, wrap, buttonClass }) {
  const imgBoxTextBox = document.createElement("div");
  imgBoxTextBox.classList.add("imageWrapTextBox");

  const descriptionParagraph = document.createElement("p");
  descriptionParagraph.textContent = data[0].description; // 첫 번째 항목의 설명 사용
  imgBoxTextBox.appendChild(descriptionParagraph);

  wrap.appendChild(imgBoxTextBox);

  const imgBoxWrap = document.createElement("div");
  imgBoxWrap.classList.add("imgBoxWrap");

  // 상태에서 현재 인덱스 가져오기
  let currentIndex = useStore.getState().currentIndex;
  const itemsToShow = 10; // 한 번에 보여줄 이미지 수

  // 이미지 표시 함수
  function showImages() {
    const nextItems = data.slice(currentIndex, currentIndex + itemsToShow);
    nextItems.forEach((item) => {
      const imgBox = document.createElement("div");
      imgBox.classList.add("imgBox");

      const imgContentsBox = document.createElement("div");
      imgContentsBox.classList.add("imgContentsBox");

      const p1 = document.createElement("p");
      p1.textContent = item.text;

      const p2 = document.createElement("p");
      p2.textContent = item.info;

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
      imgContentsBox.appendChild(img); // img가 imgContentsBox에 추가되는 위치 수정
    });

    // 상태 업데이트
    currentIndex += itemsToShow;
    useStore.getState().setCurrentIndex(currentIndex);

    // 더 이상 보여줄 이미지가 없으면 버튼 숨기기
    if (currentIndex >= data.length) {
      document.querySelector(buttonClass).style.display = "none";
    }
  }

  // 최초 이미지 표시
  showImages();

  // 버튼 클릭 이벤트 리스너
  document.querySelector(buttonClass).addEventListener("click", showImages);

  wrap.appendChild(imgBoxWrap);
}

// 각 이미지 랩 생성
imageWraps.forEach(createImageWrap);
