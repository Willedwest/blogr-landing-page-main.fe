//Toggling the menu button
// Also calling on the body element
//adding a classlist and toggline property
//so as to also call on the modal menu for mobile version

const openClose = document.querySelector('.open-close');
// console.log(openClose)

openClose.addEventListener('click', () => {
  openClose.classList.toggle('menubutton');

  document.body.classList.toggle('navigation')
});


//TO preview accordion list in mobile mode

const accordionBtn = document.querySelectorAll('.headings');
// console.log(accordionBtn)

const diskparent = document.querySelectorAll('disk')

accordionBtn.forEach((accordion) => {
  accordion.addEventListener('click', (e) => {
    accordion.parentElement.classList.toggle('showlist');
    accordion.parentElement.classList.toggle('mobile')

    let content = accordion.nextElementSibling
    console.log(content)

    if(accordion.parentElement.classList.contains('showlist')) {
      content.style.maxHeight = content.scrollHeight + 'px'
    } else {
      content.style.maxHeight = null
    }

    accordionBtn.forEach((accordiontt) => {
      accordiontt.addEventListener('click', (e) => {
        // console.log(accordiontt)

        if(accordiontt !== accordion) {
          accordion.parentElement.classList.remove('showlist');
          accordion.parentElement.classList.remove('mobile');
          content.style.maxHeight = null
        }
        });
      });
    });
  });