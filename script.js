// VARSHUVERSE Premium Hybrid â€” personalize the memories below.
const chapters = [
  {
    title: "Chaos chronicles",
    eyebrow: "STAR 01 / THE CHAOS",
    body: "Oye Pandhi! Mana allari ki separate award ivvali. Normal ga undadam mana valla kaadhu kada? 😂 Ee star mana random laughs, silly fights, and legendary overaction kosam."
  },
  {
    title: "The little things",
    eyebrow: "STAR 02 / THE LITTLE THINGS",
    body: "Konni memories pedda events kaavu. Chinna conversations, sudden smiles, and without any reason happy aipoye moments. Avi chinna vishayalu la kanipinchina, naaku chaala special."
  },
  {
    title: "Selfie club",
    eyebrow: "STAR 03 / CAMERA ROLL",
    body: "Mana photos perfect ga undakapovachu, but mana expressions maatram priceless. Ee chapter lo best selfies, funny faces, and camera ki dorikipoyina moments add cheyyi. 📸"
  },
  {
    title: "Golden days",
    eyebrow: "STAR 04 / GOLDEN DAYS",
    body: "Manam kalisina konni rojulu calendar lo ordinary dates ayina, naaku maatram memorable days. Ee star mana favourite days and special occasions kosam. ✨"
  },
  {
    title: "A soft place",
    eyebrow: "STAR 05 / FROM THE HEART",
    body: "Nuvvu happy ga unte naaku kuda happy ga untundhi, Varshu. Nee dreams anni nijam avvali. Life entha busy aina, mana friendship lo ee warmth ilaane undali. 💗"
  },
  {
   title: "Always us" ,
    eyebrow: "STAR 06 / ALWAYS US",
    body: "Future lo life entha change aina, mana memories gurthucheskuni navvukovali. Nuvvu eppudu ela unna, naaku nuvvu eppatiki naa special Varshu ve. Forever and ever. 🫂"
  },
 {
    title: "Happy Birthday Varshu!",
    eyebrow: "STAR 07 / YOUR SPECIAL DAY",
    body: "Ee roju nee kosam, Varshu! Nee smile eppudu ilaane glow avvali. Nee dreams anni nijam avvali. You deserve all the happiness in this universe. Happy Birthday, my favourite human! 💜🎂",
    finale: true
  }
];

