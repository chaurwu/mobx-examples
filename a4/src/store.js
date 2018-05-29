import { types } from "mobx-state-tree";

const AppState = types
	.model({
		text: ""
	})
	.actions((self) => ({
        onChange(e) { self.text = e.target.value; }
	}))

export const appState = AppState.create({})