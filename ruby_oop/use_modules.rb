require_relative './modules.rb'

class Iphone < Computer::Apple 
end

i = Iphone.new 
p i.class # Iphone
p i.is_a? (Computer::Apple) # true 