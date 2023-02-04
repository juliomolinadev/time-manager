export const Header = () => {
	const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
	const today = new Date().toLocaleDateString("en-US", options);

	return (
		<div className="header" data-testid="header">
			<div className="header__logo">Time Manager</div>
			<div className="header__date text-center">{today}</div>
		</div>
	);
};
