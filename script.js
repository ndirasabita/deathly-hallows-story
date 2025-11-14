 const pages = document.querySelectorAll('.page');
  let current = 0;

  pages.forEach((page, index) => {
    page.style.zIndex = pages.length - index;
  });

  

  document.getElementById('next').addEventListener('click', () => {
    if (current < pages.length) {
      pages[current].style.transform = 'rotateY(-180deg)';
      pages[current].style.zIndex = current; 
      current++;
    }
  });
  

  document.getElementById('prev').addEventListener('click', () => {
    if (current > 0) {
      current--;
      pages[current].style.transform = 'rotateY(0deg)';
      pages[current].style.zIndex = pages.length - current;
    }
  });