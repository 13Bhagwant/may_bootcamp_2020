p "Enter Some book Names"
books = []
while book_name = gets.chomp
  p book_name
  if book_name == 'exit'
    break
  else
    books << book_name.capitalize

  end
end
p books.sort