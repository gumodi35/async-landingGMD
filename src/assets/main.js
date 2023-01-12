const API = 'https://spotify81.p.rapidapi.com/top_200_tracks'
const content = null || document.getElementById('content')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2ec5d2dc3bmsh36d9ba0f148caeap1735f6jsn7ab3dcb1a706',
		'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
	}
};

/* fetch(`${API}`, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err)); */

async function fetchData(urlApi){
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const songs = await fetchData(API);
        let view =`
        ${.map(data => `
          <div class="group relative">
            <div
              class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
              <img src="${.displayImageUri}" alt="${.trackUri}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
              <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${.trackName}
              </h3>
            </div>
          </div>
        `).slice(0,4).join('')}
    
        `;
        content.innerHTML = view;
    } catch (error){
        console.log(error);
    }
})();