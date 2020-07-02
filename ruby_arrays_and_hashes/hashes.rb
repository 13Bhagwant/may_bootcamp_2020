# Ruby Hashes

# Hashes are dictionaries fo key value pairs. A lot like JavaScript Objects
# You define them using curly braces {}
# Keys and values are separated by a hash rocket "=>"
# each pair of key-values are separed by commas

me = {
    "name" => "Hindreen",
    "place" => "Vancouver",
    "Company" => "CodeCore"
}

# Accessing value form a hash
# We can select properties values using square bracket notation + key
# p me["name"] # "Hindreen"
# p me[name] # breaks 
# p me.name # breaks. Only methods use dot notation syntax in ruby

# Exercise 
movie_with_directors = {
    "The Matrix" => "The Watchowskis",
    "No Country for Old Men" => ["Ethan Coen", "Joel Coen"],
    "Forrest Gump" => "Robert Zemeckis",
    "Pulp Fiction" => "Quentin Tarantino"
}

# Exercise: find a method which will return all the keys of a hash in an array

# p movie_with_directors.keys
# "The Matrix", "No Country for Old Men", "Forrest Gump", "Pulp Fiction"]

# Exercise: find a method which will return all the values of a hash in an array
# p movie_with_directors.values
# ["The Watchowskis", ["Ethan Coen", "Joel Coen"], "Robert Zemeckis", "Quentin Tarantino"]

# Iterating through hashes using each, each_key, each_value
movie_with_directors.each do |key, val|
    # p "#{key} has the value of #{val}"
end

movie_with_directors.each_key do |key|
    # p key 
end

movie_with_directors.each_value do |val|
    # p val 
end


# More about hashes 
fig = {
    "type" => "fruit",
    "seed_count" => 356,
    "sugar" => 19,
    0 => "this is the key of integer 0",
    "0" => "this is the key of string 0",
    :this_is_a_symbol => "value of this symbol",
    :type => "this is the value of symbol type",
    "colors" => ["black", "green", "red", "yellow"]
}

# p fig[0]
# p fig["0"]
# p fig[:this_is_a_symbol]
# p fig[:type]

# Exercise: Store three canadian provinces and their capitals in a hash 
# and loop through the hash to print them 
provinces = {
    :BC => "Victoria",
    :Alberta => "Edmonton",
    :Ontario => "Ottawa"
}

# provinces.each { |province, capital| p "#{province}'s capital is #{capital}'" }

# Building hashes with symbls as keys after the new syntax sugar was added. 
fig_with_symbols = {
    # :kind => "fruid",
    kind: "fruit", # this is the syntax sugar for the above line
    seed_count: 356,
    sugar: 19,
    "0": "this is the key of integer 0",
    this_is_a_symbol: "value of this symbol",
    type: "this is the value of symbol type",
    colors: ["black", "green", "red", "yellow"]
}

# Even though symbols are immutable but that doesn't mean their assigned values can not 
# be changed, so you can overwrite a value of a key even if the key is of type symbol

fig_with_symbols[:kind] = "not a fruit"
p fig_with_symbols[:kind] # "not a fruit"

# Symbols
# Another Class/Object in Ruby, they are very similar to strings.
# The only difference is that Sybmbols are immutable 

# .object_id will return the location of where an object in memory 
# evertime you create a new string: a new string is added to a place in memory

p "Strings"
p "Hi there".object_id
p "Hi there".object_id
p "Hi there".object_id
p "Hi there".object_id
p "Hi there".object_id
p "Hi there".object_id
p "Hi there".object_id

# Once a symbol is created, it will sit in a special place in memory. every time 
# we call that symbol, it doesn't reserve another location in memory but reference 
# to the same location everytime
p "Symbols"
p :a_symbol.object_id
p :a_symbol.object_id
p :a_symbol.object_id
p :a_symbol.object_id
p :a_symbol.object_id
p :a_symbol.object_id