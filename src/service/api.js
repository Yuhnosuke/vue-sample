const Axios = require('axios').default

const apiKey = 'sample-todoapp-api-key'

const agent = Axios.create({
  baseURL: 'https://jsondb.app/sample-todoapp',
  headers: {
    'x-api-key': apiKey
  },
  responseType: 'json',
})

export const getTodos = async () => {
  const {
    data: { data },
  } = await agent.get('/todos')
  return data
}