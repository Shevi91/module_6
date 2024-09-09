

// Задание 6.6.1

function checkPalindrome(word) {
  word = word.toLowerCase();
  const reversedWord = word.split('').reverse().join('');

  if (word === reversedWord) {
    console.log(`Слово ${word} является палиндромом.`);
  } else {
    console.log(`Слово ${word} не является палиндромом.`);
  }
}

// пример №1 
checkPalindrome("Довод");

// пример №2
checkPalindrome("Сантимент");










