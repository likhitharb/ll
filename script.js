document.addEventListener('DOMContentLoaded', function(){
  const todayEl = document.getElementById('today');
  if(todayEl){
    const d = new Date();
    todayEl.textContent = d.toLocaleDateString();
  }

  // Smooth scroll for internal navigation (if used)
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) target.scrollIntoView({behavior:'smooth'});
    });
  });
});