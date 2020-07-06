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