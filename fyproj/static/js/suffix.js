document.addEventListener("DOMContentLoaded", function() {
    var largeNumberElements = document.getElementsByClassName("largeNumber");
    for (var i = 0; i < largeNumberElements.length; i++) {
        var number = parseInt(largeNumberElements[i].innerText);
        largeNumberElements[i].innerText = abbreviateNumber(number);
    }
});

function abbreviateNumber(number) {
    // Define thresholds for adding k, M, etc.
    var THRESHOLDS = [1000, 1000000, 1000000000, 1000000000000]; // and so on...

    // Define corresponding SI symbols
    var SI_SYMBOLS = ["", "K", "M", "B", "T"]; // and so on...

    // Iterate over thresholds to find appropriate abbreviation
    for (var i = THRESHOLDS.length - 1; i >= 0; i--) {
        if (Math.abs(number) >= THRESHOLDS[i]) {
            // Apply the abbreviation
            return (number / THRESHOLDS[i]).toFixed(1) + SI_SYMBOLS[i];
        }
    }

    // If the number is below the first threshold, no abbreviation is necessary
    return number;
}
