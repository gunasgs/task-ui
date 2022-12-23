import React, { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

function Login() {
  const [loading, setloading] = useState(false);
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      setloading(true);
      try {
        let loginData = await axios.post(
          "https://lazy-blue-squid-yoke.cyclic.app/login",
          values
        );
        window.localStorage.setItem("shop", loginData.data.token);
        navigate("/home");
        setloading(false);
      } catch (error) {
        setloading(false);
        alert("Signin failed: " + error);
      }
    },
  });

  return (
    <div class="login-wrap">
      <div class="login-html ">
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
          <div class=" mb-4">
            <label class="form-label" for="email">
              Email
            </label>
            <input
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              required
              name="email"
              id="email"
              class="form"
            />
          </div>

          <div class=" mb-4">
            <label class="form-label" for="password">
              Password
            </label>
            <input
              type="password"
              autoComplete="off"
              onChange={formik.handleChange}
              value={formik.values.password}
              id="password"
              name="password"
              class="form"
            />
          </div>

          <div class="row mb-4">
            <div class="login-links">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="form2Example31"
                />
                <label class="form-check-label" for="form2Example31">
                  Remember me
                </label>
              </div>
              <div>
                <a href="#!" className="login-link">
                  Forgot password?
                </a>
              </div>
            </div>
          </div>
          {loading ? (
            <Spinner />
          ) : (
            <input type="submit" class="login-btn mb-4" value="sign in" />
          )}
          <div class="text-center">
            <p>
              Not a member?{" "}
              <Link to="/register" className="login-link ms-2">
                SIGN UP
              </Link>
            </p>
          </div>
          <div>
            <span className="login-mail notranslate ">
              EMAIL : <span translate="no">user@mail.com</span>
            </span>
            <span className="login-pass">
              PASSWORD : <span translate="no"> user</span>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
