
/* =========================================
    PAWONE - JAVASCRIPT
========================================= */


/* =========================================
    1. DATABASE MENU MAKANAN
========================================= */

const daftarMenu = [

    {
        id: 1,
        nama: "Nasi Liwet",
        kategori: "Makanan Berat",
        harga: "Rp18.000",
        gambar: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=700",
        deskripsi: "Nasi gurih yang dimasak menggunakan santan dan rempah pilihan. Biasanya disajikan dengan ayam suwir, telur, sayuran, dan sambal.",
        bahan: "Beras, santan, daun salam, serai, bawang, dan aneka pelengkap.",
        asal: "Solo, Jawa Tengah"
    },

    {
        id: 2,
        nama: "Rendang",
        kategori: "Makanan Berat",
        harga: "Rp25.000",
        gambar: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=700",
        deskripsi: "Masakan daging khas Minangkabau yang dimasak perlahan dengan santan dan berbagai rempah sehingga menghasilkan rasa gurih dan kaya bumbu.",
        bahan: "Daging sapi, santan, cabai, lengkuas, serai, dan rempah-rempah.",
        asal: "Sumatera Barat"
    },

    {
        id: 3,
        nama: "Gudeg",
        kategori: "Makanan Berat",
        harga: "Rp20.000",
        gambar: "https://images.unsplash.com/photo-1547592180-85f173990554?w=700",
        deskripsi: "Hidangan nangka muda yang dimasak menggunakan santan dan gula aren hingga memiliki rasa manis dan gurih.",
        bahan: "Nangka muda, santan, gula merah, daun jati, dan bumbu rempah.",
        asal: "Yogyakarta"
    },

    {
        id: 4,
        nama: "Rawon",
        kategori: "Makanan Berat",
        harga: "Rp22.000",
        gambar: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=700",
        deskripsi: "Sup daging sapi dengan kuah hitam khas yang berasal dari penggunaan kluwek. Memiliki rasa gurih dan aroma rempah yang khas.",
        bahan: "Daging sapi, kluwek, serai, bawang, dan tauge.",
        asal: "Jawa Timur"
    },

    {
        id: 5,
        nama: "Soto Ayam",
        kategori: "Makanan Berat",
        harga: "Rp17.000",
        gambar: "https://images.unsplash.com/photo-1547592180-85f173990554?w=700",
        deskripsi: "Hidangan berkuah dengan kaldu ayam, rempah-rempah, suwiran ayam, dan berbagai pelengkap yang menyegarkan.",
        bahan: "Ayam, soun, kol, telur, kunyit, serai, dan bawang.",
        asal: "Jawa"
    },

    {
        id: 6,
        nama: "Pempek",
        kategori: "Makanan Berat",
        harga: "Rp15.000",
        gambar: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=700",
        deskripsi: "Makanan khas berbahan dasar ikan dan tepung tapioka yang disajikan dengan kuah cuko bercita rasa asam, manis, dan pedas.",
        bahan: "Ikan, tepung tapioka, telur, gula merah, cuka, dan cabai.",
        asal: "Palembang"
    },

    {
        id: 7,
        nama: "Ayam Betutu",
        kategori: "Makanan Berat",
        harga: "Rp28.000",
        gambar: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=700",
        deskripsi: "Hidangan ayam khas Bali yang dibumbui dengan bumbu base genep sehingga memiliki aroma rempah yang kuat.",
        bahan: "Ayam, kunyit, jahe, lengkuas, cabai, dan rempah Bali.",
        asal: "Bali"
    },

    {
        id: 8,
        nama: "Nasi Uduk",
        kategori: "Makanan Berat",
        harga: "Rp15.000",
        gambar: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=700",
        deskripsi: "Nasi yang dimasak menggunakan santan dan rempah sehingga menghasilkan aroma harum serta rasa gurih.",
        bahan: "Beras, santan, serai, daun salam, dan berbagai lauk.",
        asal: "Betawi, Jakarta"
    },

    {
        id: 9,
        nama: "Klepon",
        kategori: "Jajanan",
        harga: "Rp8.000",
        gambar: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=700",
        deskripsi: "Kue tradisional berbentuk bulat dengan isian gula merah cair dan taburan kelapa parut.",
        bahan: "Tepung ketan, gula merah, kelapa parut, dan daun pandan.",
        asal: "Jawa"
    },

    {
        id: 10,
        nama: "Lemper",
        kategori: "Jajanan",
        harga: "Rp5.000",
        gambar: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=700",
        deskripsi: "Jajanan tradisional yang terbuat dari ketan dengan isian ayam berbumbu gurih dan dibungkus daun pisang.",
        bahan: "Beras ketan, santan, ayam suwir, dan daun pisang.",
        asal: "Jawa"
    },

    {
        id: 11,
        nama: "Serabi",
        kategori: "Jajanan",
        harga: "Rp7.000",
        gambar: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=700",
        deskripsi: "Kue tradisional berbentuk bulat yang dibuat dari tepung beras dan santan. Memiliki tekstur lembut dan rasa gurih.",
        bahan: "Tepung beras, santan, kelapa, dan gula.",
        asal: "Jawa Barat"
    },

    {
        id: 12,
        nama: "Kue Putu",
        kategori: "Jajanan",
        harga: "Rp6.000",
        gambar: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=700",
        deskripsi: "Kue tradisional berbahan tepung beras dengan isian gula merah dan taburan kelapa parut.",
        bahan: "Tepung beras, gula merah, kelapa, dan pandan.",
        asal: "Nusantara"
    },

    {
        id: 13,
        nama: "Es Cendol",
        kategori: "Minuman",
        harga: "Rp10.000",
        gambar: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=700",
        deskripsi: "Minuman tradisional yang berisi cendol hijau, santan, es, dan gula merah cair dengan perpaduan rasa manis dan gurih.",
        bahan: "Tepung beras, pandan, santan, gula merah, dan es.",
        asal: "Jawa Barat"
    },

    {
        id: 14,
        nama: "Wedang Jahe",
        kategori: "Minuman",
        harga: "Rp8.000",
        gambar: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=700",
        deskripsi: "Minuman hangat tradisional yang dibuat dari jahe dan rempah pilihan dengan aroma khas yang menenangkan.",
        bahan: "Jahe, gula merah, serai, dan air.",
        asal: "Jawa"
    },

    {
        id: 15,
        nama: "Es Dawet",
        kategori: "Minuman",
        harga: "Rp10.000",
        gambar: "https://images.unsplash.com/photo-1513558161293-cdaf765edfd4?w=700",
        deskripsi: "Minuman tradisional yang terdiri dari dawet, santan, dan gula merah cair. Memiliki rasa manis dan menyegarkan.",
        bahan: "Dawet, santan, gula merah, daun pandan, dan es.",
        asal: "Jawa Tengah"
    }

];


