def get_user_info 
    info = Hash.new
    puts "what is your firstname:"
    info["firstname"] = gets.chomp
    puts "what is your lastname:"
    info["lastname"] = gets.chomp
    puts "what is your city of birth:"
    info["city"] = gets.chomp
    puts "what is your age:"
    info["age"] = gets.chomp
    
    p info
end 

get_user_info

# solution 2
# def get_user_info
#     puts "Enter your first name"
#     f_name = gets.chomp
#     puts "Enter your last name"
#     l_name = gets.chomp
#     puts "Enter the city of birth" 
#     city = gets.chomp
#     puts "Enter the age " 
#     age = gets.chomp

#     person = {
#         "first_name" => f_name,
#         "last_name" => l_name,
#         "city" => city,
#         "age" => age
#     }
#     p person
# end

# get_user_info