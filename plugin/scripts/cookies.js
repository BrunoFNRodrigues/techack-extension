const getCookies = (tabs) => {
    let tab = tabs.pop();

    let baseURL = new URL(tab.url);
    baseURL = baseURL.hostname.replace("www.", "").split(".")[0];
    var getAllCookies = browser.cookies.getAll({url: tab.url});
    let countSite = 0;
    let countExt = 0;

    getAllCookies.then((cookies) => {
        var cookiesNum = document.getElementById("num_cookies");
        var cookiesNumExt = document.getElementById("num_external_cookies");
        var cookiesNumSite = document.getElementById("num_site_cookies");
        var cookiesSiteListElement = document.getElementById("site_cookies_list");
        var cookiesExtListElement = document.getElementById("external_cookies_list");

        cookies.forEach((cookie) => {
            let el = document.createElement("li");
            let data = document.createTextNode("Name: "+cookie.name+" Type: "+ (cookie.session ? "Session" : "Navigation"));
            el.appendChild(data);
            if(cookie.domain.includes(baseURL)){
                cookiesSiteListElement.appendChild(el); 
                countSite++;               
            } else {
                cookiesExtListElement.appendChild(el);  
                countExt++;   
            }
        });

        cookiesNum.textContent = "Total cookies: " + (countExt+countSite);
        cookiesNumExt.textContent = "Total cookies: " + countExt;
        cookiesNumSite.textContent = "Total cookies: " + countSite;
        

    });
}

function getActiveTab(){
    return browser.tabs.query({currentWindow: true, active: true});
}

getActiveTab().then(getCookies);