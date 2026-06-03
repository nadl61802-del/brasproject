const products = [{
        id: "obsidian-dress",
        name: "فستان الأوبسيديان المطرز",
        category: "women",
        label: "فساتين السهرة",
        price: 8500,
        compareAt: 10200,
        image: "image/t1.png",
        badge: "حصري",
        description: "قطعة مسائية بتطريز ذهبي هادئ وقصة مصممة لتمنح حضورًا واضحًا من غير مبالغة.",
        sizes: ["FR 36", "FR 38", "FR 40", "FR 42"],
        gallery: ["image/t1.png", "image/t3.png", "image/t5.png", "image/t2.png"]
    },
    {
        id: "obsidian-dress-red",
        name: "فستان الأوبسيديان الحرير الأحمر",
        category: "women",
        label: "فساتين السهرة",
        price: 8500,
        compareAt: 10200,
        image: "image/1.png",
        badge: "حصري",
        description: "قطعة مسائية بتطريز حرير أcher red هادئ وقصة مصممة لتمنح حضورًا واضحًا من غير مبالغة.",
        sizes: ["FR 36", "FR 38", "FR 40", "FR 42"],
        gallery: ["image/1.png", "image/a2.png", "image/a3.png", "image/a1.png"]
    },
    {
        id: "golden-gown",
        name: "فستان أورورا المخملي",
        category: "women",
        label: "تطريز فاخر",
        price: 12400,
        compareAt: 13900,
        image: "image/23.png",
        badge: "جديد",
        description: "فستان مخملي بتفاصيل ذهبية ناعمة، مناسب للحفلات الرسمية والإطلالات الهادئة الراقية.",
        sizes: ["XS", "S", "M", "FR 38"],
        gallery: ["image/23.png", "image/r2.png", "image/r3.png", "image/r1.png"]
    },
    {
        id: "aureum-bag",
        name: "حقيبة أوريوم الكلاسيكية",
        category: "accessories2",
        label: "إكسسوارات",
        price: 4200,
        compareAt: 4700,
        image: "image/36.png",
        badge: "مختار",
        description: "حقيبة جلدية صغيرة بحضور دافئ، تكمل فساتين السهرة والبدلات الرسمية بسهولة.",
        sizes: ["قياس موحد", "Mini", "Classic", "Evening"],
        gallery: ["image/women-bag.png", "image/product-gallery.png", "image/hero-editorial-clean.png", "image/product-dress.png"]
    },
    {
        id: "aureum-solo",
        name: "ساعة فرونتي الكلاسيكية",
        category: "accessories2",
        label: "إكسسوارات",
        price: 6400,
        compareAt: 5600,
        image: "image/w1.png",
        badge: "مختار",
        description: "ساعة فرونتي الكلاسيكية بتصميم أنيق، تكمل الإطلالة بسهولة.",
        sizes: ["قياس موحد", "Mini", "Classic", "Evening"],
        gallery: ["image/w1.png", "image/w3.png", "image/w4.png", "image/w2.png"]
    },
    {
        id: "aureum-mrnton",
        name: "ساعة ميلونتي الكلاسيكية",
        category: "accessories2",
        label: "إكسسوارات",
        price: 2400,
        compareAt: 2600,
        image: "image/m4.png",
        badge: "مختار",
        description: "ساعة ميلونتي الكلاسيكية بتصميم أنيق، تكمل الإطلالة بسهولة.",
        sizes: ["قياس موحد", "Mini", "Classic", "Evening"],
        gallery: ["image/m4.png", "image/m3.png", "image/m2.png", "image/m1.png"]
    },
    {
        id: "velvet-heels",
        name: "حذاء ستيليتو الذهبي",
        category: "women",
        label: "أحذية فاخرة",
        price: 5600,
        compareAt: 6200,
        image: "image/18.png",
        badge: "أتيليه",
        description: "كعب فاخر بخطوط متوازنة ولمعة ذهبية خفيفة، مصمم ليكمل القطع السوداء والمطرزة.",
        sizes: ["36", "37", "38", "39"],
        gallery: ["image/women-heels.png", "image/hero-women-clean.png", "image/women-bag.png", "image/product-gallery.png"]
    },
    {
        id: "nocturne-suit",
        name: "بدلة أوكسيديان النادرة",
        category: "men",
        label: "بدلات رسمية",
        price: 4500,
        compareAt: 5300,
        image: "image/8.png",
        badge: "جديد",
        description: "بدلة رسمية بتفصيل حاد وقماش داكن مريح، تناسب الاجتماعات والمناسبات الخاصة.",
        sizes: ["S", "M", "L", "XL"],
        gallery: ["image/8.png", "image/q2.png", "image/q3.png", "image/q1.png"]
    },
    {
        id: "black-watch",
        name: "ساعة نورا الكلاسيكية",
        category: "accessories",
        label: "ساعات",
        price: 12200,
        compareAt: 13400,
        image: "image/10.png",
        badge: "محدود",
        description: "ساعة سوداء بلمسات ذهبية دقيقة، قطعة تكمل الإطلالة من غير صخب.",
        sizes: ["قياس موحد", "42mm", "Classic", "Limited"],
        gallery: ["image/10.png", "image/s1.png", "image/s2.png", "image/men-suit.png"]
    },
    {
        id: "oxford-shoes",
        name: "حذاء أوكسفورد اليدوي",
        category: "men",
        label: "جلد طبيعي",
        price: 2800,
        compareAt: 3300,
        image: "image/12.png",
        badge: "حرفة",
        description: "حذاء جلدي كلاسيكي بتشطيب يدوي، مريح في الحركة ويحافظ على طابع رسمي هادئ.",
        sizes: ["40", "41", "42", "43"],
        gallery: ["image/men-shoes.png", "image/hero-men-clean.png", "image/men-watch.png", "image/men-suit.png"]
    },
    {
        id: "princess-gown",
        name: "فستان سيلينيت الملكي",
        category: "children",
        label: "فساتين أطفال",
        price: 2850,
        compareAt: 3200,
        image: "image/31.png",
        badge: "ناعم",
        description: "فستان أطفال بقصة مريحة وتفاصيل مناسبة للمناسبات، يوازن بين الرقي وسهولة الحركة.",
        sizes: ["4Y", "6Y", "8Y", "10Y"],
        gallery: ["image/child-gown.png", "image/children-hero.png", "image/child-royal.png", "image/product-gallery.png"]
    },
    {
        id: "royal-suit",
        name: "طقم نور الكلاسيكي",
        category: "children",
        label: "بدلات أطفال",
        price: 1950,
        compareAt: 2400,
        image: "image/2.png",
        badge: "رسمي",
        description: "طقم أطفال رسمي بخطوط بسيطة وأقمشة مريحة ليبقى الطفل أنيقًا طوال اليوم.",
        sizes: ["4Y", "6Y", "8Y", "10Y"],
        gallery: ["image/2.png", "image/b3.png", "image/b4.png", "image/b2.png"]
    },
    {
        id: "royal-dress",
        name: "فستان الورود المخملي",
        category: "women",
        label: "مناسبات",
        price: 2400,
        compareAt: 2850,
        image: "image/7.png",
        badge: "مميز",
        description: "فستان أطفال مخملي بتفاصيل احتفالية ناعمة، مناسب للصور واللحظات العائلية الخاصة.",
        sizes: ["4Y", "6Y", "8Y", "10Y"],
        gallery: ["image/child-royal.png", "image/children-hero.png", "image/child-gown.png", "image/product-gallery.png"]
    }
];

