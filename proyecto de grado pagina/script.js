const elementos = document.querySelectorAll('.hidden');

const mostrarElemento = () => {
  const trigger = window.innerHeight * 0.85;

  elementos.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) {
      el.classList.add('show');
    }
  });
};

window.addEventListener('scroll', mostrarElemento);
