const apiurl = 'https://api.adviceslip.com/advice';

async function fetchdata() {
  try {
    const response = await fetch(apiurl, {
      method: 'GET'
    });

    if (!response.ok) {
      throw new Error(`erro: ${response.status}`);
    }

    const data = await response.json();
    document.getElementById("advice").textContent = data.slip.advice;
  } catch (error) {
    console.error('erro ao buscar dados');
  }
}

fetchdata();