const photoAlbums = [
{ src: 'assets/photos/favorite-memories/WhatsApp Image 2026-10-11 at 1.45.20 PM.jpeg', category: 'favorite-memories', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/favorite-memories/WhatsApp Image 2026-10-11 at 1.45.37 PM.jpeg', category: 'favorite-memories', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/favorite-memories/WhatsApp Image 2026-10-11 at 1.45.45 PM (1).jpeg', category: 'favorite-memories', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/favorite-memories/WhatsApp Image 2026-10-11 at 1.45.45 PM (2).jpeg', category: 'favorite-memories', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/favorite-memories/WhatsApp Image 2026-10-11 at 1.45.45 PM (3).jpeg', category: 'favorite-memories', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/favorite-memories/WhatsApp Image 2026-10-11 at 1.45.45 PM.jpeg', category: 'favorite-memories', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/favorite-memories/WhatsApp Image 2026-10-11 at 1.45.46 PM (1).jpeg', category: 'favorite-memories', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/favorite-memories/WhatsApp Image 2026-10-11 at 1.45.46 PM (2).jpeg', category: 'favorite-memories', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/favorite-memories/WhatsApp Image 2026-10-11 at 1.45.46 PM.jpeg', category: 'favorite-memories', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/favorite-memories/WhatsApp Image 2026-10-11 at 1.45.47 PM (1).jpeg', category: 'favorite-memories', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/favorite-memories/WhatsApp Image 2026-10-11 at 1.45.47 PM (2).jpeg', category: 'favorite-memories', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/favorite-memories/WhatsApp Image 2026-10-11 at 1.45.47 PM.jpeg', category: 'favorite-memories', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/favorite-memories/WhatsApp Image 2026-10-11 at 1.45.48 PM.jpeg', category: 'favorite-memories', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/funny-moments/WhatsApp Image 2026-10-11 at 1.45.24 PM.jpeg', category: 'funny-moments', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/funny-moments/WhatsApp Image 2026-10-11 at 1.45.32 PM (1).jpeg', category: 'funny-moments', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/funny-moments/WhatsApp Image 2026-10-11 at 1.45.32 PM (2).jpeg', category: 'funny-moments', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/funny-moments/WhatsApp Image 2026-10-11 at 1.45.32 PM.jpeg', category: 'funny-moments', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/funny-moments/WhatsApp Image 2026-10-11 at 1.45.33 PM (1).jpeg', category: 'funny-moments', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/funny-moments/WhatsApp Image 2026-10-11 at 1.45.33 PM (2).jpeg', category: 'funny-moments', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/funny-moments/WhatsApp Image 2026-10-11 at 1.45.33 PM.jpeg', category: 'funny-moments', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/funny-moments/WhatsApp Image 2026-10-11 at 1.45.34 PM (1).jpeg', category: 'funny-moments', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/funny-moments/WhatsApp Image 2026-10-11 at 1.45.34 PM.jpeg', category: 'funny-moments', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/funny-moments/WhatsApp Image 2026-10-11 at 1.45.36 PM.jpeg', category: 'funny-moments', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/selfies/WhatsApp Image 2026-10-11 at 1.45.25 PM.jpeg', category: 'selfies', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/selfies/WhatsApp Image 2026-10-11 at 1.45.29 PM (1).jpeg', category: 'selfies', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/selfies/WhatsApp Image 2026-10-11 at 1.45.29 PM.jpeg', category: 'selfies', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/selfies/WhatsApp Image 2026-10-11 at 1.45.30 PM (1).jpeg', category: 'selfies', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/selfies/WhatsApp Image 2026-10-11 at 1.45.30 PM (2).jpeg', category: 'selfies', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/selfies/WhatsApp Image 2026-10-11 at 1.45.30 PM.jpeg', category: 'selfies', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/selfies/WhatsApp Image 2026-10-11 at 1.45.31 PM (1).jpeg', category: 'selfies', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/selfies/WhatsApp Image 2026-10-11 at 1.45.43 PM (1).jpeg', category: 'selfies', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/selfies/WhatsApp Image 2026-10-11 at 1.45.43 PM.jpeg', category: 'selfies', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/special-days/WhatsApp Image 2026-10-11 at 1.45.20 PM.jpeg', category: 'special-days', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/special-days/WhatsApp Image 2026-10-11 at 1.45.22 PM.jpeg', category: 'special-days', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/special-days/WhatsApp Image 2026-10-11 at 1.45.24 PM (1).jpeg', category: 'special-days', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/special-days/WhatsApp Image 2026-10-11 at 1.45.24 PM.jpeg', category: 'special-days', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/special-days/WhatsApp Image 2026-10-11 at 1.45.25 PM.jpeg', category: 'special-days', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/special-days/WhatsApp Image 2026-10-11 at 1.45.29 PM (1).jpeg', category: 'special-days', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/special-days/WhatsApp Image 2026-10-11 at 1.45.29 PM.jpeg', category: 'special-days', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/special-days/WhatsApp Image 2026-10-11 at 1.45.30 PM (1).jpeg', category: 'special-days', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/special-days/WhatsApp Image 2026-10-11 at 1.45.30 PM (2).jpeg', category: 'special-days', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/special-days/WhatsApp Image 2026-10-11 at 1.45.30 PM.jpeg', category: 'special-days', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/special-days/WhatsApp Image 2026-10-11 at 1.45.31 PM (1).jpeg', category: 'special-days', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/special-days/WhatsApp Image 2026-10-11 at 1.45.31 PM (2).jpeg', category: 'special-days', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/special-days/WhatsApp Image 2026-10-11 at 1.45.31 PM.jpeg', category: 'special-days', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/special-days/WhatsApp Image 2026-10-11 at 1.45.32 PM (1).jpeg', category: 'special-days', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/special-days/WhatsApp Image 2026-10-11 at 1.45.32 PM (2).jpeg', category: 'special-days', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/special-days/WhatsApp Image 2026-10-11 at 1.45.32 PM.jpeg', category: 'special-days', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/special-days/WhatsApp Image 2026-10-11 at 1.45.33 PM (1).jpeg', category: 'special-days', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/special-days/WhatsApp Image 2026-10-11 at 1.45.33 PM (2).jpeg', category: 'special-days', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/special-days/WhatsApp Image 2026-10-11 at 1.45.33 PM.jpeg', category: 'special-days', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/special-days/WhatsApp Image 2026-10-11 at 1.45.34 PM (1).jpeg', category: 'special-days', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/special-days/WhatsApp Image 2026-10-11 at 1.45.34 PM.jpeg', category: 'special-days', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/special-days/WhatsApp Image 2026-10-11 at 1.45.36 PM.jpeg', category: 'special-days', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/special-days/WhatsApp Image 2026-10-11 at 1.45.37 PM.jpeg', category: 'special-days', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/special-days/WhatsApp Image 2026-10-11 at 1.45.43 PM (1).jpeg', category: 'special-days', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/special-days/WhatsApp Image 2026-10-11 at 1.45.43 PM.jpeg', category: 'special-days', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/special-days/WhatsApp Image 2026-10-11 at 1.45.44 PM (1).jpeg', category: 'special-days', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/special-days/WhatsApp Image 2026-10-11 at 1.45.44 PM (2).jpeg', category: 'special-days', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/special-days/WhatsApp Image 2026-10-11 at 1.45.44 PM.jpeg', category: 'special-days', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/special-days/WhatsApp Image 2026-10-11 at 1.45.45 PM (1).jpeg', category: 'special-days', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/special-days/WhatsApp Image 2026-10-11 at 1.45.45 PM (2).jpeg', category: 'special-days', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/special-days/WhatsApp Image 2026-10-11 at 1.45.45 PM (3).jpeg', category: 'special-days', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/special-days/WhatsApp Image 2026-10-11 at 1.45.45 PM.jpeg', category: 'special-days', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/special-days/WhatsApp Image 2026-10-11 at 1.45.46 PM (1).jpeg', category: 'special-days', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/special-days/WhatsApp Image 2026-10-11 at 1.45.46 PM (2).jpeg', category: 'special-days', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/special-days/WhatsApp Image 2026-10-11 at 1.45.46 PM.jpeg', category: 'special-days', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/special-days/WhatsApp Image 2026-10-11 at 1.45.47 PM (1).jpeg', category: 'special-days', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/special-days/WhatsApp Image 2026-10-11 at 1.45.47 PM (2).jpeg', category: 'special-days', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/special-days/WhatsApp Image 2026-10-11 at 1.45.47 PM.jpeg', category: 'special-days', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
{ src: 'assets/photos/special-days/WhatsApp Image 2026-10-11 at 1.45.48 PM.jpeg', category: 'special-days', title: 'Mana Beautiful Memories 💜', note: 'Ee moments eppatiki marchipolenu! ✨' },
];

const captionTitles = [
  "That Beautiful Smile ❤️",
  "Our Crazy Moments 😂",
  "A Memory to Keep ✨",
  "My Favourite Human 💜",
  "Little Moments, Big Feelings 🌸",
  "Forever My Bestie 🫶",
  "The Unplanned Click 📸",
  "A Day Worth Remembering 🌷",
  "Our Kind of Happiness 🦋",
  "One Photo, A Thousand Feelings 💖",
  "Partners in Crime 😜",
  "My Safe Place 🌙",
  "Smiles That Stay 🌟",
  "A Little Piece of Forever 💌",
  "Just You and Me 🩷"
];

const captionNotes = [
  "Nee smile chusthe naaku automatic ga happiness vachesthundi.",
  "Manam chesina silly panulu gurthosthe ippatiki navvu aagadu.",
  "Ee chinna moment kuda naaku chaala special.",
  "Neetho unna prathi moment oka beautiful memory.",
  "Photo lo unna smile venaka oka cute story undhi.",
  "Mana friendship lo ordinary days kuda extraordinary.",
  "Ee memory ni enni saarlu chusina bore kottadhu.",
  "Nuvvu pakkana unte simple moments kuda special aipothayi.",
  "Manam kalisi navvina moments eppatiki gurthuntayi.",
  "Ee photo chusthe aa roju malli gurthosthundi.",
  "Nuvvu friend maatrame kaadhu, naaku oka comfort zone.",
  "Mana bond ki perfect words dorakakapoyina feelings chaala unnayi.",
  "Konni memories explain cheyyalem, just feel avvali.",
  "Time maarina, ee memories value maatram maaradhu.",
  "Nee presence naa ordinary day ni beautiful chesthundi.",
  "Manam share chesukunna little things naaku chaala precious.",
  "Ee click venaka unna happiness ni words lo cheppalenu.",
  "Mana friendship lo laughter ki eppudu shortage undadhu.",
  "Ee moment ni malli recreate cheyyalani anipisthundi.",
  "Nuvvu unte memories automatic ga beautiful aipothayi."
];

// Give every photo its own title and note.
const captionCounters = {};

photoAlbums.forEach((photo) => {
  const category = photo.category || "memories";
  const index = captionCounters[category] || 0;

  photo.title =
    captionTitles[index % captionTitles.length] +
    " · " + (index + 1);

  photo.note =
    captionNotes[(index * 7) % captionNotes.length] +
    " 💜";

  captionCounters[category] = index + 1;
});

const letterLines = [
  "Happy Birthday,  Varshu ♡!",
  "Ninnu chusinappudalla naa face lo automatic ga smile vasthundhi. Nuvvu edhuruga unte chaalu, naa mood entha bad ga unna sare automatic ga happy aipothanu. Neetho peaceful ga matladina prathi moment naaku chaala special, Varshu ♡.",
  "Nee kallaloki chusinappudu naa heart lo kalige feeling ni words lo cheppadam chaala kastam. Konni feelings cheppalemu, just feel avvali anthe, Varshu ♡.",
  "Manam kalisinappudu chese allari, kalisi navvukune moments, chinna chinna conversations — ivanni naaku chaala precious memories. Manam kalisina prathi roju naaku oka memorable day la anipisthundhi, Varshu ♡.",
  "Nuvvu naa life lo oka special person maatrame kaadhu, naa face meedha teliyakunda smile theppinche person vi. Nuvvu happy ga unte naaku kuda happy ga untundhi. Nee dreams anni nijam avvali, nee life lo happiness eppudu thaggakudadhu ani manaspoorthiga korukuntunna,  Varshu ♡.",
  "Future lo manam entha busy aipoyina, life entha change aina, mana friendship maatram ilaane undali. Enni years ayina mana memories gurthucheskuni navvukovali. Nuvvu eppudu ela unna, naaku nuvvu eppatiki naa special Varshu ve, Varshu ♡.",
  "Happy Birthday once again, naa special Varshu! Thank you for being part of my life. Mana friendship ki end anedhi undakudadhu. You will always have a special place in my heart, Varshu ♡."
];

const $ = (selector, root=document) => root.querySelector(selector);
const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
const STORAGE_KEY = "varshuverse-premium-progress-v1";
let collected = new Set();
let activeStar = null;
let savedScrollY = 0;
let pageIsLocked = false;
let toastTimer = null;
let letterShown = false;

function showToast(message){
  const el = $("#toast"); el.textContent = message; el.classList.add("show");
  clearTimeout(toastTimer); toastTimer = setTimeout(()=>el.classList.remove("show"), 2500);
}
function saveProgress(){ try{ localStorage.setItem(STORAGE_KEY, JSON.stringify([...collected])); }catch(e){} }
function loadProgress(){
  try { const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"); collected = new Set(saved.filter(n=>Number.isInteger(n)&&n>=0&&n < chapters.length)); } catch(e){ collected = new Set(); }
  updateProgress();
}
function updateProgress(){
  $("#progressCount").textContent =
  `${collected.size} / ${chapters.length}`;

$("#progressBar").style.width =
  `${collected.size / chapters.length * 100}%`;
 $$(".star-node").forEach((node)=>{
  const id = Number(node.dataset.star);
  node.classList.toggle("collected", collected.has(id));
  node.querySelector("small").textContent =
    collected.has(id) ? "✓" : String(id+1).padStart(2,"0");
});
 const labels = chapters.map(chapter => chapter.title);

$("#progressList").innerHTML = labels
  .map((label, i) =>
    `<span>${collected.has(i) ? "✧" : "○"} ${label}</span>`
  )
  .join("");
}

function openStar(index) {
  // Previous chapter complete kakapothe next chapter open avvadu
  if (index > 0 && !collected.has(index - 1)) {
    showToast(
      `First complete Chapter ${index}: ${chapters[index - 1].title} ✨`
    );
    return;
  }


if (!pageIsLocked) {
  savedScrollY = window.scrollY;
  pageIsLocked = true;

  document.body.style.top = `-${savedScrollY}px`;
  document.body.classList.add("chapter-mode");
  document.documentElement.classList.add("chapter-mode");
}


  activeStar = index;
  const chapter = chapters[index];

  $("#modalEyebrow").textContent = chapter.eyebrow;
  $("#modalTitle").textContent = chapter.title;
  $("#modalBody").textContent = chapter.body;

  const photo = photoAlbums.find(p => p.star === index);
  const photoBox = $("#modalPhoto");

  if (photo) {
    photoBox.hidden = false;
    photoBox.innerHTML =
      `<img src="${photo.src}" alt="${photo.title || "Memory"}">`;
  } else {
    photoBox.hidden = true;
    photoBox.innerHTML = "";
  }

  $("#collectBtn").textContent = collected.has(index)
    ? "Star collected ✓"
    : "Complete Chapter & Collect Star ✧";


const isBirthdayFinale = chapter.finale === true;

$("#starModal").classList.toggle(
  "birthday-finale",
  isBirthdayFinale
);

// Previous celebration particles remove cheyyi
document.querySelectorAll(
  ".birthday-firework, .birthday-heart, .birthday-confetti"
).forEach(el => el.remove());

if (isBirthdayFinale) {
  // 1. Fireworks
  for (let i = 0; i < 10; i++) {
    const burst = document.createElement("span");
    burst.className = "birthday-firework";
    burst.style.left = `${8 + Math.random() * 84}%`;
    burst.style.top = `${10 + Math.random() * 65}%`;
    burst.style.animationDelay = `${Math.random() * 1.2}s`;

    document.body.appendChild(burst);
    burst.addEventListener("animationend", () => burst.remove());
  }

  // 2. Floating hearts and sparkles
  for (let i = 0; i < 12; i++) {
    const heart = document.createElement("span");
    heart.className = "birthday-heart";
    heart.textContent = ["♥", "♡", "💜", "✨"][i % 4];
    heart.style.left = `${5 + Math.random() * 90}%`;
    heart.style.top = `${45 + Math.random() * 45}%`;
    heart.style.animationDelay = `${Math.random() * 1.8}s`;

    document.body.appendChild(heart);
    heart.addEventListener("animationend", () => heart.remove());
  }

  // 3. Colorful confetti
  const colors = [
    "#ffd76d",
    "#ff79ed",
    "#8cecff",
    "#c6a0ff",
    "#ff9a8b"
  ];

  for (let i = 0; i < 45; i++) {
    const piece = document.createElement("span");
    piece.className = "birthday-confetti";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.setProperty(
      "--confetti-color",
      colors[Math.floor(Math.random() * colors.length)]
    );
    piece.style.animationDelay = `${Math.random() * 2}s`;

    document.body.appendChild(piece);
    piece.addEventListener("animationend", () => piece.remove());
  }
}


  $("#starModal").classList.add("open");
  $("#starModal").setAttribute("aria-hidden", "false");
}


function closeModal() {
  $("#starModal").classList.remove("open");
  $("#starModal").setAttribute("aria-hidden", "true");

  if (pageIsLocked) {
    document.body.classList.remove("chapter-mode");
    document.documentElement.classList.remove("chapter-mode");

    document.body.style.top = "";
    pageIsLocked = false;

    window.scrollTo(0, savedScrollY);
  }
}

$$(".star-node").forEach(node => {
  node.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();

    const index = Number(node.dataset.star);

    // Lock every chapter until the previous one is collected
    if (index > 0 && !collected.has(index - 1)) {
      showToast(
        `🔒 First complete Chapter ${index}: ${chapters[index - 1].title}`
      );
      return;
    }

    openStar(index);
  });
});

