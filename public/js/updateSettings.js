/* eslint-disable */
import axios from "axios";
import { showAlert } from "./alerts";

// type is either 'password' or 'data'
export const updateSettings = async (data, type) => {
  try {
    const url =
      type === "password"
        ? "/api/users/updateMyPassword"
        : "/api/users/updateMe";

    const res = await axios({
      method: "PATCH",
      url,
      data,
    });

    if (res.data.status === "success") {
      showAlert("success", `${type.toUpperCase()} updated successfully!`);
      window.setTimeout(() => {
        location.assign("/admin");
      }, 1500);
    }
  } catch (err) {
    showAlert("error", err.response.data.message);
  }
};

export const updateInstructor = async (data, id) => {
  console.log(data, id);
  try {
    const url = `/api/lessons/${id}`;

    const res = await axios({
      method: "PATCH",
      url,
      data,
    });

    if (res.data.status === "success") {
      showAlert("success", `Lesson updated successfully!`);
      window.setTimeout(() => {
        location.assign("/admin/lessons");
      }, 500);
    }
  } catch (err) {
    showAlert("error", err.response.data.message);
  }
};
