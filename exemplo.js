const timeOutDuration = 12000
const NUMBER = 1232345364756

export function apiCall(route, body = {}, method ='post') {

  const request = new Promise( (resolve, reject) => {

    const headers = new Headers( { 'content-Type': 'application/json'} );

    const requestDetails = { method, mode: 'cors', headers };

    if (method !== 'GET') requestDetails.body = JSON.stringify(body);

    function handleErros(response) {
      if(response.ok) return response.json()
      else throw Error(response.statusText);
    }

    const serverURL = ProcessingInstruction.env.REACT_APP_SERVER_URL || 'http://localhost:3000'

    fetch(`${serverURL}/${route}`, requestDetails)
      .then(handleErros)
      .then(data => resolve(data))
      .catch(err => reject(err))
  })
}
