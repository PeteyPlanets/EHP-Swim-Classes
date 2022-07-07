import { login, logout, signup } from "./login";
import { updateSettings, updateInstructor } from "./updateSettings";
import { submitLesson, getLessonData, submitWaSignup } from "./submitLesson";

import {
  formatTimestamp,
  currentDateTime,
  formatDateToPopulate,
} from "./dates";

// Login / Signup
const loginForm = document.querySelector(".form--login");
const logOutBtn = document.querySelector(".nav__el--logout");
const userDataForm = document.querySelector(".form-user-data");
const userSignupForm = document.querySelector(".form-user-signup");
const userPasswordForm = document.querySelector(".form-user-password");

// Lesson Form
const lessonForm = document.querySelector(".form.lesson");
const lessonPopup = document.querySelector(".lessons__popup");
const lessonsList = document.querySelector(".lessons__list");
const lessons = document.querySelectorAll(".lesson");

// Water Aerobics
const heroBtn = document.querySelector(".hero--cta");
const waterAerobicsForm = document.querySelector(".form.wa--signup");

// Product Cards
const signupBtns = document.querySelectorAll(".product--card__btn");

// Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const closeMobileNav = document.querySelector(".close--mobile__nav");

// Resize event handler for water aerobics page
window.addEventListener("resize", () => {
  if (!waterAerobicsForm) return;

  if (document.documentElement.clientWidth <= 600) {
    document.querySelector(".description--heading").textContent =
      "Water Aerobics";
    document.querySelector(".schedule__container").innerHTML = `
    <ul class="schedule__list">
    <li class="schedule__list--item">
                <p>Tuesday, July 12th: 9am-10am</p>
            </li>
            <li class="schedule__list--item">
                <p>Thursday, July 14th: 9am-10am</p>
            </li>
            <li class="schedule__list--item">
                <p>Tuesday, July 19th: 9am-10am</p>
            </li>
            <li class="schedule__list--item">
                <p>Thursday, July 21th: 9am-10am</p>
            </li>
            <li class="schedule__list--item">
                <p>Tuesday, July 26th: 9am-10am</p>
            </li>
            <li class="schedule__list--item">
                <p>Thursday, July 28th: 9am-10am</p>
            </li>
            <li class="schedule__list--item">
                <p>Tuesday, August 2nd: 9am-10am</p>
            </li>
            <li class="schedule__list--item">
                <p>Thursday, August 4th: 9am-10am</p>
            </li>
            <li class="schedule__list--item">
                <p>Tuesday, August 9th: 9am-10am</p>
            </li>
            <li class="schedule__list--item">
                <p>Thursday, August 11th: 9am-10am</p>
            </li>
            <li class="schedule__list--item">
                <p>Tuesday, August 16th: 9am-10am</p>
            </li>
            <li class="schedule__list--item">
                <p>Thursday, August 18th: 9am-10am</p>
            </li>
            <li class="schedule__list--item">
                <p>Tuesday, August 23rd: 9am-10am</p>
            </li>
            <li class="schedule__list--item">
                <p>Thursday, August 25th: 9am-10am</p>
            </li>
            <li class="schedule__list--item">
                <p>Tuesday, August 29th: 9am-10am</p>
            </li>
            <li class="schedule__list--item">
                <p>Thursday, September 1st: 9am-10am</p>
            </li>
          </ul>
    `;
  }
  if (document.documentElement.clientWidth > 600) {
    if (document.documentElement.clientWidth < 900) {
      document.querySelector(".description--heading").textContent =
        "Water Aerobics";
    }
    document.querySelector(".schedule__container").innerHTML = `
            <ul class="schedule__list">
              <li class="schedule__list--item">
                  <p>Tuesday, July 12th: 9am-10am</p>
              </li>
              <li class="schedule__list--item">
                  <p>Thursday, July 14th: 9am-10am</p>
              </li>
              <li class="schedule__list--item">
                  <p>Tuesday, July 19th: 9am-10am</p>
              </li>
              <li class="schedule__list--item">
                  <p>Thursday, July 21th: 9am-10am</p>
              </li>
              <li class="schedule__list--item">
                  <p>Tuesday, July 26th: 9am-10am</p>
              </li>
              <li class="schedule__list--item">
                  <p>Thursday, July 28th: 9am-10am</p>
              </li>
              <li class="schedule__list--item">
                  <p>Tuesday, August 2nd: 9am-10am</p>
              </li>
              <li class="schedule__list--item">
                  <p>Thursday, August 4th: 9am-10am</p>
              </li>
          </ul>
          <ul class="schedule__list">
              <li class="schedule__list--item">
                  <p>Tuesday, August 9th: 9am-10am</p>
              </li>
              <li class="schedule__list--item">
                  <p>Thursday, August 11th: 9am-10am</p>
              </li>
              <li class="schedule__list--item">
                  <p>Tuesday, August 16th: 9am-10am</p>
              </li>
              <li class="schedule__list--item">
                  <p>Thursday, August 18th: 9am-10am</p>
              </li>
              <li class="schedule__list--item">
                  <p>Tuesday, August 23rd: 9am-10am</p>
              </li>
              <li class="schedule__list--item">
                  <p>Thursday, August 25th: 9am-10am</p>
              </li>
              <li class="schedule__list--item">
                  <p>Tuesday, August 29th: 9am-10am</p>
              </li>
              <li class="schedule__list--item">
                  <p>Thursday, September 1st: 9am-10am</p>
              </li>
            </ul>
    `;
  }
});

