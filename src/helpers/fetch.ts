export async function postData(url = '', data = {}) {
  const response = await fetch(process.env.API_BASE_URL + url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data),
  });

  return response.json();
}

export async function getData(url = '') {
  const response = await fetch(process.env.API_BASE_URL + url, {
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  });

  return response.json();
}
