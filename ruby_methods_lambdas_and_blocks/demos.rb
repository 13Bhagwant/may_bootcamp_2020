# Ruby Methods Lambdas and Blocks

# Define a method with the 'def' keyword
# Methods that return a boolean generally their name end with
# '?' (convention, not enforced by the language)

def by_five? num
    # Returning is implicit. The last expression 
    # in a method's bod will always be returned unless
    # you explicitly call return above 
    num % 5 == 0
end

# To call a method, you can use or not use brackets
by_five? (5) # => true 
by_five? 6 # => false

# by_five? # => ArgumentError wrong number of arguments (given 0, expected 1)


# Demo: what is it 
def what_is_it (thing)
    if [String, Array, Integer].include? (thing.class)
        thing.class.to_s 
    else 
        "Something Else"
    end
end

what_is_it "hello"
what_is_it 1 
what_is_it [1, 2, 3]
what_is_it 1.2

# Using return 
def my_method a, b 
    return a * b 
    # As in JavaScript, the lines following 
    # return are ignored
    a + b 
end

my_method 10, 20 # => 200
my_method 11, 21 # => 231

# Optional/default arguments 
def multiply (a = 1, b)
    a * b 
end

multiply(2) # => 2
multiply(2, 3) # => 6

# Variadic Methods
# A method that can take any number of arguments

def my_args (first, *args, last)
    # Use the splat (i.e. *) in front of an 
    # argument to take in any number of args
    # into an array (like gather in JS i.e. ...).
    # Unline gather, it can be placed at the beginning,
    # the middle or the end of a list of args
    puts ("first: #{first}")
    puts ("args: #{args}")
    puts ("last: #{last}")
end

# my_args("my first arg", 1, 2, "middle", 4, 5, "my last arg", 10)

# product method
def product(first, *nums) 
    result = first 
    puts "first: #{first}"
    puts "nums: #{nums}"
    nums.each { |num| result *= num }
    result 
end

# puts product(1, 2, 4, 5, 6, 7)

def product2(*nums)
    # reduce can take an optional argument for the 
    # initial value. if not given, it will take
    # the first element in the list as the initial value
    nums.reduce(1) do |acc, num|
        # In reduce, on the first iteration
        # acc is the initial value,
        # 1 in this case
        acc * num 
        # In the following iterations, acc
        # will be the result of the previous 
        # iteration
    end
end

product2(1, 2, 3, 4, 5, 6) # => 720

# Spat (*) can also be used to spread an array
# of elements into arguments to a method call

arr = [1, 2, 3, 4, 5, 6]
product2(*arr) # => 720

def find_min (*nums) 
    nums.reduce do |acc, currentValue|
        if acc > currentValue
           currentValue 
        else 
            acc 
        end
    end
end

find_min(20, 40, 12, 17, 1, 25)

# Blocks

# All method can take a block as an argument and
# only one block at a time

def my_method2 
    puts "We are in the method"
    yield 
end

# my_method2 { puts "The block is called" }

def my_method3 x 
    puts "Before Block"
    # To execute a block that's been passed to a 
    # method, use the 'yield' keyword. This is 
    # like calling the block. 
    # yield will return the last expression from the 
    # block
    yield_return = yield 
    puts "Yielded block returned: #{yield_return}"
    puts "After Block"
end

# my_method3(5) { "The Block" }

# Yield can be used multiple times

def print_twice 
    yield 
    yield 
end 

# print_twice { puts "Hello" }

# if you try to yield without a block you will
# get a no block given error 

# print_twice # LocalJumpError: no block given (yield)

# You can check if a block has been passed with
# the block_given? method 

def do_something_with_block 
    return "no block given" unless block_given? 
    yield
end

do_something_with_block
# "no block given"

do_something_with_block { "Hello World" }
# "Hello World"


# Exercise: Implementing each 
def each (arr) 
    # arr = [1, 2, 3, 4]
    # val will be 1 in the first iteration
    # val will be 2 in the second iteration and so on... 
    for val in arr 
        # we are calling block ({ |x| x * 15 })
        result = yield(val) 
        puts "result: #{result}"
    end
end

# each([1, 2, 3, 4]) { |x| x * 15 }

# Exercise: Implementing map 
def map(arr)
    output = []
    for val in arr 
        output << yield(val) 
    end 
    puts "output: #{output}"
    output 
end

# map([1, 2, 3, 4]) { |x| x * 15 }
# [15, 30, 45, 60]

# Creating Lambdas 

# Lambda is a ruby name for an anonymous method 
# Write it like so: 

add_seven = lambda { |n| n + 7 }
power_2 = -> (n) { n ** 2}

# calling lambdas 
# p add_seven.call(10)
# p power_2.call(7)

# If you pass down a wrong number of arguments to a 
# lambda, it raise an exception, just like a regular method
# wrong number of arguments

# Using lambdas as blocks
# You can pass a lambda as a method argument
# prefixed with & to call it as a block (i.e. using yield)
# This doesn't work with regular methods only procs and lambdas

# map([1, 2, 3, 4, 5], &power_2)
# map([1, 2, 3, 4, 5], &add_seven)

# Procs
# There is no dedicated lambda class. A lambda is
# just a special kind of proc

my_proc = Proc.new { |x| puts x}

# Differences between procs and lambdas
# a = Proc.new { |x, y| puts "I don't care about the arguments" }
# a.call(4)
# as you se we are passing down one argument to our proc above
# but, the procs doesn't care about arguments wether you pass down 
# the same number of arguments required or not an that's one of the 
# differences between procs and lambdas

# Procs and lambdas also handle return differently.
# A lambda will return normally, like a regular method
# Procs on the other hand, return from the method enclosing the proc.

def test_procs_and_lamdas 
    yield 
    puts "Hello"
end

l = lambda do 
    puts "Lambda"
    return 
end 

p = Proc.new do 
    puts "Proc"
    return 
end 

# test_procs_and_lamdas(&l)
# Lambda
# Hello

# test_procs_and_lamdas(&p)
# Proc

# Named Arguments 
# In ruby methods can take named arguments
# they must be given a default value

def add(first: 0, second: 1) 
    # The argument first has a default value of 0 
    # second has a default value of 1
    first + second 
end

# p add() # => 1
# puts add(0, 3) # => ArgumentError wrong number of arguments

# To use named arguments, you must refer to them by name 
p add(first: 10) # => 11
p add(first: 10, second: 20) # => 30
p add(second: 20) # => 20

# add(first: 10, second: 20, third: 30) 
# unknown keyword: third (ArgumentError)

# Other ruby tidbits
# ternary operator

x = 4 
x > 10 ? "Big number" : "Little number"

# equivalent to:
if x > 10 
    "Big number"
else 
    "Little number"
end

# or equals 
y = 11 
y ||= 5
z ||= 5

y # => 11
z # => 5

# case statement

puts "Hi, please enter a language: "
language = gets.chomp 

case language 
when "English"
    puts "Hello"
when "French"
    puts "Bonjour"
when "Spanish"
    puts "Hola"
when "Italian"
    puts "Ciao"
else  
    puts "I don't know how to say hello to you in #{language}, sorry"
end