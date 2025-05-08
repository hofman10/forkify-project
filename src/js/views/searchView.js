class SearchView {
  _parentEl = document.querySelector(".search");

  //ovaj metod nam samo vrace vrijednost iz inputa
  getQuery() {
    const query = this._parentEl.querySelector(".search__field").value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parentEl.querySelector(".search__field").value = "";
  }

  addHandlerSearch(hendler) {
    this._parentEl.addEventListener("click", function (e) {
      e.preventDefault();
      hendler();
    });
  }
}

export default new SearchView();
