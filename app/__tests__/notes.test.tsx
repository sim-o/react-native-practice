import { screen } from "@testing-library/react-native";
import { fireEvent } from "react-native-testing-library";

import { initialNotesState } from "../../store/notes";
import { renderWithProviders } from "../../test-utils";
import Notes from "../notes";

test("Notes", () => {
  renderWithProviders(<Notes />, {
    preloadedState: { notes: initialNotesState },
  });

  expect(screen.getByText("Add Note")).toBeVisible();
  fireEvent.press(screen.getByText("Add Note"));
  expect(screen.getByDisplayValue("enter note...")).toBeVisible();
});
