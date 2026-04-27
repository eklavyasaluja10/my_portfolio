/* ============================================
   AETERNA — Main JavaScript
   ============================================ */

'use strict';

// ─── Image Configuration ───
// All 106 images — image1.jpg through image106.jpg
// To assign categories, change the series & tags for any entry.
// Available tags: 'ephemeral', 'brutalist', 'chrome', 'liminal'  (always keep 'all works')
const IMAGES = [
  { file: 'image1.jpg',   title: 'Frame 001',   series: 'GOLDEN HOUR', plate: '001', year: '2024', tags: ['golden hour', 'all works'] },
  { file: 'image2.jpg',   title: 'Frame 002',   series: 'FLORA',      plate: '002', year: '2024', tags: ['flora',      'all works'] },
  { file: 'image3.jpg',   title: 'Frame 003',   series: 'FLORA',      plate: '003', year: '2024', tags: ['flora',      'all works'] },
  { file: 'image4.jpg',   title: 'Frame 004',   series: 'FAUNA',      plate: '004', year: '2024', tags: ['fauna',      'all works'] },
  { file: 'image5.jpg',   title: 'Frame 005',   series: 'FAUNA', plate: '005', year: '2024', tags: ['fauna', 'all works'] },
  { file: 'image6.jpg',   title: 'Frame 006',   series: 'FLORA',      plate: '006', year: '2024', tags: ['flora',      'all works'] },
  { file: 'image7.jpg',   title: 'Frame 007',   series: 'HERITAGE',   plate: '007', year: '2024', tags: ['heritage',   'all works'] },
  { file: 'image8.jpg',   title: 'Frame 008',   series: 'FLORA', plate: '008', year: '2024', tags: ['flora', 'all works'] },
  { file: 'image9.jpg',   title: 'Frame 009',   series: 'FLORA',      plate: '009', year: '2024', tags: ['flora',      'all works'] },
  { file: 'image10.jpg',  title: 'Frame 010',   series: 'FLORA',      plate: '010', year: '2024', tags: ['flora',      'all works'] },
  { file: 'image11.jpg',  title: 'Frame 011',   series: 'FLORA',      plate: '011', year: '2024', tags: ['flora',      'all works'] },
  { file: 'image12.jpg',  title: 'Frame 012',   series: 'FLORA',      plate: '012', year: '2024', tags: ['flora',      'all works'] },
  { file: 'image13.jpg',  title: 'Frame 013',   series: 'HERITAGE',   plate: '013', year: '2024', tags: ['heritage',   'all works'] },
  { file: 'image14.jpg',  title: 'Frame 014',   series: 'HERITAGE', plate: '014', year: '2024', tags: ['heritage', 'all works'] },
  { file: 'image15.jpg',  title: 'Frame 015',   series: 'RANDOM CLICKS', plate: '015', year: '2024', tags: ['random clicks', 'all works'] },
  { file: 'image16.jpg',  title: 'Frame 016',   series: 'FAUNA',      plate: '016', year: '2024', tags: ['fauna',      'all works'] },
  { file: 'image17.jpg',  title: 'Frame 017',   series: 'FAUNA',      plate: '017', year: '2024', tags: ['fauna',      'all works'] },
  { file: 'image18.jpg',  title: 'Frame 018',   series: 'FLORA',      plate: '018', year: '2024', tags: ['flora',      'all works'] },
  { file: 'image19.jpg',  title: 'Frame 019',   series: 'URBAN NIGHTS', plate: '019', year: '2024', tags: ['urban nights', 'all works'] },
  { file: 'image20.jpg',  title: 'Frame 020',   series: 'FAUNA',      plate: '020', year: '2024', tags: ['fauna',      'all works'] },
  { file: 'image21.jpg',  title: 'Frame 021',   series: 'FLORA',   plate: '021', year: '2024', tags: ['flora',   'all works'] },
  { file: 'image22.jpg',  title: 'Frame 022',   series: 'HERITAGE',   plate: '022', year: '2024', tags: ['heritage',   'all works'] },
  { file: 'image23.jpg',  title: 'Frame 023',   series: 'FLORA',      plate: '023', year: '2024', tags: ['flora',      'all works'] },
  { file: 'image24.jpg',  title: 'Frame 024',   series: 'FLORA',      plate: '024', year: '2024', tags: ['flora',      'all works'] },
  { file: 'image25.jpg',  title: 'Frame 025',   series: 'RANDOM CLICKS',      plate: '025', year: '2024', tags: ['random clicks',      'all works'] },
  { file: 'image26.jpg',  title: 'Frame 026',   series: 'FAUNA',      plate: '026', year: '2024', tags: ['fauna',      'all works'] },
  { file: 'image27.jpg',  title: 'Frame 027',   series: 'URBAN NIGHTS', plate: '027', year: '2024', tags: ['urban nights', 'all works'] },
  { file: 'image28.jpg',  title: 'Frame 028',   series: 'RANDOM CLICKS', plate: '028', year: '2024', tags: ['random clicks', 'all works'] },
  { file: 'image29.jpg',  title: 'Frame 029',   series: 'FLORA',      plate: '029', year: '2024', tags: ['flora',      'all works'] },
  { file: 'image30.jpg',  title: 'Frame 030',   series: 'RANDOM CLICKS', plate: '030', year: '2024', tags: ['random clicks', 'all works'] },
  { file: 'image31.jpg',  title: 'Frame 031',   series: 'GOLDEN HOUR', plate: '031', year: '2024', tags: ['golden hour', 'all works'] },
  { file: 'image32.jpg',  title: 'Frame 032',   series: 'GOLDEN HOUR', plate: '032', year: '2024', tags: ['golden hour', 'all works'] },
  { file: 'image33.jpg',  title: 'Frame 033',   series: 'GOLDEN HOUR', plate: '033', year: '2024', tags: ['golden hour', 'all works'] },
  { file: 'image34.jpg',  title: 'Frame 034',   series: 'FLORA',      plate: '034', year: '2024', tags: ['flora',      'all works'] },
  { file: 'image35.jpg',  title: 'Frame 035',   series: 'FAUNA', plate: '035', year: '2024', tags: ['fauna', 'all works'] },
  { file: 'image36.jpg',  title: 'Frame 036',   series: 'HERITAGE',   plate: '036', year: '2024', tags: ['heritage',   'all works'] },
  { file: 'image37.jpg',  title: 'Frame 037',   series: 'FAUNA',      plate: '037', year: '2024', tags: ['fauna',      'all works'] },
  { file: 'image38.jpg',  title: 'Frame 038',   series: 'HERITAGE',   plate: '038', year: '2024', tags: ['heritage',   'all works'] },
  { file: 'image39.jpg',  title: 'Frame 039',   series: 'FAUNA',      plate: '039', year: '2024', tags: ['fauna',      'all works'] },
  { file: 'image40.jpg',  title: 'Frame 040',   series: 'URBAN NIGHTS', plate: '040', year: '2024', tags: ['urban nights', 'all works'] },
  { file: 'image41.jpg',  title: 'Frame 041',   series: 'URBAN NIGHTS', plate: '041', year: '2024', tags: ['urban nights', 'all works'] },
  { file: 'image42.jpg',  title: 'Frame 042',   series: 'URBAN NIGHTS', plate: '042', year: '2024', tags: ['urban nights', 'all works'] },
  { file: 'image43.jpg',  title: 'Frame 043',   series: 'GOLDEN HOUR',      plate: '043', year: '2024', tags: ['golden hour',      'all works'] },
  { file: 'image44.jpg',  title: 'Frame 044',   series: 'FLORA',      plate: '044', year: '2024', tags: ['flora',      'all works'] },
  { file: 'image45.jpg',  title: 'Frame 045',   series: 'URBAN NIGHTS', plate: '045', year: '2024', tags: ['urban nights', 'all works'] },
  { file: 'image46.jpg',  title: 'Frame 046',   series: 'HERITAGE',   plate: '046', year: '2024', tags: ['heritage',   'all works'] },
  { file: 'image47.jpg',  title: 'Frame 047',   series: 'RANDOM CLICKS',   plate: '047', year: '2024', tags: ['random clicks',   'all works'] },
  { file: 'image48.jpg',  title: 'Frame 048',   series: 'FLORA',      plate: '048', year: '2024', tags: ['flora',      'all works'] },
  { file: 'image49.jpg',  title: 'Frame 049',   series: 'FLORA',      plate: '049', year: '2024', tags: ['flora',      'all works'] },
  { file: 'image50.jpg',  title: 'Frame 050',   series: 'FLORA',      plate: '050', year: '2024', tags: ['flora',      'all works'] },
  { file: 'image51.jpg',  title: 'Frame 051',   series: 'RANDOM CLICKS', plate: '051', year: '2024', tags: ['random clicks', 'all works'] },
  { file: 'image52.jpg',  title: 'Frame 052',   series: 'URBAN NIGHTS', plate: '052', year: '2024', tags: ['urban nights', 'all works'] },
  { file: 'image53.jpg',  title: 'Frame 053',   series: 'URBAN NIGHTS', plate: '053', year: '2024', tags: ['urban nights', 'all works'] },
  { file: 'image54.jpg',  title: 'Frame 054',   series: 'GOLDEN HOUR', plate: '054', year: '2024', tags: ['golden hour', 'all works'] },
  { file: 'image55.jpg',  title: 'Frame 055',   series: 'FAUNA',      plate: '055', year: '2024', tags: ['fauna',      'all works'] },
  { file: 'image56.jpg',  title: 'Frame 056',   series: 'FLORA',      plate: '056', year: '2024', tags: ['flora',      'all works'] },
  { file: 'image57.jpg',  title: 'Frame 057',   series: 'FLORA',      plate: '057', year: '2024', tags: ['flora',      'all works'] },
  { file: 'image58.jpg',  title: 'Frame 058',   series: 'HERITAGE',   plate: '058', year: '2024', tags: ['heritage',   'all works'] },
  { file: 'image59.jpg',  title: 'Frame 059',   series: 'FLORA',      plate: '059', year: '2024', tags: ['flora',      'all works'] },
  { file: 'image60.jpg',  title: 'Frame 060',   series: 'FAUNA',   plate: '060', year: '2024', tags: ['fauna',   'all works'] },
  { file: 'image61.jpg',  title: 'Frame 061',   series: 'HERITAGE', plate: '061', year: '2024', tags: ['heritage', 'all works'] },
  { file: 'image62.jpg',  title: 'Frame 062',   series: 'URBAN NIGHTS',   plate: '062', year: '2024', tags: ['urban nights',   'all works'] },
  { file: 'image63.jpg',  title: 'Frame 063',   series: 'HERITAGE',   plate: '063', year: '2024', tags: ['heritage',   'all works'] },
  { file: 'image64.jpg',  title: 'Frame 064',   series: 'HERITAGE',   plate: '064', year: '2024', tags: ['heritage',   'all works'] },
  { file: 'image65.jpg',   title: 'Frame 065',   series: 'GOLDEN HOUR',      plate: '065', year: '2024', tags: ['golden hour',      'all works'] },
  { file: 'image66.jpg',  title: 'Frame 066',   series: 'FAUNA',      plate: '066', year: '2024', tags: ['fauna',      'all works'] },
  { file: 'image67.jpg',  title: 'Frame 067',   series: 'FLORA',      plate: '067', year: '2024', tags: ['flora',      'all works'] },
  { file: 'image68.jpg',  title: 'Frame 068',   series: 'URBAN NIGHTS', plate: '068', year: '2024', tags: ['urban nights', 'all works'] },
  { file: 'image69.jpg',  title: 'Frame 069',   series: 'RANDOM CLICKS', plate: '069', year: '2024', tags: ['random clicks', 'all works'] },
  { file: 'image70.jpg',  title: 'Frame 070',   series: 'GOLDEN HOUR', plate: '070', year: '2024', tags: ['golden hour', 'all works'] },
  { file: 'image71.jpg',  title: 'Frame 071',   series: 'URBAN NIGHTS', plate: '071', year: '2024', tags: ['urban nights', 'all works'] },
  { file: 'image72.jpg',  title: 'Frame 072',   series: 'FLORA', plate: '072', year: '2024', tags: ['flora', 'all works'] },
  { file: 'image73.jpg',  title: 'Frame 073',   series: 'HERITAGE',   plate: '073', year: '2024', tags: ['heritage',   'all works'] },
  { file: 'image74.jpeg',  title: 'Frame 074',   series: 'FAUNA', plate: '074', year: '2024', tags: ['fauna', 'all works'] },
  { file: 'image75.jpg',  title: 'Frame 075',   series: 'HERITAGE', plate: '075', year: '2024', tags: ['heritage', 'all works'] },
  { file: 'image76.jpg',  title: 'Frame 076',   series: 'URBAN NIGHTS',      plate: '076', year: '2024', tags: ['urban nights',      'all works'] },
  { file: 'image77.jpg',  title: 'Frame 077',   series: 'RANDOM CLICKS', plate: '077', year: '2024', tags: ['random clicks', 'all works'] },
  { file: 'image78.jpg',  title: 'Frame 078',   series: 'FLORA',      plate: '078', year: '2024', tags: ['flora',      'all works'] },
  { file: 'image79.jpg',  title: 'Frame 079',   series: 'FLORA',      plate: '079', year: '2024', tags: ['flora',      'all works'] },
  { file: 'image80.jpg',  title: 'Frame 080',   series: 'GOLDEN HOUR', plate: '080', year: '2024', tags: ['golden hour', 'all works'] },
  { file: 'image81.jpg',  title: 'Frame 081',   series: 'HERITAGE', plate: '081', year: '2024', tags: ['heritage', 'all works'] },
  { file: 'image82.jpeg',  title: 'Frame 082',   series: 'GOLDEN HOUR', plate: '082', year: '2024', tags: ['golden hour', 'all works'] },
  { file: 'image83.jpg',  title: 'Frame 083',   series: 'FAUNA',   plate: '083', year: '2024', tags: ['fauna',   'all works'] },
  { file: 'image84.jpg',  title: 'Frame 084',   series: 'HERITAGE',   plate: '084', year: '2024', tags: ['heritage',   'all works'] },
  { file: 'image85.jpg',  title: 'Frame 085',   series: 'FLORA',      plate: '085', year: '2024', tags: ['flora',      'all works'] },
  { file: 'image86.jpg',  title: 'Frame 086',   series: 'FLORA',      plate: '086', year: '2024', tags: ['flora',      'all works'] },
  { file: 'image87.jpg',  title: 'Frame 087',   series: 'FAUNA',      plate: '087', year: '2024', tags: ['fauna',      'all works'] },
  { file: 'image88.jpg',  title: 'Frame 088',   series: 'FLORA',      plate: '088', year: '2024', tags: ['flora',      'all works'] },
  { file: 'image89.jpg',  title: 'Frame 089',   series: 'FAUNA',      plate: '089', year: '2024', tags: ['fauna',      'all works'] },
  { file: 'image90.jpg',  title: 'Frame 090',   series: 'FLORA',      plate: '090', year: '2024', tags: ['flora',      'all works'] },
  { file: 'image91.jpg',  title: 'Frame 091',   series: 'FAUNA',      plate: '091', year: '2024', tags: ['fauna',      'all works'] },
  { file: 'image92.jpg',  title: 'Frame 092',   series: 'HERITAGE',   plate: '092', year: '2024', tags: ['heritage',   'all works'] },
  { file: 'image93.jpg',  title: 'Frame 093',   series: 'URBAN NIGHTS', plate: '093', year: '2024', tags: ['urban nights', 'all works'] },
  { file: 'image94.jpg',  title: 'Frame 094',   series: 'RANDOM CLICKS', plate: '094', year: '2024', tags: ['random clicks', 'all works'] },
  { file: 'image95.jpg',  title: 'Frame 095',   series: 'FAUNA', plate: '095', year: '2024', tags: ['fauna', 'all works'] },
  { file: 'image96.jpg',  title: 'Frame 096',   series: 'FLORA',      plate: '096', year: '2024', tags: ['flora',      'all works'] },
  { file: 'image97.jpg',  title: 'Frame 097',   series: 'URBAN NIGHTS', plate: '097', year: '2024', tags: ['urban nights', 'all works'] },
  { file: 'image98.jpg',  title: 'Frame 098',   series: 'HERITAGE',   plate: '098', year: '2024', tags: ['heritage',   'all works'] },
  { file: 'image99.jpg',  title: 'Frame 099',   series: 'FLORA',      plate: '099', year: '2024', tags: ['flora',      'all works'] },
  { file: 'image100.jpg', title: 'Frame 100',   series: 'GOLDEN HOUR', plate: '100', year: '2024', tags: ['golden hour', 'all works'] },
  { file: 'image101.jpg', title: 'Frame 101',   series: 'FAUNA',      plate: '101', year: '2024', tags: ['fauna',      'all works'] },
  { file: 'image102.jpg', title: 'Frame 102',   series: 'FLORA',   plate: '102', year: '2024', tags: ['flora',   'all works'] },
  { file: 'image103.jpg', title: 'Frame 103',   series: 'HERITAGE',   plate: '103', year: '2024', tags: ['heritage',   'all works'] },
  { file: 'image104.jpg', title: 'Frame 104',   series: 'URBAN NIGHTS',      plate: '104', year: '2024', tags: ['urban nights',      'all works'] },
  { file: 'image105.jpg', title: 'Frame 105',   series: 'FLORA',      plate: '105', year: '2024', tags: ['flora',      'all works'] },
  { file: 'image106.jpg', title: 'Frame 106',   series: 'BRUTALIST', plate: '106', year: '2024', tags: ['brutalist',  'all works'] },
];
// ─────────────────────────────────────────────────────────────────
// HOW TO ASSIGN CATEGORIES:
// Each image has a `tags` array. Always keep 'all works'.
// Add any of: 'ephemeral', 'brutalist', 'chrome', 'liminal'
// Example — to move image5 to Chrome:
//   tags: ['chrome', 'all works']
// An image can belong to multiple categories:
//   tags: ['chrome', 'ephemeral', 'all works']
// ─────────────────────────────────────────────────────────────────

