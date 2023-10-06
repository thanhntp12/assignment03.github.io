//ẩn thông tin cá nhân //
//khai báo biến- lấy ra một phần tử HTML dựa trên thuộc tính id
const emailForm = document.getElementById("email-form");
const personalInfo = document.getElementById("personal-info"); // Phần thông tin cá nhân
const emailInput = document.getElementById("email-input"); //Trường nhập email trong biểu mẫu.
const submitButton = document.getElementById("submit-button"); // Nút "submit" trong biểu mẫu.
// thêm sự kiện click để thực thi hàm được truyền vào
submitButton.addEventListener("click", function () {
  const enteredEmail = emailInput.value.trim();

  // Kiểm tra định dạng email có hợp lệ không bằng cách sử dụng regex
  const emailPattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailPattern.test(enteredEmail)) {
    alert("Email không hợp lệ. Vui lòng nhập email hợp lệ.");
    return;
  }

  // Ẩn form và hiện thông tin cá nhân
  emailForm.classList.add("hide");
  personalInfo.classList.remove("hide");
});
// ẩn hiện các kỹ năng
function handleOnMouseOver() {
  console.log();
}
// Lấy tất cả các nút "View More" và "View Less"
const viewButtons = document.querySelectorAll(".control-view button");

// Thêm sự kiện click cho từng nút
viewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Tìm phần tử cha (container) của nút được nhấn
    const container = button.closest(".vien");

    // Tìm phần tử có lớp 'an' trong container
    const hiddenContent = container.querySelector(".an");

    // Kiểm tra lớp 'an' có hiện tại hay không
    if (
      hiddenContent.style.display === "none" ||
      hiddenContent.style.display === ""
    ) {
      // Nếu đang ẩn, hiển thị nội dung và đổi nút thành "View Less"
      hiddenContent.style.display = "block";
      button.textContent = "View Less";
    } else {
      // Nếu đang hiển thị, ẩn nội dung và đổi nút thành "View More"
      hiddenContent.style.display = "none";
      button.textContent = "View More";
    }
  });
});
//
