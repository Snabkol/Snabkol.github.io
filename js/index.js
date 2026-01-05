class Header extends HTMLElement 
{
  constructor() 
  {
    super();
  }


    connectedCallback() 
    {
        this.innerHTML =
        `
        <header class="header">
            <div class="header__content">
            <div class="header__logo-container"><a href="../index.html#"><span class="header__logo-sub">Calle Wahlstedt</span></a></div>
            <div class="header__main">
                <ul class="header__links">
                <li class="header__link-wrapper"><a href="../index.html#" class="header__link">                                         Home       </a></li>
                <li class="header__link-wrapper"><a href="../index.html#about" class="header__link">                                    About      </a></li>
                <li class="header__link-wrapper"><a href="../index.html#projects" class="header__link">                                 Projects   </a></li>
                <li class="header__link-wrapper"><a href="../blog-main.html#" class="header__link">                                     Blog       </a></li>
                <li class="header__link-wrapper"><a href="../assets/documents/CV.pdf" class="header__link" target="_blank">             My CV      </a></li>
                </ul>

                <div class="header__main-ham-menu-cont">
                <img src="./assets/svg/ham-menu.svg" alt="hamburger menu" class="header__main-ham-menu" />
                <img src="./assets/svg/ham-menu-close.svg" alt="hamburger menu close"
                    class="header__main-ham-menu-close d-none" />
                </div>

            </div>
            </div>

            <!-- HAMBURGER MENU -->
            <div class="header__sm-menu">
            <div class="header__sm-menu-content">
                <ul class="header__sm-menu-links">
                <li class="header__sm-menu-link"><a href="index.html#">                         Home        </a></li>
                <li class="header__sm-menu-link"><a href="index.html#about">                    About       </a></li>
                <li class="header__sm-menu-link"><a href="index.html#projects">                 Projects    </a></li>
                <li class="header__sm-menu-link"><a href="blog-main.html">                      Blog        </a></li>
                <li class="header__sm-menu-link"><a href="./assets/documents/CV.pdf">           CV          </a></li>
                </ul>
            </div>
            </div>

        </header>
        `;
    }
}

class Footer extends HTMLElement 
{
  constructor() 
  {
    super();
  }
    connectedCallback() 
    {
        this.innerHTML =
        `
        <footer class="main-footer">
          <div class="main-container">
            <div class="main-footer__upper">

              <div class="main-footer__row main-footer__row-left">
                <h4 class="heading heading-sm text-lt">You've reached <a class = "hidden-hyperlink-inv" href="https://youtu.be/j0JdZSvyfDk?si=AKq6kbmK5aWavwnp&t=16" target ="_blank"> the end!</h4>
                <p class="main-footer__short-desc">
                  Check out my social links and <a class="hidden-hyperlink"
                    href="https://youtu.be/z2LDn_wOMkE?si=E9iwQ-dFhyU5_FmB" target="_blank"><strong>have a great
                      day.</strong></a>
                </p>
              </div>

              <div class="main-footer__row main-footer__row-right">
                <h2 class="heading heading-sm desktop-right-aligned"><span>Socials</span></h2>
                <div class="main-footer__social-cont">
                  <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/carwah/"><img class="btn main-footer__icon" src="../assets/png/linkedin-ico.png" alt="icon" />      </a>
                  <a target="_blank" rel="noreferrer" href="https://github.com/Snabkol"><img class="btn main-footer__icon" src="../assets/png/github-ico.png" alt="icon" />                 </a>
                  <a target="_blank" rel="noreferrer" href="https://snabkol.itch.io/"><img class="btn main-footer__icon" src="../assets/png/itchio-ico.png" alt="icon" />                   </a>
                  <a target="_blank" rel="noreferrer" href="https://bsky.app/profile/snabkol.bsky.social"><img class="btn main-footer__icon" src="../assets/png/Bsky-ico.png" alt="icon" /> </a>
                </div>
              </div>

            </div>
          </div>
        </footer>
        `;
    }
}

customElements.define('footer-component', Footer);
customElements.define('header-component', Header);

// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}