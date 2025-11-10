// ----- dynamic year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// ----- define your projects here (title, description, optional tag)
const projects = [
  {
    title: "Project One: Short Title",
    desc: "One-sentence (or two) description of what you built, why it matters, and the method or dataset.",
    tag: "Manuscript"
  },
  {
    title: "Project Two: Short Title",
    desc: "Brief description highlighting the research question and approach. Add a link if desired.",
    tag: "Preprint"
  },
  {
    title: "Project Three",
    desc: "A sentence about design/experiment + key finding. Keep it concise but informative.",
    tag: "Experiment"
  },
  {
    title: "Project Four",
    desc: "Computational or statistical piece? Summarize the technique and application in plain language.",
    tag: "Methods"
  },
  {
    title: "Project Five",
    desc: "Another project. Mention collaborators or lab if relevant and a one-line impact statement.",
    tag: "Collab"
  },
  {
    title: "Project Six",
    desc: "Anything else you’d like to highlight—poster, dataset, tool, or workshop.",
    tag: "Poster"
  }
];

// ----- render project cards
const grid = document.getElementById('projectGrid');
projects.forEach((p, i) => {
  const card = document.createElement('article');
  card.className = 'card';
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-labelledby', `card-title-${i}`);
  card.innerHTML = `
    <div class="card-title" id="card-title-${i}">${p.title}</div>
    <div class="card-desc" aria-hidden="true">
      <p>${p.desc}</p>
      ${p.tag ? `<div class="card-badge">${p.tag}</div>` : ''}
    </div>
  `;
  // Toggle open on click / Enter (mobile & keyboard)
  const toggle = () => card.classList.toggle('is-open');
  card.addEventListener('click', toggle);
  card.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
  });
  grid.appendChild(card);
});
