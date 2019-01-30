const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM <br>Is<br> Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street<br> Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

let nav_items = Object.values(siteContent.nav);
let nav = document.querySelector("nav");
let nav_links = nav.querySelectorAll("a");
[...nav_links].forEach((nav_link, i) => (nav_link.textContent = nav_items[i]));

let h1 = document.querySelector("h1");
h1.innerHTML = siteContent.cta.h1;

let button = (document.querySelector("button").textContent =
  siteContent.cta.button);

let cta_img = document.getElementById("cta-img");
cta_img.src = siteContent.cta["img-src"];

let top_content = document.querySelector(".top-content");
let tp_text_content = top_content.querySelectorAll(".text-content");

tp_text_content[0].querySelector("h4").textContent =
  siteContent["main-content"]["features-h4"];
tp_text_content[0].querySelector("p").textContent =
  siteContent["main-content"]["features-content"];

tp_text_content[1].querySelector("h4").textContent =
  siteContent["main-content"]["about-h4"];
tp_text_content[1].querySelector("p").textContent =
  siteContent["main-content"]["about-content"];

let middle_img = document.getElementById("middle-img");
middle_img.src = siteContent["main-content"]["middle-img-src"];

let bottom_content = document.querySelector(".bottom-content");
let bt_text_content = bottom_content.querySelectorAll(".text-content");

bt_text_content[0].querySelector("h4").textContent =
  siteContent["main-content"]["services-h4"];
bt_text_content[0].querySelector("p").textContent =
  siteContent["main-content"]["services-content"];

bt_text_content[1].querySelector("h4").textContent =
  siteContent["main-content"]["product-h4"];
bt_text_content[1].querySelector("p").textContent =
  siteContent["main-content"]["product-content"];

bt_text_content[2].querySelector("h4").textContent =
  siteContent["main-content"]["vision-h4"];
bt_text_content[2].querySelector("p").textContent =
  siteContent["main-content"]["vision-content"];

let contact = document.querySelector(".contact");
contact.querySelector("h4").textContent = siteContent.contact["contact-h4"];
let contact_p = contact.querySelectorAll("p");

contact_p[0].innerHTML = siteContent.contact.address;
contact_p[1].textContent = siteContent.contact.phone;
contact_p[2].textContent = siteContent.contact.email;

let footer = document.querySelector("footer");
footer.querySelector("p").textContent = siteContent.footer.copyright;