/* =========================================
    2. MENGAMBIL ELEMEN HTML
========================================= */

const menuGrid = document.getElementById("menuGrid");

const searchInput = document.getElementById("searchInput");

const categoryButtons = document.querySelectorAll(".category-btn");

const menuCount = document.getElementById("menuCount");

const emptyMessage = document.getElementById("emptyMessage");

let kategoriAktif = "Semua";


/* =========================================
    3. MENAMPILKAN MENU
========================================= */

function tampilkanMenu(data) {

    menuGrid.innerHTML = "";

    menuCount.textContent = data.length;

    if (data.length === 0) {

        emptyMessage.style.display = "block";

        return;

    }

    emptyMessage.style.display = "none";


    data.forEach((menu) => {

        const card = document.createElement("article");

        card.className = "menu-card";


        const imageWrapper = document.createElement("div");

        imageWrapper.className = "menu-image";


        const image = document.createElement("img");

        image.src = menu.gambar;

        image.alt = menu.nama;

        image.loading = "lazy";

        image.onerror = function () {
            this.onerror = null;
            this.src = "https://placehold.co/600x400/F8F4ED/70452E?text=Pawone";
        };


        const category = document.createElement("span");

        category.className = "menu-category";

        category.textContent = menu.kategori;


        imageWrapper.append(image, category);


        const content = document.createElement("div");

        content.className = "menu-content";


        const title = document.createElement("h3");

        title.textContent = menu.nama;


        const description = document.createElement("p");

        description.textContent = menu.deskripsi;


        const meta = document.createElement("div");

        meta.className = "menu-meta";


        const price = document.createElement("span");

        price.className = "menu-price";

        price.textContent = menu.harga;


        const detailButton = document.createElement("button");

        detailButton.className = "menu-detail";

        detailButton.textContent = "Lihat Detail →";

        detailButton.type = "button";

        detailButton.addEventListener("click", () => {

            tampilkanDetail(menu.id);

        });


        meta.append(price, detailButton);

        content.append(title, description, meta);

        card.append(imageWrapper, content);

        menuGrid.appendChild(card);

    });

}


