import { NextApiRequest, NextApiResponse } from 'next'
import mailchimp from '@mailchimp/mailchimp_marketing'
// import NextCors from 'nextjs-cors'
import Cors from 'cors'

// Initializing the cors middleware
// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
const cors = Cors({
  methods: ['POST', 'GET', 'HEAD'],
})

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER, // E.g. us1
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  // Run the middleware
  await runMiddleware(req, res, cors)

  // Run the cors middleware
  // nextjs-cors uses the cors package, so we invite you to check the documentation https://github.com/expressjs/cors
  // await NextCors(req, res, {
  //   // Options
  //   methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  //   origin: '*',
  //   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  //   preflightContinue: false,
  // })

  const { email } = req.body

  if (!email) {
    return res.status(400).json({ error: 'El correo electrónico es requerido 9' })
  }

  try {
    await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
      email_address: email,
      status: 'subscribed',
    })
    return res.status(201).json({ error: '' })
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() })
  }
}
