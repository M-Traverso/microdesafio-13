let deportista = {
    energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function(entrenar) {
      this.energia -= entrenar * 5;
      this.experiencia += entrenar * 2;
    }
  };
  
  
  console.log("==Antes de comenzar entrenamiento==");
  console.log(`Deportista energia: ${deportista.energia}`);
  console.log(`Deportista experiencia: ${deportista.experiencia}`);
  console.log("==ENTRENANDO==");
  deportista.entrenarHoras(10);
  console.log("==FIN ENTRENAMIENTO==");
  console.log(`Deportista energia: ${deportista.energia}`);
  console.log(`Deportista experiencia: ${deportista.experiencia}`);

  console.log("Hola");
<<<<<<< HEAD
  console.log("chau");
=======

  console.log('Esto es una modificacion de Manu');
  
>>>>>>> 18ff0c87c618696dfc622cb5115a50aea824f2d2
