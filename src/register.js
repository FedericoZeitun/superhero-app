const ENDPOINT = 'https://deno-api-users-login.herokuapp.com'

export default function register ({ email, password }) {
  return fetch(`${ENDPOINT}/register`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({email, password})
  }).then(res => {
    if (!res.ok) throw new Error('Response is NOT ok')
    return true
  })
}