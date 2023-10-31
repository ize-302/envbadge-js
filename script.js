// grab script id
const projectId = document.currentScript.getAttribute('src').split('projectId=')[1];
const hostUrl = window.location.host;

(async () => {
  const response = await fetch(`https://envbadge.vercel.app/api?id=${projectId}&from=${hostUrl}`);
  const responsejson = await response.json();

  if (responsejson.show_badge) {
    let widgetElem = document.createElement('div')
    widgetElem.setAttribute('style', 'font-size: 14px; color: #111; background-color: rgb(248, 248, 158); position: fixed; bottom: 10px; left: 10px; padding: 5px 10px; border: 1px solid orange; border-radius: 5px; font-family: sans-serif;')
    widgetElem.innerText = `🚧 You are in ${responsejson.name} mode`
    let pagebody = document.getElementsByTagName('body')[0];
    pagebody.appendChild(widgetElem)
  }
})()
