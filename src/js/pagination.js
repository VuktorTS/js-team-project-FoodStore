const ulTag = document.querySelector("ul")
let totalPages = 8;
function element (totalPages, page){
    let liTag = '';
    let activeLi;
    let beforePages = page - 1; // 5 - 1 = 4
    let afterPages = page + 1; // 5 + 1 = 6
    if(page > 2){
        liTag += `<li class="btn prev" onclick="element (totalPages, ${page - 1})">
        <span>
          <svg width="24" height="24" class="icon-left">
            <use href="/src/images/icons.svg#icon-left"></use>
          </svg>
        </span>
      </li>`;
    }
    if(page > 2){
        liTag += `<li class="numb">
        <span>1</span>
      </li>`;
      if(page > 3){
        liTag += `<li class="dots">
        <span>...</span>
      </li>`;
      }
    }

    for (let pageLength = beforePages; pageLength <= afterPages; pageLength++) {
        if(page == pageLength){
            activeLi = "active";
        }else{
            activeLi = "";
        }
        liTag += `<li class="numb ${activeLi}"><span>${pageLength}</span></li>`;
    }

    if(page < totalPages - 1){
      liTag += `<li class="numb">
        <span>${totalPages}</span>
      </li>`;
    }
    
    if(page < totalPages){
        liTag += `<li class="btn next" onclick="element (totalPages, ${page + 1})"><span>
          <svg width="24" height="24" class="icon-right">
            <use href="/src/images/icons.svg#icon-right"></use>
          </svg>
        </span>
      </li>`;
    }
    ulTag.innerHTML = liTag;
}
element(totalPages, 1);