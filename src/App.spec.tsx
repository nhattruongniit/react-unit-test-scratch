import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// components
import App from "./App";

// contexts
import { AppContext } from "./contexts/AppContext";

// mocks
import { dataMe } from "./mocks/dataMe";

const me = dataMe;

describe("App", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    Object.defineProperty(window, "location", {
      configurable: true,
      value: { reload: jest.fn() },
    });
  });

  test("should be render component", async () => {
    // given
    render(
      <AppContext.Provider value={{ me }}>
        <App />
      </AppContext.Provider>
    );

    // when
    const title = screen.getByText("Please select Product");

    // then
    expect(title).toBeInTheDocument();
  });

  test("should be render lists product successfully", async () => {
    // given
    render(
      <AppContext.Provider value={{ me }}>
        <App />
      </AppContext.Provider>
    );

    // when
    const title = screen.getByText("Ergonomic Cotton Gloves");

    // then
    expect(title).toBeInTheDocument();
  });

  test("should be save product id to localStorage when click on product", async () => {
    // given
    render(
      <AppContext.Provider value={{ me }}>
        <App />
      </AppContext.Provider>
    );

    // when
    await userEvent.click(screen.getByText("Ergonomic Cotton Gloves"));

    // then
    expect(window.localStorage.getItem("product_id")).toBe("423");
  });

  // test("should be reload page when click on product", async () => {
  //   // given
  //   render(
  //     <AppContext.Provider value={{ me }}>
  //       <App />
  //     </AppContext.Provider>
  //   );

  //   // when
  //   await userEvent.click(screen.getByText("Ergonomic Cotton Gloves"));

  //   // then
  //   expect(jest.isMockFunction(window.location.reload)).toBe(true);
  // });
});
