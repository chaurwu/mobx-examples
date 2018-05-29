import { observable } from "mobx";

// export const appState = observable({
//  text: ""
// });

// appState.onChange = (e) => { appState.text = e.target.value; };

export const appState = new class State {
  @observable text = "";
  onChange = (e) => { this.text = e.target.value; };
}();