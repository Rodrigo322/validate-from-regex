import "./styles.css";
import { useState } from "react";

import { validEmail, validPassword } from "./utils/regex";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [inputEmailErr, setInputEmailErr] = useState(false);
  const [inputPassordErr, setInputPasswordErr] = useState(false);

  const validate = () => {
    if (!validEmail.test(email)) {
      setInputEmailErr(true);
    } else {
      setInputEmailErr(false);
    }
    if (!validPassword.test(password)) {
      setInputPasswordErr(true);
    } else {
      setInputPasswordErr(false);
    }
  };

  return (
    <div>
      <h1>Validando form com RegEx</h1>
      
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={event => setEmail(event.target.value)}
      />
      {inputEmailErr && <p>Por favor digete um email valido!</p>}

      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      {inputPassordErr && <p>Por favor digite uma senha mais segura</p>}

      <button onClick={validate}>Validar</button>

    </div>
  );
}

export default App;
