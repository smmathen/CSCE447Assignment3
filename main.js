const d3 = require("d3");

function main() {
    d3.select("body")
        .append("p")
        .text("Hello, world!");
}

main();