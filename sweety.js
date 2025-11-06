// === Sweety Studio 商品顯示密度控制 ===
// mobile → 1 / 2
// desktop → 2 / 3 / 4


function setupProductDensity() {

  const grid = document.querySelector(".product-grid");
  const select = document.querySelector(".product-density-select");

  if(!grid || !select) return; // 有些頁面不是商品，不執行

  const isMobile = window.innerWidth < 600;

  // 依裝置不同動態產生 option
  if(isMobile){
    select.innerHTML = `
      <option value="single">大（1列）</option>
      <option value="large">小（2列）</option>
    `;
    grid.classList.add("single");
    select.value = "single";
  } else {
    select.innerHTML = `
      <option value="large">大（2列）</option>
      <option value="medium" selected>中（3列）</option>
      <option value="small">小（4列）</option>
    `;
    grid.classList.add("medium");
    select.value = "medium";
  }

  // user 切換時更新 grid class
  select.addEventListener("change", ()=>{
    grid.classList.remove("single","large","medium","small");
    grid.classList.add(select.value);
  });
}

// DOM Ready
window.addEventListener("DOMContentLoaded", setupProductDensity);
