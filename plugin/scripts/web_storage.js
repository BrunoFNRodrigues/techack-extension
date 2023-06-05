const getLocalStorage = async (tabs) =>{
    let tab = tabs.pop();

    var existLS = document.getElementById("ls_exists");

    const storageList = document.getElementById("ls_list");
    const res = await browser.tabs.sendMessage(tab.id, {method: "localStorage"});
    const storage = res.data;
    if(storage.length > 0){
        existLS.textContent = "Local Storage is Enabled";
        for(let localStorage of res.data){
            let el = document.createElement("li");
            let data = document.createTextNode(localStorage[0]);
            el.appendChild(data);
            storageList.appendChild(el);
        }
    } else {
        existLS.textContent = "Local Storage is not Enabled";
    }

}


function getActiveTab(){
    return browser.tabs.query({currentWindow: true, active: true});
}

getActiveTab().then(getLocalStorage);
