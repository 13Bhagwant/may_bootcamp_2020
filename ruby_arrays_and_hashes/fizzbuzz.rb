# Write a program that adds the numbers 1 to 100 to an array.
# If the number is a multiple of 3, it should add "FIZZ" instead,
# If the number is a multiple of 5, it should add "BUZZ" instead,
# If the number is a multiple of both, it should add "FIZZBUZZ" instead.

fizzbuzz = []

for num in 1..100 
    string = ''
    string << "FIZZ" if num % 3 == 0 # if the current num is divisible by 3 we push num into our string
    string << "BUZZ" if num % 5 == 0
    string << num.to_s if string.length <= 0 # if nothing was push into 'string' then we push the current number into the string 
    fizzbuzz << string # in the end of each iteration we add string to our 'fizzbuzz' array
end

p fizzbuzz