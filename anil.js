let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
    
        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            });
            sec.classList.add('show-animate');
        }
        else{
            sec.classList.remove('show-animate');
        }
    });
    
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', this.innerHeight +this.scrollY >= document.scrollingElement.scrollHeight);
}
// Get the current number of views
let views = localStorage.getItem('views');

// Check if views exist in localStorage
if(views) {
   // Update the views counter
   document.getElementById('views').innerText = views;
} else {
   // Set the views counter to 0
   views = 0;
}

// Increment the views counter
views++;
localStorage.setItem('views', views);
document.getElementById('views').innerText = views;
const scriptURL =
        "https://script.google.com/macros/s/AKfycbzbLnLtWZNN3G0BiCoPVbI2Y-DK0tJ-v7G2qeZ5Ia1nds4hFFiUiUyf-RhTVM9zdDeh/exec";
      const form = document.forms["google-sheet-form"];

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        fetch(scriptURL, {
          method: "POST",
          body: new FormData(form)
        })
          .then((response) => alert("Thanks For showing intrest and we will notify you!!!"))
          .catch((error) => console.error("Error!", error.message));
      });

