import { render, screen } from "@testing-library/react";
import Navigation from ".";
import HistoryEntry from "../HistoryEntry";
import HistoryPage from "@/pages/history";
import GameForm from "../GameForm";

jest.mock("next/router", () => ({
  useRouter() {
    return { pathname: jest.fn() };
  },
}));

test("renders with two links 'Play' and 'History'", () => {
  render(<Navigation navigation={players} />);
});
