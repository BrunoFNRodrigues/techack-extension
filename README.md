# Firefox Security Plugin - Cookie Guardian
<p align="center">
    <img src="plugin/icons/cookie.png" alt="drawing" width=200 />
<p/>

O Cookie Guardian é uma extensão para o navegador Firefox, que tem como objetivo verificar uma séria de informações associadas a uma navegaçao segura, como Cookies, link para sites de terceiros e armazenamento local do navegador, além disso o Cookie Guardian verifica para tentaivas de hijack.

O a extensão foi construida seguindo levando em concideração os aspectos abaixo.
# Como testar?
1. Baixar o navegador de deselvolvedor do Firefox
2. No campo de pesquisa digitar: about:debugging
3. Na aba "Este Firefox" clicar na opção "Carregar extensão temporária..."
4. No explorador de arquivos selecione o arquivo manifest.json

## Configuração do manifest.json
O manifest.json são definidos os principais expectos da extensão, como nome, descrição, ícone, permissões, qual arquivo HTML será utilizado para fazer o FrontEnd, e qual arquivo JavaScript será utilizado para fazer o BackEnd.

### manifest.json
```json
{
    "description": "Firefox extension to check the security and privacy level of a web page",
    "manifest_version": 2,
    "name": "CookieGuardian",
    "version": "1.0",

    "permissions": [
        "cookies",
        "<all_urls>",
        "tabs",
        "storage",
        "http://*/*",
        "https://*/*",
        "webRequest",
        "contextualIdentities",
        "notifications"
    ],

    "icons": {
        "32": "icons/cookie-32.png",
        "64": "icons/cookie-64.png"
    },

    "browser_action": {
        "browser_style": true,
        "default_title": "Check web page cookies and security",
        "default_popup": "popup/main.html"
    },

    "content_scripts": [
        {
        "matches": ["*://*/*"],
        "js": ["popup/main.js"]
        }
    ]
}

```

## Estrutura de arquivos:
O script "main.js" obtem todas as informações necessárias para as análises. Que é passada para o arquivo HTML. Contudo, para manter a organização são os scripts dentro da pasta scripts que interagem com o HTML o modificando de acordo com as informações obtidas.

Assim temos as pastas:
* icons: Com as imagens para a extensão
* popup: Com o html, css e o principal script main.js
* scripts: Com todos os scripts para as funcionalidades

## Referências:

* https://developer.mozilla.org/pt-BR/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension

* https://www.flaticon.com/free-icons/cookie