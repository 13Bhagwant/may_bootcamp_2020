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