// ─── State ───
let currentPage = 'home';
let carouselIndex = 0;
let carouselTimer = null;
let activeFilter = 'all works';

// ─── DOM Helpers ───
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

// ─── Custom Cursor ───
function initCursor() {
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursor-ring');
  let rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
    // Ring follows with slight lag via requestAnimationFrame
    rx += (e.clientX - rx) * 0.12;
    ry += (e.clientY - ry) * 0.12;
  });

  function animateRing() {
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animateRing);
  }

  document.addEventListener('mousemove', e => {
    rx = rx || e.clientX;
    ry = ry || e.clientY;
  });

  animateRing();
}

// ─── Navigation Scroll Effect ───
function initNav() {
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
    // Scroll progress
    const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
    document.getElementById('scroll-progress').style.width = pct + '%';
  });
}

// ─── Page Routing ───
function navigateTo(page, extra = null) {
  if (page === currentPage && !extra) return;

  const overlay = document.getElementById('page-transition');

  // Animate overlay in
  overlay.classList.add('entering');

  setTimeout(() => {
    // Hide all pages
    $$('.page').forEach(p => { p.classList.remove('active', 'visible'); });

    // Update nav active state
    $$('.nav-links a').forEach(a => {
      a.classList.toggle('active', a.dataset.page === page);
    });

    // Show target page
    const target = document.getElementById('page-' + page);
    if (target) {
      target.classList.add('active');
      window.scrollTo(0, 0);
      currentPage = page;

      // Build page content if needed
      if (page === 'archive') buildArchive();
      if (page === 'home') buildCarousel();
      if (page === 'series') buildSeries(extra);
      if (page === 'manifesto') buildManifesto();

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          target.classList.add('visible');
        });
      });
    }

    // Animate overlay out
    overlay.classList.remove('entering');
    overlay.classList.add('leaving');
    setTimeout(() => overlay.classList.remove('leaving'), 600);
  }, 500);
}

