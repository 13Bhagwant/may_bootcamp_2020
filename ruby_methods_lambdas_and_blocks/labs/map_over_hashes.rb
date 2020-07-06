def map_over_hash(hash)
    new_arr = []

    for key, value in hash 
        new_arr << yield(key, value)
    end
    puts "result:#{new_arr}"
    new_arr
end

map_over_hash({ name: "Cersei", profession: "Queen", mood: "bitter" }) { |key, value|
  "Her #{key.to_s} is #{value}"
}
# => ["Her name is Cersei", "Her profession is Queen", "Her mood is bitter"]

map_over_hash({ 2 => 5, 10 => 2, 5 => 6 }) { |key, value| key.to_s * value }
# => [ "22222", "1010", "555555" ]