const paginationRefs = {
  ulTag: document.querySelector('.pagination-list'),
};
let totalPages = 20;
let page = 10;

paginationRefs.ulTag.innerHTML = createPagination(totalPages, page);
export function createPagination(totalPages, page) {
  let liTag = '';
  let activeLi;
  let beforePage = page - 1;
  let afterPage = page + 1;
  if (page > 1) {
    liTag += `<li class="btn prev" onclick="createPagination(totalPages, ${
      page - 1
    })"><span><svg width="24" height="24" class="icon-left"><use href="./images/icons.svg#icon-left"></use></svg></span></li>`;
  }
  if (page > 2) {
    liTag += `<li class="first numb" onclick="createPagination(totalPages, 1)"><span>1</span></li>`;
    if (page > 3) {
      liTag += `<li class="dots"><span>...</span></li>`;
    }
  }

  for (let pageLength = beforePage; pageLength <= afterPage; pageLength++) {
    if (pageLength > totalPages) {
      continue;
    }
    if (pageLength == 0) {
      pageLength = pageLength + 1;
    }
    if (page == pageLength) {
      activeLi = 'active';
    } else {
      activeLi = '';
    }
    liTag += `<li class="numb ${activeLi}" onclick="createPagination(totalPages, ${pageLength})"><span>${pageLength}</span></li>`;
  }

  if (page < totalPages) {
    liTag += `<li class="btn next" onclick='createPagination(totalPages, ${
      page + 1
    })'><span><svg width="24" height="24" class="icon-right"><use href="./images/icons.svg#icon-right"></use></svg></span></li>`;
  }
  paginationRefs.ulTag.innerHTML = liTag;
  return liTag;
}

createPagination(totalPages, page);
