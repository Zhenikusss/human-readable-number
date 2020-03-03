module.exports = function toReadable (number) {
    var oneArray = ['', 'one', 'two', 'three', 'four', 'five', 'six', 
    'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 
    'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    var twoArray = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    var stringNum = number.toString();

    if (number == 0) return 'zero';

    if (number < 20) return oneArray[number];

    if (stringNum.length == 2) {
        return (twoArray[stringNum[0]]+ ' ' + oneArray[stringNum[1]]).trim();
    }

    if (stringNum.length == 3) {
        if (stringNum[1] == '0' && stringNum[2] == '0') {
            return oneArray[stringNum[0]] + ' hundred';
        } else {
            return (oneArray[stringNum[0]] + ' hundred ' + toReadable(+(stringNum[1] + stringNum[2]))).trim();
        }
    }
} 