const categoryNames = {
    all: "الكل",
    women: "النساء",
    men: "الرجال",
    children: "الأطفال",
    accessories: "الإكسسوارات",
    accessories2: "الإكسسوارات"
};

const homeData = {
    hero: {
        badge: "تجربة أزياء مختارة",
        title: "أناقة تتخطى الزمن",
        description: "اختيارات هادئة وفاخرة للنساء والرجال والأطفال، بتفاصيل ذهبية وصور مريحة لا تزاحم القطعة.",
        image: "image/hero-editorial-clean.png",
        primary: { label: "تسوق المجموعة", href: "collections.html" },
        secondary: { label: "عرض القطعة", href: "product.html?id=obsidian-dress" },
        panels: [
            { title: "النساء", subtitle: "فساتين وتطريز فاخر", href: "women.html" },
            { title: "الرجال", subtitle: "بدلات وإكسسوارات", href: "men.html" },
            { title: "الأطفال", subtitle: "إطلالات المناسبات", href: "children.html" }
        ]
    },
    features: {
        title: "مجموعات مترابطة لكل مناسبة",
        description: "كل قسم له إيقاعه، وكل قطعة تظهر في مكانها الطبيعي لتسهيل قرار الشراء من غير ازدحام بصري.",
        items: [
            { title: "أناقة السيدات", subtitle: "منفردة وفاخرة", image: "image/a1.png", href: "women.html" },
            { title: "فخامة الرجال", subtitle: "إرث من الحداثة", image: "image/24.png", href: "men.html" },
            { title: "مجموعة الأطفال", subtitle: "لمناسبات الملكية", image: "image/b2.png", href: "children.html" }
        ]
    },
    trending: {
        title: "تشكيلات هذا الموسم",
        description: "قطع بارزة من أكثر الأقسام مشاهدة، مع أسعار واضحة وإضافة مباشرة للسلة.",
        productIds: ["obsidian-dress", "golden-gown", "black-watch", "velvet-heels"]
    },
    story: {
        title: "حكاية الأخوة",
        description: "من اختيار القماش حتى آخر تفصيلة، هدفنا أن تبدو القطعة فاخرة وقريبة من العين في نفس الوقت.",
        image: "image/20.png",
        link: "collections.html",
        button: "اكتشف القصة"
    },
    join: {
        badge: "انضم لعالم الأناقة",
        title: "انضم إلى مجتمع الأخوة الحصري",
        description: "استقبل التشكيلات الهادئة والعروض الخاصة قبل ظهورها في المتجر.",
        placeholder: "أدخل بريدك الإلكتروني",
        button: "اشترك الآن"
    }
};

