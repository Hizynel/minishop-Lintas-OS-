import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import Login from "./Login";

function renderLogin() {
  render(
    <BrowserRouter>
      <AuthProvider>
        <Login />
      </AuthProvider>
    </BrowserRouter>
  );
}

describe("FormLogin", () => {
  it("menampilkan error kalau email tidak valid", () => {
    renderLogin();
    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "emailsalah" },
    });
    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "123456" },
    });
    fireEvent.submit(screen.getByRole("button", { name: "Login" }).closest("form"));
    expect(screen.getByText("Email tidak valid")).toBeInTheDocument();
  });

  it("menampilkan error kalau password kurang dari 6 karakter", () => {
    renderLogin();
    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "test@test.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "123" },
    });
    fireEvent.submit(screen.getByRole("button", { name: "Login" }).closest("form"));
    expect(screen.getByText("Password minimal 6 karakter")).toBeInTheDocument();
  });
});