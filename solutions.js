function formatString(input, toUpper) {
    if (toUpper === void 0) { toUpper = true; }
    return toUpper ? input.toUpperCase() : input.toLowerCase();
}
function filterByRating(items) {
    return items.filter(function (item) { return item.rating >= 4; });
}
function concatenateArrays() {
    var arrays = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrays[_i] = arguments[_i];
    }
    var result = arrays.reduce(function (a, b) { return a.concat(b); }, []);
    console.log(result);
    return result;
}
concatenateArrays(["a", "b"], ["c"]);
concatenateArrays([1, 2], [3, 4], [5]);
concatenateArrays([1, 2], [3, 4, 6, 8], [5]); 