if (hamburger) {
  const mobileNav = document.querySelector(".mobile__nav");
  hamburger.addEventListener("click", (e) => {
    mobileNav.style.display = "block";
    setTimeout(() => {
      mobileNav.style.transform = "translateX(0)";
    }, 10);
  });
  closeMobileNav.addEventListener("click", () => {
    mobileNav.style.transform = "translateX(100%)";
    setTimeout(() => {
      mobileNav.style.display = "none";
    }, 300);
  });
}
// Product Cards (toDo: Make sure this knows if lesson or water aerobics)
if (signupBtns) {
  signupBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .getElementById("lesson--form")
        .scrollIntoView({ behavior: "smooth" });
    });
  });
}

// Hero section for water aerobics
if (heroBtn) {
  heroBtn.addEventListener("click", () => {
    document
      .getElementById("lesson--form")
      .scrollIntoView({ behavior: "smooth" });
  });
}

if (lessonForm)
  lessonForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const preferredTimes = document.getElementById("preferredDates").value;
    const preferredInstructor = document.getElementById(
      "preferredInstructor"
    ).value;
    const addedNotes = document.getElementById("addedNotes").value;
    const today = new Date().toLocaleDateString("en-us", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    const data = {
      name,
      phone,
      age,
      gender,
      preferredTimes,
      preferredInstructor,
      addedNotes,
      dateReceived: today,
    };

    await submitLesson(data);
  });

if (waterAerobicsForm) {
  // Media Query for Schedule element on small devices
  let mediaQuery = window.matchMedia("(max-width: 600px)");
  if (mediaQuery.matches) {
    document.querySelector(".description--heading").textContent =
      "Water Aerobics";
    document.querySelector(".schedule__container").innerHTML = `
    <ul class="schedule__list">
    <li class="schedule__list--item">
                <p>Tuesday, July 12th: 9am-10am</p>
            </li>
            <li class="schedule__list--item">
                <p>Thursday, July 14th: 9am-10am</p>
            </li>
            <li class="schedule__list--item">
                <p>Tuesday, July 19th: 9am-10am</p>
            </li>
            <li class="schedule__list--item">
                <p>Thursday, July 21th: 9am-10am</p>
            </li>
            <li class="schedule__list--item">
                <p>Tuesday, July 26th: 9am-10am</p>
            </li>
            <li class="schedule__list--item">
                <p>Thursday, July 28th: 9am-10am</p>
            </li>
            <li class="schedule__list--item">
                <p>Tuesday, August 2nd: 9am-10am</p>
            </li>
            <li class="schedule__list--item">
                <p>Thursday, August 4th: 9am-10am</p>
            </li>
            <li class="schedule__list--item">
                <p>Tuesday, August 9th: 9am-10am</p>
            </li>
            <li class="schedule__list--item">
                <p>Thursday, August 11th: 9am-10am</p>
            </li>
            <li class="schedule__list--item">
                <p>Tuesday, August 16th: 9am-10am</p>
            </li>
            <li class="schedule__list--item">
                <p>Thursday, August 18th: 9am-10am</p>
            </li>
            <li class="schedule__list--item">
                <p>Tuesday, August 23rd: 9am-10am</p>
            </li>
            <li class="schedule__list--item">
                <p>Thursday, August 25th: 9am-10am</p>
            </li>
            <li class="schedule__list--item">
                <p>Tuesday, August 29th: 9am-10am</p>
            </li>
            <li class="schedule__list--item">
                <p>Thursday, September 1st: 9am-10am</p>
            </li>
          </ul>
    `;
  }
  waterAerobicsForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const addedNotes = document.getElementById("addedNotes").value;
    const today = new Date().toLocaleDateString("en-us", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    const data = {
      name,
      phone,
      email,
      addedNotes,
      dateReceived: today,
    };

    await submitWaSignup(data);
  });
}
// --------- ADMIN --------------
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    login(email, password);
  });
}

