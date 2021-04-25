nc = +prompt("Ingrese número de consultas")


    if(nc <= 3){
        cc = 200;
        suma = nc * 200;
    }else if (nc > 3 && nc <=5 ){
        cc = 150;
        suma = 3*200 + ((nc-3)*150);
    }else if (nc > 5 && nc <=8 ){
        cc = 100;
        suma = 3*200 + 2*150 + ((nc-5)*100);
    }else{ 
        cc = 50;
        suma = 3*200 + 2*150 + 3*100 + ((nc-8)*50);
    }
    alert(`Precio de consulta: ${cc}. Gasto total de tratamiento ${suma}`)


