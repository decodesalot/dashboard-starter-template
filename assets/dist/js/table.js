const checkAllCheckbox = document.querySelector("#checkAll");
const checkboxes = document.querySelectorAll(
  'table tbody input[type="checkbox"]'
);

const checkAll = (e) => {
  for (const checkbox of checkboxes) {
    checkbox.checked = e.target.checked ? true : false;
  }
};

checkAllCheckbox.addEventListener("change", checkAll, false);