// ─── HOME / Carousel ───
function buildCarousel() {
  const track = document.getElementById('carousel-track');
  const dotsEl = document.getElementById('carousel-dots');
  if (!track) return;

  // Build slides from first 7 images (excluding image4)
  const slides = IMAGES.slice(0, 7).filter(img => img.file !== 'image4.jpg');

  track.innerHTML = slides.map((img, i) =>
    `<div class="carousel-item" data-index="${i}">
       <img src="assets/${img.file}" alt="${img.title}" loading="lazy">
     </div>`
  ).join('');

  dotsEl.innerHTML = slides.map((_, i) =>
    `<div class="carousel-dot${i === 0 ? ' active' : ''}" data-dot="${i}"></div>`
  ).join('');

  $$('.carousel-dot', dotsEl).forEach(dot => {
    dot.addEventListener('click', () => goToSlide(+dot.dataset.dot));
  });

  // Click center image → go to series
  track.addEventListener('click', e => {
    const item = e.target.closest('.carousel-item');
    if (item && item.classList.contains('pos-center')) {
      navigateTo('series', +item.dataset.index);
    }
  });

  goToSlide(0);
  startCarouselTimer();
}

function positionClasses(count) {
  // Returns class names for each position relative to center
  return ['pos-center', 'pos-right1', 'pos-right2', 'pos-hidden', 'pos-left2', 'pos-left1'];
}