$$("[data-close-modal]").forEach(el=>el.addEventListener("click",closeModal));
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal();});
$("#collectBtn").addEventListener("click",()=>{
  if(activeStar===null)return;
  if(!collected.has(activeStar)){collected.add(activeStar);updateProgress();showToast(`Star ${activeStar+1} added to your constellation ✧`);}
  else showToast("This memory is already part of your universe â™¡");
  closeModal();
  if (collected.size === chapters.length) showToast("All 6 stars collected! Your constellation is complete ✨");
});
$("#continueBtn").addEventListener("click",()=>{
  const next=chapters.findIndex((_,i)=>!collected.has(i));
  if(next<0){$("#finale").scrollIntoView({behavior:"smooth"});showToast("All stars collected â€” your final secret is waiting!");}
  else {
  if (next > 0 && !collected.has(next - 1)) {
    showToast(`🔒 First complete Chapter ${next}: ${chapters[next - 1].title}`);
    return;
  }

  openStar(next);
  showToast(`Your next chapter: ${chapters[next].title}`);
}
});
$("#resetBtn").addEventListener("click",()=>{
  if(confirm("Start a fresh journey? This clears collected stars on this browser.")){
  collected.clear();
  updateProgress();
  showToast("A fresh universe, just for you ✨");
}
});
function renderGallery(filter="all"){
  const grid=$("#memoryGrid");
  const items=photoAlbums.filter(item=>filter==="all"||item.category===filter);
  if(!items.length){grid.innerHTML=`<article class="memory-card memory-empty"><div class="empty-icon">✧</div><h3>${filter==="all"?"Your memories go here":({ "funny-moments":"Chaos chronicles","selfies":"Selfie club","favorite-memories":"Core memories","special-days":"Golden days"}[filter]||"Your memories")}</h3><p>Add photos in the <code>photoAlbums</code> array inside <code>script.js</code>. Use paths from the <code>assets/photos</code> folders.</p></article>`;return;}
 grid.innerHTML=items.map((item,i)=>`<article class="memory-card" style="--tilt:${i%2===0?-1.2:1.2}deg"><img class="memory-image" src="${item.src}" alt="${item.title||"A memory"}" loading="lazy" onerror="this.style.display='none'"><h3 class="memory-caption">${item.title||"A little memory"} <span>❤️</span></h3><p class="memory-note">${item.note||"A little moment, forever ours."}</p></article>`).join("");
}
$$(".filter-btn").forEach(btn=>btn.addEventListener("click",()=>{$$(".filter-btn").forEach(b=>b.classList.toggle("active",b===btn));renderGallery(btn.dataset.filter);}));
$("#enterBtn").addEventListener("click", () => {
  openStar(0);
});
function launchLetterFireworks() {
  const colors = ["#ffd700", "#ff69b4", "#c084fc", "#ffffff"];
  const particles = [];

  const canvas = document.createElement("canvas");
  canvas.style.cssText =
    "position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:99999;";
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();

  function burst(x, y) {
    for (let i = 0; i < 45; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 1 + Math.random() * 4;

      particles.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 70,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
  }

  
let burstCount = 0;

function continuousBursts() {
  if (burstCount >= 12) return;

  burst(
    canvas.width * (0.15 + Math.random() * 0.7),
    canvas.height * (0.12 + Math.random() * 0.4)
  );

  burstCount++;
  setTimeout(continuousBursts, 350);
}

continuousBursts();


  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];

      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.025;
      p.life--;

      ctx.globalAlpha = Math.max(0, p.life / 70);
      ctx.fillStyle = p.color;
      ctx.shadowBlur = 12;
      ctx.shadowColor = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
      ctx.fill();

      if (p.life <= 0) particles.splice(i, 1);
    }

    ctx.globalAlpha = 1;
    ctx.shadowBlur = 0;

    if (particles.length) {
      requestAnimationFrame(animate);
    } else {
      canvas.remove();
    }
  }

  animate();
}

