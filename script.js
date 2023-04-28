const toggleBtn = document.getElementById('drawer');
const myDiv = document.getElementById('menue');
const mediaQuery = window.matchMedia('(max-width: 600px)'); 

function handleMediaQueryChange(event) {
    if (event.matches) {
      // Media query matches, add your code here to handle the small screen layout
      myDiv.style.display = 'block';
      myDiv.style.display = 'none';
    } else {
      // Media query doesn't match, add your code here to handle the large screen layout
      myDiv.style.display = 'flex';
    }
  }
  mediaQuery.addEventListener('change', handleMediaQueryChange); 

toggleBtn.addEventListener('click', () => {
    if (myDiv.style.display === 'none') {
      myDiv.style.display = 'block';
    } else {
      myDiv.style.display = 'none';
    }
  });