const formatter = new Intl.NumberFormat("ar-SA", {
    style: "currency",
    currency: "SAR",
    maximumFractionDigits: 0
});

const state = {
    cart: readStorage("atelier:cart", []),
    favorites: new Set(readStorage("atelier:favorites", [])),
    quantities: {},
    category: "all",
    query: "",
    sort: "featured",
    productQuantity: 1,
    productSize: "FR 38"
};

function injectIcons() {
    if (!document.getElementById("atelier-icons")) {
        document.body.insertAdjacentHTML("afterbegin", `
      <svg id="atelier-icons" class="sprite" aria-hidden="true">
        <symbol id="icon-search" viewBox="0 0 24 24"><path d="M10.8 18.2a7.4 7.4 0 1 1 5.23-12.63 7.4 7.4 0 0 1-5.23 12.63Zm0-2a5.4 5.4 0 1 0 0-10.8 5.4 5.4 0 0 0 0 10.8Zm6.1.28 4.02 4.02-1.42 1.42-4.02-4.02 1.42-1.42Z"/></symbol>
        <symbol id="icon-bag" viewBox="0 0 24 24"><path d="M7 8V7a5 5 0 0 1 10 0v1h3v13H4V8h3Zm2 0h6V7a3 3 0 0 0-6 0v1Zm-3 2v9h12v-9H6Z"/></symbol>
        <symbol id="icon-user" viewBox="0 0 24 24"><path d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10Zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm9 12h-2a7 7 0 1 0-14 0H3a9 9 0 1 1 18 0Z"/></symbol>
        <symbol id="icon-heart" viewBox="0 0 24 24"><path d="M12 21.35 10.55 20.03C5.4 15.36 2 12.27 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08A6 6 0 0 1 16.5 3C19.58 3 22 5.42 22 8.5c0 3.77-3.4 6.86-8.55 11.54L12 21.35Zm0-2.7.1-.1C16.86 14.23 20 11.38 20 8.5A3.45 3.45 0 0 0 16.5 5c-1.33 0-2.63.85-3.08 2.02h-2.84A3.53 3.53 0 0 0 7.5 5 3.45 3.45 0 0 0 4 8.5c0 2.88 3.14 5.73 7.9 10.05l.1.1Z"/></symbol>
        <symbol id="icon-menu" viewBox="0 0 24 24"><path d="M4 6h16v2H4V6Zm0 5h16v2H4v-2Zm0 5h16v2H4v-2Z"/></symbol>
        <symbol id="icon-close" viewBox="0 0 24 24"><path d="m12 10.59 5.3-5.3 1.41 1.42-5.3 5.29 5.3 5.3-1.42 1.41-5.29-5.3-5.3 5.3-1.41-1.42 5.3-5.29-5.3-5.3 1.42-1.41 5.29 5.3Z"/></symbol>
        <symbol id="icon-arrow" viewBox="0 0 24 24"><path d="M11 5h2v10.17l4.59-4.58L19 12l-7 7-7-7 1.41-1.41L11 15.17V5Z"/></symbol>
      </svg>
    `);
    }

    document.querySelectorAll("use[href^='image/icons.svg#']").forEach((icon) => {
        icon.setAttribute("href", icon.getAttribute("href").replace("image/icons.svg", ""));
    });
}

