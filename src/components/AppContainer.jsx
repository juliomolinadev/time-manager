import { Header } from "./Header";

export const AppContainer = () => {
	return (
		<div className="appContainer">
			<Header />
			<div className="appContainer__section" data-testid="section">
				<div>Main Menu</div>
				<div>Timeline</div>
				<div>Sidebar</div>
			</div>
		</div>
	);
};
