window.addEventListener('load', function() {

    let formLogin = document.querySelector('form.formLogin');
    let formRegister = document.querySelector('form.formRegister');

    // Variable para validación de formato del email usando Expressiones Regulares de Javascrip

    let validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;   
    
    let campoEmailL = document.querySelector('input.email');
    let smallErrEmail = document.querySelector('.errEmail');    
    let campoPassword = document.querySelector('input.pass');
    let smallErrpass = document.querySelector('.errPass');
    let errorLoginEmail = 0;
    let errorLoginPass = 0;

    campoEmailL.addEventListener('blur', function(){

        if (campoEmailL.value == ''){
            smallErrEmail.innerHTML = "<li>"+ 'Email obligatorio ' + "</li>";
            errorLoginEmail = +1;
        } else if (!validEmail.test(campoEmailL.value)){
            smallErrEmail.innerHTML = "<li>"+ 'Email invalido ' + "</li>";
            errorLoginEmail = +1;
        } else{
            smallErrEmail.innerHTML = "";
            errorLoginEmail = 0
        }
    });
    
    
    campoPassword.addEventListener('blur', function(){

        if(campoPassword.value == ''){
            smallErrpass.innerHTML = "<li>"+ 'Contraseña Obligatoria ' + "</li>";
            errorLoginPass = +1;
        } else if(campoPassword.value.length < 8){
            smallErrpass.innerHTML = "<li>" + "8 caracteres como mínimo" + "</li>";
            errorLoginPass = +1;
        } else{
            smallErrpass.innerHTML = "";
            errorLoginPass = 0;
        }
    });
    
    
    formLogin.addEventListener('submit', function(e){
        
        e.preventDefault();
        
        if(errorLoginEmail == 0 && errorLoginPass == 0){
            formLogin.submit();
        }
    });



    // VALIDACIONES REGISTER

    let campoNameR = document.querySelector ('input.name');
    let smallErrNameR = document.querySelector('.errNameR');
    let campoLastName = document.querySelector ('input.LastName');
    let smallErrLastName = document.querySelector('.errLastName');
    let campoAvatar = document.querySelector('input.avatar');
    let smallEerrAvatar = document.querySelector('.errAvatar');
    let avatarExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
    let campoEmailRegister = document.querySelector('input.emailRegister');
    let smallErrEmailRegister = document.querySelector('.errEmailRegister');
    let campoPassRegister = document.querySelector('.passRgister');
    let smallErrPassRegister = document.querySelector('.errPassRegister');
    let errorRegisterN = 0;
    let errorRegisterL = 0;
    let errorRegisterA = 0;
    let errorRegisterR = 0;
    let errorRegisterP = 0;


    
    campoNameR.addEventListener('blur', function(){

        if(campoNameR.value ==''){
            smallErrNameR.innerHTML = "<li>" + "Nombre obligatorio" + "</li>";
            errorRegisterN = +1;
        }else if (campoNameR.value.length<2){
            smallErrNameR.innerHTML = "<li>" + "Longitud mínima 2 caracteres" + "</li>";
            errorRegisterN = +1;
        }else {
            smallErrNameR.innerHTML = '';
            errorRegisterN = 0;
        }
    });

    campoLastName.addEventListener('blur', function(){

        if(campoLastName.value ==''){
            smallErrLastName.innerHTML = "<li>" + 'Apellido obligatorio' + "</li>";
            errorRegisterL = +1;
        }else if (campoLastName.value.length<2){
            smallErrLastName.innerHTML = "<li>" + "Longitud mínima 2 caracteres" + "</li>"
            errorRegisterL = +1;
        }else{
            smallErrLastName.innerHTML = '';
            errorRegisterL = 0;
        }   
    });

    campoAvatar.addEventListener('blur', function(){   

        if(!avatarExtensions.exec(campoAvatar.value) ){
            smallEerrAvatar.innerHTML = "<li>" + "Formato de imagen no valida" + "</li>";
            errorRegisterA = +1;
        }else if (campoAvatar == undefined) {
            smallEerrAvatar.innerHTML = "";
            errorRegisterA = 0
        }else {
            smallEerrAvatar.innerHTML = "";
            errorRegisterA = 0
        }
    });

    campoEmailRegister.addEventListener('blur', function(){

        if (campoEmailRegister.value == ''){
            smallErrEmailRegister.innerHTML = "<li>"+ 'Email obligatorio' + "</li>";
            errorRegisterR = +1;
        } else if (!validEmail.test(campoEmailRegister.value)){
            smallErrEmailRegister.innerHTML = "<li>"+ 'Email invalido' + "</li>";
            errorRegisterR = +1;
        } else{
            smallErrEmailRegister.innerHTML = "";
            errorRegisterR = 0;
        }
    });

    campoPassRegister.addEventListener('blur', function(){

        if (campoPassRegister.value == ''){
            smallErrPassRegister.innerHTML = "<li>"+ 'Contraseña Obligatoria' + "</li>";
            errorRegisterP = +1;
        } else if(campoPassRegister.value.length < 8){
            smallErrPassRegister.innerHTML = "<li>"+ " 8 caracteres como mínimo" + "</li>";
            errorRegisterP = +1;
        } else {
            smallErrPassRegister.innerHTML = "";
            errorRegisterP = 0;
        }
    });
    
    formRegister.addEventListener('submit', function(e){

        e.preventDefault();

        if(errorRegisterN == 0 && errorRegisterL == 0 && errorRegisterA == 0 && errorRegisterR == 0 && errorRegisterP == 0){
            formRegister.submit();
        } 
    });
});


   