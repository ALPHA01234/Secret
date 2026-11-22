const wishButton=document.getElementById("wishButton");
const wishResponse=document.getElementById("wishResponse");
if(wishButton&&wishResponse){
  wishButton.addEventListener("click",()=>{
    wishResponse.textContent="A little wish, sent with all my love. May your day be as lovely as you are. ♡";
    wishButton.textContent="A wish for you ♡";
    wishButton.disabled=true;
    wishButton.setAttribute("aria-pressed","true");
  });
}
document.querySelectorAll('a[href$=".html"]').forEach(link=>{
  link.addEventListener("click",event=>{
    if(event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
    const target=new URL(link.href,location.href);
    if(target.origin!==location.origin||target.pathname===location.pathname)return;
    if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;
    event.preventDefault();
    document.body.classList.add("page-leaving");
    window.setTimeout(()=>{location.href=target.href;},190);
  });
});
