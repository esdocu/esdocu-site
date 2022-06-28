import { PageSEO } from '@/components/SEO'

export default function Al() {
  return (
    <>
      <PageSEO
        title={`Aviso legal`}
        description={`Esdocu es un proyecto de traducción al español de documentación de tecnologías open
            source`}
        noIndex={true}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Aviso legal
          </h1>
        </div>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="mt-7 pt-4 pb-6 md:space-y-5">
          <h2 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
            AVISO LEGAL
          </h2>
        </div>
        <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
          <p>
            Este Aviso Legal tiene el objetivo de informarte de tus derechos y obligaciones como
            usuario de este sitio web. Aquí encontrarás toda la información que necesitas sobre este
            sitio web, su actividad, los datos personales que recaba y su finalidad, así como las
            normas de uso que regulan el uso de esta web.
          </p>
          <p>
            En el momento en que accedas a este sitio web https://esdocu.com, asumes la condición de
            usuario, por lo que el contenido de este Aviso Legal te afecta directamente. Por eso, es
            importante que lo leas para disipar cualquier duda que puedas tener y tener conocimiento
            de causa sobre las condiciones que estás aceptando.{' '}
          </p>
          <p>
            Para empezar, debes saber que este sitio web cumple con las normativas vigentes en
            materia de protección de datos, con el objetivo de aportarte las garantías, la seguridad
            y la transparencia que, como usuario te corresponden, a la hora de utilizar esta web.
          </p>
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
      {/* <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="mt-7 pt-4 pb-6 md:space-y-5">
          <h2 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
            T
          </h2>
        </div>
        <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
          <p>P</p>
        </div>
      </div> */}
    </>
  )
}
