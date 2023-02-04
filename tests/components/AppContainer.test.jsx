import { render, screen } from "@testing-library/react";
import { AppContainer } from "../../src/components";

describe("<AppContainer/> tests", () => {
	test("should show a header", () => {
		render(<AppContainer />);
		expect(screen.getByTestId("header"));
	});

	test("should show a section div", () => {
		render(<AppContainer />);
		expect(screen.getByTestId("section"));
	});
});
