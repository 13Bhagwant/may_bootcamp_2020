# number = gets.to_i
# count = 0
# while count < 10
#   j = 2
#   while j <= number
#     break if number%j == 0
#     j += 1
#   end
#   if j == number
#     puts number 
#     count += 1
#   end
#   number += 1
# end

puts "How many prime numbers do you want to print!"
choosen_number = gets.to_i
puts "___________________"
number = 2
count = 0
while true
    if number == 2 || number == 3 || number == 5 || number == 7
        puts number
        count += 1
    end
    if number % 2 != 0 && number % 3 !=0 && number % 5 != 0 && number % 7 != 0
        puts number
        count += 1
    end
    break if count == choosen_number
    number += 1
end 