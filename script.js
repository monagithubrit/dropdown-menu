let linksContainer = document.querySelector('.link');


const icon = document.querySelector('.menu').addEventListener('click' , ()=>{
    if (linksContainer.style.display === 'none') {
        linksContainer.style.display = 'block';
      } else {
        linksContainer.style.display = 'none';
      }
})