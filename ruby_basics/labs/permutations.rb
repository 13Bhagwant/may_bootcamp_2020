puts "please give me a letter"
first = gets.chomp

puts "please give me another letter"
second = gets.chomp

puts "please give me one last letter"
third = gets.chomp

array = [first, second, third]
output = array.repeated_permutation(3).to_a
for each in output
    print each.join + "\n"
end

# Stretch

puts "Please enter two letters"
string1 = gets.chomp
string2= gets.chomp
# if there is no repitition the permutations will be factorial 3
# if there is a repitition the permutations will be 3^3
for i in string1..string2
    for j in string1..string2
        for k in string1..string2
            puts "#{i} #{j} #{k}"
        end
    end
end   