import Hero from "../components/Hero";
import Countdown from "../components/Countdown";
import Footer from "../components/Footer";
import Hearts from "../components/Hearts";
import Fireworks from "../components/Fireworks";
import "../css/dashboard.css";
import "../css/photoPages.css";

const photos = [
  { img: "/images/pdf_02.jpg", title: "A Beautiful Birthday Memory", text: "Some moments become special simply because they remind me of you. ❤️" },
  { img: "/images/pdf_04.jpg", title: "A Smile Worth Remembering", text: "May this smile always stay bright, peaceful and full of happiness. ✨" }
];

export default function Dashboard(){
  return (
    <>
      <Hearts /><Fireworks />
      <section className="dashboard-page-only">
        <Hero />
        <section className="cards dashboard-stats">
          <div className="card"><h2>❤️ Love</h2><h1>Infinite</h1><p>Forever Together ❤️</p></div>
          <div className="card"><h2>🎁 Gifts</h2><h1>07</h1><p>Special Birthday Surprises</p></div>
          <div className="card"><h2>📸 Memories</h2><h1>250+</h1><p>Beautiful Moments Together</p></div>
          <div className="card"><h2>💌 Wishes</h2><h1>Forever</h1><p>Endless Happiness & Love</p></div>
        </section>
        <Countdown />
        <section className="dashboard-photo-section">
          <div className="page-kicker">💖 TWO MORE MEMORIES</div>
          <h2>Little Moments, Big Feelings</h2>
          <p>Every picture carries a small piece of a beautiful story. These moments are here to make the dashboard feel personal, warm and unforgettable.</p>
          <div className="dashboard-photo-grid">
            {photos.map((p,i)=><article className="dashboard-photo-card" key={p.img}><img src={p.img} alt={p.title}/><div><h3>{p.title}</h3><p>{p.text}</p></div><span>Shahid Anwar ❤️ Falak</span></article>)}
          </div>
        </section>
        <section className="dashboard-note"><span>💌</span><h2>A Small Note From Shahid Anwar</h2><p>Dear Falak, today is about celebrating you — your smile, your kindness, your dreams and all the little things that make you special. I hope this birthday brings you peace in your heart, confidence in your dreams and countless reasons to smile. Whatever beautiful chapters come next, I hope they are filled with happiness, success and memories worth keeping forever. ❤️</p></section>
        <section className="dashboard-az-card">
          <div className="page-kicker">✦ A TO Z · A LITTLE SIGNATURE OF LOVE</div>
          <h2>A to Z, Every Letter Leads Back to You ❤️</h2>
          <p>A — Amazing &nbsp; • &nbsp; B — Beautiful &nbsp; • &nbsp; C — Caring &nbsp; • &nbsp; D — Dreamy &nbsp; • &nbsp; E — Elegant &nbsp; • &nbsp; F — Fabulous</p>
          <p>G — Genuine &nbsp; • &nbsp; H — Heartwarming &nbsp; • &nbsp; I — Irreplaceable &nbsp; • &nbsp; J — Joyful &nbsp; • &nbsp; K — Kind &nbsp; • &nbsp; L — Lovely</p>
          <p>M — Magical &nbsp; • &nbsp; N — Natural &nbsp; • &nbsp; O — One-of-a-kind &nbsp; • &nbsp; P — Precious &nbsp; • &nbsp; Q — Queen &nbsp; • &nbsp; R — Radiant</p>
          <p>S — Special &nbsp; • &nbsp; T — Thoughtful &nbsp; • &nbsp; U — Unforgettable &nbsp; • &nbsp; V — Valuable &nbsp; • &nbsp; W — Wonderful &nbsp; • &nbsp; X — X-factor</p>
          <p>Y — Yours truly &nbsp; • &nbsp; Z — Zindagi ki sabse khoobsurat yaad. ❤️</p>
          <div className="dashboard-signoff">ART BY YOUR LOVE HEART BITCHH · SHAHID ANWAR</div>
        </section>
        <Footer />
      </section>
    </>
  );
}
