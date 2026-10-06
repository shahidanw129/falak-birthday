import "../css/Memories.css";
import "../css/photoPages.css";

const memoryPhotos=[8,10,14,16,20,24,27,31,36,40];
const captions=[
 ["The First Glow","Some memories begin quietly, then become impossible to forget."],
 ["A Beautiful Look","There is something special about the way one smile can change an entire day."],
 ["Soft Moments","The little moments are often the ones the heart remembers longest."],
 ["Closer Every Day","Every conversation, every laugh and every small check-in became part of our story."],
 ["A Memory To Keep","No matter how simple the moment feels, it becomes precious when it is ours."],
 ["Happiness","May this smile always have a thousand reasons behind it."],
 ["Pure Joy","A beautiful memory is not measured by time, but by the feeling it leaves behind."],
 ["Sweetest Moment","Some pictures need no explanation — they simply make the heart smile."],
 ["Forever Remembered","I hope we keep collecting moments like this for years to come."],
 ["Our Story Continues","This is only another beautiful page in a story that is still being written. ❤️"]
];
const chapters=[
 {icon:"🌸",title:"The Beginning",date:"21 June 2025",desc:"21 June 2025 woh beautiful day tha jab tum meri zindagi mein aayi. Mujhe nahi pata tha ki tum dheere-dheere meri khushi, meri smile aur meri life ka itna important part ban jaogi. Tumhare aane ke baad meri duniya aur bhi khoobsurat lagne lagi. ❤️",shayari:"Tum aaye toh zindagi mein ek nayi roshni si aa gayi, har khushi pehle se zyada khoobsurat ho gayi. 🌹"},
 {icon:"🤝",title:"Best Friends",date:"July 2025",desc:"July 2025 mein hum best friends bane. Hamari achhi baatein, hasi-mazaak, daily conversations aur ek doosre ki care ne humein bahut close kar diya. Hamari friendship trust aur understanding se bani ek beautiful bonding hai. 💕",shayari:"Dosti se shuru hua tha hamara safar, har baat ne humein aur kareeb kar diya. ✨"},
 {icon:"💖",title:"A Beautiful Relationship",date:"7 June 2026",desc:"7 June 2026 meri life ka bahut special day ban gaya, kyunki us din tum meri girlfriend bani. Hamari beautiful friendship ek strong aur lovely relationship mein badal gayi. Trust, respect, care aur understanding hamare bond ko har din mazboot banate hain. 👑",shayari:"Dosti se shuru hui kahani, mohabbat ka khoobsurat naam ban gayi. ❤️"},
 {icon:"♾️",title:"Every Day Is Special",date:"Forever With You",desc:"Hum abhi tak real life mein nahi mile hain, lekin distance hamare strong relationship ko kam nahi kar sakta. Hamari achhi baatein, care, trust aur ek doosre ko samajhna har din ko special banata hai. Main chahta hoon ki hamara bond hamesha strong aur beautiful rahe. 🌹",shayari:"Door hokar bhi tum dil ke paas ho, meri har khushi aur har dua ka ehsaas ho. 💫"}
];

export default function Memories(){
 return <section className="memories-page memories-advanced">
  <div className="memories-header"><span className="memory-tag">🌹 OUR BEAUTIFUL JOURNEY</span><h1>Our Beautiful <span>Memories</span></h1><p>Four important chapters, ten new photo memories and many small feelings that deserve a place in our birthday story. ❤️</p></div>
  <div className="memories-timeline">{chapters.map((m,i)=><article className="memory-box" key={m.title}><div className="memory-number">0{i+1}</div><div className="memory-icon">{m.icon}</div><div className="memory-content"><span className="memory-label">A BEAUTIFUL CHAPTER</span><h2>{m.title}</h2><h4>{m.date}</h4><div className="memory-divider"><span></span>❤️<span></span></div><p>{m.desc}</p><div className="shayari-box"><span>🌹</span><em>{m.shayari}</em></div></div><div className="card-heart">❤️</div></article>)}</div>
  <div className="memory-photo-intro"><span className="page-kicker">📷 TEN NEW MEMORIES</span><h2>Moments I Want To Remember</h2><p>These photos are taken from the new birthday PDF and arranged in a clean portrait gallery so every face and expression gets the space it deserves.</p></div>
  <div className="memory-photo-grid">{memoryPhotos.map((n,i)=><article className="memory-photo-card" key={n}><div className="memory-photo-frame"><img src={`/images/pdf_${String(n).padStart(2,"0")}.jpg`} alt={captions[i][0]} loading="lazy"/></div><div className="memory-photo-copy"><span>MEMORY {String(i+1).padStart(2,"0")}</span><h3>{captions[i][0]}</h3><p>{captions[i][1]}</p></div></article>)}</div>
  <div className="love-message"><div className="love-icon">💌</div><span>A MESSAGE FROM MY HEART</span><h2>You Made My Life <strong>More Beautiful</strong></h2><p>We may not have met in real life yet, but you have already become one of the most important parts of my life. Tumhari baatein meri smile ka reason hain, tumhari care mujhe special feel karati hai, aur hamara trust hamare relationship ko har din aur strong banata hai. ❤️</p></div>
 </section>;
}
