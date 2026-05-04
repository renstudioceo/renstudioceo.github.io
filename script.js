const FORM_ENDPOINT = "https://formspree.io/f/mdabelok";

const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navLinks = document.querySelectorAll(".site-nav a");
const contactForm = document.querySelector("[data-contact-form]");
const formStatus = document.querySelector("[data-form-status]");
const year = document.querySelector("[data-year]");

const closeNav = () => {
  nav?.classList.remove("is-open");
  navToggle?.setAttribute("aria-expanded", "false");
  navToggle?.setAttribute("aria-label", "메뉴 열기");
};

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 8);
};

navToggle?.addEventListener("click", () => {
  const isOpen = nav?.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
  navToggle.setAttribute("aria-label", isOpen ? "메뉴 닫기" : "메뉴 열기");
});

navLinks.forEach((link) => {
  link.addEventListener("click", closeNav);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeNav();
  }
});

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

if (year) {
  year.textContent = String(new Date().getFullYear());
}

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const name = String(formData.get("name") || "").trim();
  const type = String(formData.get("type") || "").trim();
  const submitButton = contactForm.querySelector('button[type="submit"]');

  formData.set("_subject", `[REN STUDIO] ${type || "문의"} - ${name || "이름 없음"}`);

  if (formStatus) {
    formStatus.textContent = "문의 내용을 전송하고 있습니다.";
  }

  submitButton?.setAttribute("disabled", "true");

  fetch(FORM_ENDPOINT, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      contactForm.reset();

      if (formStatus) {
        formStatus.textContent = "문의가 접수되었습니다. 확인 후 연락드리겠습니다.";
      }
    })
    .catch(() => {
      if (formStatus) {
        formStatus.textContent = "전송 중 문제가 발생했습니다. ceo@renstudio.kr로 직접 문의해 주세요.";
      }
    })
    .finally(() => {
      submitButton?.removeAttribute("disabled");
    });
});
