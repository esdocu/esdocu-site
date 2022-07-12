import { NextApiRequest, NextApiResponse } from 'next'
import mailchimp from '@mailchimp/mailchimp_marketing'

// TEMP
const _process = {
  env: {
    MAILCHIMP_API_KEY: '91f2c57a906143af13b456b9029766c6-us14',
    MAILCHIMP_API_SERVER: 'us14',
    MAILCHIMP_AUDIENCE_ID: '1c62d0fe2c',
  },
}

mailchimp.setConfig({
  apiKey: _process.env.MAILCHIMP_API_KEY,
  server: _process.env.MAILCHIMP_API_SERVER, // E.g. us1
})

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body

  if (!email) {
    return res.status(400).json({ error: 'El correo electrónico es requerido' })
  }

  try {
    await mailchimp.lists.addListMember(_process.env.MAILCHIMP_AUDIENCE_ID, {
      email_address: email,
      status: 'subscribed',
    })
    return res.status(201).json({ error: '' })
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() })
  }
}
