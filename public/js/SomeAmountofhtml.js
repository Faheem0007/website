

let scriptTaglink = `
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta http-equiv="X-UA-Compatible" content="ie=edge" />
<link rel="stylesheet" href="./css/style.css" />
<link
  rel="stylesheet"
  href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="anonymous"
/>

<script
  src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
  integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
  crossorigin="anonymous"
></script>
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
  integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
  crossorigin="anonymous"
></script>
<script
  src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
  integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
  crossorigin="anonymous"
></script>
<title>All Project</title>`;

let head = document.getElementsByTagName('head');
head[0].innerHTML= scriptTaglink













const Nav = document.getElementById('nav');
Nav.innerHTML += `
<nav class="navbar sticky-top navbar-expand-lg navbar-light  sb-navbar">
  <div class="container">
    <a class="navbar-brand" href="/">
      <img src="./images/LogoMakr_5kWlgy.png" alt="EwiG LIFE"  style="height: 56px;"/>
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>
    <div
      class="collapse navbar-collapse"
      id="navbarSupportedContent"
    >
      <ul class="navbar-nav ml-auto pt-3 pt-lg-0">
        <li class="nav-item dropdown">
          <a
            class="nav-link "
            href="/"
            id="themesDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Home
          </a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link "
            href="#"
            id="templatesDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Templates
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/snippets/">Snippets</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link "
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Learn
          </a>
          <div
            class="dropdown-menu border-0 shadow animate slideIn"
            aria-labelledby="navbarDropdown"
          >
            <a class="dropdown-item" href="/guides/"
              >Guides &amp; Tutorials</a
            >
            <span
              class="d-block"
              tabindex="0"
              data-toggle="tooltip"
              data-placement="left"
              title=""
              data-container=".sb-navbar"
              data-original-title="Under Development!"
            >
              <a class="dropdown-item disabled" href="#"
                >Courses
                <span
                  class="ml-2 badge badge-pill badge-secondary d-lg-none"
                  >Under Development!</span
                ></a
              >
            </span>
            <div class="dropdown-divider"></div>
            <span
              class="d-block"
              tabindex="0"
              data-toggle="tooltip"
              data-placement="left"
              title=""
              data-container=".sb-navbar"
              data-original-title="Under Development!"
            >
              <a class="dropdown-item disabled" href="#"
                >Books
                <span
                  class="ml-2 badge badge-pill badge-secondary d-lg-none"
                  >Under Development!</span
                ></a
              >
            </span>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/bootstrap-resources">Resources</a>
        </li>
      </ul>
      <ul class="navbar-nav pb-3 pb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="/blog">Blog</a>
        </li>
        <li class="nav-item d-none d-lg-inline-block">
          <a
            href="https://twitter.com/sbootstrap"
            class="nav-link text-twitter"
          >
            <i class="fab fa-twitter"></i>
          </a>
        </li>
        <li class="nav-item d-none d-lg-inline-block">
          <a
            href="https://github.com/blackrockdigital"
            class="nav-link text-github"
          >
            <i class="fab fa-github"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

`