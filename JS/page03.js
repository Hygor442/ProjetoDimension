//scrool da pagina
function scrollTo(element){
    document.querySelector(element).scrollIntoView({behavior: "smooth"});
}
document.querySelector("#informacoes").addEventListener("click", function(e){
    e.preventDefault();
    scrollTo("#about");
});
document.querySelector("#galeria").addEventListener("click", function(e){
    e.preventDefault();
    scrollTo("#gallery")
});
document.querySelector("#servicos").addEventListener("click", function(e){
    e.preventDefault();
    scrollTo("#services");
});
document.querySelector("#contato").addEventListener("click", function(e){
    e.preventDefault();
    scrollTo("#contact")
});
document.querySelector("#up-down").addEventListener("click", function(e){
    e.preventDefault();
    scrollTo("#home");
});

//filtro de imagens
$(".btn").on("click", function(){
    let cat = $(this).attr("data-card");

    $(".btn").removeClass("active"); //vai remover o active do atual
    $(this).addClass("active"); // vai adiocionar o active no que for clicado

    if(cat == "todos"){
        $("#images-grid div").show();
    }
    else{
        $("#images-grid div").each(function(){
            if(!$(this).hasClass(cat)){
                $(this).hide();
            }
            else{
                $(this).show();
            }
        });
    }
});

//altenticação do formulario
const firstNameInput = document.querySelector("#first-name");
const lastNameInput = document.querySelector("#last-name");
const emailInput = document.querySelector("#email");
const msgEnviada = document.querySelector(".msg-enviada");
const msgResetada = document.querySelector(".msg-resetada");
const textMsg = document.querySelector("#textMsg");

msgEnviada.addEventListener("click", (e) => {
    e.preventDefault();

    const firstNameValue = firstNameInput.value;
    const lastNameValue = lastNameInput.value;
    const emailValue = emailInput.value;

    if(lastNameValue === '' || firstNameValue === '' || emailValue === ''){
        alert("Preencha todos os campos");
    }
    else{
        alert(`${firstNameValue} ${lastNameValue} sua mensagem foi enviada com sucesso`);
    }
    
});
msgResetada.addEventListener("click", (e)=>{
    e.preventDefault();

    lastNameInput.value = "";
    firstNameInput.value = "";
    emailInput.value = "";
    textMsg.value = "";
});

const element = document.querySelector("body").scrollWidth;
alert(`A sua tela tem ${element}px de comprimento`);