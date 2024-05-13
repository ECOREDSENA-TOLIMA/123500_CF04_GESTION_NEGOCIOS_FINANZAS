<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 Para que existan adecuados fundamentos de contabilidad tributaria, deben existir procesos acertados de contabilidad e informes acordes a lo tratado. En la siguiente figura, se aprecian las temáticas desarrolladas en el componente:  
    
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Imagen que menciona de manera resumida la temática tratada durante este componente formativo, la cual indica que dentro de los fundamentos de contabilidad se incluyen informes y procesos contables como cuentas, principios, instrumentos, entre otros; además de lo que tiene que ver con los impuestos, las tasas y las contribuciones.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
