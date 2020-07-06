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
p by_five? (5) # => true 
p by_five? 6 # => false

# by_five? # => ArgumentError wrong number of arguments (given 0, expected 1)
