import { Notes } from "./Notes";
import { renderWithProviders } from "./test-utils";
import { initialNotesState } from "../store/notes";
import { screen } from "@testing-library/react-native";
import { fireEvent } from "react-native-testing-library";

test("Notes", () => {
  renderWithProviders(<Notes />, {
    preloadedState: { notes: initialNotesState },
  });

  expect(screen.getByText("Add Note")).toBeVisible();
  fireEvent.press(screen.getByText("Add Note"));
  expect(screen.getByText("enter note...")).toBeVisible();
});
