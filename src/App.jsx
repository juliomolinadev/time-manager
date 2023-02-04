import { Provider } from "react-redux";

import { store } from "./store";
import { AppContainer } from "./components";

export const App = () => {
	return (
		<Provider store={store}>
			<AppContainer />
		</Provider>
	);
};
