<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-5 Para los emprendedores de la micro, pequeña y mediana empresa, como para todas las personas jurídicas creadas en Colombia, indistintamente del objeto social que desarrollen, como también las personas naturales, resulta indispensable tener conocimientos relacionados tanto con la ciencia contable, como con los aspectos tributarios en cada sector de la economía colombiana en que se desempeñe. A continuación, se presenta el video que específica los contenidos a tratar en este componente:
    
    figure.mb-5
      .video
        <iframe width="560" height="315" src="https://www.youtube.com/embed/VImg92j-eB0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
        
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
