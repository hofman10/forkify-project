import View from "./View.js";
import icons from "url:../../img/icons.svg";

class PaginationView extends View {
  _parentElement = document.querySelector(".pagination");

  addHandlerClick(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn--inline");
      console.log(btn);

      if (!btn) return;

      const goToPage = Number(btn.dataset.idinaovustranicu);
      console.log(goToPage);

      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curentPage = this._data.page;

    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    if (curentPage === 1 && numPages > 1) {
      return `
          <button data-idinaovustranicu='${
            curentPage + 1
          }' class="btn--inline pagination__btn--next">
            <span>Page ${curentPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>
      `;
    }

    if (curentPage === numPages && numPages > 1) {
      return `
          <button data-idinaovustranicu='${
            curentPage - 1
          }' class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${curentPage - 1}</span>
          </button>
      `;
    }

    if (curentPage < numPages) {
      return `
          <button data-idinaovustranicu='${
            curentPage - 1
          }' class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${curentPage - 1}</span>
          </button>

           <button data-idinaovustranicu='${
             curentPage + 1
           }' class="btn--inline pagination__btn--next">
            <span>Page ${curentPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>
      `;
    }
    return "";
  }
}

export default new PaginationView();
