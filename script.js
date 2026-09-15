const header = document.querySelector('.header');
const menu = document.querySelector('.menu');
menu?.addEventListener('click', () => {
  const open = header.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => header.classList.remove('open')));

const expertiseDetails = [
  'Une attention portée au confort du pied, à la prévention et aux besoins du quotidien. Les modalités de consultation seront précisées avec le cabinet.',
  'Une approche centrée sur les liens entre appuis, posture et mouvement. Le contenu précis de l’évaluation sera confirmé avec Victoria HUBRECHT.',
  'Un accompagnement pensé pour la course, le trail, la randonnée et les pratiques de montagne, à adapter à votre activité.'
];
document.querySelectorAll('.expertise-list article p').forEach((paragraph, index) => paragraph.textContent = expertiseDetails[index]);

const map = document.createElement('section');
map.className = 'map-section';
map.setAttribute('aria-label', 'Accès au cabinet');
map.innerHTML = `
  <div class="map-copy">
    <p class="kicker">Accès au cabinet</p>
    <h2>Au cœur de<br><em>Moûtiers.</em></h2>
    <p>75, avenue du Pré de Foire<br>73600 Moûtiers</p>
    <p>Préparez votre trajet directement dans votre application de cartographie.</p>
    <a href="https://www.google.com/maps/dir/?api=1&destination=75+Avenue+du+Pre+de+Foire,+73600+Moutiers" target="_blank" rel="noopener">Lancer l’itinéraire&nbsp; →</a>
  </div>
  <div class="map-frame"><iframe title="Carte du cabinet Victoria Hubrecht à Moûtiers" src="https://www.google.com/maps?q=75+Avenue+du+Pre+de+Foire,+73600+Moutiers&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>`;
document.querySelector('.contact')?.insertAdjacentElement('beforebegin', map);

document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#contact-form')?.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.checkValidity()) { form.reportValidity(); return; }
  form.querySelector('.form-message').textContent = 'Merci. L’envoi du formulaire sera relié à la messagerie du cabinet avant la mise en ligne.';
  form.reset();
});
