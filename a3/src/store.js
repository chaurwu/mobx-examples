import { observable } from "mobx";

export const appState = new class State {
  @observable text = "";
  onChange = (e) => { this.text = e.target.value; };
}();