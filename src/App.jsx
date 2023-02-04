import { Provider } from "react-redux";
import { AppContainer } from "./components/AppContainer";
import { store } from "./store";

export const App = () => {
	return (
		<Provider store={store}>
			<AppContainer />
		</Provider>
	);
};
