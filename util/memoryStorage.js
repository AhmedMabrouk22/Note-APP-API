const memoryStorage = require("memorystorage");
const store = new memoryStorage();

let getAllKeys = (store) => {
    let keys = [];
    for(let i = 0 ; i < store.length ; ++i) {
        let key = store.key(i);
        keys.push(key);
    }
    return keys;
}

let getAllValues = (store) => {
    let values = [];
    for(let i = 0 ; i < store.length; ++i) {
        let key = store.key(i);
        let value  = store.getItem(key);
        values.push(value);
    }
    return values;
}

module.exports = {
    store,
    getAllKeys,
    getAllValues
}