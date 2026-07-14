// ===== 0. INICIALIZAR BIBLIOTECA AOS (Animação de Scroll) =====
AOS.init({
    duration: 800,
    once: true,
});

// ===== 1. TRADUTOR DINÂMICO =====
const translations = {
    pt: {
        nav_home: "Início",
        nav_shop: "Loja",
        nav_delivery: "Entrega",
        nav_contact: "Contato",
        btn_order: "Peça agora",
        hero_desc1: "Embarque em uma jornada culinária de prazer ao mergulhar em nossa coleção de sorvetes artesanais.",
        hero_desc2: "Mergulhe em um mundo de imaginação! Escolha seu favorito e saboreie a aventura.",
        shop_title: "Nossos <span class='cursive'>Sabores</span>",
        shop_subtitle: "Descubra nossa seleção exclusiva de sorvetes artesanais.",
        prod1_name: "Sonho de Morango",
        prod1_desc: "Morango cremoso com pedaços reais de fruta.",
        prod2_name: "Felicidade de Mirtilo",
        prod2_desc: "Sabor suave de mirtilo com um toque azedinho.",
        prod3_name: "Chocolate Belga",
        prod3_desc: "Chocolate escuro intenso, deliciosamente rico.",
        prod4_name: "Menta Evergreen",
        prod4_desc: "Folhas de hortelã refrescantes e gotas de chocolate.",
        btn_add: "Adicionar ao carrinho",
        delivery_title: "Entrega <span class='cursive'>Rápida</span>",
        delivery_desc: "Receba seu sorvete favorito na sua porta em menos de 30 minutos. Fresco, gelado e perfeitamente embalado.",
        placeholder_name: "Seu Nome",
        placeholder_email: "Seu Email",
        placeholder_address: "Endereço de Entrega",
        select_placeholder: "Escolha seu sabor",
        btn_confirm: "Confirmar Entrega",
        footer_desc: "Sua colher diária de felicidade. Feito com amor e os melhores ingredientes.",
        footer_links: "Links Rápidos",
        footer_contact: "Contato",
        footer_credit: "Desenvolvido por PabloG.Dev"
    },
    en: {
        nav_home: "Home",
        nav_shop: "Shop",
        nav_delivery: "Delivery",
        nav_contact: "Contact",
        btn_order: "Order now",
        hero_desc1: "Embark on a culinary journey of delight as you immerse yourself in our artisan-crafted ice cream collection.",
        hero_desc2: "Indulge in a world of imagination! Choose your favorite and taste the adventure.",
        shop_title: "Our <span class='cursive'>Flavors</span>",
        shop_subtitle: "Discover our exclusive selection of artisan ice creams.",
        prod1_name: "Strawberry Dream",
        prod1_desc: "Creamy strawberry with real fruit chunks.",
        prod2_name: "Blueberry Bliss",
        prod2_desc: "Smooth blueberry flavor with a tangy twist.",
        prod3_name: "Belgian Chocolate",
        prod3_desc: "Rich dark chocolate, intensely delicious.",
        prod4_name: "Evergreen Mint",
        prod4_desc: "Refreshing mint leaves and dark chocolate chips.",
        btn_add: "Add to cart",
        delivery_title: "Fast <span class='cursive'>Delivery</span>",
        delivery_desc: "Get your favorite ice cream delivered to your door in less than 30 minutes. Fresh, frozen, and perfectly packed.",
        placeholder_name: "Your Name",
        placeholder_email: "Your Email",
        placeholder_address: "Delivery Address",
        select_placeholder: "Choose your flavor",
        btn_confirm: "Confirm Delivery",
        footer_desc: "Your daily scoop of happiness. Made with love and the finest ingredients.",
        footer_links: "Quick Links",
        footer_contact: "Contact Us",
        footer_credit: "Developed by PabloG.Dev"
    },
    es: {
        nav_home: "Inicio",
        nav_shop: "Tienda",
        nav_delivery: "Entrega",
        nav_contact: "Contacto",
        btn_order: "Pedir ahora",
        hero_desc1: "Embárcate en un viaje culinario de deleite mientras te sumerges en nuestra colección de helados artesanales.",
        hero_desc2: "¡Sumérgete en un mundo de imaginación! Elige tu favorito y saborea la aventura.",
        shop_title: "Nuestros <span class='cursive'>Sabores</span>",
        shop_subtitle: "Descubre nuestra selección exclusiva de helados artesanales.",
        prod1_name: "Sueño de Fresa",
        prod1_desc: "Fresa cremosa con trozos reales de fruta.",
        prod2_name: "Felicidad de Arándano",
        prod2_desc: "Suave sabor a arándano con un toque ácido.",
        prod3_name: "Chocolate Belga",
        prod3_desc: "Chocolate oscuro intenso, deliciosamente rico.",
        prod4_name: "Menta Evergreen",
        prod4_desc: "Hojas de menta refrescantes y chispas de chocolate oscuro.",
        btn_add: "Agregar al carrito",
        delivery_title: "Entrega <span class='cursive'>Rápida</span>",
        delivery_desc: "Recibe tu helado favorito en tu puerta en menos de 30 minutos. Fresco, congelado y perfectamente empaquetado.",
        placeholder_name: "Tu Nombre",
        placeholder_email: "Tu Correo",
        placeholder_address: "Dirección de Entrega",
        select_placeholder: "Elige tu sabor",
        btn_confirm: "Confirmar Entrega",
        footer_desc: "Tu cucharada diaria de felicidad. Hecho con amor y los mejores ingredientes.",
        footer_links: "Enlaces Rápidos",
        footer_contact: "Contáctanos",
        footer_credit: "Desarrollado por PabloG.Dev"
    }
};

