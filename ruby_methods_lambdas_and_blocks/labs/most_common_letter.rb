def most_common_letter(string)
    hash = {}
    string  = string.delete(" ")
    string.each_char do |letter|
        if hash[letter] == nil
            hash[letter] = 1
        else 
            hash[letter] += 1
        end  
    end
    max = string[0]
    hash.each_key do |key|
        if hash[key] > hash[max]
            max = key
        end
    end
    puts max
end

most_common_letter("aaaabbc") # => "a"
most_common_letter("T a d c g d g d d n") # => "d"
most_common_letter("1111 monkeys on the wall") # => "1"