function goToSlide(index) {
  const items = $$('.carousel-item', document.getElementById('carousel-track'));
  if (!items.length) return;

  carouselIndex = ((index % items.length) + items.length) % items.length;

  const positions = ['pos-center', 'pos-right1', 'pos-right2', 'pos-hidden', 'pos-hidden', 'pos-left2', 'pos-left1'];
  const n = items.length;

  items.forEach((item, i) => {
    item.className = 'carousel-item';
    const offset = ((i - carouselIndex) % n + n) % n;
    const cls = positions[offset] || 'pos-hidden';
    item.classList.add(cls);
  });

  $$('.carousel-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === carouselIndex);
  });
}

function startCarouselTimer() {
  clearInterval(carouselTimer);
  carouselTimer = setInterval(() => {
    const items = $$('.carousel-item');
    if (items.length) goToSlide(carouselIndex + 1);
  }, 4000);
}

// ─── ARCHIVE ───
let archiveBuilt = false;

function buildArchive() {
  const grid = document.getElementById('photo-grid');
  if (!grid) return;

  // Attach filter tab listeners only once
  if (!archiveBuilt) {
    $$('.filter-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        $$('.filter-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        activeFilter = tab.dataset.filter;
        renderGrid(activeFilter);
      });
    });
    archiveBuilt = true;
  }

  renderGrid(activeFilter);
}

