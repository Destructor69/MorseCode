# MorseCode
This is a project that converts normal words into morse code, and can turn morse code into normal words.

Limitations -
The only limits with this is that you can not convert numbers or symbols. Only letters work. If one wished to add the ability to convert numbers or symbols, you would need to add the numbers and then the morse code complement into into the arrays in the functions and place them in equal indexes. So at the moment there is 27 possible characters to change, if you wanted to add anything else, simply add them to the end of the arrays

How it works -
If we are converting letters into morse code, the function that would do that would go through the string entered then check if any of the letters in the lettes array is in the string and if it is, then it replaces the string letter with the corresponding morse code letter based on indexes.