function showLetter(){
  launchLetterFireworks();
  if(letterShown){$("#letterText").innerHTML=letterLines.map(line=>`<span class="letter-line visible">${escapeHtml(line)}</span>`).join("");return;}
  letterShown=true;$("#letterText").innerHTML=letterLines.map((line,i)=>`<span class="letter-line" style="transition-delay:${i*.18}s">${escapeHtml(line)}</span>`).join("");
  requestAnimationFrame(()=>setTimeout(()=>$$(".letter-line").forEach(line=>line.classList.add("visible")),60));
}
function escapeHtml(str){return String(str).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
$("#readLetterBtn").addEventListener("click",()=>{showLetter();$("#letterText").scrollIntoView({behavior:"smooth",block:"nearest"});});
const bgm = document.querySelector("#bgm");
const musicToggle = document.querySelector("#musicToggle");
const musicLabel = document.querySelector("#musicLabel");

window.addEventListener("load", async () => {
  try {
    await bgm.play();
    musicToggle.classList.add("playing");
    musicLabel.textContent = "Pause our song";
  } catch (error) {
    console.log("Autoplay blocked. Tap the music button to start.");
    musicLabel.textContent = "Tap to play our song";
  }
});

musicToggle.addEventListener("click", async () => {
  if (bgm.paused) {
    try {
      await bgm.play();
      musicToggle.classList.add("playing");
      musicLabel.textContent = "Pause our song";
    } catch (error) {
      showToast("Song play avvaledu. Music file path check cheyyandi.");
      console.error("Music playback error:", error);
    }
  } else {
    bgm.pause();
    musicToggle.classList.remove("playing");
    musicLabel.textContent = "Play our song";
  }
});

bgm.addEventListener("pause", () => {
  musicToggle.classList.remove("playing");
  musicLabel.textContent = "Play our song";
});
Content="Correct answer, Pandhi! You knew that already. &#x1F932;";
$$(".answer-btn").forEach(btn=>btn.addEventListener("click",()=>{
  if(btn.dataset.answer==="correct"){
    $("#answerFeedback").textContent = "Correct answer, Pandhi! You knew that already. ★";
    $("#finalMessage").hidden=false;$("#finalMessage").scrollIntoView({behavior:"smooth",block:"center"});
    launchConfetti();
  } else {
  const isFood = btn.textContent.includes("Food");
  $("#answerFeedback").textContent = isFood
    ? "Food is a strong competitor, but try again!"
    : "Sleep is important, Pandhi... but not the answer. Try again!";
}
}));
$("#replayBtn").addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"});showToast("Back to the beginning of our universe ✧");});
function launchConfetti(){
  const colors=["#ff9bd2","#f5d89a","#bba4ff","#ffffff"];
  for(let i=0;i<75;i++){const el=document.createElement("i");el.style.cssText=`position:fixed;z-index:100;left:${Math.random()*100}vw;top:-12px;width:${4+Math.random()*5}px;height:${6+Math.random()*8}px;background:${colors[i%colors.length]};border-radius:2px;pointer-events:none;transform:rotate(${Math.random()*360}deg);transition:transform ${2+Math.random()*2}s linear,top ${2+Math.random()*2}s ease-in,opacity 3s`;document.body.appendChild(el);requestAnimationFrame(()=>{el.style.top="105vh";el.style.transform=`translateX(${Math.random()*180-90}px) rotate(${Math.random()*900}deg)`;el.style.opacity="0";});setTimeout(()=>el.remove(),4500);}
}
function setupStars(){
 const canvas=$("#starfield"),ctx=canvas.getContext("2d");let width,height,stars=[];
 function resize(){width=canvas.width=window.innerWidth*devicePixelRatio;height=canvas.height=window.innerHeight*devicePixelRatio;canvas.style.width=window.innerWidth+"px";canvas.style.height=window.innerHeight+"px";stars=Array.from({length:Math.min(180,Math.floor(window.innerWidth/7))},()=>({x:Math.random()*width,y:Math.random()*height,r:Math.random()*1.5+.2,a:Math.random()*.65+.15,s:Math.random()*.004+.001}));}
 function draw(){ctx.clearRect(0,0,width,height);for(const s of stars){s.a+=Math.sin(Date.now()*s.s)*.003;ctx.beginPath();ctx.arc(s.x,s.y,s.r*devicePixelRatio,0,Math.PI*2);ctx.fillStyle=`rgba(242,222,255,${Math.max(.1,Math.min(.9,s.a))})`;ctx.fill();}requestAnimationFrame(draw);}
 window.addEventListener("resize",resize);resize();draw();
}
function setupReveal(){
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("in-view");observer.unobserve(entry.target);}}),{threshold:.12});
 $$(".reveal").forEach(el=>observer.observe(el));
}
document.addEventListener("mousemove",e=>{const glow=$(".cursor-glow");glow.style.left=(e.clientX-160)+"px";glow.style.top=(e.clientY-160)+"px";});
loadProgress();renderGallery();showLetter();setupStars();setupReveal();