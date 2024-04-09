//the time complexity of the function is O(m * n * k)
// n - number of characters in the text array
// m - number of strings in the subtext array
// k - be the average length of strings in the subtext array

function searchText(text, subtext) {
    let subtextPresentsCount = 0;

    if (Array.isArray(text)) {
        text = text.join('');
    }


    text = text.toUpperCase();

    for (let k = 0; k < subtext.length; k++) {
        const pattern = subtext[k].toUpperCase();
        const patternLength = pattern.length;

        for (let i = 0; i <= text.length - patternLength; i++) {
            let matchingCount = 0;

            for (let j = 0; j < patternLength; j++) {
                if (text[i + j] === pattern[j]) {
                    matchingCount++;
                } else {
                    break;
                }
            }

            if (matchingCount > (patternLength * 0.6)) {
                subtextPresentsCount++;
            }
        }
    }

    return subtextPresentsCount;
}



module.exports = {
    searchText: searchText
};



