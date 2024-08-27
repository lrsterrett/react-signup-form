import { FormEvent, useState } from "react";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isPasswordValid = password.length >= 8;
  const doPasswordsMatch = password === confirmPassword;

  function handleSignupSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!username.trim() || !password.trim() || !confirmPassword.trim()) {
      alert("Please fill in all fields");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters long");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Signed up successfully!");
    setUsername("");
    setPassword("");
    setConfirmPassword("");
  }

  return (
    <main id="user-signup-page">
      <form id="user-signup-form" onSubmit={handleSignupSubmit}>
        <h1>Sign Up</h1>
        <div id="user-signup-form-fields">
          <label>
            Username
            <input
              type="text"
              name="username"
              placeholder="johndoe"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              placeholder="password123"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={
                password.length == 0 || isPasswordValid ? "" : "invalid"
              }
            />
            {password.length > 0 && !isPasswordValid && (
              <span className="input-error-message">
                Password must be at least 8 characters!
              </span>
            )}
          </label>
          <label>
            Confirm password
            <input
              type="password"
              name="confirmPassword"
              placeholder="password123"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={confirmPassword && !doPasswordsMatch ? "invalid" : ""}
            />
            {confirmPassword && !doPasswordsMatch && (
              <span className="input-error-message">
                Passwords do not match!
              </span>
            )}
          </label>
        </div>
        <button type="submit">Sign up</button>
      </form>
    </main>
  );
}
