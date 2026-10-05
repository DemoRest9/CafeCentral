/* ====== ყოველი რესტორნისთვის მხოლოდ ეს ფაილი იცვლება ====== */
window.SITE = {
  name: "Cafe Central",
  logo: "assets/logo.webp",
  phone: "+995505050606",
  currency: "GEL",

  // TODO: Google Apps Script-ის /exec URL (menu.xlsx-ის Google Sheet-იდან). იხ. Guide ფურცელი menu.xlsx-ში
  sheetUrl: "https://script.google.com/macros/s/AKfycbw8XKU2raj1WgcJ_KqUFBjGrCcEtuqNMlNAsz7svsYjbAONli29XgDG-zoSUZyDf3zw/exec",

  // ცარიელი = DEMO რეჟიმი (შეკვეთა არსად იგზავნება, მაგრამ ყველაფერი მუშაობს)
  orderEndpoint: "",
  // ცარიელი = Wi-Fi შემოწმება გამორთულია
  allowedIps: [],

  langs: ["ka", "en", "ru"],
  defaultLang: "ka",

  // ცარიელი = სლაიდერი მენიუს ფოტოებიდან ავტომატურად აიღება
  slides: [],

  // ფერები (არასავალდებულო): charcoal, parchment, brass, brass-bright, wine, wine-bright, ink
  theme: {},

  // Google Maps-ის ბმულები (არასავალდებულო). თუ ცარიელია, ღილაკები არ გამოჩნდება.
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Cafe+Central+Batumi+56+Memed+Abashidze+Ave",
  reviewUrl: "",   // "დაწერეთ შეფასება" ბმული (Google Maps -> Share -> Write a review)

  // მიმოხილვები (about გვერდზე). ცარიელი [] = სექცია არ ჩანს.
  // ჩასვი მხოლოდ რეალური შეფასებები, მაგალითი:
  // { name: "ნინო", rating: 5, text: { ka: "...", en: "...", ru: "..." } },
  rating: { score: 4.3, count: 428 },   // Google Maps
  reviews: [
    { name: "aristocat · Google", text: "The restaurant is tucked away in a quiet corner, and the music creates such a chill and pleasant vibe. The food is insanely delicious. We ordered the Smoked Salmon Brioche Benedict …" },
    { name: "Anastasiia Skripka · Google", text: "The café is located in the heart of the city and has a very nice interior as well as outdoor seating. The desserts are absolutely delicious and melt in your mouth, and they also have their own freshly baked bread. …" }
  ],

  about: {
    ka: { eyebrow: "ჩვენი ისტორია", title: "კეთილი იყოს თქვენი მობრძანება {name}-ში",
      lede: "ნელი დილა, გემრიელი საუზმე და თბილი სტუმართმოყვარეობა.",
      story: "{name} არის ადგილი, სადაც დღეს მშვიდად იწყებ: შაკშუკა და ეგს ბენედიქტიდან ვაფლამდე და თურქულ საუზმემდე, ყველაფერი ახალი პროდუქტებით და სახლში გამომცხვარი პურით მზადდება.",
      address: "მემედ აბაშიძის გამზირი 56, ბათუმი 6010",
      hours: [["ყოველდღე", "09:00-დან"]] },   // TODO: დახურვის დრო
    en: { eyebrow: "Our Story", title: "Welcome to {name}",
      lede: "A slow morning, a great breakfast and warm hospitality.",
      story: "{name} is a place to start the day unhurried: from shakshuka and eggs benedict to waffles and the Turkish breakfast set, everything is made with fresh ingredients and freshly baked homemade bread.",
      address: "56 Memed Abashidze Ave, Batumi 6010, Georgia",
      hours: [["Daily", "From 09:00"]] },
    ru: { eyebrow: "Наша история", title: "Добро пожаловать в {name}",
      lede: "Неспешное утро, вкусный завтрак и тёплое гостеприимство.",
      story: "{name} — место, где день начинается без спешки: от шакшуки и яиц бенедикт до вафель и турецкого завтрака, всё готовится из свежих продуктов с домашним хлебом, испечённым в тот же день.",
      address: "пр. Мемеда Абашидзе 56, Батуми 6010, Грузия",
      hours: [["Ежедневно", "С 09:00"]] }
  }
};
