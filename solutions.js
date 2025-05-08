// ----------- problem-1 Solutions---------------- //
function formatString(input, toUpper) {
    if (toUpper === void 0) { toUpper = true; }
    var result = toUpper ? input.toUpperCase() : input.toLowerCase();
    console.log(result);
    return result;
}
formatString("Hello"); // Output: "HELLO"
formatString("Hello", true); // Output: "HELLO"
formatString("Hello", false); // Output: "hello"
