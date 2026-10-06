import { useState } from "react";
import "../css/gallery.css";
import "../css/photoPages.css";

const oldPhotos = [
 ["6311860629874087152_121.jpg","Beautiful Smile ❤️","Your smile makes every day special."],
 ["6311860629874087154_121.jpg","Birthday Princess 👑","The most beautiful girl in my life."],
 ["6311860629874087155_121.jpg","Cute Memories 💕","Every memory with you is priceless."],
 ["6311860629874087156_121.jpg","Forever Together 🌹","Our journey will always be beautiful."],
 ["6311860629874087158_121.jpg","Lovely Moments ✨","Every picture tells a beautiful story."],
 ["6311860629874087160_121.jpg","Queen Falak ❤️","You deserve all the happiness."],
 ["6311860629874087163_121.jpg","Birthday Celebration 🎂","May every wish come true."],
 ["6311860629874087151_121.jpg","Always Mine 💖","Forever together, forever happy."]
].map(([img,title,desc])=>({img:`/images/${img}`,title,desc}));

const pdfPages = [1,3,5,6,7,9,11,12,13,15,22,23,25,26,29,30,32,33,34,37];
const pdfPhotos = pdfPages.map((n,i)=>({img:`/images/pdf_${String(n).padStart(2,"0")}.jpg`,title:["A New Memory","Sweet Smile","Little Joy","Beautiful Day","Precious Moment","Just You","A Soft Smile","Happy Heart","A Lovely Moment","Forever Remembered","My Favorite View","Pure Happiness","Cutest Memory","A Moment To Keep","Beautifully You","Smile Again","A Special Look","Tiny Happiness","A Memory For Us","Always Beautiful"][i],desc:"A new page from our birthday memory book — a moment worth keeping close to the heart. ❤️"}));
const photos=[...oldPhotos,...pdfPhotos];

export default function Gallery(){
 const [selected,setSelected]=useState(null);
 const nextImage=()=>setSelected((selected+1)%photos.length);
 const prevImage=()=>setSelected((selected-1+photos.length)%photos.length);
 return <section className="gallery-section photo-gallery-advanced">
   <div className="title"><span className="page-kicker">📸 MEMORY ARCHIVE</span><h1>Our Beautiful Gallery</h1><p>28 carefully arranged memories — the original 8 photos plus 20 new photos from the birthday PDF.</p></div>
   <div className="gallery-grid">{photos.map((item,index)=><article className="gallery-card" key={item.img} onClick={()=>setSelected(index)}><div className="gallery-image-wrap"><img src={item.img} alt={item.title} loading="lazy"/></div><div className="gallery-caption"><h2>{item.title}</h2><p>{item.desc}</p><button onClick={e=>{e.stopPropagation();setSelected(index)}}>❤️ View Memory</button></div></article>)}</div>
   {selected!==null&&<div className="lightbox" onClick={()=>setSelected(null)}><span className="close" onClick={()=>setSelected(null)}>✖</span><button className="prev" onClick={e=>{e.stopPropagation();prevImage()}}>❮</button><div className="lightbox-inner" onClick={e=>e.stopPropagation()}><img src={photos[selected].img} alt={photos[selected].title}/><h2>{photos[selected].title}</h2><p>{photos[selected].desc}</p><small>{selected+1} / {photos.length}</small></div><button className="next" onClick={e=>{e.stopPropagation();nextImage()}}>❯</button></div>}
 </section>;
}
