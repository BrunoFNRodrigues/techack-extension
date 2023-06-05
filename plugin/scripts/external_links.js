const getExternalLinks = async (tabs) => {
    let tab = tabs.pop();
    const res = await browser.tabs.sendMessage(tab.id, {method: "thirdPartyDomains"});

    let baseURL = new URL(tab.url);
    baseURL = baseURL.hostname.replace("www.", "").split(".")[0];

    const links = res.data[0][1];
    let count = 0;
    var domainListElement = document.getElementById("domain_list");
    var domainNumElement = document.getElementById("num_domain");

    links.forEach((link) => {
        if (link !== undefined && link != "" && !link.includes(baseURL)) {
            let el = document.createElement("li");
            let data = document.createTextNode(link);
            el.appendChild(data);
            domainListElement.appendChild(el);
            count++;
        }
    });

    domainNumElement.textContent = "Total external links: " + count;
    
}

function getActiveTab(){
    return browser.tabs.query({currentWindow: true, active: true});
}

getActiveTab().then(getExternalLinks);
