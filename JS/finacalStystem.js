// 獲取按鈕和內容區域的元素
const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdownContent = document.querySelector(".dropdown-content");

// 點擊按鈕時，切換下拉選單的顯示狀態
dropdownBtn.addEventListener("click", function () {
  dropdownContent.classList.toggle("show");
});

// 點擊頁面其他地方時，關閉下拉選單
window.addEventListener("click", function (event) {
  if (!event.target.matches(".dropdown-btn")) {
    if (dropdownContent.classList.contains("show")) {
      dropdownContent.classList.remove("show");
    }
  }
});
