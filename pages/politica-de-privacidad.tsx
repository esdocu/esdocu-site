import { PageSEO } from '@/components/SEO'

export default function Pdp() {
  return (
    <>
      <PageSEO
        title={`Políticas de Privacidad`}
        description={`Esdocu es un proyecto de traducción al español de documentación de tecnologías open
            source`}
        noIndex={true}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Política de Privacidad
          </h1>
        </div>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="mt-7 pt-4 pb-6 md:space-y-5">
          <h2 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
            POLÍTICA DE PRIVACIDAD
          </h2>
        </div>
        <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
          <p>
            Si estás aquí es porque quieres saber más sobre las obligaciones y derechos que te
            corresponden como usuario de esta web https://esdocu.com y eso está muy bien. Nuestro
            deber es informarte y el tuyo estar debidamente informado.
          </p>
          <p>
            En esta Política de Privacidad te informaremos con total transparencia sobre la
            finalidad de este sitio web y todo lo que afecta a los datos que nos facilites, así como
            de las obligaciones y derechos que te corresponden.
          </p>
          <p>
            Para empezar, debes saber que este sitio web se adapta a la normativa vigente en
            relación con la protección de datos, lo que afecta a los datos personales que nos
            facilites con tu consentimiento expreso y a las cookies que utilizamos para que este
            sitio web funcione correctamente y pueda desarrollar su actividad.
          </p>
          <p>Concretamente, esta web se ajusta al cumplimiento de las siguientes normativas:</p>
          <p>
            El RGPD (Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de
            2016 relativo a la protección de las personas físicas) que es la nueva normativa de la
            Unión Europea que unifica la regulación del tratamiento de los datos personales en los
            distintos países de la UE.
          </p>
          <p>
            La LOPD (Ley Orgánica 15/1999, de 13 de diciembre, de Protección de Datos de Carácter
            Personal y Real Decreto 1720/2007, de 21 de diciembre, el Reglamento de desarrollo de la
            LOPD) que regula el tratamiento de los datos personales y las obligaciones que debemos
            asumir los responsables de una web o un blog a la hora de gestionar esta información.
          </p>
          <p>
            La LSSI (Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y
            Comercio Electrónico) que regula las transacciones económicas mediante medios
            electrónicos, como es el caso de este blog.
          </p>
        </div>
      </div>
    </>
  )
}
