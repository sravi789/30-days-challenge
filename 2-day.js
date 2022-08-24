let challenge = '30 Days Of JavaScript'
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase()) 
console.log(challenge.toLowerCase()) 
console.log(challenge.substr(2,19)) 
console.log(challenge.substring(2,21)) 
console.log(challenge.includes('script')) 
console.log(challenge.split())     
console.log(challenge.split(' '))
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'

console.log(companies.split(','))  
console.log(challenge.replace('JavaScript', 'Python'))
console.log(challenge.charAt(15)) 
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))
let sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf('because'))
console.log(sentence.lastIndexOf('because'))
console.log(sentence.search('because'))
let string = '   30 Days Of JavaScript   '
console.log(string.trim()) 
let line = 'Hi this is Sravani'
console.log(line.startsWith('Hi')) 
console.log(line.endsWith('Sravani'))   
console.log(challenge.match('a'))
console.log(challenge.repeat(2))