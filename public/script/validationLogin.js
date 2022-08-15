window.addEventListener('load', function() {
    let formLogin = document.querySelector('form.formLogin');
    let formRegister = document.querySelector('form.formRegister');

    // Variable para validación de formato del email usando Expressiones Regulares de Javascrip

    let validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    
    // VALIDACIONES LOGIN

    formLogin.addEventListener('submit', function(e){
        
        e.preventDefault();

        let campoEmailL = document.querySelector('input.email');
        let smallErrEmail = document.querySelector('.errEmail');    
        let campoPassword = document.querySelector('input.pass');
        let smallErrpass = document.querySelector('.errPass');
        let validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        let errorLogin = 0

        if (campoEmailL.value == ''){
            smallErrEmail.innerHTML = "<li>"+ 'Email obligatorio frontend' + "</li>";
            errorLogin = i++;
        } else if (!validEmail.test(campoEmailL.value)){
            smallErrEmail.innerHTML = "<li>"+ 'Email invalido frontend' + "</li>";
            errorLogin = i++;
        } else{
            smallErrEmail.innerHTML = "";
            errorLogin = 0
        }
        
        if (campoPassword.value == ''){
            smallErrpass.innerHTML = "<li>"+ 'Contraseña Obligatoria frontend' + "</li>";
            errorLogin = i++;
        } else if(campoPassword.value.length<8){
            smallErrpass.innerHTML = "<li>" + "La constraseña debe tener 8 caracteres como minimo forntend" + "</li>";
            errorLogin = i++;
        } else {
            smallErrpass.innerHTML = "";
            errorLogin = 0;
        }

        if(errorLogin == 0){
            formLogin.submit();
        }

    
    });

    // VALIDACIONES REGISTER
    formRegister.addEventListener('submit', function(e){

        e.preventDefault();

        let formRegister = document.querySelector('.formRegister')
        let campoNameR = document.querySelector ('input.name');
        let smallErrNameR = document.querySelector('.errNameR');
        let campoLastName = document.querySelector ('input.LastName');
        let smallErrLastName = document.querySelector('.errLastName');
        let campoAvatar = document.querySelector('.avatar');
        let smallEerrAvatar = document.querySelector('.errAvatar');
        let avatarExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
        let campoEmailRegister = document.querySelector('input.emailRegister');
        let smallErrEmailRegister = document.querySelector('.errEmailRegister');
        let campoPassRegister = document.querySelector('.passRgister');
        let smallErrPassRegister = document.querySelector('.errPassRegister');
        let errorRegister = 0;

        if(campoNameR.value ==''){
            smallErrNameR.innerHTML = "<li>" + "Nombre obligatorio" + "</li>";
            errorRegister = i++;
        }else if (campoNameR.value.length<2){
            smallErrNameR.innerHTML = "<li>" + "Longitud mínima 2 caracteres" + "</li>";
            errorRegister = i++;
        }else {
            smallErrNameR.innerHTML = '';
            errorRegister = 0;
        }
        
        if(campoLastName.value ==''){
            smallErrLastName.innerHTML = "<li>" + 'Apellido obligatorio' + "</li>";
            errorRegister = i++;
        }else if (campoLastName.value.length<2){
            smallErrLastName.innerHTML = "<li>" + "Longitud mínima 2 caracteres" + "</li>"
            errorRegister = i++;
        }else{
            smallErrLastName.innerHTML = '';
            errorRegister = 0;
        }

        if(!avatarExtensions.exec(campoAvatar.value)){
            smallEerrAvatar.innerHTML = "<li>" + "Formato de imagen no validad frontend";
            errorRegister = i++;
        }else{
            smallEerrAvatar.innerHTML = "";
            errorRegister = 0
        }
        
        if (campoEmailRegister.value == ''){
            smallErrEmailRegister.innerHTML = "<li>"+ 'Email obligatorio frontend' + "</li>";
            errorRegister = i++;
        } else if (!validEmail.test(campoEmailRegister.value)){
            smallErrEmailRegister.innerHTML = "<li>"+ 'Email invalido frontend' + "</li>";
            errorRegister = i++;
        } else{
            smallErrEmailRegister.innerHTML = "";
            errorRegister = 0;
        };

        if (campoPassRegister.value == ''){
            smallErrPassRegister.innerHTML = "<li>"+ 'Contraseña Obligatoria frontend' + "</li>";
            errorRegister = i++;
        } else if(campoPassRegister.value.length<8){
            smallErrPassRegister.innerHTML = "<li>" + "La constraseña debe tener 8 caracteres como minimo forntend" + "</li>";
            errorRegister = i++;
        } else {
            campoPassRegister.innerHTML = "";
            errorRegister = 0;
        };

        if(errorRegister == 0){
            formRegister.submit();
        }

        
    })
});


   