function renderGrid(filter) {
  const grid = document.getElementById('photo-grid');
  if (!grid) return;

  const filtered = filter === 'all works'
    ? IMAGES
    : IMAGES.filter(img => img.tags.includes(filter.toLowerCase()));

  // Build all items — no limit, all visible via scroll-reveal
  grid.innerHTML = filtered.map((img, i) =>
    `<div class="grid-item" data-i="${i}" style="transition-delay:${(i % 9) * 0.05}s">
       <img src="assets/${img.file}" alt="${img.title}" loading="lazy">
       <div class="grid-overlay">
         <div class="grid-meta">
           <div class="grid-plate">${img.series} · PLATE ${img.plate}</div>
           <div class="grid-title">${img.title}</div>
         </div>
       </div>
     </div>`
  ).join('');

  // Update count badge
  const countEl = document.getElementById('archive-count');
  if (countEl) {
    countEl.textContent = filtered.length;
    // Move badge to active tab
    $$('.filter-tab').forEach(t => {
      const existing = t.querySelector('.tab-count');
      if (existing) existing.remove();
    });
    const activeTab = document.querySelector('.filter-tab.active');
    if (activeTab) {
      const badge = document.createElement('span');
      badge.className = 'tab-count';
      badge.id = 'archive-count';
      badge.textContent = filtered.length;
      activeTab.appendChild(badge);
    }
  }

  // Click to open lightbox
  $$('.grid-item', grid).forEach(item => {
    item.addEventListener('click', () => {
      const i = +item.dataset.i;
      openLightbox(`assets/${filtered[i].file}`, filtered[i].title);
    });
  });

  // Scroll-reveal all items
  observeReveal($$('.grid-item', grid));
}

