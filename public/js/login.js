import axios from "axios";
import { showAlert } from "./alerts";

export const login = async (email, password) => {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/users/login",
      data: {
        email,
        password,
      },
    });

    if (res.data.status === "success") {
      showAlert("success", "Logged in successfully!");
      window.setTimeout(() => {
        location.assign("/admin");
      }, 1500);
    }
  } catch (err) {
    showAlert("error", err.response.data.message);
  }
};

export const logout = async () => {
  try {
    const res = await axios({
      method: "GET",
      url: "/api/users/logout",
    });
    if ((res.data.status = "success")) location.reload(true);
  } catch (err) {
    console.log(err.response);
    showAlert("error", "Error logging out! Try again.");
  }
};

export const signup = async (data) => {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/users/signup",
      data,
    });

    if (res.data.status === "success") {
      showAlert(
        "success",
        "User created! You can sign in once you're added as an admin"
      );
      window.setTimeout(() => {
        location.assign("/admin");
      }, 1500);
    }
  } catch (err) {
    showAlert("error", err.response.data.message);
  }
};
