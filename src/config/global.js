export default {
  global: {
    componenteFormativo: 'Fundamentos de contabilidad y tributaria',
    descripcionCurso:
      'El manejo de la contabilidad es la base fundamental para el conocimiento financiero de las organizaciones. Además de dar cumplimiento a las Normas Internacionales de Información Financiera (NIIF), a su vez esta información, se convierte en la materia prima fundamental para la toma de decisiones por parte de los administradores de las compañías.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Contabilidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Cuentas contables',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Principios de contabilidad',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Dinámica contable',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Instrumentos financieros',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Documentación',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Normativa',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Informes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Estados financieros',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Hojas electrónicas financieras',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Tributaria',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Registro único tributario',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Impuestos',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Tasas y contribuciones',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'A/F. (s.f.). Relación entre Activo, Pasivo y Patrimonio Neto.',
      link:
        'https://software-activos.com.mx/blog/relacion-entre-activo-pasivo-y-patrimonio',
    },
    {
      referencia:
        'Decreto 1625 de 2016 [Presidencia de la República de Colombia]. Por medio del cual se expide el Decreto Único Reglamentario en materia tributaria. Octubre 11 de 2016.',
      link:
        'https://www.cijuf.org.co/sites/cijuf.org.co/files/normatividad/2016/DECRETO%201625%20DEL%2011%20DE%20OCTUBRE%20DE%202016%20%282%29_1.pdf',
    },
    {
      referencia:
        'Decreto 410 de 1971. [Presidencia de la República de Colombia] (). Por el cual se expide el Código de Comercio.. Marzo 27 de 1971.',
      link: 'https://leyes.co/codigo_de_comercio/19.htm',
    },
    {
      referencia:
        'Impuestos nacionales, departamentales y municipales. [Web log post]. Contabilidad de la Financiación.',
      link:
        'http://contaduriapublicatercero3841.blogspot.com/2017/06/impuestos-nacionales-departamentales-y.html',
    },
    {
      referencia:
        'Ley 1819 de 2016. Por medio de la cual se adopta una reforma tributaria estructural, se fortalecen los mecanismos para la lucha contra la evasión y la elusión fiscal, y se dictan otras disposiciones. Diciembre 29 de 2016',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=79140',
    },
  ],
  glosario: [
    {
      termino: 'Estatuto Tributario',
      significado:
        'El Estatuto Tributario se reconoce como la máxima autoridad en impuestos en Colombia, allí se reflejan la gran mayoría de normas relacionadas con el recaudo de tributos en Colombia.',
    },
    {
      termino: 'ICA',
      significado:
        'Conocido como Impuesto de Industria y Comercio es una obligación municipal que se genera a partir de la ejecución de labores de industria, comercio o servicios generados en Bogotá o cualquier ciudad del país donde aplique, en las que directa o indirectamente se desarrollan de manera continua o eventual, con o sin establecimiento comercial.',
    },
    {
      termino: 'Persona Natural',
      significado:
        'La persona natural es un ser humano que, desde el punto de vista tributario, es un contribuyente en ejercicio de una actividad comercial, profesional o de servicios y contrae obligaciones con el Estado a título personal.',
    },
    {
      termino: 'Persona Jurídica',
      significado:
        'Una persona jurídica es una organización o grupo de personas naturales a la que la ley reconoce personalidad independiente y diferenciada de la de cada uno de sus miembros o componentes, capaz de ejercer derechos y contraer obligaciones, y de ser representada judicial y extrajudicialmente.',
    },
    {
      termino: 'Retenciones',
      significado:
        'Es una cantidad de dinero que un pagador descuenta del importe total de una factura de compra de servicios profesionales, nóminas de trabajadores y otras operaciones a título de anticipo de impuesto, que la ley exige para las partes.',
    },
    {
      termino: 'RUT',
      significado:
        'Quiere decir registro único tributario, y se convierte en el documento de identificación de los contribuyentes',
    },
    {
      termino: 'Tributo',
      significado:
        'Corresponden a aportes que realizan los contribuyentes con destino al estado.',
    },
  ],
  complementario: [
    {
      tema: '1.6 Normativa',
      referencia:
        'Decreto 2420 de 2015. [Ministerio de Comercio, Industria y Turismo]. Por medio del cual se expide el Decreto Único Reglamentario de las Normas de Contabilidad, de Información Financiera y de Aseguramiento de la Información y se dictan otras disposiciones.',
      tipo: 'Decreto',
      link:
        'https://www.cancilleria.gov.co/sites/default/files/Normograma/docs/decreto_2420_2015.htm',
    },
    {
      tema: '1.6 Normativa',
      referencia:
        'Actualícese Video. (2021, 13 de septiembre). Nueva reforma tributaria de los colombianos: novedades.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=f2y8vKfyh0Q',
    },
    {
      tema: '1.6 Normativa',
      referencia:
        'DIAN Colombia. (2021, 14 de julio). REGISTRO ÚNICO TRIBUTARIO - RUT 1/2 – DIAN.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Ltgyaxh0ga0',
    },
    {
      tema: '1.6 Normativa',
      referencia:
        'Correa Sánchez, D . (2019). Impuestos en Colombia. Nacionales y Municipales',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=-p6FCB0p3o0&t=268s',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesoría metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Jair Yovanny Castro Morales',
          cargo: 'Experto temático',
          centro: 'Centro Agropecuario La Granja - Regional Tolima',
        },
        {
          nombre: 'Gloria Alexandra Orejarena Barrios',
          cargo: 'Diseño instruccional',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Corrección de estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Asesoría metodológica y evaluación instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadro',
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Gustavo Adolfo Marún Suárez',
          cargo: 'Desarrollo front-end',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Diseño web',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollo Fullstack',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y vinculación de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
