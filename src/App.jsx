import { Provider } from "react-redux";
import { store } from "./store";

export const App = () => {
	return (
		<Provider store={store}>
			<div className="App">
				<h1>Hello world</h1>
			</div>
		</Provider>
	);
};
