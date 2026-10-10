// Configure o WhatsApp oficial: país + DDD + número, apenas dígitos.
// Exemplo de formato: 55DDDNÚMERO. Deixe vazio até confirmar o contato.
const CLINIC_WHATSAPP = '';
const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu(){ navigation.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); toggle.setAttribute('aria-label','Abrir menu'); }
toggle.addEventListener('click',()=>{ const open=navigation.classList.toggle('open'); toggle.setAttribute('aria-expanded',String(open)); toggle.setAttribute('aria-label',open?'Fechar menu':'Abrir menu'); });
navigation.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape' && navigation.classList.contains('open')){closeMenu();toggle.focus();}});
document.querySelectorAll('[data-service]').forEach(link=>link.addEventListener('click',()=>{document.querySelector('#treatment').value=link.dataset.service;}));
document.querySelector('#year').textContent=new Date().getFullYear();
document.querySelector('#booking-form').addEventListener('submit',event=>{
  event.preventDefault();
  const name=document.querySelector('#name');
  if(!name.value.trim()){name.setCustomValidity('Digite seu nome para preparar a mensagem.');name.reportValidity();return;}
  name.setCustomValidity('');
  const message=`Olá! Meu nome é ${name.value.trim()}. Gostaria de marcar uma avaliação na Sorria Mais Brasil. Tenho interesse em: ${document.querySelector('#treatment').value}. Quais são os horários disponíveis?`;
  if(/^55\d{10,11}$/.test(CLINIC_WHATSAPP)){window.open(`https://wa.me/${CLINIC_WHATSAPP}?text=${encodeURIComponent(message)}`,'_blank','noopener,noreferrer');return;}
  document.querySelector('#prepared-message').value=message;
  document.querySelector('#result-message').textContent='Sua mensagem está pronta. O contato da clínica ainda não foi disponibilizado nesta página. Nenhuma solicitação foi enviada; copie o texto para usar no canal oficial da clínica.';
  document.querySelector('#form-result').hidden=false;
});
document.querySelector('#name').addEventListener('input',event=>event.target.setCustomValidity(''));
document.querySelector('#copy-message').addEventListener('click',async event=>{
  const button=event.currentTarget;
  const field=document.querySelector('#prepared-message');
  try{await navigator.clipboard.writeText(field.value);button.textContent='Mensagem copiada';}
  catch{field.focus();field.select();button.textContent='Selecione e copie o texto acima';}
});

