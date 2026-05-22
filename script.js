const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');
const headerBrand = document.querySelector('.site-header .brand');
const langButtons = Array.from(document.querySelectorAll('.lang-btn'));
const callOpenButtons = Array.from(document.querySelectorAll('[data-open-call-modal]'));
const callModal = document.querySelector('#call-modal');
const callCloseButton = document.querySelector('#call-close');
const contactsCta = document.querySelector('.contact-cta');
const chairPhotoCard = document.querySelector('#chair-photo-card');

const copy = {
  uk: {
    nav_about: 'Про нас',
    nav_services: 'Послуги',
    nav_contacts: 'Контакти',
    nav_book: 'Записатися',
    banner_title: 'Стоматологічний кабінет',
    banner_name: 'Посмішка+',
    banner_slogan: 'Ми повертаємо не лише природну посмішку, а й відчуття спокою та впевненості в собі.',
    hero_eyebrow: 'Стоматологічний кабінет «Посмішка+»',
    hero_title: 'Посмішка+, що повертає впевненість',
    hero_subtitle: 'Сучасна стоматологія з комфортом, турботою та безболісними методами.',
    hero_cta: 'Записатися на прийом',
    hero_card_title: 'Турбота, якій довіряють',
    hero_card_desc: 'М’який підхід, стерильність та обладнання нового покоління.',
    hero_bullet_1: 'Безболісні методики',
    hero_bullet_2: 'Індивідуальний план лікування',
    hero_bullet_3: 'Комфортна атмосфера для дорослих і дітей',
    about_title: 'Про нас',
    about_p1:
      '«Посмішка+» поєднує медичну точність і сервіс, у якому пацієнт почувається спокійно з першої хвилини. Ми працюємо за сучасними протоколами, дбаємо про стерильність і використовуємо перевірені матеріали.',
    about_p2: 'Для нас стоматологія - це не просто лікування. Це про впевненість, комфорт і здорову посмішку на роки.',
    about_tag_1: '10+ років досвіду',
    about_tag_2: 'Сучасне обладнання',
    about_tag_3: 'Турботливий сервіс',
    about_intro_1:
      "Мене звати Олег Володимирович Рубель, я лікар-стоматолог з 28-річним досвідом роботи. За ці роки я допоміг багатьом людям повернути здоров'я зубів, комфорт та впевненість у власній посмішці.",
    about_intro_2:
      'Понад 20 років я працював у державній лікарні, де отримав великий практичний досвід і навчився працювати з найрізноманітнішими випадками. Останні 8 років веду приватну практику, де можу приділити кожному пацієнту стільки уваги, скільки потрібно, і створити максимально комфортні умови.',
    about_focus_note: 'Мої основні напрямки роботи - терапевтична та ортопедична стоматологія.',
    about_ther_title: 'Терапевтична стоматологія',
    about_ther_text:
      'Це лікування зубів та ясен. Я займаюся лікуванням карієсу, пульпіту, періодонтиту, проводжу естетичні реставрації та допомагаю зберегти природні зуби якомога довше. Пояснюю кожен крок простою мовою, щоб пацієнт розумів, що і навіщо ми робимо.',
    about_principles_title: 'Мої принципи в роботі',
    about_principle_1: 'Безболісні методи',
    about_principle_2: 'Сучасне обладнання',
    about_principle_3: 'Індивідуальний підхід',
    about_principle_4: 'Еко-матеріали та безпечні препарати',
    about_principle_5: 'Комфортна атмосфера',
    about_principle_6: 'Якість і акуратність',
    about_principle_7: 'Помірні ціни',
    about_final_text:
      'Багато людей приходять до мене за рекомендаціями - і це найбільша оцінка моєї роботи. Я завжди відкритий до спілкування, пояснюю все доступно та роблю все можливе, щоб лікування проходило спокійно й безболісно.',
    services_title: 'Послуги терапевтичної стоматології',
    service_1_t: 'Лікування карієсу',
    service_1_d: 'Дбайливе лікування з точним відновленням анатомії зуба.',
    service_2_t: 'Лікування пульпіту',
    service_2_d: 'Сучасні методики знеболення та ефективна ендодонтична обробка.',
    service_3_t: 'Лікування періодонтиту',
    service_3_d: 'Комплексне лікування запальних процесів для збереження зуба.',
    service_4_t: 'Пломбування та естетичні реставрації',
    service_4_d: 'Відновлення форми, кольору та функції зубів максимально природно.',
    service_5_t: 'Професійна діагностика та консультація',
    service_5_d: 'Повна оцінка стану зубів і прозорий індивідуальний план лікування.',
    service_6_t: 'Професійна гігієна зубів',
    service_6_d: 'Делікатне очищення нальоту та каменю для здорових ясен.',
    service_7_t: 'Лікування захворювань ясен',
    service_7_d: 'Профілактика та лікування гінгівіту й інших проблем пародонту.',
    service_8_t: 'Відбілювання зубів',
    service_8_d: 'Безпечне освітлення емалі з контрольованим і природним результатом.',
    service_9_t: 'Дитяча стоматологія',
    service_9_d: 'Спокійний дружній прийом, адаптований під маленьких пацієнтів.',
    service_10_t: 'Реставрація зубів після травм',
    service_10_d: 'Естетичне та функціональне відновлення пошкоджених зубів.',
    reviews_write_btn: 'Залишити відгук',
    contacts_title: 'Контакти',
    label_address: 'Адреса:',
    value_address: 'вулиця Острозького, 62, Вінниця, Вінницька область, 21000',
    label_phone: 'Телефон:',
    label_hours: 'Графік роботи:',
    value_hours: "Понеділок-П'ятниця: 09:00-12:00, 14:00-18:00",
    label_lunch: 'Обід:',
    value_lunch: '12:00-14:00',
    label_weekend: 'Субота-Неділя:',
    value_weekend: 'Вихідний',
    book_btn: 'Записатися',
    copyright: '© 2026 «Посмішка+». Усі права захищено.',
    dev_text: 'Швидка та якісна розробка сайтів на замовлення від',
    dev_brand: 'MAXONIK',
    modal_kicker: 'Швидкий запис на прийом',
    modal_title: 'Подзвоніть нам зараз',
    modal_call: 'Зателефонувати'
  },
  en: {
    nav_about: 'About',
    nav_services: 'Services',
    nav_contacts: 'Contacts',
    nav_book: 'Book now',
    banner_title: 'Dental office',
    banner_name: 'Posmishka+',
    banner_slogan: 'We restore not only a natural smile, but also a sense of calm and confidence.',
    hero_eyebrow: 'Dental office "Posmishka+"',
    hero_title: 'A smile that brings confidence back',
    hero_subtitle: 'Modern dentistry with comfort, care, and painless treatment methods.',
    hero_cta: 'Book an appointment',
    hero_card_title: 'Care you can trust',
    hero_card_desc: 'Gentle approach, strict sterilization, and modern equipment.',
    hero_bullet_1: 'Painless methods',
    hero_bullet_2: 'Personalized treatment plan',
    hero_bullet_3: 'Comfortable atmosphere for adults and children',
    about_title: 'About us',
    about_p1:
      'Posmishka+ combines medical precision and service where every patient feels calm from the very first minute. We follow modern clinical protocols, ensure sterilization, and use trusted materials.',
    about_p2: 'For us, dentistry is more than treatment. It is confidence, comfort, and a healthy smile for years.',
    about_tag_1: '10+ years of experience',
    about_tag_2: 'Modern equipment',
    about_tag_3: 'Caring service',
    about_intro_1:
      'My name is Oleh Volodymyrovych Rubel, I am a dentist with 28 years of professional experience. Over these years, I have helped many people restore dental health, comfort, and confidence in their smile.',
    about_intro_2:
      'For more than 20 years, I worked in a public hospital, where I gained extensive practical experience and learned to handle a wide variety of clinical cases. For the last 8 years, I have run a private practice, where I can give each patient the attention they need and create the most comfortable conditions possible.',
    about_focus_note: 'My key areas are therapeutic and prosthetic dentistry.',
    about_ther_title: 'Therapeutic dentistry',
    about_ther_text:
      'This includes treatment of teeth and gums. I treat caries, pulpitis, and periodontitis, perform aesthetic restorations, and help preserve natural teeth for as long as possible. I explain every step in simple language, so patients understand what we are doing and why.',
    about_principles_title: 'My working principles',
    about_principle_1: 'Painless methods',
    about_principle_2: 'Modern equipment',
    about_principle_3: 'Personalized approach',
    about_principle_4: 'Eco materials and safe medications',
    about_principle_5: 'Comfortable atmosphere',
    about_principle_6: 'Quality and precision',
    about_principle_7: 'Reasonable pricing',
    about_final_text:
      'Many people come to me by recommendation, and this is the highest appreciation of my work. I am always open to communication, explain everything clearly, and do everything possible to make treatment calm and painless.',
    services_title: 'Therapeutic Dentistry Services',
    service_1_t: 'Caries treatment',
    service_1_d: 'Careful treatment with precise restoration of tooth anatomy.',
    service_2_t: 'Pulpitis treatment',
    service_2_d: 'Modern pain-control methods and effective endodontic care.',
    service_3_t: 'Periodontitis treatment',
    service_3_d: 'Comprehensive anti-inflammatory treatment to preserve the tooth.',
    service_4_t: 'Fillings and aesthetic restorations',
    service_4_d: 'Natural restoration of tooth shape, color, and function.',
    service_5_t: 'Professional diagnostics and consultation',
    service_5_d: 'Complete dental assessment and a transparent personalized treatment plan.',
    service_6_t: 'Professional dental hygiene',
    service_6_d: 'Gentle removal of plaque and tartar for healthier gums.',
    service_7_t: 'Gum disease treatment',
    service_7_d: 'Prevention and treatment of gingivitis and other periodontal issues.',
    service_8_t: 'Teeth whitening',
    service_8_d: 'Safe enamel brightening with a controlled, natural result.',
    service_9_t: 'Pediatric dentistry',
    service_9_d: 'Calm, friendly appointments tailored for young patients.',
    service_10_t: 'Post-trauma tooth restoration',
    service_10_d: 'Aesthetic and functional restoration of damaged teeth.',
    reviews_write_btn: 'Leave a review',
    contacts_title: 'Contacts',
    label_address: 'Address:',
    value_address: '62 Ostrozkoho Street, Vinnytsia, Vinnytsia region, 21000',
    label_phone: 'Phone:',
    label_hours: 'Working hours:',
    value_hours: 'Monday-Friday: 09:00-12:00, 14:00-18:00',
    label_lunch: 'Lunch break:',
    value_lunch: '12:00-14:00',
    label_weekend: 'Saturday-Sunday:',
    value_weekend: 'Closed',
    book_btn: 'Book now',
    copyright: '© 2026 "Posmishka+". All rights reserved.',
    dev_text: 'Fast and high-quality custom website development by',
    dev_brand: 'MAXONIK',
    modal_kicker: 'Quick appointment',
    modal_title: 'Call us now',
    modal_call: 'Call now'
  }
};

