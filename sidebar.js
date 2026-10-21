/* EDIT THE NAVIGATION HERE. Add a project object to projects; every page updates.
   Keep this script in the same folder as your HTML files. */
(() => {
  'use strict';
  const navigation = {
  "stamp": "https://media.cargocollective.com/1/10/322251/headerimg/light-stamp-180-copy.png",
  "now": {
    "href": "pkan",
    "label": "paintings for pkan"
  },
  "projects": [
    {
      "year": "2026",
      "title": "post flower",
      "href": "post-flower"
    },
    {
      "year": "2026",
      "title": "i, sunflower",
      "href": "sunflower"
    },
    {
      "year": "2025",
      "title": "blossoms",
      "href": "blossoms"
    },
    {
      "year": "2025",
      "title": "ink paintings",
      "href": "ink-paintings"
    },
    {
      "year": "2024",
      "title": "ink drawings",
      "href": "more-ink-drawings"
    },
    {
      "year": "2023",
      "title": "the house in the trees",
      "href": "house-in-the-trees"
    },
    {
      "year": "2022",
      "title": "sister",
      "href": "sister"
    },
    {
      "year": "2019",
      "title": "coniunctio",
      "href": "coniunctio"
    },
    {
      "year": "2018",
      "title": "half mourning",
      "href": "half-mourning"
    },
    {
      "year": "2017",
      "title": "copy kitty",
      "href": "copy-kitty"
    },
    {
      "year": "2016",
      "title": "ghost",
      "href": "ghost"
    },
    {
      "year": "2015",
      "title": "labyrinths",
      "href": "labyrinths"
    },
    {
      "year": "2014",
      "title": "bad korean",
      "href": "bad-korean"
    }
  ],
  "information": [
    {
      "title": "about",
      "href": "about"
    },
    {
      "title": "teaching",
      "href": "teaching"
    },
    {
      "title": "cv",
      "href": "cv"
    }
  ]
};
  const script = document.currentScript;
  const base = new URL('.', script.src);
  const localPreview = location.protocol === 'file:';
  const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function destination(path) {
    if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
    const url = new URL(path, base);
    if (localPreview && !/\.[a-z0-9]+$/i.test(url.pathname)) url.pathname += '.html';
    return url.href;
  }
  const link = (href, content) => `<a href="${escape(destination(href))}">${content}</a>`;
  const sidebar = document.createElement('aside');
  sidebar.id = 'shared-sidebar';
  sidebar.className = 'sidebar';
  sidebar.setAttribute('aria-label', 'Site navigation');
  sidebar.innerHTML = `
    <h1 class="name"><a href="${escape(destination('index'))}" aria-label="home"><img class="stamp" src="${escape(navigation.stamp)}" alt="kyung-me stamp"></a></h1>
    <div class="side-top"><p class="studio-note"><span class="studio-now">now</span>${link(navigation.now.href, escape(navigation.now.label))}</p></div>
    <button class="mobile-menu-button" type="button" aria-expanded="false" aria-controls="project-links information-links">works +</button>
    <nav class="projects" id="project-links" aria-label="projects">${navigation.projects.map(project => link(project.href, `<span class="project-year">${escape(project.year)}</span><span class="project-name">${escape(project.title)}</span>`)).join('')}</nav>
    <nav class="menu-secondary" id="information-links" aria-label="information pages">${navigation.information.map(item => link(item.href, escape(item.title))).join('')}</nav>`;
  script.replaceWith(sidebar);
  const menu = sidebar.querySelector('.mobile-menu-button');
  const setOpen = open => {
    sidebar.classList.toggle('menu-open', open);
    menu.setAttribute('aria-expanded', String(open));
    menu.textContent = open ? 'works −' : 'works +';
  };
  menu.addEventListener('click', () => setOpen(!sidebar.classList.contains('menu-open')));
  sidebar.addEventListener('keydown', event => {
    if (event.key === 'Escape' && sidebar.classList.contains('menu-open')) {
      setOpen(false);menu.focus();
    }
  });
  const page = location.pathname.replace(/\.html$/, '').replace(/\/$/, '') || '/index';
  sidebar.querySelectorAll('a').forEach(a => {
    const target = new URL(a.href).pathname.replace(/\.html$/, '').replace(/\/$/, '');
    if (target === page) a.setAttribute('aria-current', 'page');
  });
})();
