var elHeaderToggler = document.querySelector('.site-header__toggler');
var elHeaderSection = document.querySelector('.site-header');

elHeaderToggler.addEventListener("click", function () {
  elHeaderSection.classList.toggle('site-header--open');
})

