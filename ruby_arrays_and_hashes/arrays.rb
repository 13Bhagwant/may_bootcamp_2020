# We can declare arrays using square brackets []
# We can store any datatype that available in ruby in arrays
# all array elements are separated by commas (,)

a = [[1, 3, 4], true, "Hi there", :bye]

# :bye -> this is a "symbol" (another type of ruby). It's basically an immutable string

# To select an item within an array we use bracket notation and an index within those brackets

# p a[0] # [1, 3, 4]
# p a[1] # true

# puts a 
# p a

# puts a[0]
# p a[0]

# You can select relative to the end of an array using negative integers
# p a[-1] # returns :bye
# p a[-2] # returns "Hi there"

# Exercise: How to access "Hey" withing the following array

# b = [[1,2,3], true, "Hey", "Drew"]
# p b[2]
# p b[-2]

# Multi-dimensional Arrays (arrays within arrays):

# [1, 2, 3, 4, 5] # one dimension array

# [
#     [1, 2, 3], 
#     [4, 5, 6], 
#     [7, 8, 9]
# ]

# [
#     [0,0   0,1     0,2], 
#     [1,0   1,1     1,2], 
#     [2,0   2,1     2,2]
# ]

c = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# p c[1][1] # 5
# p c[2][2] # 9

# Adding Elements to an array
# .push(): appends whatever value we provide to the end of the array

d = [1, 2, 3]
d.push 4
# p d # [1, 2, 3, 4]

# Shovel Operator "<<": shovel operator means "append" this will add an item to the end of the array
d << 5
# p d # [1, 2, 3, 4, 5]

# .include?: method to check if an array contains a vlaue 
# every method which ends in a question mark "?" will return a boolean value
e = ["Hi", "It", "Is", "Sunny"]

# p e.include?("Hi") # true
# p e.include? "Hello" # false

# Exercise: find out the number of elements inside an array in two different ways

# p e.length 
# p e.size 
# p e.count

# Exercise: Find an array method to turn a multi-dimensional array into a one-dimensional array 

f = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; 
# [1, 2, 3, 4, 5, 6, 7, 8, 9]
# p f.flatten
# p f 

# The two method to turn a multi-dimensional array into a one-dimensional array are 'flatten' and 'flatten!'

# Most of ruby methods has two versions one ending with '!' mark
# and one has no '!' mark, the difference between the two, is
# that the one with '!' will mutate the original array and
# the one without '!' will not mutate the original array

f.flatten # this will not mutate 
f.flatten! # this will mutate the f array

# Exercise: Find an array method that will remove an element from the
#  start of an array

g = [1, 2, 3, 4, 5, 6, 7, 8, 9]
first_element = g.shift 
# p first_element
# p g 

# Exercise: Find a method which will turn a string into an array
s = "Hello CodeCore Students"
words = s.split ' '
# p words # => ["Hello", "CodeCore", "Students"]

# Exercise: find out how to convert an array of words into a single string sentence 

# p words.join ' ' # "Hello CodeCore Students"

# Swapping Array Elements

words = ["Hello", "CodeCore", "Students"]
swap_words = words[2], words[1], words[0]

# p swap_words

# Iterating through arrays 
h = [3, 7, 13, 19, 31]

h.each do |current_element|
    square_num = current_element * current_element
    # p square_num
end

# pragmatic way of passing a block, use it only when you have 
# a single line block
h.each { |current_element|
    square_num = current_element * current_element
    # p square_num
}

fav_animals = ['wolf', 'penguins', 'cat', 'dog', 'sloth']

# using for in to loop through the above array
for animal in fav_animals
    # puts animal
end

# Common method for looping over an array is the .each
fav_animals.each do |animal, index|
    # puts index # this will not return index, if we want to get indexes
    #  back, we need to use each_with_index method 
    # puts animal 
end

# if you needed to get back the index with .each you can use 
# .each_with_index
fav_animals.each_with_index do |animal, index| 
    # puts "[#{index}] #{animal}"
end

# .map
fav_animals.map.with_index do |animal, index|
    # puts index
    # puts animal 
end

# Exercise: Printing a multi-dimansional array
i = [[1, 7, 3], [4, 4, 6], [7, 2, 9]]

i.each do |inner_array|
    inner_array.each do |element|
        # p element * element
    end
end

# We can also flatten the above multi-dimensional array
# then loop through it
i.flatten.each do |element|
    # p element * element
end

# Write a scritp that asks for names and stores them in an array.
# When the user enters "exit", stop askingfor names then 
# print all names in the array capitalized. 
# Also try printing the names reveresed as well.

names = []

while name = gets.chomp 
    p name 
    if name == 'exit'
        break 
    else 
        names << name.capitalize
    end 
end 

p names 