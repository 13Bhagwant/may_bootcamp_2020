result = 0
while true 
    num = gets.chomp 
    break if num == "exit"
    result += num.to_f 
end

puts result