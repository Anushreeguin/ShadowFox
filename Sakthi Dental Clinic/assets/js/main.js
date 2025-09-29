// Mobile nav toggle
const navToggle = () => {
  const btn = document.querySelector('.hamburger');
  const links = document.querySelector('.nav-links');
  if(!btn || !links) return;
  btn.addEventListener('click', ()=> links.classList.toggle('open'));
}

// Simple testimonial carousel
const carousel = () => {
  const track = document.querySelector('.carousel');
  if(!track) return;
  let index = 0;
  setInterval(()=>{
    const items = Array.from(track.children);
    if(items.length <= 1) return;
    index = (index + 1) % items.length;
    items.forEach((el,i)=>{
      el.style.transform = `translateX(${(i-index)*105}%)`;
      el.style.transition = 'transform .6s ease';
    })
  }, 3500);
}

// Basic form validation
const formValidation = () => {
  const form = document.querySelector('form.needs-validate');
  if(!form) return;
  form.addEventListener('submit', (e)=>{
    const name = form.querySelector('[name="name"]');
    const email = form.querySelector('[name="email"]');
    const phone = form.querySelector('[name="phone"]');
    const msg = form.querySelector('[name="message"]');
    const emailOk = /[^@\s]+@[^@\s]+\.[^@\s]+/.test(email.value.trim());
    if(!name.value.trim() || !emailOk || !phone.value.trim() || !msg.value.trim()){
      e.preventDefault();
      alert('Please fill in Name, a valid Email, Phone, and Message.');
    }
  })
}

window.addEventListener('DOMContentLoaded', ()=>{
  navToggle();
  carousel();
  formValidation();
});