// ─── SERIES DETAIL ───
function buildSeries(imgIndex) {
  const img = IMAGES[imgIndex] || IMAGES[0];
  const page = document.getElementById('page-series');

  page.querySelector('.series-hero-img').style.backgroundImage = `url(assets/${img.file})`;
  page.querySelector('.series-hero-img').innerHTML = `<img src="assets/${img.file}" alt="${img.title}" style="width:100%;height:100%;object-fit:cover;">`;
  page.querySelector('.series-series-no').textContent = `SERIES NO. 0${img.plate} — ${img.series}`;
  page.querySelector('.series-hero-title').textContent = img.title;

  // Aside image
  page.querySelector('.series-aside-img').innerHTML = `<img src="assets/${img.file}" alt="${img.title}">`;

  // Related plates (pick 3 others)
  const related = IMAGES.filter((_, i) => i !== imgIndex).slice(0, 3);
  page.querySelector('.series-plates').innerHTML = related.map((r, i) =>
    `<div class="plate-item" style="transition-delay:${i * 0.1}s">
       <div class="plate-img"><img src="assets/${r.file}" alt="${r.title}" loading="lazy"></div>
       <div class="plate-label">PLATE ${r.plate.padStart(2,'0')}</div>
       <div class="plate-title">${r.title}</div>
     </div>`
  ).join('');

  // Pull quote banner
  const bannerImg = IMAGES[(imgIndex + 4) % IMAGES.length];
  const bannerEl = page.querySelector('.pull-quote-banner-bg');
  if (bannerEl) bannerEl.innerHTML = `<img src="assets/${bannerImg.file}" alt="quote bg" style="width:100%;height:100%;object-fit:cover;">`;

  observeReveal($$('.plate-item', page));
}

