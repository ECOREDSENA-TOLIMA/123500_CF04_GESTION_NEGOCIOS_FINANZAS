<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Informes

    .row.justify-content-center.align-items-center
      .col-lg-12
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(data-aos="fade-right")(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-1.png')})`}"
          )
          .bloque-texto-g__texto.p-5.m-right(data-aos="fade-left")
            p.mb-0 Dentro de las compañías, se deben realizar de manera permanente informes tanto internos como externos; al interior de las organizaciones, los informes, son considerados una herramienta base e importante para los administradores, juntas directivas, representantes legales, jefes de área, y empleados, para conocer plenamente todos y cada uno de los procesos de las compañías y de los sectores a los cuales pertenecen, según sea el alcance de cada uno de sus cargos, de tal manera que tanto de manera argumentativa como también basada en cifras, se      puedan sustentar las decisiones que eventualmente se toman por parte de estos funcionarios. 

    p A nivel general, un informe dentro de la organización tiene como propósito transmitir información recopilada y posteriormente analizada por parte del encargado de elaborar dicho documento, según los lineamientos y directrices impartidas.
    p.mb-5 Por su parte, a nivel externo también existen múltiples informes que, en la práctica empresarial, las organizaciones deben generar de acuerdo con las necesidades o las situaciones que particularmente se vayan presentando en el desarrollo de su objeto social de las mismas.  

    .row.aling.my-5   
      .col-lg-10(data-aos="zoom-in-down")
        .cajon.color-custom-5.p-4.mb-4.p-4
          .row.justify-content-around.align-items-center
            .col-lg-12
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Los informes más frecuentes que se deben presentar son los solicitados por los organismos de control, entre ellos se tienen, la Dirección de Impuestos y Aduanas Nacionales (DIAN), las superintendencias que tengan competencia sobre cada sector empresarial, las demás entidades gubernamentales que ejercen supervisión a las entidades públicas o privadas, tales como, la Contraloría General de la República, las distintas Contraloría del orden nacional o regional, la Procuraduría General de la Nación, las personerías, defensorías del pueblo, entre otras.

    Separador 

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Estados financieros

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-6(data-aos="fade-left") 
        img(src='@/assets/curso/temas/tema2/img-2.svg')
      .col-lg-6(data-aos="fade-right") 
          p.mb-0 Los estados financieros o contables son los informes que permiten a los usuarios de la información, obtener las cifras que sustentan la gestión de los administradores de una compañía, con base en ellos los usuarios de la información pueden tomar decisiones, según sea el caso; por ejemplo, las entidades financieras con esta información realizan los análisis pertinentes para otorgar los cupos de créditos a las personas naturales o jurídicas que así lo soliciten. Estos informes habitualmente reflejan la información al cierre contable; es decir, a un año, o también se pueden presentar en los cortes definidos por los administradores para sus correspondientes análisis, en el caso de las juntas directivas, se analiza la información mensualmente. Por medio de esta información, se puede conocer de manera oportuna tanto la rentabilidad, como los niveles de endeudamiento, entre otros indicadores financieros que se pueden analizar con base en los informes suministrados. Esta información se expresa por parte de las empresas y en el siguiente documento, se podrá conocer los principales estados financieros:
    
    .row.align-items-center.aling.my-3
      .col-12(data-aos="zoom-in-down")
        //- .tarjeta.color-secundario.p-4.mb-5
        //-   .row.justify-content-center.align-items-center
        //-     .col
        //-       .row.justify-content-between.align-items-center
        //-         .col-3.col-sm-2.col-lg-2
        //-           img.mx-1.mb-3(src="@/assets/curso/temas/tema2/ico_1.svg",  alt='', style="width:100px; display:block; margin:auto 0 ;")
        //-         .col.mb-3.mb-sm-0
        //-           h3.text-white.text-center Estados financieros
        //-         .col-12.col-sm-4.col-lg-2
        //-           a.boton.color-custom-7(:href="obtenerLink('downloads/estados_financieros.pdf')" target="_blank")
        //-             span Descargar
        //-             .row
        //-               .col-auto
        //-                 img.mx-2(src="@/assets/curso/temas/tema2/Ico_download.svg",  alt='', style="width:20px; display:block; margin:auto 0 ;")

        .tarjeta.color-secundario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/componentes/ico-anexos.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Estados financieros
                  //- p.text-small Consideraciones generales de tratamiento clínico del paciente con COVID-19 en el servicio de urgencias  
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo1_Estados_financieros.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    p.mb-5 En el estado de flujos de efectivos encontramos una clasificación que nos permite diferenciar cuáles han sido las fuentes de ingresos y los usos de los recursos, en cada una de las tres actividades establecidas; a continuación, trataremos cada una de ellas:

    .row.aling.my-5 
      .col-12
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")(data-aos="fade-up")
          div(titulo="Actividades de operación")
            .row.align-items-star.justify-content-center.p-4
              .col-lg-8
                .jumbotron-2.py-5.px-5.pb-md-2.mb-2
                  p.mb-5.text-center Como su nombre lo indica, estas actividades hacen referencia a todas las relacionadas con el desarrollo del objeto social de la compañía; es decir, la producción para empresas productoras, las actividades relacionadas con la prestación de servicios, y las de comercialización de productos, según el caso.
                .jumbotron-3.py-5.px-5.pb-md-2.mb-2
                  p.mb-5.text-center Dentro de las consideraciones más frecuentes, tenemos la compra y venta de productos o servicios, los pagos realizados por conceptos de nómina, arrendamientos, entre otros. Aquí también se incluyen las cuentas del estado de situación financiera como son los inventarios, cartera, pasivos por impuestos, entre otros.

              .col-lg-4
                img(src='@/assets/curso/temas/tema2/img_3.svg')
                
          div(titulo="Actividades de inversión")
            .row.align-items-star.justify-content-center.p-4
              .col-lg-8
                .jumbotron-2.py-5.px-5.pb-md-2.mb-2
                  p.mb-5.text-center A nivel general, las actividades de inversión en las empresas, como su nombre lo indica, corresponden a las inversiones que realizan en activos fijos, o participación en acciones de otras empresas, inversiones en CDT, títulos valores a nivel general. 
                .jumbotron-3.py-5.px-5.pb-md-2.mb-2
                  p.mb-5.text-center Como usos o destinación de los recursos, se incluyen las compras que en un periodo determinado realice la compañía, en rubros diferentes a la compra de mercancías para la venta, y demás que tengan relación con la operación, las cuentas más frecuentes en este grupo, son la propiedad planta y equipo, intangibles, entre otros.
              .col-lg-4
                img(src='@/assets/curso/temas/tema2/img_4.svg')

          div(titulo="Actividades de financiación")
            .row.align-items-star.justify-content-center.p-4
              .col-lg-8
                .jumbotron-2.py-5.px-5.pb-md-2.mb-2
                  p.mb-5.text-center  A este grupo pertenece todo lo relacionado con adquisición de dineros para ser utilizados por la empresa. Estos dineros pueden surgir de obligaciones con terceros, como por ejemplo de los bancos, como también, de sus propietarios, los cuales figuran directamente en las cuentas de patrimonio de la entidad, según sea el caso.
                .jumbotron-3.py-5.px-5.pb-md-2.mb-0
                  p.mb-5.text-center.mg-top Es importante tener en cuenta que en el grupo de los pasivos, no se pueden incluir, los pasivos laborales, los impuestos, los acreedores, proveedores, entre otros, pues estos pertenecen al grupo de actividades de operación, de las actividades más frecuentes en este estado de flujos de efectivo, encontramos las nuevas capitalizaciones que se realicen por parte de las acciones o ingresos por venta de acciones para nuevos propietarios de la compañía.
              .col-lg-4
                img(src='@/assets/curso/temas/tema2/img_5.svg')

    Separador 

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Hojas electrónicas financieras

    p Una hoja electrónica financiera, básicamente es un recurso importante para las personas naturales o jurídicas, que permite realizar los análisis de información de acuerdo a las necesidades administrativas, en forma de matriz, cuyo objetivo, es organizar datos numéricos y realizar las operaciones con ellos  y si así se considera, realizar monitoreo permanente y actualización de la información, que resulte fundamental para soportar la toma de decisiones en las organizaciones o para los usuarios de la información a nivel general.
    p.mb-5 Este <em>software</em> financiero, se basa en un sistema de celdas tanto horizontales como verticales, que, al combinarse, se convierten en distintas filas o columnas. Sabiendo ya esto, se invita a revisar el siguiente recurso donde se muestran las diferentes funciones de las hojas electrónicas: 

    .tarjeta.tarjeta--azul.mb-5(data-aos="fade-right")
      .p-4.p-lg-5
        SlyderA.bn(tipo="b")
          .row
            .col-lg-7.mb-4.mb-lg-0
              h4.mb-5 Las hojas electrónicas financieras
              p.mb-0 Se utilizan permanentemente en las empresas por parte de los administradores, para medir la gestión organizacional y de negocios en general. Dentro de los múltiples beneficios de esta herramienta, encontramos por ejemplo que, a falta de <i>software</i> contable, podemos llevar la contabilidad de los negocios o empresas, podemos crear bases de datos, se pueden formular y realizar cálculos aritméticos, se pueden generar reportes gerenciales para juntas directivas, graficas, análisis financieros, análisis estadísticos, entre otras virtudes de esta herramienta ofimática.
            .col-lg-5
              figure
                img(src="@/assets/curso/temas/tema2/img_10.png", style="width: 450px" ,alt='').m-auto

          .row
            .col-lg-7.mb-4.mb-lg-0
              h4.mb-5 <i>Software</i> contable
              p.mb-0 Siendo esta ayuda lo suficientemente práctica, con el pasar de los años muy a pesar de los avances tecnológicos y la creación de <i>software</i> muy completos y diseñados inclusos a la medidas de las necesidades de las personas naturales y jurídicas, en donde se consideran en detalle los procesos particulares, aun así, este tipo de <i>software</i> no pierden vigencia en las empresas, especialmente porque también se han venido actualizando y complementando, conservando la preferencia de los usuarios.
            .col-lg-5
              figure
                img(src="@/assets/curso/temas/tema2/img_11.png", style="width: 450px" ,alt='').m-auto

          .row
            .col-lg-7.mb-4.mb-lg-0
              h4.mb-5 Excel en la contabilidad
              p.mb-0 En conclusión, Microsoft Excel, es la hoja de cálculo más utilizada a nivel mundial por parte de las empresas y en esta se identifican las siguientes partes más conocidas.
            .col-lg-5
              figure
                img(src="@/assets/curso/temas/tema2/img_12.png", style="width: 450px" ,alt='').m-auto

          .row
            h4.mb-5 Funciones particulares de Excel
            
            .col-lg-4.d-flex
              .jumbotron-4.p-3
                p.text-small.mb-3 <b>Pestañas de las hojas:</b> las hojas de cálculo están conformadas por diversas hojas. En la parte inferior izquierda encontramos las pestañas de las hojas, mediante las cuales se pueden añadir, copiar o quitar hojas, entre otras tareas.
            .col-lg-2.d-flex
              .jumbotron-5.px-2.py-1
                p.text-small.my-4 <b>Barra de título:</b> en este espacio se indica el nombre del libro que se encuentra en uso.
            .col-lg-3.d-flex
              .jumbotron-6.p-3
                p.text-small.mb-0 <b>Celdas:</b> es el espacio designado para alimentar la información alfanumérica que se necesite analizar por parte de los usuarios.
            .col-lg-3.d-flex
              .jumbotron-7.p-4
                p.text-small.mb-0 <b>Columnas:</b> estas se conforman por las celdas que se alinean de forma vertical y se identifican por letras, que se expresan en orden alfabético, y no permiten modificación alguna.
            .row.aling-items-stretch.justify-content-center.mt-3
              .col-lg-3.d-flex
                .jumbotron-8.p-3
                  p.text-small.mb-0 <b>Barra de herramienta de acceso rápido:</b> está ubicada en la esquina superior izquierda de la hoja de cálculo, y sirve para anclar aquellos comandos que utilizamos frecuentemente.
              .col-lg-3.d-flex
                .jumbotron-9.p-3
                  p.text-small.mb-0 <b>Barra de fórmulas:</b>  como su nombre lo indica, muestra las fórmulas contenidas en las celdas y permite editarlas de ser necesario.
              .col-lg-4.d-flex
                .jumbotron-10.p-3
                  p.text-small.mb-0 <b>Filas:</b> están conformadas por las celdas que se alinean horizontalmente en la hoja de Excel. A diferencia de las columnas, estas se identifican mediante un número determinado. Tanto para las filas como para las columnas, es posible agregar o quitar de acuerdo a las necesidades de los usuarios.
              .col-lg-2.d-flex
                .jumbotron-11.p-3
                  p.text-small.mb-0 <b>Icono de Excel:</b> por medio de ellos, se pueden realizar diferentes tareas como minimizar o cerrar la ventana, entre muchas acciones.
















    

</template>

<script>
export default {
  name: 'Tema2',
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
