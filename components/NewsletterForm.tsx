import React, { useRef, useState } from 'react'

// import siteMetadata from '@/data/siteMetadata'

const NewsletterForm = ({ title = 'Esdocu DEV News' }) => {
  const inputEl = useRef<HTMLInputElement>(null)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const subscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // const res = await fetch(`/api/${siteMetadata.newsletter.provider}`, {
    const res = await fetch(`https://esdocu-newsletters.xeodev.workers.dev`, {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const { error } = await res.json()
    if (error) {
      setError(true)
      setMessage('¡Tu dirección de correo electrónico no es válida o ya estás suscrito!')
      return
    }

    inputEl.current.value = ''
    setError(false)
    setSubscribed(true)
    setMessage('¡Éxito! 🎉 Ya estás suscrito.')
  }

  return (
    <div className="max-w-md px-3">
      <div className="pb-1 text-xl font-semibold uppercase text-gray-800 dark:text-gray-100">
        {title}
      </div>
      <div className="pb-4 text-base text-gray-800 dark:text-gray-100">
        Entérate de todas las novedades del mundo DEV en un solo correo semanal.
      </div>
      <form className="flex flex-col msm:flex-row" onSubmit={subscribe}>
        <div className="w-full">
          <label className="sr-only" htmlFor="email-input">
            Dirección de email
          </label>
          <input
            autoComplete="email"
            className="w-full rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black msm:w-72"
            id="email-input"
            name="email"
            placeholder={subscribed ? 'Ahora estás suscrito! 🎉' : 'Ingresa tu email'}
            ref={inputEl}
            required
            type="email"
            disabled={subscribed}
          />
        </div>
        <div className="mt-2 flex w-full rounded-md shadow-sm msm:mt-0 msm:ml-3">
          <button
            className={`w-full rounded-md bg-primary-500 py-2 px-4 font-medium text-white sm:py-0 ${
              subscribed ? 'cursor-default' : 'hover:bg-primary-700 dark:hover:bg-primary-400'
            } focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:ring-offset-black`}
            type="submit"
            disabled={subscribed}
          >
            {subscribed ? '¡Gracias!' : 'Suscribirme'}
          </button>
        </div>
      </form>
      {error && (
        <div className="w-72 pt-2 text-sm text-red-500 dark:text-red-400 sm:w-96">{message}</div>
      )}
    </div>
  )
}

export default NewsletterForm

export const BlogNewsletterForm = ({ title }) => (
  <div className="flex items-center justify-center">
    <div className="bg-gray-100 p-6 dark:bg-gray-800 sm:px-14 sm:py-8">
      <NewsletterForm title={title} />
    </div>
  </div>
)
