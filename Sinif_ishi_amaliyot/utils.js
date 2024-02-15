function get(selection) {
    if (selection) {
        return document.querySelector(selection);
    } else  {
        throw new Error('err');
    }
}



export {
    get
}