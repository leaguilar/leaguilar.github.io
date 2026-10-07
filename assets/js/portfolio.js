"use strict";
// All publications remain visible when JavaScript is unavailable.
const filterForm = document.querySelector(".publication-filters");
if (filterForm) {
  const search = filterForm.elements.q;
  const topic = filterForm.elements.topic;
  const year = filterForm.elements.year;
  const rows = [...document.querySelectorAll("[data-publication]")];
  const count = document.querySelector(".result-count");
  const empty = document.querySelector(".no-results");
  const normalize = value => value.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const restore = () => {
    const params = new URLSearchParams(location.search);
    search.value = params.get("q") || "";
    topic.value = params.get("topic") || "";
    year.value = params.get("year") || "";
  };
  const apply = (updateUrl = true) => {
    const words = normalize(search.value).trim().split(/\s+/).filter(Boolean);
    let visible = 0;
    rows.forEach(row => {
      const text = normalize(row.dataset.search);
      const match = (!topic.value || row.dataset.topic === topic.value) &&
        (!year.value || row.dataset.year === year.value) && words.every(word => text.includes(word));
      row.hidden = !match;
      if (match) visible += 1;
    });
    count.textContent = `${visible} ${visible === 1 ? "publication" : "publications"}`;
    empty.hidden = visible !== 0;
    if (updateUrl) {
      const url = new URL(location.href);
      [search, topic, year].forEach(field => field.value.trim() ? url.searchParams.set(field.name, field.value.trim()) : url.searchParams.delete(field.name));
      history.replaceState(null, "", url);
    }
  };
  restore();
  apply(false);
  filterForm.hidden = false;
  filterForm.addEventListener("input", () => apply());
  filterForm.addEventListener("submit", event => event.preventDefault());
  filterForm.addEventListener("reset", () => { search.value = ""; topic.value = ""; year.value = ""; apply(); });
  window.addEventListener("popstate", () => { restore(); apply(false); });
}