function readStorage(key, fallback) {
    try {
        return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
    } catch {
        return fallback;
    }
}

function writeStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function formatPrice(value) {
    return formatter.format(value).replace("SAR", "ر.س");
}

function byId(id) {
    return products.find((product) => product.id === id);
}

function showToast(message) {
    const toast = document.querySelector("[data-toast]");
    if (!toast) return;

    clearTimeout(showToast.timer);
    toast.textContent = message;
    toast.classList.add("is-visible");
    showToast.timer = setTimeout(() => toast.classList.remove("is-visible"), 2400);
}

function updateCartCount() {
    const count = state.cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelectorAll("[data-cart-count]").forEach((element) => {
        element.textContent = count;
    });
}

function addToCart(productId, quantity = 1, size = "قياس موحد") {
    const product = byId(productId);
    if (!product) return;

    const key = `${product.id}:${size}`;
    const existingItem = state.cart.find((item) => item.key === key);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        state.cart.push({
            key,
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity,
            size
        });
    }

    writeStorage("atelier:cart", state.cart);
    updateCartCount();
    renderCheckout();
    showToast(`تمت إضافة ${product.name} إلى السلة.`);
}

function removeFromCart(key) {
    state.cart = state.cart.filter((item) => item.key !== key);
    writeStorage("atelier:cart", state.cart);
    updateCartCount();
    renderCheckout();
    showToast("تم تحديث الطلب.");
}

function toggleFavorite(productId) {
    if (state.favorites.has(productId)) {
        state.favorites.delete(productId);
        showToast("تمت إزالة القطعة من المفضلة.");
    } else {
        state.favorites.add(productId);
        showToast("تمت إضافة القطعة إلى المفضلة.");
    }

    writeStorage("atelier:favorites", [...state.favorites]);
    renderCatalogs();
    document.querySelectorAll(`[data-favorite="${productId}"]`).forEach((button) => {
        button.classList.toggle("is-active", state.favorites.has(productId));
    });
}

function getCatalogProducts(root) {
    const categories = (root.dataset.products || "all")
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);

    let list = products.filter((product) => categories.includes("all") || categories.includes(product.category));

    if (state.category !== "all") {
        const selectedCategories = state.category
            .split(",")
            .map((item) => item.trim());
        list = list.filter((product) => selectedCategories.includes(product.category));
    }

    if (state.query) {
        const query = state.query.toLowerCase();
        list = list.filter((product) => `${product.name} ${product.label} ${categoryNames[product.category]}`.toLowerCase().includes(query));
    }

    if (state.sort === "price-low") {
        list = [...list].sort((first, second) => first.price - second.price);
    }

    if (state.sort === "price-high") {
        list = [...list].sort((first, second) => second.price - first.price);
    }

    return list;
}

