window.addEventListener('load', () => {
  console.log("window loaded");
  let element = document.getElementById('app')
  console.log("this is the element", element);
  let hl = new Headlines(element, $)
  console.log("new Headlines", hl);
})