function applyLanguage(lang) {
  const dictionary = copy[lang] || copy.uk;
  document.documentElement.lang = lang;
  document.title = lang === 'en'
    ? 'Dental Office "Posmishka+"'
    : 'Стоматологічний кабінет «Посмішка+»';

  const metaDescription = document.querySelector('#meta-description');
  if (metaDescription) {
    metaDescription.setAttribute(
      'content',
      lang === 'en'
        ? 'Dental office "Posmishka+": modern dentistry with comfort, care, and painless treatment methods.'
        : 'Стоматологічний кабінет «Посмішка+»: сучасна стоматологія з комфортом, турботою та безболісними методами.'
    );
  }

  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.getAttribute('data-i18n');
    if (dictionary[key]) {
      node.textContent = dictionary[key];
    }
  });

  langButtons.forEach((button) => {
    const selected = button.dataset.lang === lang;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });

  window.localStorage.setItem('siteLang', lang);
}

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

langButtons.forEach((button) => {
  button.addEventListener('click', () => {
    applyLanguage(button.dataset.lang || 'uk');
  });
});

const savedLang = window.localStorage.getItem('siteLang');
applyLanguage(savedLang === 'en' ? 'en' : 'uk');

headerBrand?.addEventListener('click', (event) => {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

function openCallModal() {
  if (!callModal) return;
  callModal.classList.add('open');
  callModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeCallModal() {
  if (!callModal) return;
  callModal.classList.remove('open');
  callModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function chairHighlightOn() {
  chairPhotoCard?.classList.add('lamp-on');
}

function chairHighlightOff() {
  chairPhotoCard?.classList.remove('lamp-on');
}

if (contactsCta && chairPhotoCard) {
  contactsCta.addEventListener('mouseenter', chairHighlightOn);
  contactsCta.addEventListener('mouseleave', chairHighlightOff);
  contactsCta.addEventListener('focus', chairHighlightOn);
  contactsCta.addEventListener('blur', chairHighlightOff);
  contactsCta.addEventListener('touchstart', () => {
    chairHighlightOn();
    window.setTimeout(chairHighlightOff, 900);
  }, { passive: true });
}

callOpenButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    openCallModal();
  });
});

callCloseButton?.addEventListener('click', closeCallModal);

callModal?.addEventListener('click', (event) => {
  if (event.target === callModal) {
    closeCallModal();
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeCallModal();
  }
});
