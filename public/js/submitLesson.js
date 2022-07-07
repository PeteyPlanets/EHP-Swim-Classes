import axios from "axios";
import { showAlert } from "./alerts";

export const submitLesson = async (data) => {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/lessons",
      data,
    });

    if (res.data.status === "success") {
      showAlert(
        "success",
        "Lesson request submitted! You should receive a call or text from your assinged instructor within 72 hours "
      );
      window.setTimeout(() => {
        location.assign("/");
      }, 7000);
    }
  } catch (err) {
    showAlert("error", err.response.data.message);
  }
};

export const getLessonData = async (id) => {
  try {
    const res = await axios({
      method: "GET",
      url: `/api/lessons/${id}`,
    });

    return res.data.data.lesson;
  } catch (err) {
    showAlert("error", err.response.data.message);
  }
};

export const submitWaSignup = async (data) => {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/wa",
      data,
    });

    if (res.data.status === "success") {
      showAlert(
        "success",
        "Request submitted! You should receive a call or text  within 48 hours"
      );
      window.setTimeout(() => {
        location.assign("/water-aerobics");
      }, 7000);
    }
  } catch (err) {
    showAlert("error", err.response.data.message);
  }
};
