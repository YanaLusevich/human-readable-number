module.exports = function toReadable(number) {
    let arr = [
         "zero",
         "one",
         "two",
         "three",
         "four",
         "five",
         "six",
         "seven",
         "eight",
         "nine",
         "ten",
         "eleven",
         "twelve",
         "thirteen",
         "fourteen",
         "fifteen",
         "sixteen",
         "seventeen",
         "eighteen",
         "nineteen",
         "twenty",
         "thirty",
         "forty",
         "fifty",
         "sixty",
         "seventy",
         "eighty",
         "ninety",
         "one hundred",
         "two hundred",
         "three hundred",
         "four hundred",
         "five hundred",
         "six hundred",
         "seven hundred",
         "eight hundred",
         "nine hundred"
    ],
    s;
    if (number <= 20)
        s = arr[number];
    else if (number >=21 && number <= 99) {
        s = arr[18 + number / 10 | 0] + " " + (number % 10 ? "" + arr[number % 10] : "");
    } else {
      b = number % 100;
      x = (number / 10 | 0) % 10;
        if (b <= 19) {
            s = arr[27 + number / 100 | 0] + " " + (b ? "" + arr[b] : "");
        } else {
            s = arr[27 + number / 100 | 0] + " " + (x % 10 ? "" + arr[18 + b / 10 | 0] : "") + " " + (number % 10 ? "" + arr[number % 10] : "");
        }
    }
    return s.trim();
};
/* + arr[18 + b / 10 | 0] + " "  */
/* console.log(toReadable(908)); */
/* console.log(988 % 100); */