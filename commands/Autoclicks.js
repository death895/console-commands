//hold middle click to autoclick (mouse needed), this is so it works on most games
let pw = 'Qwfp.1234'
let input = window.prompt('Please enter the password!')
if (pw = input) {
let _button=1;
let _ID;
document.body.addEventListener('mousedown', (e)=>{if(e.button===_button){_ID=_ID||setInterval(()=>e.target.click(),1)}});
document.body.addEventListener('mouseup', (e)=>{if(e.button===_button){clearInterval(_ID);_ID=0}});
} else {
    window.close()
}
