let sequential = require("sequential-ids");

let generator = new sequential.Generator({
    digits: 3,
    restore: "000"
});

generator.start();

module.exports = generator;