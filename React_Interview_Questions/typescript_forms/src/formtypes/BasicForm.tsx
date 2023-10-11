import { FormEvent, useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleFormSubmission = (e: FormEvent) => {
    e.preventDefault();

    const formData = {
      username,
      email,
      password,
      confirmPassword,
    };

    localStorage.setItem("formData", JSON.stringify(formData));

    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="App">
      <h1>Sign Up</h1>

      <form onSubmit={handleFormSubmission}>
        <label htmlFor="username">
          Username:
          <input
            className="input"
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </label>

        <label htmlFor="email">
          Email:
          <input
            className="input"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label htmlFor="password">
          Password:
          <input
            className="input"
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <label htmlFor="confirm-password">
          Confirm Password:
          <input
            className="input"
            type="password"
            name="confirm-password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>

        <button className="submit_button" type="submit">
          SignUp
        </button>
      </form>
    </div>
  );
}

export default App;
