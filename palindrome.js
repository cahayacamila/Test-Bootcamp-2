function palindrome(c, i) {
    return( i = i || 0 ) < 0 || i >= c.length >> 1 || c[i] == c[c.length-1-i] && palindrome(c, ++i);
}


console.log(palindrome('radar'));
console.log(palindrome('malam'));
console.log(palindrome('kasur ini rusak'));
console.log(palindrome('ibu ratna antar ubi'));
console.log(palindrome('malas'));
console.log(palindrome('makan nasi goreng'));
console.log(palindrome('balonku ada lima'));