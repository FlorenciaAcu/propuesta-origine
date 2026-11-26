/** Elementos que aparecen al entrar en pantalla. */
export const REVEAL_SELECTOR =
  ".exec-sheet, .exec-sheet .exec-box, .exec-steps > li, .exec-numbered > li, .exec-goals > li, .exec-journey__list > li, .exec-support > li, .exec-money__card, .exec-platform, .exec-cols > div, .exec-cards > .exec-box, .exec .table-wrap, .exec-note";

/**
 * Script en <head>: activa las animaciones de entrada sin esperar a que React cargue.
 * - Sin «reducir movimiento» ni IntersectionObserver, no hace nada (todo queda visible).
 * - Al cargar el HTML marca de inmediato lo que ya está en pantalla y observa el resto.
 * - Lo que quedó por encima de la pantalla (scroll rápido) se muestra igual.
 * - Respaldo: si algo falla, a los 3 segundos se muestra todo.
 */
export const revealBootScript = `(function(){try{
if(!('IntersectionObserver' in window)||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
var d=document.documentElement;d.classList.add('reveal-on');
var fb=setTimeout(function(){d.classList.remove('reveal-on')},3000);
var S=${JSON.stringify(REVEAL_SELECTOR)};
function run(){var els=[].slice.call(document.querySelectorAll(S));
els.forEach(function(el){var p=el.parentElement;var sib=p?[].filter.call(p.children,function(c){return c.matches(S)}):[];el.style.setProperty('--i',String(Math.max(0,sib.indexOf(el))));});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting||e.boundingClientRect.top<0){e.target.classList.add('is-in');io.unobserve(e.target);}});},{rootMargin:'0px 0px -6% 0px',threshold:0.01});
els.forEach(function(el){io.observe(el);});clearTimeout(fb);}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run);else run();
}catch(e){document.documentElement.classList.remove('reveal-on');}})();`;
