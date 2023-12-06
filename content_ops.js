
if(window.location.href.includes("/career")){
    searchDOM()
}

async function searchDOM(){

    const xpathGreenhouse = '//a[contains(@href, "greenhouse.io")]';
    const xpathLever = '//a[contains(@href, "lever.co")]'

    const greenhouseIsPresent = document.evaluate(xpathGreenhouse, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    const leverIsPresent = document.evaluate(xpathLever, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);

    if(greenhouseIsPresent.singleNodeValue){
        alert("greenhouse.io application is present")
    }

    if(leverIsPresent.singleNodeValue){
        alert("lever.co application is present")
    }
}

