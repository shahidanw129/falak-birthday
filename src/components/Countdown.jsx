import { useEffect, useState } from "react";
import "../css/countdown.css";

const targetDate = new Date("2027-08-20T00:00:00");
function getTime(){
  const distance = targetDate.getTime() - Date.now();
  if(distance<=0) return {days:0,hours:0,minutes:0,seconds:0,completed:true};
  return {days:Math.floor(distance/86400000),hours:Math.floor((distance%86400000)/3600000),minutes:Math.floor((distance%3600000)/60000),seconds:Math.floor((distance%60000)/1000),completed:false};
}
export default function Countdown(){
 const [time,setTime]=useState(getTime());
 useEffect(()=>{const t=setInterval(()=>setTime(getTime()),1000);return()=>clearInterval(t)},[]);
 return <section className="countdown-section"><div className="countdown-heading"><h1>🎂 Birthday Countdown ❤️</h1><p>Counting every second until <b>20 August 2027</b> — your next special day. ❤️</p></div>{time.completed?<div className="birthday-done">🎉 Happy Birthday Falak ❤️🥳</div>:<div className="countdown-grid">{[[time.days,"Days"],[time.hours,"Hours"],[time.minutes,"Minutes"],[time.seconds,"Seconds"]].map(([n,l],i)=><div className="time-card" style={{animationDelay:`${i*.15}s`}} key={l}><div className="number">{String(n).padStart(2,"0")}</div><div className="label">{l}</div></div>)}</div>}</section>;
}
