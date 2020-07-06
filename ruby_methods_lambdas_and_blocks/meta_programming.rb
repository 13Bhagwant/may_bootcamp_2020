# Meta Programming
# Programming techniques that perform operations
# on the running code itself

# define_method

# def one 
#     1
# end 

# def two 
#     2 
# end 

# def three 
#     3
# end

# puts one() # => 1
# puts two() # => 2
# puts three() # => 3
# .
# .
# .

numbers = {
    1 => "one",
    2 => "two",
    3 => "three",
    4 => "four"
    # .
    # .
    # .
}

numbers.each do |number, number_name|
    # when using the define_method, the
    # first argument, is the name of the method 
    # being defined. The body of the method is 
    # the block that is passed to defined_method
    define_method(number_name) do 
        number
    end
end

one() # => 1
two() # => 2
three() # => 3
four() # => 4

define_method('hello_world') do 
    puts "Hello World"
end

# Define method above will generate the following method
# def hello_world
#     puts "Hello World"
# end

# hello_world()

# eval
# The eval method takes a string as an argument
# and will attempt to evaluate as ruby code. 
# THIS METHOD IS VERY DANGEROUS. AVOID USING IT
# AT WORK OR WHEREVER POSSIBLE. 
eval("1 + 2 * 3") #=> 7
eval("two + three + four") # => 9
# Note: two, three, and four are referring to the methods
# we defined with define_method above.

my_array = ["hello", "hi", "hola"]

my_array.each do |greeting|
    define_method (greeting) do |name|
        "#{greeting} #{name}"
    end 
end

# The above code generates the following three methods 
# def hello (name)
#     "hello #{name}"
# end
# def hi (name)
#     "hi #{name}"
# end
# def hola (name)
#     "hola #{name}"
# end

code = "
puts hi('Hano')
puts hola('Hano')
"

eval(code)