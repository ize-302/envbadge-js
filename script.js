// grab script id
const projectId = document.currentScript.getAttribute('src').split('projectId=')[1];
const hostUrl = window.location.host;

(async () => {
  const response = await fetch(`https://envbadge.vercel.app/api?id=${projectId}&from=${hostUrl}`);
  const responsejson = await response.json();

  if (responsejson.show_badge) {
    let widgetElem = document.createElement('div')
    // style badge
    if (responsejson.badge_style === 'default') {
      let badge_specific_custom_style = 'font-size: 14px; color: #111; background-color: rgb(248, 248, 158); position: fixed; font-family: sans-serif; border-radius: 5px; border: 1px solid orange; padding: 5px 10px;'
      switch (responsejson.badge_position) {
        case 'top':
          widgetElem.setAttribute('style', `${badge_specific_custom_style} top: 10px; left: 50%; transform: translate(-50%, 0);`)
          break;
        case 'top-left':
          widgetElem.setAttribute('style', `${badge_specific_custom_style} top: 10px; left: 10px;`)
          break;
        case 'top-right':
          widgetElem.setAttribute('style', `${badge_specific_custom_style} top: 10px; right: 10px;`)
          break;
        case 'bottom':
          widgetElem.setAttribute('style', `${badge_specific_custom_style} bottom: 10px; left: 50%; transform: translate(-50%, 0);`)
          break;
        case 'bottom-left':
          widgetElem.setAttribute('style', `${badge_specific_custom_style} bottom: 10px; left: 10px;`)
          break;
        case 'bottom-right':
          widgetElem.setAttribute('style', `${badge_specific_custom_style} bottom: 10px; right: 10px;`)
          break;
      }
    }
    else if (responsejson.badge_style === 'banner') {
      let badge_specific_custom_style = 'font-size: 14px; color: #111; background-color: rgb(248, 248, 158); position: fixed; font-family: sans-serif; width: 100%; text-align: center; padding: 10px 0;';
      switch (responsejson.badge_position) {
        case 'top':
          widgetElem.setAttribute('style', `${badge_specific_custom_style} border-bottom: 1px solid orange; top: 0px; left: 0px;`)
          break;
        case 'bottom':
          widgetElem.setAttribute('style', `${badge_specific_custom_style} border-top: 1px solid orange; bottom: 0px; left: 0px;`)
          break;
      }
    }
    else if (responsejson.badge_style === 'watermark') {
      let badge_specific_custom_style = 'position: fixed; background-color: transparent; color: #777; font-size: 24px; opacity: 0.5; font-family: sans-serif;'
      switch (responsejson.badge_position) {
        case 'top':
          widgetElem.setAttribute('style', `${badge_specific_custom_style} top: 10px; left: 50%; transform: translate(-50%, 0);`)
          break;
        case 'top-left':
          widgetElem.setAttribute('style', `${badge_specific_custom_style} top: 10px; left: 10px;`)
          break;
        case 'top-right':
          widgetElem.setAttribute('style', `${badge_specific_custom_style} top: 10px; right: 10px;`)
          break;
        case 'bottom':
          widgetElem.setAttribute('style', `${badge_specific_custom_style} bottom: 10px; left: 50%; transform: translate(-50%, 0);`)
          break;
        case 'bottom-left':
          widgetElem.setAttribute('style', `${badge_specific_custom_style} bottom: 10px; left: 10px;`)
          break;
        case 'bottom-right':
          widgetElem.setAttribute('style', `${badge_specific_custom_style} bottom: 10px; right: 10px;`)
          break;
      }
    }
    const updatedmessage = responsejson.custom_message.replace("{{environment}}", responsejson.name)
    widgetElem.innerText = `${updatedmessage.toUpperCase()}`
    let pagebody = document.getElementsByTagName('body')[0];
    pagebody.appendChild(widgetElem)
  }
})()
