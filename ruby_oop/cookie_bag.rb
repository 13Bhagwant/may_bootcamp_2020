class CookieBag 
    attr_reader :capacity

    def initialize(capacity = 10)
        @capacity = capacity 
        @cookies = []
    end

    def add(cookie)
        return puts("must be a cookie") unless cookie.is_a? Cookie 
        if @cookies.length >= @capacity 
            puts "No Room Left"
        else 
            @cookies.push(cookie)
        end

        # 'self' inside an instance method is the instance or the object.
        # Return it to chain other instance methods
        self
    end

    def take 
        if @cookies.length <= 0 
            puts "No cookies left"
        else 
            @cookies.pop 
        end 
    end


    def details 
        puts "This bag has #{@cookies.length} cookie(s)"
        puts "Here they are: "
        puts @cookies.map { |cookie| cookie.details }.join(", ")
    end
end