function productCard(product) {
    const quantity = state.quantities[product.id] || 1;
    const favoriteClass = state.favorites.has(product.id) ? "is-active" : "";
    const productUrl = `product.html?id=${product.id}`;

    return `
    <article class="product-card reveal in-view">
      <a class="media" href="${productUrl}">
        <img src="${product.image}" alt="${product.name}">
        <span class="badge">${product.badge}</span>
      </a>
      <button class="icon-button favorite-card ${favoriteClass}" type="button" data-toggle-favorite="${product.id}" aria-label="إضافة ${product.name} للمفضلة">
        <svg><use href="#icon-heart"></use></svg>
      </button>
      <div class="product-body">
        <small>${product.label} · ${categoryNames[product.category]}</small>
        <h3><a href="${productUrl}">${product.name}</a></h3>
        <div class="product-meta">
          <strong>${formatPrice(product.price)}</strong>
          <span>${product.badge}</span>
        </div>
        <div class="product-actions">
          <button class="small-add" type="button" data-add-product="${product.id}">أضف للسلة</button>
          <div class="quantity-mini">
            <button type="button" data-card-minus="${product.id}" aria-label="تقليل الكمية">-</button>
            <span>${quantity}</span>
            <button type="button" data-card-plus="${product.id}" aria-label="زيادة الكمية">+</button>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderHomeHero() {
    const root = document.querySelector("[data-home-hero]");
    if (!root) return;

    const hero = homeData.hero;
    root.innerHTML = `
      <div class="hero-media" aria-hidden="true"><img src="${hero.image}" alt=""></div>
      <div class="hero-content reveal">
        <span class="mini-label">${hero.badge}</span>
        <h1>${hero.title}</h1>
        <p>${hero.description}</p>
        <div class="hero-actions">
          <a class="button primary" href="${hero.primary.href}">${hero.primary.label}</a>
          <a class="button ghost" href="${hero.secondary.href}">${hero.secondary.label}</a>
        </div>
      </div>
      <div class="hero-panel reveal">
        ${hero.panels.map((panel) => `
          <a class="quick-tile" href="${panel.href}"><span>${panel.title}</span><strong>${panel.subtitle}</strong></a>
        `).join("")}
      </div>
      <a class="scroll-cue" href="#trending" aria-label="انتقل للأقسام"><svg><use href="#icon-arrow"></use></svg></a>
    `;
}

function renderHomeFeatures() {
    const root = document.querySelector("[data-home-features]");
    if (!root) return;

    const features = homeData.features;
    root.innerHTML = `
      <div class="section-heading reveal">
        <span class="mini-label">مجموعات مميزة</span>
        <h2>${features.title}</h2>
        <p>${features.description}</p>
      </div>
      <div class="collection-grid">
        ${features.items.map((item) => `
          <a class="collection-card reveal" href="${item.href}">
            <img src="${item.image}" alt="${item.title}">
            <div>
              <span>•</span>
              <h3>${item.title}</h3>
              <p>${item.subtitle}</p>
            </div>
          </a>
        `).join("")}
      </div>
    `;
}

function renderHomeTrending() {
    const root = document.querySelector("[data-home-trending]");
    if (!root) return;

    const trending = homeData.trending;
    const list = trending.productIds.map(byId).filter(Boolean);

    root.innerHTML = `
      <div class="content-wrap">
        <div class="shop-top reveal">
          <div>
            <span class="mini-label">الأكثر طلبًا</span>
            <h2>${trending.title}</h2>
            <p>${trending.description}</p>
          </div>
          <a class="button ghost" href="collections.html">عرض الكل</a>
        </div>
        <div class="product-grid">
          ${list.map(productCard).join("")}
        </div>
      </div>
    `;
}

function renderHomeStory() {
    const root = document.querySelector("[data-home-story]");
    if (!root) return;

    const story = homeData.story;
    root.innerHTML = `
      <div class="content-wrap split-grid">
        <div class="story-copy reveal">
          <span class="mini-label">حكاية العلامة</span>
          <h2>${story.title}</h2>
          <p>${story.description}</p>
          <a class="button primary" href="${story.link}">${story.button}</a>
        </div>
        <a class="atelier-image reveal" href="${story.link}"><img src="${story.image}" alt="${story.title}"></a>
      </div>
    `;
}

function renderHomeJoin() {
    const root = document.querySelector("[data-home-join]");
    if (!root) return;

    const join = homeData.join;
    root.innerHTML = `
      <div class="content-wrap">
        <div class="newsletter reveal">
          <span class="mini-label">${join.badge}</span>
          <h2>${join.title}</h2>
          <p>${join.description}</p>
          <form class="newsletter-form" data-newsletter-form>
            <input type="email" name="email" placeholder="${join.placeholder}" required>
            <button class="button primary" type="submit">${join.button}</button>
          </form>
        </div>
      </div>
    `;
}

function renderHomePage() {
    if (!document.querySelector("[data-home-page]")) return;

    renderHomeHero();
    renderHomeFeatures();
    renderHomeTrending();
    renderHomeStory();
    renderHomeJoin();
}

function renderCatalogs() {
    document.querySelectorAll("[data-product-grid]").forEach((root) => {
        const list = getCatalogProducts(root);
        const countTarget = document.querySelector(root.dataset.countTarget || "[data-result-count]");

        if (countTarget) {
            countTarget.textContent = `${list.length} قطعة مختارة`;
        }

        root.innerHTML = list.length ?
            list.map(productCard).join("") :
            `<p class="empty-state">لا توجد قطع مطابقة حاليا.</p>`;
    });
}

function setupCatalogEvents() {
    document.addEventListener("click", (event) => {
        const addButton = event.target.closest("[data-add-product]");
        const favoriteButton = event.target.closest("[data-toggle-favorite]");
        const plusButton = event.target.closest("[data-card-plus]");
        const minusButton = event.target.closest("[data-card-minus]");

        if (addButton) {
            const productId = addButton.dataset.addProduct;
            addToCart(productId, state.quantities[productId] || 1);
        }

        if (favoriteButton) {
            toggleFavorite(favoriteButton.dataset.toggleFavorite);
        }

        if (plusButton) {
            const productId = plusButton.dataset.cardPlus;
            state.quantities[productId] = Math.min((state.quantities[productId] || 1) + 1, 9);
            renderCatalogs();
        }

        if (minusButton) {
            const productId = minusButton.dataset.cardMinus;
            state.quantities[productId] = Math.max((state.quantities[productId] || 1) - 1, 1);
            renderCatalogs();
        }
    });

    document.querySelectorAll("[data-filter]").forEach((button) => {
        button.addEventListener("click", () => {
            state.category = button.dataset.filter;
            document.querySelectorAll("[data-filter]").forEach((item) => item.classList.toggle("active", item === button));
            renderCatalogs();
        });
    });

    document.querySelectorAll("[data-search-input]").forEach((input) => {
        input.addEventListener("input", (event) => {
            state.query = event.target.value;
            renderCatalogs();
        });
    });

    document.querySelectorAll("[data-sort-select]").forEach((select) => {
        select.addEventListener("change", (event) => {
            state.sort = event.target.value;
            renderCatalogs();
        });
    });
}

function setupProductPage() {
    const productPage = document.querySelector("[data-product-page]");
    if (!productPage) return;

    const productId = new URLSearchParams(location.search).get("id") || "obsidian-dress";
    const product = byId(productId) || byId("obsidian-dress");
    const quantityText = document.querySelector("[data-product-quantity]");
    const favoriteButton = document.querySelector("[data-favorite]");
    const mainImage = document.querySelector("[data-main-product-image]");
    const gallery = document.querySelector("[data-gallery]");
    const sizePicker = document.querySelector("[data-size-picker]");
    const description = document.querySelector(".spotlight-info > p");

    state.productSize = product.sizes?.[1] || product.sizes?.[0] || "قياس موحد";
    document.title = `الأخوة | ${product.name}`;
    document.querySelector("[data-product-label]").textContent = product.label;
    document.querySelector("[data-product-name]").textContent = product.name;
    document.querySelector("[data-product-price]").textContent = formatPrice(product.price);
    document.querySelector(".price-line span").textContent = product.compareAt ? formatPrice(product.compareAt) : "";
    if (description) description.textContent = product.description;
    if (mainImage) {
        mainImage.src = product.image;
        mainImage.alt = product.name;
    }
    if (favoriteButton) {
        favoriteButton.dataset.favorite = product.id;
        favoriteButton.setAttribute("aria-label", `إضافة ${product.name} للمفضلة`);
        favoriteButton.classList.toggle("is-active", state.favorites.has(product.id));
    }
    document.querySelectorAll("[data-featured-add]").forEach((button) => {
        button.dataset.featuredAdd = product.id;
    });

    if (gallery) {
        gallery.innerHTML = (product.gallery || [product.image]).map((image, index) => `
            <button class="${index === 0 ? "active" : ""}" type="button" data-image="${image}">
                <img src="${image}" alt="${product.name}">
            </button>
        `).join("");
    }

    if (sizePicker) {
        sizePicker.innerHTML = (product.sizes || ["قياس موحد"]).map((size, index) => `
            <button class="${index === 1 || ((product.sizes || []).length === 1 && index === 0) ? "active" : ""}" type="button">${size}</button>
        `).join("");
    }

    document.querySelector("[data-product-qty]").addEventListener("click", (event) => {
        if (event.target.closest("[data-plus]")) {
            state.productQuantity = Math.min(state.productQuantity + 1, 9);
        }

        if (event.target.closest("[data-minus]")) {
            state.productQuantity = Math.max(state.productQuantity - 1, 1);
        }

        quantityText.textContent = state.productQuantity;
    });

    sizePicker.addEventListener("click", (event) => {
        const button = event.target.closest("button:not(:disabled)");
        if (!button) return;
        state.productSize = button.textContent.trim();
        document.querySelectorAll("[data-size-picker] button").forEach((item) => item.classList.remove("active"));
        button.classList.add("active");
    });

    gallery.addEventListener("click", (event) => {
        const button = event.target.closest("[data-image]");
        if (!button) return;

        const image = document.querySelector("[data-main-product-image]");
        document.querySelectorAll("[data-gallery] button").forEach((item) => item.classList.remove("active"));
        button.classList.add("active");
        image.classList.add("is-changing");

        setTimeout(() => {
            image.src = button.dataset.image;
            image.classList.remove("is-changing");
        }, 160);
    });

    favoriteButton.addEventListener("click", () => toggleFavorite(product.id));

    document.querySelectorAll("[data-featured-add]").forEach((button) => {
        button.addEventListener("click", () => addToCart(product.id, state.productQuantity, state.productSize));
    });
}

function renderCheckout() {
    const container = document.querySelector("[data-checkout-items]");
    if (!container) return;

    const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = subtotal > 0 ? 50 : 0;

    container.innerHTML = state.cart.length ?
        state.cart.map((item) => `
      <article class="order-item">
        <img src="${item.image}" alt="${item.name}">
        <div>
          <h3>${item.name}</h3>
          <p>${item.size} · ${item.quantity} قطعة</p>
        </div>
        <strong>${formatPrice(item.price * item.quantity)}</strong>
        <button type="button" data-remove-item="${item.key}" aria-label="حذف ${item.name}">×</button>
      </article>
    `).join("") :
        `<p class="empty-state">السلة فارغة. ارجع للمتجر واختر القطع التي تناسبك.</p>`;

    document.querySelectorAll("[data-subtotal]").forEach((element) => element.textContent = formatPrice(subtotal));
    document.querySelectorAll("[data-total]").forEach((element) => element.textContent = formatPrice(subtotal + shipping));
}

function setupCheckout() {
    document.addEventListener("click", (event) => {
        const removeButton = event.target.closest("[data-remove-item]");
        if (removeButton) {
            removeFromCart(removeButton.dataset.removeItem);
        }
    });

    document.querySelectorAll("[data-checkout-form]").forEach((form) => {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            if (!state.cart.length) {
                showToast("السلة فارغة حاليا.");
                return;
            }

            state.cart = [];
            writeStorage("atelier:cart", state.cart);
            updateCartCount();
            renderCheckout();
            form.reset();
            showToast("تم تأكيد الطلب بنجاح.");
        });
    });

    document.querySelectorAll(".payment-toggle button").forEach((button) => {
        button.addEventListener("click", () => {
            document.querySelectorAll(".payment-toggle button").forEach((item) => item.classList.remove("active"));
            button.classList.add("active");
        });
    });
}

function setupNavigation() {
    const menu = document.querySelector("[data-mobile-menu]");
    const overlay = document.querySelector("[data-overlay]");
    const openButton = document.querySelector("[data-menu-open]");
    const closeButton = document.querySelector("[data-menu-close]");
    const currentPage = location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(".desktop-nav a, .mobile-menu a").forEach((link) => {
        const linkPage = link.getAttribute("href")?.split("#")[0].split("?")[0];
        link.classList.toggle("is-active", linkPage === currentPage);
    });

    const closeMenu = () => {
        menu?.classList.remove("is-open");
        overlay?.classList.remove("is-open");
        document.body.classList.remove("locked");
    };

    openButton?.addEventListener("click", () => {
        menu?.classList.add("is-open");
        overlay?.classList.add("is-open");
        document.body.classList.add("locked");
    });

    closeButton?.addEventListener("click", closeMenu);
    overlay?.addEventListener("click", closeMenu);

    const updateHeader = () => {
        document.querySelector("[data-header]")?.classList.toggle("is-scrolled", scrollY > 30);
    };

    updateHeader();
    addEventListener("scroll", updateHeader, { passive: true });
}

function setupForms() {
    document.querySelectorAll("[data-newsletter-form]").forEach((form) => {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            form.reset();
            showToast("تم تسجيل بريدك في القائمة الخاصة.");
        });
    });

    document.querySelectorAll("[data-auth-form]").forEach((form) => {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            form.reset();
            showToast("تم تسجيل الدخول بنجاح.");
        });
    });

    document.querySelectorAll(".auth-tabs button").forEach((button, index) => {
        button.addEventListener("click", () => {
            const panel = button.closest(".login-panel");
            const form = panel?.querySelector("[data-auth-form]");
            const title = form?.querySelector("h1");
            const submit = form?.querySelector("button[type='submit']");

            button.parentElement.querySelectorAll("button").forEach((item) => item.classList.remove("active"));
            button.classList.add("active");

            if (title) title.textContent = index === 0 ? "مرحباً بك" : "حساب جديد";
            if (submit) submit.textContent = index === 0 ? "دخول" : "إنشاء الحساب";
        });
    });
}

function setupFooter() {
    const currentYear = new Date().getFullYear();
    document.querySelectorAll("[data-current-year]").forEach((element) => {
        element.textContent = currentYear;
    });
}

function observeReveals() {
    if (!("IntersectionObserver" in window)) {
        document.querySelectorAll(".reveal").forEach((element) => element.classList.add("in-view"));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.14, rootMargin: "0px 0px -70px 0px" });

    document.querySelectorAll(".reveal:not(.in-view)").forEach((element) => observer.observe(element));
}

function init() {
    injectIcons();
    setupNavigation();
    setupCatalogEvents();
    setupProductPage();
    setupCheckout();
    setupForms();
    setupFooter();
    renderCatalogs();
    renderHomePage();
    renderCheckout();
    updateCartCount();
    observeReveals();
}

init();