/* =========================================
    4. FILTER KATEGORI
========================================= */

categoryButtons.forEach((button) => {

    button.addEventListener("click", () => {

        categoryButtons.forEach((btn) => {

            btn.classList.remove("active");

        });


        button.classList.add("active");

        kategoriAktif = button.dataset.category;

        filterMenu();

    });

});


/* =========================================
    5. PENCARIAN MENU
========================================= */

searchInput.addEventListener("input", () => {

    filterMenu();

});


function filterMenu() {

    const keyword = searchInput.value

        .toLowerCase()

        .trim();


    const hasilFilter = daftarMenu.filter((menu) => {

        const cocokKategori =

            kategoriAktif === "Semua" ||

            menu.kategori === kategoriAktif;


        const cocokPencarian =

            menu.nama.toLowerCase().includes(keyword) ||

            menu.deskripsi.toLowerCase().includes(keyword) ||

            menu.asal.toLowerCase().includes(keyword);


        return cocokKategori && cocokPencarian;

    });


    tampilkanMenu(hasilFilter);

}


/* =========================================
    6. DETAIL MENU / MODAL
========================================= */

function tampilkanDetail(id) {

    const menu = daftarMenu.find((item) => item.id === id);

    if (!menu) return;


    // Menghapus modal sebelumnya jika ada
    const modalLama = document.querySelector(".detail-modal");

    if (modalLama) {

        modalLama.remove();

    }


    // Membuat elemen modal
    const modal = document.createElement("div");

    modal.className = "detail-modal";


    const modalBox = document.createElement("div");

    modalBox.className = "detail-box";


    // Tombol tutup
    const closeButton = document.createElement("button");

    closeButton.className = "modal-close";

    closeButton.type = "button";

    closeButton.textContent = "×";

    closeButton.setAttribute("aria-label", "Tutup detail");


    closeButton.addEventListener("click", tutupModal);


    // Gambar makanan
    const image = document.createElement("img");

    image.src = menu.gambar;

    image.alt = menu.nama;

    image.className = "detail-image";


    image.onerror = function () {

        this.onerror = null;

        this.src = "https://placehold.co/600x400/F8F4ED/70452E?text=Pawone";

    };


    // Isi detail
    const content = document.createElement("div");

    content.className = "detail-content";


    const category = document.createElement("span");

    category.className = "eyebrow";

    category.textContent = menu.kategori;


    const title = document.createElement("h2");

    title.textContent = menu.nama;


    const description = document.createElement("p");

    description.textContent = menu.deskripsi;


    const ingredientsTitle = document.createElement("h4");

    ingredientsTitle.textContent = "Bahan Utama";


    const ingredients = document.createElement("p");

    ingredients.textContent = menu.bahan;


    const originTitle = document.createElement("h4");

    originTitle.textContent = "Asal Daerah";


    const origin = document.createElement("p");

    origin.textContent = menu.asal;


    const price = document.createElement("div");

    price.className = "detail-price";

    price.textContent = menu.harga;


    const note = document.createElement("small");

    note.textContent = "Informasi harga merupakan contoh katalog.";


    content.append(

        category,

        title,

        description,

        ingredientsTitle,

        ingredients,

        originTitle,

        origin,

        price,

        note

    );


    modalBox.append(

        closeButton,

        image,

        content

    );


    modal.appendChild(modalBox);

    document.body.appendChild(modal);


    // Mengunci scroll background
    document.body.style.overflow = "hidden";


    // Menutup jika klik di luar modal
    modal.addEventListener("click", (event) => {

        if (event.target === modal) {

            tutupModal();

        }

    });


    function tutupModal() {

        modal.remove();

        document.body.style.overflow = "";

    }


    // Menutup dengan tombol Escape
    document.addEventListener("keydown", function escapeHandler(event) {

        if (event.key === "Escape") {

            tutupModal();

            document.removeEventListener("keydown", escapeHandler);

        }

    });

}