// ─── MANIFESTO ───
function buildManifesto() {
  // Profile picture is at assets/profile.jpg (or .png etc.)
  const img = document.getElementById('profile-img');
  if (img) img.src = 'assets/profile.jpeg';
}

// ─── LIGHTBOX ───
function openLightbox(src, title) {
  const lb = document.getElementById('lightbox');
  const lbImg = lb.querySelector('img');
  lbImg.src = src;
  lbImg.alt = title;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

// ─── Scroll Reveal ───
function observeReveal(elements) {
  if (!elements.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  elements.forEach(el => observer.observe(el));
}

// ─── Contact Form ───
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const name    = form.querySelector('[name="name"]').value;
    const email   = form.querySelector('[name="email"]').value;
    const message = form.querySelector('[name="message"]').value;

    // Open mailto with prefilled subject & body
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body    = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:eklavyasaluja99@gmail.com?subject=${subject}&body=${body}`;

    const btn = form.querySelector('.btn-send');
    btn.textContent = 'OPENING MAIL APP...';
    setTimeout(() => { btn.textContent = 'SEND MESSAGE'; }, 3000);
  });
}

// ─── Parallax on Home ───
function initParallax() {
  window.addEventListener('scroll', () => {
    if (currentPage !== 'home') return;
    const y = window.scrollY;
    const track = document.getElementById('carousel-track');
    if (track) track.style.transform = `translateY(${y * 0.15}px)`;
  });
}

// ─── Init ───
document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initNav();
  initParallax();

  // Nav links
  $$('[data-page]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      navigateTo(el.dataset.page, el.dataset.extra ? +el.dataset.extra : null);
    });
  });

  // Lightbox close
  document.getElementById('lightbox').addEventListener('click', e => {
    if (!e.target.closest('.lightbox-inner') || e.target.closest('.lightbox-close')) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();
  });

  // Contact form
  initContactForm();

  // Start on home
  const homePage = document.getElementById('page-home');
  homePage.classList.add('active');
  setTimeout(() => homePage.classList.add('visible'), 50);
  buildCarousel();
});
