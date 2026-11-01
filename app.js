(() => {
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#primary-nav");
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(open));
      menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
    }));
  }
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
  const cards = [...document.querySelectorAll(".gallery-card[data-gallery]")];
  const dialog = document.querySelector("#gallery-dialog");
  if (!cards.length || !dialog || !("showModal" in dialog)) return;
  const preview = document.querySelector("#dialog-preview");
  const count = document.querySelector("#gallery-count");
  const close = document.querySelector(".dialog-close");
  const prev = document.querySelector("#gallery-prev");
  const next = document.querySelector("#gallery-next");
  let current = 0;
  let opener = null;
  const show = index => {
    current = (index + cards.length) % cards.length;
    const source = cards[current];
    preview.replaceChildren(source.querySelector(".artboard").cloneNode(true), source.querySelector(".gallery-meta").cloneNode(true));
    count.textContent = (current + 1) + " / " + cards.length;
  };
  const launch = i => {
    opener = cards[i];
    show(i);
    dialog.showModal();
    close.focus();
  };
  cards.forEach((card, i) => card.addEventListener("click", () => launch(i)));
  prev.addEventListener("click", () => show(current - 1));
  next.addEventListener("click", () => show(current + 1));
  close.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", e => { if (e.target === dialog) dialog.close(); });
  dialog.addEventListener("keydown", e => {
    if (e.key === "ArrowLeft") { e.preventDefault(); show(current - 1); }
    if (e.key === "ArrowRight") { e.preventDefault(); show(current + 1); }
  });
  dialog.addEventListener("close", () => opener?.focus());
})();
