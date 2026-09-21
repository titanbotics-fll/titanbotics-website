// A tiny enhancement. All pages and links work without JavaScript.
// Keep only one robot question open at a time.
document.querySelectorAll('details').forEach((item) => {
  item.addEventListener('toggle', () => {
    if (item.open) document.querySelectorAll('details').forEach((other) => {
      if (other !== item) other.open = false;
    });
  });
});
