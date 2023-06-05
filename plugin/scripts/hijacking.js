const detectHijacking = (tabs) => {
    const tab = tabs.pop();
    const scripts = document.getElementById("scripts_list");
    const war = document.getElementById("hijack_warning");
    var scriptTags = document.getElementsByTagName('script');


    for (var i = 0; i < scriptTags.length; i++) {
        var script = scriptTags[i];
        var scriptContent = script.innerHTML;
    
        // Verificar se o conteúdo do script contém código suspeito
        if (scriptContent.includes('<script>') || scriptContent.includes('eval(')) {
            war.textContent = "Possível injeção de script detectada!";
            let el = document.createElement("li");
            let data = document.createTextNode("Script: "+scriptContent);
            el.appendChild(data);
            scripts.appendChild(el);
        } 
      }
}

function getActiveTab(){
    return browser.tabs.query({currentWindow: true, active: true});
}

getActiveTab().then(detectHijacking);
