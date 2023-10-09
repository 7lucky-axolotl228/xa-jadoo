// const elCategoryItemBtn = document.querySelector('.category__item-button');
const elCategoryItem = document.querySelector('.category__item');

elCategoryItemBtn.addEventListener('click', function () {
  elCategoryItem.classList.toggle('category__item--active');
});