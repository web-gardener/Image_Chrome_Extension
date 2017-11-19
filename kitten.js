console.log('Kittens of the world, unite as one!');

let filenames = [
    "1.jpg"
];

let imgs = document.getElementsByTagName("img");
for(imgElt of imgs) {
    let r = Math.floor(Math.random() * filenames.length);
    let file = filenames[r];
    let url = chrome.extension.getURL(file);
    imgElt.src = url;
    console.log(url);
}