if (logOutBtn) logOutBtn.addEventListener("click", logout);

if (userDataForm) {
  userDataForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("name", document.getElementById("name").value);
    form.append("email", document.getElementById("email").value);
    form.append("photo", document.getElementById("photo").files[0]);

    updateSettings(form, "data");
  });
}

if (userSignupForm) {
  userSignupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("password-confirm").value;

    await signup({ name, email, password, passwordConfirm });
  });
}

if (userPasswordForm) {
  userPasswordForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    document.querySelector(".btn--save-password").textContent = "Updating...";

    const passwordCurrent = document.getElementById("password-current").value;
    const password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("password-confirm").value;
    await updateSettings(
      { passwordCurrent, password, passwordConfirm },
      "password"
    );

    document.querySelector(".btn--save-password").textContent = "Save password";
    document.getElementById("password-current").value = "";
    document.getElementById("password").value = "";
    document.getElementById("password-confirm").value = "";
  });
}

if (lessonPopup) {
  lessonPopup.addEventListener("click", (e) => {
    const popupContainer = document.querySelector(".lessons__popup--container");
    if (e.target.classList.contains("lessons__popup")) {
      popupContainer.style.transform = "scale(0)";
      setTimeout(() => {
        lessonPopup.style.display = "none";
      }, 350);
    }
  });
}

if (lessonsList) {
  lessons.forEach((lesson) => {
    const popupContainer = document.querySelector(".lessons__popup--container");

    lesson.addEventListener("click", async (e) => {
      const lessonId = e.target.closest("li").dataset.id;
      lessonPopup.style.display = "flex";
      setTimeout(() => {
        popupContainer.style.transform = "scale(1)";
      }, 10);

      //Populate popup data with clicked lesson
      const clickedLesson = await getLessonData(lessonId);
      if (clickedLesson.assignedInstructor) {
        const instructorEl = document.querySelector(".instructor");
        instructorEl.style.display = "inline-block";
        instructorEl.textContent = `Instructor: ${clickedLesson.assignedInstructor}`;

        document.querySelector(".lesson__btn.add").textContent =
          "Change Instructor";
      }
      document.querySelector(".lesson-name").textContent = clickedLesson.name;
      document.querySelector(".lesson-age").textContent =
        clickedLesson.age !== "Adult"
          ? `${clickedLesson.age} y/o ${clickedLesson.gender}`
          : `Adult ${clickedLesson.gender}`;
      document.querySelector(
        ".lesson-phone"
      ).textContent = `Phone: ${clickedLesson.phone}`;
      document.querySelector(
        ".lesson--notes"
      ).textContent = `Notes: ${clickedLesson.addedNotes}`;
      document.querySelector(
        ".lesson--preferred-times"
      ).textContent = `Preferred times: ${clickedLesson.preferredTimes}`;
      document.querySelector(".lesson--date-received").textContent =
        clickedLesson.dateReceived;

      document
        .querySelector(".lesson__btn.add")
        .addEventListener("click", (e) => {
          console.log("CLICKED");
          const addBtn = document.querySelector(".lesson__btn.add");
          const saveBtn = document.querySelector(".lesson__btn.save");
          const selectEl = document.querySelector(".form__select.admin");

          selectEl.style.display = "block";
          addBtn.style.display = "none";
          saveBtn.style.display = "block";

          saveBtn.addEventListener("click", async () => {
            const assignedInstructor = selectEl.value;
            selectEl.style.display = "none";
            saveBtn.style.display = "none";
            addBtn.style.display = "block";

            // ToDo: Update DB and UI with added instructor
            await updateInstructor({ assignedInstructor }, lessonId);
          });
        });
    });
  });
}
