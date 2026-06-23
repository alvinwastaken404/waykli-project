(function () {
    "use strict";

    const sidebar = document.getElementById("sidebar");
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const sidebarOverlay = document.getElementById("sidebarOverlay");
    const themeToggle = document.getElementById("themeToggle");
    const moonIcon = document.getElementById("moonIcon");
    const sunIcon = document.getElementById("sunIcon");
    const navItems = document.querySelectorAll(".nav-item");
    const pageHome = document.getElementById("page-home");
    const pageOther = document.getElementById("page-other");
    const placeholderTitle = document.getElementById("placeholder-title");
    const menuCards = document.querySelectorAll(".menu-card");
    const searchInput = document.querySelector(".search-input");

    let isSidebarCollapsed = false;
    let isMobile = window.innerWidth <= 640;
    let isDark = localStorage.getItem("waykli-theme") === "dark";

    function applyTheme() {
        if (isDark) {
            document.documentElement.setAttribute("data-theme", "dark");
            if (moonIcon) moonIcon.classList.add("hidden");
            if (sunIcon) sunIcon.classList.remove("hidden");
        } else {
            document.documentElement.removeAttribute("data-theme");
            if (moonIcon) moonIcon.classList.remove("hidden");
            if (sunIcon) sunIcon.classList.add("hidden");
        }
    }

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            isDark = !isDark;
            localStorage.setItem("waykli-theme", isDark ? "dark" : "light");
            applyTheme();
        });
    }

    // Apply stored theme on load
    applyTheme();

    function toggleSidebar() {
        if (!sidebar) return;
        if (isMobile) {
            sidebar.classList.toggle("mobile-open");
            if (sidebarOverlay) sidebarOverlay.classList.toggle("visible");
        } else {
            isSidebarCollapsed = !isSidebarCollapsed;
            sidebar.classList.toggle("collapsed", isSidebarCollapsed);
            document.body.classList.toggle("sidebar-collapsed", isSidebarCollapsed);
        }
    }

    if (hamburgerBtn) hamburgerBtn.addEventListener("click", toggleSidebar);
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener("click", () => {
            if (sidebar) sidebar.classList.remove("mobile-open");
            sidebarOverlay.classList.remove("visible");
        });
    }

    const PAGE_LABELS = {
        home: "Home",
        perpustakaan: "Perpustakaan",
        ujian: "Ujian",
        profil: "Profil Desa",
        pemasaran: "Pemasaran",
    };

    function navigateTo(page) {
        // Update active nav
        navItems.forEach((item) => {
            item.classList.toggle("active", item.dataset.page === page);
        });

        if (page === "home") {
            if (pageHome) pageHome.classList.remove("hidden");
            if (pageOther) pageOther.classList.add("hidden");
        } else {
            if (pageHome) pageHome.classList.add("hidden");
            if (pageOther) pageOther.classList.remove("hidden");
            if (placeholderTitle) placeholderTitle.textContent = PAGE_LABELS[page] || page;
        }

        // Close mobile sidebar after navigation
        if (isMobile && sidebar) {
            sidebar.classList.remove("mobile-open");
            if (sidebarOverlay) sidebarOverlay.classList.remove("visible");
        }
    }

    navItems.forEach((item) => {
        item.addEventListener("click", (e) => {
            const page = item.dataset.page;
            if (page === "home") {
                window.location.href = "/dashboard";
            }

            // Ensure mobile sidebar closes when any nav item is tapped
            if (isMobile && sidebar) {
                sidebar.classList.remove("mobile-open");
                if (sidebarOverlay) sidebarOverlay.classList.remove("visible");
            }
        });
    });

    const CARD_PAGES = {
        "Buku Belajar": "/perpus",
        Video: "https://youtube.com/@sandhikagalihwpu?si=4-Xk1ajBf-gT-zdK",
        Lagu: "https://youtu.be/QQ1QdT9KYlQ?si=SJMLtpNDD9zFi8Oo",
        Game: "/game",
    };

    menuCards.forEach((card) => {
        const label = card.dataset.label;

        card.addEventListener("click", () => {
            // Bounce animation
            card.style.transform = "scale(.95)";
            setTimeout(() => {
                card.style.transform = "";
            }, 140);

            const target = CARD_PAGES[label];
            if (target) {
                setTimeout(() => {
                    if (/^https?:\/\//i.test(target)) {
                        window.open(target, "_blank");
                    } else if (/^\//.test(target)) {
                        window.location.href = target;
                    } else {
                        navigateTo(target);
                    }
                }, 180);
            } else {
                showToast(`Membuka ${label}…`);
            }
        });

        card.addEventListener("pointerdown", (e) => {
            const ripple = document.createElement("span");
            const rect = card.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height) * 1.6;
            ripple.style.cssText = `
        position:absolute;
        width:${size}px; height:${size}px;
        border-radius:50%;
        background: var(--card-accent, #C8912A);
        opacity:.18;
        transform: scale(0);
        pointer-events:none;
        top:${e.clientY - rect.top - size / 2}px;
        left:${e.clientX - rect.left - size / 2}px;
        animation: rippleAnim .55s ease-out forwards;
      `;
            card.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });

    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
    @keyframes rippleAnim {
      to { transform: scale(1); opacity: 0; }
    }
  `;
    document.head.appendChild(styleSheet);

    if (searchInput) {
        searchInput.addEventListener("input", () => {
            const q = searchInput.value.trim().toLowerCase();
            menuCards.forEach((card) => {
                const name = (card.dataset.label || "").toLowerCase();
                const desc = (card.querySelector(".card-desc")?.textContent || "").toLowerCase();
                const match = !q || name.includes(q) || desc.includes(q);
                card.style.opacity = match ? "1" : "0.3";
                card.style.pointerEvents = match ? "" : "none";
            });
        });
    }

    const notifBtn = document.querySelector(".notif-btn");
    if (notifBtn) notifBtn.addEventListener("click", () => showToast(""));

    const avatarBtn = document.querySelector(".avatar-btn");
    if (avatarBtn) avatarBtn.addEventListener("click", () => navigateTo("profil"));

    let toastTimer;

    function showToast(message) {
        // Remove existing toast
        const existing = document.querySelector(".toast");
        if (existing) existing.remove();
        clearTimeout(toastTimer);

        const toast = document.createElement("div");
        toast.className = "toast";
        toast.textContent = message;
        toast.style.cssText = `
      position: fixed;
      bottom: 28px;
      left: 50%;
      transform: translateX(-50%) translateY(20px);
      background: var(--text-primary);
      color: var(--bg-page);
      padding: 12px 22px;
      border-radius: 50px;
      font-family: var(--font-body);
      font-size: .875rem;
      font-weight: 600;
      box-shadow: 0 6px 24px rgba(0,0,0,.25);
      z-index: 9999;
      opacity: 0;
      transition: all .3s cubic-bezier(.4,0,.2,1);
      white-space: nowrap;
    `;
        document.body.appendChild(toast);

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                toast.style.opacity = "1";
                toast.style.transform = "translateX(-50%) translateY(0)";
            });
        });

        toastTimer = setTimeout(() => {
            toast.style.opacity = "0";
            toast.style.transform = "translateX(-50%) translateY(10px)";
            setTimeout(() => toast.remove(), 320);
        }, 2800);
    }

    function animateProgressBars() {
        const bars = document.querySelectorAll(".prog-bar");
        bars.forEach((bar, i) => {
            const target = bar.style.getPropertyValue("--prog");
            bar.style.setProperty("--prog", "0%");
            setTimeout(
                () => {
                    bar.style.setProperty("--prog", target);
                },
                300 + i * 150,
            );
        });
    }

    window.addEventListener("resize", () => {
        isMobile = window.innerWidth <= 640;
        if (!isMobile) {
            if (sidebar) sidebar.classList.remove("mobile-open");
            if (sidebarOverlay) sidebarOverlay.classList.remove("visible");
        }
    });

    animateProgressBars();

    menuCards.forEach((card, i) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = `opacity .4s ease ${i * 0.08}s, transform .4s ease ${i * 0.08}s, box-shadow .28s, border-color .28s`;
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            });
        });
    });
})();
