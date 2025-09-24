const qs = (sel, ctx = document) => ctx.querySelector(sel);
const qsa = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

const nav = qs('#navbar');
const progressBar = qs('.progress .bar');

const setProgress = () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
  progressBar.style.width = pct + '%';
};

const setShrink = () => {
  if (window.scrollY > 10) nav.classList.add('shrink');
  else nav.classList.remove('shrink');
};

const sections = qsa('section.stripe');
const onScrollSpy = () => {
  const navRect = nav.getBoundingClientRect();
  const navBottom = navRect.bottom + window.scrollY;
  let activeId = sections[0]?.id;
  for (const sec of sections) {
    const rect = sec.getBoundingClientRect();
    const secTop = rect.top + window.scrollY;
    if (secTop <= navBottom + 2) activeId = sec.id;
  }
}

qsa('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href.length > 1) {
      e.preventDefault();
      const target = qs(href);
      if (target) {
        const y = target.getBoundingClientRect().top + window.scrollY - nav.offsetHeight + 1;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  });
});

const carousel = qs('.carousel');
const track = qs('.carousel .track');
const slides = qsa('.carousel .slide');
const prev = qs('.carousel .arrow.left');
const next = qs('.carousel .arrow.right');
const dotsWrap = qs('.carousel .dots');
let index = 0;

const makeDots = () => {
  dotsWrap.innerHTML = '';
  slides.forEach((_, i) => {
    const b = document.createElement('button');
    b.setAttribute('role', 'tab');
    b.setAttribute('aria-selected', i === index ? 'true' : 'false');
    b.addEventListener('click', () => goto(i));
    dotsWrap.appendChild(b);
  });
};

const goto = (i) => {
  index = (i + slides.length) % slides.length;
  track.style.transform = `translateX(-${index * 100}%)`;
  qsa('.carousel .dots button').forEach((d, j) => d.setAttribute('aria-selected', j === index ? 'true' : 'false'));
};
prev.addEventListener('click', () => goto(index - 1));
next.addEventListener('click', () => goto(index + 1));

qsa('[data-open]').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.getAttribute('data-open');
    const m = qs('#' + id);
    if (m) m.hidden = false;
  });
});
qsa('[data-close]').forEach(btn => {
  btn.addEventListener('click', () => {
    const m = btn.closest('.modal');
    if (m) m.hidden = true;
  });
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') qsa('.modal').forEach(m => m.hidden = true);
});
document.addEventListener('click', e => {
  const m = e.target.closest('.modal');
  if (m && e.target === m) m.hidden = true;
});

const navToggle = qs('.nav-toggle');
navToggle.addEventListener('click', () => {
  const expanded = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(expanded));
});

qs('#year').textContent = new Date().getFullYear();

makeDots();
goto(0);
setProgress();
setShrink();
onScrollSpy();
window.addEventListener('scroll', () => { setProgress(); setShrink(); onScrollSpy(); }, { passive: true });
