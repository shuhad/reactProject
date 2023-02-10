import "./App.css";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("handle clicked");
    if (email == "sheikh@sheikh.com" && password == "123") {
      setMsg("correct user information");
    } else {
      setMsg("wrong user information");
    }
  };

  return (
    <div className="App mt-5">
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col-md-4 offset-md-4 mt-5">
            <div className="card text-left">
              <div className="card-body">
                <div className="text-center">
                  <img src="https://portal.hibouconnect.com/logo.png" alt="" />
                  <p>Sign In to your account</p>
                  {msg && msg}
                </div>

                <form onSubmit={(e) => handleLogin(e)}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
