function formatString(input, toUpper) {
    if (toUpper === void 0) { toUpper = true; }
    return toUpper ? input.toUpperCase() : input.toLowerCase();
}
function filterByRating(items) {
    var result = items.filter(function (item) { return item.rating >= 4; });
    console.log(result);
    return result;
}
var books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 4.2 },
    { title: "Book C", rating: 5.0 }
];
filterByRating(books);

