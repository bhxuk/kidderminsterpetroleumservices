/* KPS redesign mockup: shared header, footer and behaviour */
(function () {
  // Images currently load from the live site. Run scripts/get-images.ps1 and set this to "assets/img/" to self-host.
  var IMG = window.KPS_IMG || "https://www.kidderminsterpetroleumservices.com/wp-content/uploads/";
  window.KPS_IMG = IMG;

  var page = document.body.getAttribute("data-page") || "home";
  var ico = {
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    li: '<svg viewBox="0 0 24 24"><path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.1 20.5H3.6V9h3.5v11.5zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0z"/></svg>'
  };
  window.KPS_ICO = ico;

  var nav = [
    ["home", "index.html", "Home"],
    ["about", "about.html", "About Us"],
    ["services", "services.html", "Our Services"],
    ["projects", "projects.html", "Projects"],
    ["contact", "contact.html", "Contact"]
  ];

  var header =
    '<div class="topbar"><div class="wrap">' +
      '<div class="alert"><i class="pulse"></i><span>24 hour, 7 Day <span class="txt-long">Emergency Response Service</span></span></div>' +
      '<div class="right">' +
        '<a href="tel:01562861636">' + ico.phone + '01562 861636</a>' +
        '<a class="hide-sm" href="mailto:steveharrington@kidderminsterpetroleumservices.com">' + ico.mail + 'Email us</a>' +
        '<a class="hide-sm" href="https://www.linkedin.com/company/kidderminster-petroleum-services-ltd/about/" target="_blank" rel="noopener" aria-label="Follow on LinkedIn">' + ico.li.replace("<svg", '<svg fill="currentColor"') + 'Follow</a>' +
      '</div>' +
    '</div></div>' +
    '<header class="site-header"><div class="wrap">' +
      '<a class="brand" href="index.html"><img src="' + IMG + '2023/01/KPS_logo.png" alt="Kidderminster Petroleum Services"></a>' +
      '<button class="menu-toggle" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>' +
      '<nav class="nav">' +
        nav.map(function (n) { return '<a href="' + n[1] + '"' + (n[0] === page ? ' class="active"' : "") + ">" + n[2] + "</a>"; }).join("") +
        '<a class="btn btn-amber" href="tel:07889617018">Emergency Line</a>' +
      "</nav>" +
    "</div></header>";

  var accred = ["ISO-14001-1", "ISO-9001-1", "ISO-45001-1", "CBRE-Safe-1", "Construction-Line-1", "CHAS-1", "USAG-1", "apea-1", "SPA-1"];

  var footer =
    '<div class="accred"><div class="wrap">' +
      accred.map(function (a) { return '<img src="' + IMG + "2023/04/" + a + '.jpg" alt="' + a.replace(/-1$/, "").replace(/-/g, " ") + ' accreditation" loading="lazy">'; }).join("") +
    "</div></div>" +
    '<div class="hazard"></div>' +
    '<footer class="site-footer"><div class="wrap foot-grid">' +
      '<div><img class="logo" src="' + IMG + '2023/01/kps_logo_WO.png" alt="KPS">' +
        "<p>Kidderminster Petroleum Services Ltd are specialist Forecourt Contractors who have over 40 years’ experience in the Petroleum Industry.</p>" +
        '<a class="social" href="https://www.linkedin.com/company/kidderminster-petroleum-services-ltd/about/" target="_blank" rel="noopener" aria-label="Follow on LinkedIn">' + ico.li + "</a></div>" +
      "<div><h4>Our Services</h4><ul>" +
        '<li><a href="services.html#pipework">Fuel Pipework Installations</a></li>' +
        '<li><a href="services.html#drainage-installations">Forecourt Drainage Installations</a></li>' +
        '<li><a href="services.html#dispensing-equipment">Fuel Dispensing Equipment</a></li>' +
        '<li><a href="services.html#tank-gauge">Tank Gauge Installations</a></li>' +
        '<li><a href="services.html#electrical-installations">Electrical Installations</a></li>' +
        '<li><a href="services.html#fabric-works">Fabric Works</a></li>' +
      "</ul></div>" +
      "<div><h4>Useful Links</h4><ul>" +
        '<li><a href="about.html">About Us</a></li><li><a href="projects.html">Our Projects</a></li><li><a href="contact.html">Contact Us</a></li>' +
      "</ul></div>" +
      "<div><h4>Contact Us</h4><ul>" +
        '<li><a href="tel:01562861636">01562 861636</a></li>' +
        '<li><b style="color:#fff">Emergency Contact:</b> <a href="tel:07889617018">07889 617018</a></li>' +
        '<li><a href="mailto:steveharrington@kidderminsterpetroleumservices.com" style="word-break:break-all">steveharrington@kidderminsterpetroleumservices.com</a></li>' +
        "<li>Kidderminster Petroleum Services Limited, Unit 31, Rowland Way, Hoo Farm Industrial Estate, Kidderminster, Worcestershire, DY11 7RA</li>" +
      "</ul></div>" +
    "</div>" +
    '<div class="foot-bottom"><div class="wrap">' +
      "<span>© " + new Date().getFullYear() + " Kidderminster Petroleum Services Ltd</span>" +
      '<nav><a href="#">Privacy Policy</a><a href="#">Cookie Policy</a><a href="#">Opt out of Marketing</a></nav>' +
    "</div></div></footer>" +
    '<a class="btn btn-amber mobile-call" href="tel:07889617018">' + ico.phone.replace("<svg", '<svg class="arrow"') + "24/7 Emergency: 07889 617018</a>";

  var h = document.getElementById("site-header");
  var f = document.getElementById("site-footer");
  if (h) h.outerHTML = header;
  if (f) f.outerHTML = footer;

  // Swap data-img attributes to full image URLs
  document.querySelectorAll("[data-img]").forEach(function (el) {
    var src = IMG + el.getAttribute("data-img");
    if (el.tagName === "IMG") el.src = src;
    else el.style.backgroundImage = "url('" + src + "')";
  });

  // Mobile menu
  var toggle = document.querySelector(".menu-toggle");
  var menu = document.querySelector(".nav");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Header shadow on scroll
  var sh = document.querySelector(".site-header");
  window.addEventListener("scroll", function () {
    if (sh) sh.classList.toggle("scrolled", window.scrollY > 10);
  }, { passive: true });

  // Reveal on scroll
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
  }

  // Count-up stats
  document.querySelectorAll("[data-count]").forEach(function (el) {
    var target = parseInt(el.getAttribute("data-count"), 10);
    var suffix = el.getAttribute("data-suffix") || "";
    var done = false;
    var run = function () {
      if (done) return; done = true;
      var start = null;
      var step = function (t) {
        if (!start) start = t;
        var p = Math.min((t - start) / 1400, 1);
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (en, o) { if (en[0].isIntersecting) { run(); o.disconnect(); } }).observe(el);
    } else run();
  });

  // Mockup form: no backend yet
  document.querySelectorAll("form.form").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var note = form.querySelector(".form-note");
      if (note) note.classList.add("show");
    });
  });
})();
