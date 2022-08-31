window.addEventListener('load', function() {

    let formCreate = document.querySelector('.createProduct');

    let campoNameProduct = document.querySelector('.nameProduct');
    let smallErrNameProduct = document.querySelector('.errNameProduct');
    let campoDescription = document.querySelector('.description');
    let smallErrDescription = document.querySelector('.errDescription');
    let campoCharacteristics = document.querySelector('.characteristics');
    let smallErrCharacteristics = document.querySelector('.errCharacteristics');
    let campoSizing = document.querySelector('.sizing');
    let smallErrSizing = document.querySelector('.errSizing');
    let campoImage = document.querySelector('.VALIDimage');
    let smallErrImage = document.querySelector('.errImage');
    let campoImage2 = document.querySelector('.VALIDimage2');
    let smallErrImage2 = document.querySelector('.errImage2');
    let campoImage3 = document.querySelector('.VALIDimage3');
    let smallErrImage3 = document.querySelector('.errImage3');
    let campoImage4 = document.querySelector('.VALIDimage4');
    let smallErrImage4 = document.querySelector('.errImage4');
    let campoImage5 = document.querySelector('.VALIDimage5');
    let smallErrImage5 = document.querySelector('.errImage5');
    let imageExtensions = /(.jpg|.jpeg|.png|.gif)$/i;

    // Contadores de error por input para determinar si destravar el preventDefault del Sudmit o no.
    
    let errorProductN = [];
    let errorProductD = [];
    let errorProductC = [];
    let errorProductS = [];
    let errorProductI = [];
    let errorProductI2 = [];
    let errorProductI3 = [];
    let errorProductI4 = [];
    let errorProductI5 = [];

    campoNameProduct.addEventListener('blur', function(){

        if(campoNameProduct.value ==''){
            smallErrNameProduct.innerHTML = "<li>" + 'Nombre de producto obligatorio' + "</li>";
            errorProductN = +1;
        }else if (campoNameProduct.value.length<5){
            smallErrNameProduct.innerHTML = "<li>" + "Longitud mínima 5 caracteres" + "</li>";
            errorProductN = +1;
        }else {
            smallErrNameProduct.innerHTML = '';
            errorProductN = 0;
        }
    });

    campoDescription.addEventListener('blur', function(){

        if(campoDescription.value ==''){
            smallErrDescription.innerHTML = "<li>" + 'Descripción de producto obligatoria' + "</li>";
            errorProductD = +1;
        }else if (campoDescription.value.length<20){
            smallErrDescription.innerHTML = "<li>" + "Longitud mínima 20 caracteres" + "</li>";
            errorProductD = +1;
        }else {
            smallErrDescription.innerHTML = '';
            errorProductD = 0;
        }
    });

    campoCharacteristics.addEventListener('blur', function(){

        if(campoCharacteristics.value ==''){
            smallErrCharacteristics.innerHTML = "<li>" + 'Caracteristicas de producto obligatoria' + "</li>";
            errorProductC = +1;
        }else if (campoCharacteristics.value.length<20){
            smallErrCharacteristics.innerHTML = "<li>" + "Longitud mínima 20 caracteres" + "</li>";
            errorProductC = +1;
        }else {
            smallErrCharacteristics.innerHTML = '';
            errorProductC = 0;
        }
    });

    campoSizing.addEventListener('blur', function(){

        if(campoSizing.value ==''){
            smallErrSizing.innerHTML = "<li>" + 'Dimensionamiento de producto obligatorio' + "</li>";
            errorProductS = +1;
        }else if (campoSizing.value.length<20){
            smallErrSizing.innerHTML = "<li>" + "Longitud mínima 20 caracteres" + "</li>";
            errorProductS = +1;
        }else {
            smallErrSizing.innerHTML = '';
            errorProductS = 0;
        }
    });

    campoImage.addEventListener('blur', function(){   

        if(!imageExtensions.exec(campoImage.value) ){
            smallErrImage.innerHTML = "<li>" + "Formato de imagen no valida";
            errorProductI = +1;
        }else {
            smallErrImage.innerHTML = "";
            errorProductI = 0
        }
    });

    campoImage2.addEventListener('blur', function(){   

        if(!imageExtensions.exec(campoImage2.value) ){
            smallErrImage2.innerHTML = "<li>" + "Formato de imagen no valida";
            errorProductI2 = +1;
        }else {
            smallErrImage2.innerHTML = "";
            errorProductI2 = 0
        }
    });

    campoImage3.addEventListener('blur', function(){   

        if(!imageExtensions.exec(campoImage3.value) ){
            smallErrImage3.innerHTML = "<li>" + "Formato de imagen no valida";
            errorProductI3 = +1;
        }else {
            smallErrImage3.innerHTML = "";
            errorProductI3 = 0
        }
    });

    campoImage4.addEventListener('blur', function(){   

        if(!imageExtensions.exec(campoImage4.value) ){
            smallErrImage4.innerHTML = "<li>" + "Formato de imagen no valida";
            errorProductI4 = +1;
        }else {
            smallErrImage4.innerHTML = "";
            errorProductI4 = 0
        }
    });

    campoImage5.addEventListener('blur', function(){   

        if(!imageExtensions.exec(campoImage5.value) ){
            smallErrImage5.innerHTML = "<li>" + "Formato de imagen no valida";
            errorProductI5 = +1;
        }else {
            smallErrImage5.innerHTML = "";
            errorProductI5 = 0
        }
    });

    formCreate.addEventListener('submit', function(e){

        e.preventDefault();

        if(errorProductN == 0 && errorProductD == 0 && errorProductC == 0 && errorProductS == 0 && errorProductI == 0 && errorProductI2 == 0 && errorProductI3 == 0 && errorProductI4 == 0 && errorProductI5 == 0){
            formCreate.submit();
        } 
    });


});