import { render, screen } from "@testing-library/react";
import { Header } from "../../src/components";

describe("<Header /> tests", () => {
	test("should show app logo", () => {
		render(<Header />);
		expect(screen.getByText("Time Manager"));
	});

	test("should show current date", () => {
		render(<Header />);
		const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
		const today = new Date().toLocaleDateString("en-US", options);

		expect(screen.getByText(today));
	});
});
