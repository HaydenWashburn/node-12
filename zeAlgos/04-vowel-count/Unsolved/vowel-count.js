// Write code to return the the number of vowels in `str`

function vowelCount(str) {
let count = 0;
str.toLowerCase().split("").map((e) => {
    if (e == "a" || e == "e" || e == "i" || e == "o" || e == "u"){
        count++;
    }
});
return count;
}
