export const AppContainer = () => {
	return (
		<div className="appContainer">
			<div data-testid="header">Header</div>
			<div className="appContainer__section" data-testid="section">
				<div>Main Menu</div>
				<div>Timeline</div>
				<div>Sidebar</div>
			</div>
		</div>
	);
};
