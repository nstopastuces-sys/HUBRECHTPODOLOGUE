const header = document.querySelector('.site-header');
const menu = document.querySelector('.menu-button');
menu?.addEventListener('click', () => {
  const expanded = header.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(expanded));
});
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => {
  header.classList.remove('open'); menu?.setAttribute('aria-expanded', 'false');
}));
document.querySelector('#contact-form')?.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const message = form.querySelector('.form-message');
  if (!form.checkValidity()) { form.reportValidity(); return; }
  message.textContent = 'Merci pour votre message. Le formulaire sera relié à la messagerie du cabinet avant la mise en ligne.';
  form.reset();
});
