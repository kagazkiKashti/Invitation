const cover=document.getElementById('cover');
const hero=document.getElementById('hero');
const details=document.getElementById('details');
const audio=document.getElementById('audio');
const openBtn=document.getElementById('openInvitation');
const scrollBtn=document.getElementById('scrollButton');
const musicBtn=document.getElementById('musicButton');
let playing=false;

function showHero(){
  cover.style.display='none';
  hero.style.display='block';
  window.scrollTo(0,0);
}
async function startMusic(){
  try{
    audio.volume=.78;
    await audio.play();
    playing=true;
    musicBtn.textContent='♫ Music On';
  }catch(e){
    playing=false;
    musicBtn.textContent='♫ Tap for Music';
  }
}
openBtn.addEventListener('click',()=>{
  showHero();
  // This is triggered directly by the user's tap, so mobile browsers can allow playback.
  startMusic();
});
scrollBtn.addEventListener('click',()=>{
  details.scrollIntoView({behavior:'smooth'});
});
musicBtn.addEventListener('click',async()=>{
  if(playing){
    audio.pause(); playing=false; musicBtn.textContent='♫ Music Off';
  }else{
    await startMusic();
  }
});

const openRsvpForm = document.getElementById('openRsvpForm');
const rsvpFormWrap = document.getElementById('rsvpFormWrap');
const rsvpForm = document.getElementById('rsvpForm');

if (openRsvpForm && rsvpFormWrap) {
  openRsvpForm.addEventListener('click', () => {
    rsvpFormWrap.classList.toggle('hidden');
    if (!rsvpFormWrap.classList.contains('hidden')) {
      rsvpFormWrap.scrollIntoView({behavior:'smooth', block:'center'});
    }
  });
}

if (rsvpForm) {
  rsvpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('guestName').value.trim();
    const attendance = document.getElementById('attendance').value;
    const guests = document.getElementById('guestCount').value;
    const message =
      `Hello Sachin, I would like to RSVP for Kagaz Ki Kashti on 10 October 2026.%0A%0A` +
      `Name: ${encodeURIComponent(name)}%0A` +
      `Attendance: ${encodeURIComponent(attendance)}%0A` +
      `Number of Guests: ${encodeURIComponent(guests)}`;
    window.open(`https://wa.me/919769386417?text=${message}`, '_blank');
  });
}
