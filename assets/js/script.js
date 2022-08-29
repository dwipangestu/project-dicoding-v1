const toggleButton = document.getElementsByClassName('navbar-toggle')[0];
const navbarLinks = document.getElementsByClassName('navbar-links');
toggleButton.addEventListener('click', function() {
    for (var i=0; i<navbarLinks.length; i++)
navbarLinks[i].classList.toggle('active');
});

window.onscroll = function() {scrollFunction()};
         
        function scrollFunction() {
          if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
            document.getElementById("scroll-btn").style.display = "block";
          } else {
            document.getElementById("scroll-btn").style.display = "none";
          }
        }
         
        function topFunction() {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }