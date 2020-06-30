# Ruby 

# To output to the terminal like 'console.log' use print:
# print("Hello, World \n")
# Print doesn't add a new line (i.e \n)

# puts("Goodbye World")
# puts does add a new line (i.e \n)
# p("Hello World")
# Prints a value how ruby sees it. Useful for debugging 
# Similar to 'console.dir'

# This is a comment

=begin
 This is a multile
 comment 
 in ruby   
=end

# Most people 
# will just 
# do this 

# print "Hello World \n" # inline comment work too

# V A R I A B L E S
# Creating variables doesn't requir a keyword

a = 1 

b = a * 10 

a1 = 12

# 1a = 12 # this will give an error

# Ruby convention for variable names is snake_case
first_name = "Hindreen"

# If you start a variable with a capital letter
# it is considered a constant.
# Constants in ruby can be changed but, ruby will give 
# you a warning. Convention is to use all caps 
# for naming constants

MAX_PASSWORD_ATTEMPTS = 4

# To know the type of an object/value, use the ".class" method
1.class # => Integer
3.14.class # => Float
"my_string".class # => String

# STRINGS 
"I'm a string"
'I\'m a string'

# You can use String Interpolation only with double 
# quotes. Strings definied with single quotes are
# considered literal strings

"#{1 + 10} is equal to #{9 + 2}"

name = "Hindreen"
# puts "Hello #{name}"

# Ask a user for their name then print their name Capitalized
# puts "What is your name?"
# name = gets.chomp
# puts name.capitalize

# you can also do:
# puts name.upcase
# puts name.downcase
# puts name.swapcase
# puts name.reverse

# Write a peace of code to prompt users for their 
# first and last name and then print full name

# puts "What is your first name?"
# first_name = gets.chomp 
# puts "What is your last name?"
# last_name = gets.chomp 
# puts "Your full name is #{first_name} #{last_name}"

# To remove duplicate neighbouring characters in 
# a string, we can use .squeeze

"helllllllo".squeeze # helo

# Numbers 
# Integers and Floats
1
20
200
123_234 # In ruby, '_' is ignored in numbers
1_200_345_333 # 1200345333
# converting between classes
1.to_f # => 1.0
2.5.to_i # 2

# Operations
1 + 1
1 - 1
1 / 1
1 * 1
1 % 1
1 ** 3 # 1 ^ 3 = 1 * 1 * 1

# Flow control 
if true 
    puts "When condition is true"
end

if false 
    puts "When condition is false"
else 
    puts "The default condition with else"
end

# In Ruby you can do single line conditional
# but write the if at the end of the line

puts "It is true" if true 
puts "It is false" if false 

temp = gets.to_i 
puts "It is cold" if temp <= 1

puts "It is cold" unless temp > 1 # print "It is cold" in all cases except when temp is greater than 1 
# equivalent 
unless temp > 1 
    puts "It is cold"
end

if 1 != 2 
    puts "not equal"
else 
    false 
end 

# All conditionals are expressions. This means that 
# if blocks return a value. this allows us to assign 
# if blocks to a variable or put it as the argument 
# to a method call

returned_value_from_if = if 1 != 2 
                            "not equal"
                        else 
                            "equal"
                        end
# equal

# Find a method to replace a pattern in a string
a = "foo,bar,baz"
b = a.gsub("foo", "boo") # or 
# b = a.sub("foo", "boo")
puts b

# Logical operators || , &&
# true || true = true
# true || false = true
# false || true = true
# false || false = false

# true && true = true
# true && false = false
# false && true = false
# false && false = false

# L O O P S

# while loop 

x = 1 
while x <= 100
    puts x 
    x += 1 # x++ won't work in ruby 
end

# Print numbers 50 to 1 using while loop
count = 50 
while count >= 1
    print "#{count}"
    count -= 1
end

Write a piece of code that asks a user for a number
and then prints "Hello World" the number of times 
entered using a while loop

number = gets.to_i
while number >= 1 
    puts "Hello World"
    number -= 1
end

# Looping with times
5.times { puts "codecore" }

# loop
x = 1
loop do
    puts x 
    x += 1 
    break if x == 10
end