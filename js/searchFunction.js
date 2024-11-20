// 섹션 클래스와 한글 이름 매핑 객체
const sectionMapping = {
  cafe: "카페",
  restaurant: "식당",
  studio: "스튜디오",
  beautyShop: "뷰티샵",
  store: "스토어",
  officetel: "오피스텔",
  apartment: "아파트",
  hotel: "숙박",
};

// 페이지가 로드되면 실행
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const dropdown = document.querySelector(".dropdown");
  const imgBoxes = document.querySelectorAll(".imgBox"); // .imgBox 요소 선택

  // 메시지 표시를 위한 요소 생성
  const messageBox = document.createElement("div");
  messageBox.style.color = "red"; // 메시지 색상 설정
  messageBox.style.marginTop = "10px"; // 위쪽 여백 설정
  searchInput.parentNode.insertBefore(messageBox, searchInput.nextSibling); // 입력창 아래에 메시지 박스 추가

  // 입력창에 포커스가 가면 드롭다운 보여주기
  searchInput.addEventListener("focus", () => {
    dropdown.style.opacity = "1"; // 드롭다운 보이게
    dropdown.style.visibility = "visible"; // 드롭다운 보이게
  });

  // 엔터 키 이벤트 리스너 추가
  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      const query = searchInput.value.trim(); // 입력값 가져오기
      let found = false; // 검색 결과를 추적하기 위한 변수

      imgBoxes.forEach((imgBox) => {
        const classList = Array.from(imgBox.classList); // imgBox의 모든 클래스를 배열로 변환
        // sectionMapping의 값을 확인하여 일치하는 클래스가 있는지 검사
        if (
          classList.some((className) => sectionMapping[className] === query)
        ) {
          imgBox.style.display = "block"; // 일치하면 보여줌
          found = true; // 일치하는 imgBox가 있음을 표시
        } else {
          imgBox.style.display = "none"; // 일치하지 않으면 숨김
        }
      });

      // 검색 결과가 없을 경우 모든 .imgBox 보여주기
      if (!found) {
        imgBoxes.forEach((imgBox) => {
          imgBox.style.display = "block"; // 모든 .imgBox를 다시 보여줌
        });
        messageBox.textContent = "해당 검색어의 레퍼런스는 없습니다."; // 메시지 표시

        // 3초 후에 메시지 지우기
        setTimeout(() => {
          messageBox.textContent = ""; // 메시지 지우기
        }, 3000);
      } else {
        messageBox.textContent = ""; // 메시지 지우기
      }
    }
  });

  // 입력값이 변경될 때 모든 .imgBox 보여주기
  searchInput.addEventListener("input", () => {
    if (searchInput.value.trim() === "") {
      imgBoxes.forEach((imgBox) => {
        imgBox.style.display = "block"; // 모든 .imgBox를 다시 보여줌
      });
      messageBox.textContent = ""; // 메시지 지우기
    }
  });

  // 입력창에서 포커스가 벗어날 때 드롭다운 숨기기
  searchInput.addEventListener("blur", () => {
    dropdown.style.opacity = "0"; // 드롭다운 숨기기
    dropdown.style.visibility = "hidden"; // 드롭다운 숨기기
    dropdown.style.top = "70px"; // 드롭다운의 top 값을 초기화
  });
});
