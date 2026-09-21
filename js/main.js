// A tiny enhancement. All pages and links work without JavaScript.
// Keep only one robot question open at a time.
document.querySelectorAll('details:not(.outreach)').forEach((item) => {
  item.addEventListener('toggle', () => {
    if (item.open) document.querySelectorAll('details:not(.outreach)').forEach((other) => {
      if (other !== item) other.open = false;
    });
  });
});

// Load YouTube only when a visitor chooses a video. No automatic playback.
// Without JavaScript, the preview remains a normal YouTube link.
document.querySelectorAll('[data-video]').forEach((preview) => {
  preview.addEventListener('click', (event) => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    const frame = document.createElement('iframe');
    frame.className = 'video-frame';
    frame.src = 'https://www.youtube-nocookie.com/embed/' + preview.dataset.video;
    frame.title = preview.dataset.title;
    frame.allow = 'encrypted-media; picture-in-picture; fullscreen';
    frame.allowFullscreen = true;
    frame.referrerPolicy = 'strict-origin-when-cross-origin';
    preview.replaceWith(frame);
    frame.focus();
  });
});
