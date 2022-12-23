import React, { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

function Register() {
  const [loading, setloading] = useState(false);
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      setloading(true);
      try {
        await axios.post(
          "https://lazy-blue-squid-yoke.cyclic.app/register",
          values
        );
        navigate("/");
        setloading(false);
      } catch (error) {
        setloading(false);
        alert("Signup failed: " + error);
      }
    },
  });
  return (
    <>
      <div class="register-wrap">
        <div class="register-html ">
          <form autoComplete="off" onSubmit={formik.handleSubmit}>
            <div class=" mb-2">
              <label class="form-label" for="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                class="form"
                onChange={formik.handleChange}
                value={formik.values.name}
                required
              />
            </div>
            <div class=" mb-2">
              <label class="form-label" for="email">
                Email
              </label>
              <input
                onChange={formik.handleChange}
                value={formik.values.email}
                required
                type="email"
                id="email"
                class="form"
              />
            </div>

            <div class=" mb-2">
              <label class="form-label" for="password">
                Password
              </label>
              <input type="password" id="password" class="form" />
            </div>
            <div class=" mb-4">
              <label class="form-label" for="password">
                Confirm Password
              </label>
              <input
                type="password"
                id="password"
                class="form"
                onChange={formik.handleChange}
                value={formik.values.password}
                required
              />
            </div>

            {loading ? (
              <Spinner />
            ) : (
              <input
                type="submit"
                class="  register-btn mb-3"
                value="sign up"
                disabled={loading}
              />
            )}
            <div class="text-center">
              <p>
                Already a member?{" "}
                <Link to="/" className="login-link ms-2">
                  SIGN IN
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
