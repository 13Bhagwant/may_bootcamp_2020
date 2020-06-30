print "Enter the year of your car: "

year = gets.to_i

if year > 2020
    puts "Future"
elsif year > 2015
    puts "New"
elsif year > 2000
    puts "Old"
else 
    puts "Very Old"
end