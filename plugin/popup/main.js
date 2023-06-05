const getExtLinks = () => {
    var elements = document.querySelectorAll("link, a, script, source, img");
    var urls = Array.prototype.map.call( elements,(tag) => {return tag.href || tag.src;});
  
    const data = {
      urls: urls,
    };
  
    return data;
};
  
browser.runtime.onMessage.addListener((request, _, sendResponse) => {
    if (request.method === "localStorage") {
        sendResponse({
            data: Object.entries(localStorage),
        });
    } else if (request.method === "thirdPartyDomains") {
        sendResponse({
            data: Object.entries(getExtLinks()),
        });
    }

    return true;
});