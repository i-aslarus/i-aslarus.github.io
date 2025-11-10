// ----- dynamic year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// ----- define your projects here (title, description, optional tag)
const projects = [
  {
    title: "Empathic accuracy and interpersonal emotion regulation in dyadic experience sampling",
    desc: "During social interactions, people infer how each other feels, with varying levels of accuracy. Does our insight into what another person feels support our efficacy at regulating their emotions?",
    tag: "Ongoing"
  },
  {
    title: "Depression alters anticipated and experienced emotions during social interactions and solitude",
    desc: "Depression is characterized by social withdrawal, but it remains unknown whether this is driven by differences in emotional experience during sociality. Do depressive symptoms affect the way we anticipate and experience the emotional benefits of sociality?",
    tag: "Ongoing"
  },
  {
    title: "Community-level emotional synchrony and idiosyncrasy in depression",
    desc: "What does it mean to be emotionally 'in sync' with one's community? How might different types of emotional idiosyncrasy emerge as downstream consequences of—and upstream risk factors for—depression?",
    tag: "Ongoing"
  },
  {
    title: "Social buffering of stress during a presidential election",
    desc: "In a project led by Su Doga Karaca, a full-time research assistant in the SSNL, we explore how political conversation affects momentary fluctuations in stress during a national political stressor.",
    tag: "Collab"
  },
  {
    title: "Loneliness is predicted by social network uncertainty and instability",
    desc: "In a project led by Molina Zhang, a PhD student in the FeldmanHall lab at Brown, we are investigating how loneliness is linked to veridical and perceived features of the broader social network surrounding an individual.",
    tag: "Collab"
  },
  {
    title: "Distinct mechanisms of social category perception bias social learning",
    desc: "Multiple cognitive mechanisms enable people to represent discrete categories, including social categories, that are defined by continuous underlying dimensions. At a computational level, how might the nature of our representations lead us astray during future social learning, with consequences like stereotype formation?",
    tag: "Ongoing"
  },
  {
    title: "Early insight into social network structure predicts climbing the social ladder",
    desc: "Does what people know about their surrounding social network have implications for social success? In a longitudinal study of an emerging social network, we find that individuals who are aware of their network's community structure rise to more influential positions over time.",
    tag: "Publication"
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