/* =========================================
    7. STYLE MODAL
========================================= */

const modalStyle = document.createElement("style");

modalStyle.textContent = `

.detail-modal {

    position: fixed;

    inset: 0;

    z-index: 2000;

    background: rgba(30, 20, 15, 0.7);

    display: flex;

    align-items: center;

    justify-content: center;

    padding: 20px;

    backdrop-filter: blur(5px);

    animation: fadeIn 0.3s ease;

}

.detail-box {

    width: min(500px, 100%);

    max-height: 90vh;

    overflow-y: auto;

    background: white;

    border-radius: 20px;

    position: relative;

    animation: slideUp 0.4s ease;

}

.detail-image {

    width: 100%;

    height: 250px;

    object-fit: cover;

}

.detail-content {

    padding: 25px;

}

.detail-content h2 {

    font-family: var(--font-heading);

    color: var(--primary-dark);

    font-size: 30px;

    margin-bottom: 15px;

}

.detail-content p {

    color: var(--text-light);

    font-size: 13px;

    line-height: 1.8;

    margin-bottom: 20px;

}

.detail-content h4 {

    color: var(--primary);

    font-size: 13px;

    margin-bottom: 8px;

}

.detail-price {

    border-top: 1px solid #eee;

    padding-top: 18px;

    margin-top: 10px;

    font-size: 20px;

    font-weight: 800;

    color: var(--primary);

}

.detail-content small {

    display: block;

    margin-top: 7px;

    color: var(--text-light);

    font-size: 10px;

}

.modal-close {

    position: absolute;

    z-index: 5;

    top: 15px;

    right: 15px;

    width: 35px;

    height: 35px;

    border: none;

    border-radius: 50%;

    background: white;

    color: var(--primary-dark);

    font-size: 25px;

    cursor: pointer;

    box-shadow: 0 3px 10px rgba(0,0,0,0.15);

}

`;


document.head.appendChild(modalStyle);


/* =========================================
    8. MOBILE NAVIGATION
========================================= */

const menuToggle = document.getElementById("menuToggle");

const navMenu = document.getElementById("navMenu");

const navLinks = document.querySelectorAll(".nav-link");


menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


/* =========================================
    9. NAVBAR SCROLL EFFECT
========================================= */

const navbar = document.getElementById("navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================================
    10. ACTIVE NAVIGATION
========================================= */

const sections = document.querySelectorAll("main section[id]");


const observerNav = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            navLinks.forEach((link) => {

                link.classList.remove("active");


                if (

                    link.getAttribute("href") ===

                    "#" + entry.target.id

                ) {

                    link.classList.add("active");

                }

            });

        }

    });

}, {

    threshold: 0,

    rootMargin: "-30% 0px -60% 0px"

});


sections.forEach((section) => {

    observerNav.observe(section);

});


/* =========================================
    11. SCROLL REVEAL ANIMATION
========================================= */

const revealElements = document.querySelectorAll(

    ".about-content, .about-image, .section-heading, .feature-card, .contact-card"

);


revealElements.forEach((element) => {

    element.classList.add("reveal");

});


const revealObserver = new IntersectionObserver((entries, observer) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.12

});


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================================
    12. COPYRIGHT OTOMATIS
========================================= */

document.getElementById("year").textContent =

    new Date().getFullYear();


/* =========================================
    13. INITIALIZATION
========================================= */

// Menampilkan seluruh menu saat website dibuka

tampilkanMenu(daftarMenu);


console.log("Pawoné Website berhasil dijalankan!");