async function loadWallpapers() {
  const response = await fetch('wallpapers.json');
  const wallpapers = await response.json();

  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '';

  wallpapers.forEach(wall => {
    const div = document.createElement('div');
    div.className = 'wallpaper';
    div.innerHTML = `
      <img src="${wall.image}" alt="${wall.name}">
      <a class="download-btn" href="${wall.image}" download>Download</a>
    `;
    gallery.appendChild(div);
  });
}

document.getElementById('searchBar').addEventListener('input', async (e) => {
  const query = e.target.value.toLowerCase();
  const response = await fetch('wallpapers.json');
  const wallpapers = await response.json();

  const filtered = wallpapers.filter(w => w.name.toLowerCase().includes(query));
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '';

  filtered.forEach(wall => {
    const div = document.createElement('div');
    div.className = 'wallpaper';
    div.innerHTML = `
      <img src="${wall.image}" alt="${wall.name}">
      <a class="download-btn" href="${wall.image}" download>Download</a>
    `;
    gallery.appendChild(div);
  });
});

loadWallpapers();
