x = 1
while x <= 60
    if x % 2 > 0 
        puts x 
    end 
    x += 1 
end

# Solution 2 
puts ">>>>>>>><<<<<<<<<<"
x = 1 
while x <= 60 
    puts x if x.odd? 
    # break if x == 33 # break terminates the script
    x += 1
end