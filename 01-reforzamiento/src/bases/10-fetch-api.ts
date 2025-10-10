import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = '7YOLT1Xy8MEgCAaehSWDps7aJUPjVbOC';
const myRequest = fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
);

const createImageInsideDOM = (url: string) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;
    document.body.append(imgElement);
}

myRequest
    .then((response) => response.json())
    .then(({data}: GiphyRandomResponse) => {
        const imageUrl = data.images.original.url;
        createImageInsideDOM(imageUrl);
        // const imageUrl = data.data.images.original.url;
        // console.log(imageUrl);
    })
    .catch((err) => console.error(err));

// fetch(


// {
    // console.log(response);
    // response.json().then((data) => {
    //     console.log(data);
    // });
// })
// .catch((err) => {
//     console.error(err);
// })