import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';
import '../css/index.css';
import '../css/pagination.css';
import icons from '../images/icons.svg';

const containerPagination = document.getElementById('pagination');

const options = {
  // below default value of options
  totalItems: 50,
  itemsPerPage: 9,
  visiblePages: 1,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};
const pagination = new Pagination(containerPagination, options);

const paginationBtns = document.querySelectorAll('.tui-page-btn');
// console.log(paginationBtns);
// [...paginationBtns].map(btn => {
//   if (btn.classList.contains('.tui-prev')) {
//     btn.innerHTML = `<svg width="24" height="24" class="icon-left"><use href='${icons}#icon-left'></use></svg>`;
//   }
//   if (btn.classList.contains('.tui-next')) {
//     btn.innerHTML = `<svg width="24" height="24" class="icon-right"><use href='${icons}#icon-right'></use></svg>`;
//   }
// });
const leftBtn = document.querySelector('.tui-prev');
const rightBtn = document.querySelector('.tui-next');

leftBtn.innerHTML = `<svg width="24" height="24" class="icon-left"><use href='${icons}#icon-left'></use></svg>`;

rightBtn.innerHTML = `<svg width="24" height="24" class="icon-right"><use href='${icons}#icon-right'></use></svg>`;
