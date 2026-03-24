"use strict";
// =============================================
// PORTFOLIO — main.ts
// =============================================
// ─── DATA ─────────────────────────────────────
const PROJECTS = [
    // {
    //     num: "001",
    //     name: "Design System Core",
    //     desc: "A scalable component library and design token system built for large product teams, enabling consistent UIs across 6 platforms.",
    //     tags: ["TypeScript", "React", "Storybook", "CSS-in-JS"],
    //     url: "https://github.com",
    // },
    // {
    //     num: "002",
    //     name: "Real-Time Analytics Dashboard",
    //     desc: "High-performance data visualization platform processing 50k+ events/sec with WebSocket streaming and custom charting engine.",
    //     tags: ["Node.js", "D3.js", "PostgreSQL", "WebSockets"],
    //     url: "https://github.com",
    // },
    // {
    //     num: "003",
    //     name: "Open Source CLI Toolkit",
    //     desc: "A developer CLI with 2k+ GitHub stars that automates project scaffolding, linting workflows, and CI/CD config generation.",
    //     tags: ["Python", "Click", "GitHub Actions"],
    //     url: "https://github.com",
    // },
    // {
    //     num: "004",
    //     name: "E-Commerce Platform Rebuild",
    //     desc: "Full stack re-architecture of a legacy storefront, improving Core Web Vitals scores by 60% and conversion rates by 22%.",
    //     tags: ["Next.js", "GraphQL", "Stripe", "AWS"],
    //     url: "https://github.com",
    // },
];
const SOCIAL_LINKS = [
    {
        name: "GitHub",
        url: "https://github.com/iambmd",
        icon: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>`,
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/duke-bui/",
        icon: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>`,
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/bmd0905/",
        icon: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>`,
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/obvious._.duc/",
        icon: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>`,
    },
];
// ─── CURSOR ───────────────────────────────────
function initCursor() {
    const cursor = document.getElementById("cursor");
    const follower = document.getElementById("cursorFollower");
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;
    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.left = mouseX + "px";
        cursor.style.top = mouseY + "px";
    });
    function animateFollower() {
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        follower.style.left = followerX + "px";
        follower.style.top = followerY + "px";
        requestAnimationFrame(animateFollower);
    }
    animateFollower();
    const hoverTargets = document.querySelectorAll("a, button, .project-item, .skill-tag, .social-link");
    hoverTargets.forEach((el) => {
        el.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
        el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
    });
}
// ─── NAV ──────────────────────────────────────
function initNav() {
    const nav = document.getElementById("nav");
    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");
    window.addEventListener("scroll", () => {
        nav.classList.toggle("scrolled", window.scrollY > 40);
    });
    menuBtn.addEventListener("click", () => {
        const open = mobileMenu.classList.toggle("open");
        menuBtn.classList.toggle("open", open);
    });
    const mobileLinks = document.querySelectorAll(".mobile-link");
    mobileLinks.forEach((link) => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("open");
            menuBtn.classList.remove("open");
        });
    });
}
// ─── REVEAL ON SCROLL ─────────────────────────
function initReveal() {
    const elements = document.querySelectorAll(".reveal, .reveal-delay-1, .reveal-delay-2, .reveal-delay-3, " +
        ".about-grid, .project-item, .contact-inner, .section-label");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    elements.forEach((el) => observer.observe(el));
}
// ─── COUNTER ANIMATION ────────────────────────
function animateCounter(el, target, duration = 1400) {
    let startTime = null;
    const start = 0;
    function step(timestamp) {
        if (!startTime)
            startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * (target - start) + start).toString();
        if (progress < 1)
            requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
}
function initCounters() {
    const nums = document.querySelectorAll(".stat-num");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute("data-target") || "0", 10);
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    nums.forEach((el) => observer.observe(el));
}
// ─── RENDER PROJECTS ──────────────────────────
function renderProjects() {
    const list = document.getElementById("projectsList");
    if (!list)
        return;
    list.innerHTML = PROJECTS.map((p) => `
    <a href="${p.url}" target="_blank" rel="noopener" class="project-item">
      <div class="project-info">
        <div class="project-num">${p.num}</div>
        <div class="project-name">${p.name}</div>
        <div class="project-desc">${p.desc}</div>
        <div class="project-tags" style="margin-top:.8rem">
          ${p.tags.map((t) => `<span class="project-tag">${t}</span>`).join("")}
        </div>
      </div>
      <div class="project-arrow">↗</div>
    </a>
  `).join("");
}
// ─── RENDER SOCIAL LINKS ──────────────────────
function renderSocials() {
    const container = document.getElementById("socialLinks");
    if (!container)
        return;
    container.innerHTML = SOCIAL_LINKS.map((s) => `
    <a href="${s.url}" target="_blank" rel="noopener" class="social-link" aria-label="${s.name}" title="${s.name}">
      ${s.icon}
    </a>
  `).join("");
}
// ─── FOOTER YEAR ──────────────────────────────
function setYear() {
    const yearEl = document.getElementById("year");
    if (yearEl)
        yearEl.textContent = new Date().getFullYear().toString();
}
// ─── HERO PARALLAX ────────────────────────────
function initParallax() {
    const bgText = document.querySelector(".hero-bg-text");
    if (!bgText)
        return;
    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;
        bgText.style.transform = `translateY(calc(-50% + ${scrollY * 0.18}px))`;
    }, { passive: true });
}
// ─── INIT ─────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
    renderProjects();
    renderSocials();
    setYear();
    initNav();
    initReveal();
    initCounters();
    initParallax();
    // Cursor init after a tick so elements are rendered
    setTimeout(initCursor, 50);
    // Trigger hero reveals
    const heroEls = document.querySelectorAll(".hero .reveal, .hero .reveal-delay-1, .hero .reveal-delay-2, .hero .reveal-delay-3");
    setTimeout(() => heroEls.forEach((el) => el.classList.add("revealed")), 100);
});