function setLanguage(lang) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.getAttribute('onclick').includes(lang)) {
            btn.classList.add('active');
        }
    });

    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(el => {
        const key = el.getAttribute('data-translate');
        if(translations[lang][key]) {
            if(el.tagName === 'OPTION') {
                el.textContent = translations[lang][key];
            } else if(el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.setAttribute('placeholder', translations[lang][key]);
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });

    document.documentElement.lang = lang;
}

// ===== 2. NAVBAR DINÂMICA =====
window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ===== 3. FUNÇÃO DE TROCA DE SABOR (CORRIGIDA) =====
function changeFlavor(element) {
    const imageName = element.getAttribute('data-image');
    const color = element.getAttribute('data-color');
    const flavor = element.getAttribute('data-flavor');

    // Atualiza cor de fundo e título
    document.body.style.backgroundColor = color;
    document.getElementById('flavor-title').textContent = flavor;

    // Troca a imagem principal com animação
    const mainImage = document.getElementById('main-ice-cream');
    mainImage.style.opacity = '0';
    
    setTimeout(() => {
        mainImage.src = imageName;
        mainImage.style.opacity = '1';
    }, 150);

    // Atualiza o estado ativo das miniaturas
    const allThumbs = document.querySelectorAll('.thumb');
    allThumbs.forEach(thumb => thumb.classList.remove('active'));
    element.classList.add('active');

    // Atualiza as cores dos inputs do formulário
    updateInputColors(color);
}

// Função que altera a borda dos inputs e selects
function updateInputColors(color) {
    const inputs = document.querySelectorAll('.delivery-form input, .delivery-form select');
    inputs.forEach(input => {
        input.style.setProperty('--focus-color', color);
        input.onfocus = function() {
            this.style.borderColor = color;
        };
        input.onblur = function() {
            this.style.borderColor = 'rgba(255, 255, 255, 0.8)';
        };
    });
}

// Inicializa as cores dos inputs com a cor padrão ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    updateInputColors('#db2e64');
});

// ===== 4. MENU MOBILE =====
function toggleMenu() {
    const nav = document.getElementById('nav-menu');
    nav.classList.toggle('active');
}

document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        const nav = document.getElementById('nav-menu');
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
        }
    });
});

// ===== 5. FORMULÁRIO DE DELIVERY =====
document.querySelector('.delivery-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const currentLang = document.documentElement.lang;
    let msg = '🍦 Pedido realizado com sucesso! Seu sorvete chegará em 30 minutos.';
    if(currentLang === 'en') msg = '🍦 Order placed successfully! Your ice cream will arrive in 30 minutes.';
    if(currentLang === 'es') msg = '🍦 ¡Pedido realizado con éxito! Tu helado llegará en 30 minutos.';
    
    alert(msg);
    this.reset();
});