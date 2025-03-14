//will make password later, hold middle click to autoclick, this is so it works on most games
let _button=1;
let _ID;
document.body.addEventListener('mousedown', (e)=>{if(e.button===_button){_ID=_ID||setInterval(()=>e.target.click(),1)}});
document.body.addEventListener('mouseup', (e)=>{if(e.button===_button){clearInterval(_ID);_ID=0}});
