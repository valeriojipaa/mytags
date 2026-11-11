const status=document.getElementById('accessStatus'),password=document.getElementById('password');
document.getElementById('togglePassword').onclick=()=>{const show=password.type==='password';password.type=show?'text':'password';const b=document.getElementById('togglePassword');b.textContent=show?'Ocultar':'Mostrar';b.setAttribute('aria-label',show?'Ocultar senha':'Mostrar senha');};
document.getElementById('accessForm').onsubmit=e=>{e.preventDefault();password.value='';status.textContent='As contas ainda não foram ativadas. Use “Explorar demonstração” para conhecer o aplicativo.';};
document.getElementById('recoverPassword').onclick=()=>{status.textContent='A recuperação de senha ficará disponível após conectar o serviço de autenticação.';};
document.getElementById('activateAccount').onclick=()=>{status.textContent='A ativação será feita após a confirmação da compra, quando a integração estiver pronta.';};
