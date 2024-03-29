import View from "./view.js";
import icons from "url:../../img/icons.svg"; // Parcel 2

class AddRecipeView extends View {
  _parentEl = document.querySelector(".upload");
  _successMessage = "Recipe was successfully uploaded.  :)";

  _window = document.querySelector(".add-recipe-window");
  _overlay = document.querySelector(".overlay");
  _btnOpen = document.querySelector(".nav__btn--add-recipe");
  _btnClose = document.querySelector(".btn--close-modal");

  constructor() {
    console.log("constructor");
    super();
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
  }
  /**
   * toggle the view of winoow and overlay toghether
   * @returns {undefined}
   */
  toggleWindow() {
    console.log("toggled");
    this._overlay.classList.toggle("hidden");
    this._window.classList.toggle("hidden");
  }

  _addHandlerShowWindow() {
    console.log("clicked button");
    this._btnOpen.addEventListener("click", this.toggleWindow.bind(this));
  }

  _addHandlerHideWindow() {
    this._btnClose.addEventListener("click", this.toggleWindow.bind(this));
    this._overlay.addEventListener("click", this.toggleWindow.bind(this));
  }

  /**
   * hangle user entered data in the add new recipe form
   * @param {function}
   * @returns {object} data - new recipe details to be added
   */
  addHandlerUpload(handler) {
    this._parentEl.addEventListener("submit", function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }
}

export default new AddRecipeView();
