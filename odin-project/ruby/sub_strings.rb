def substrings(string, subs_dictionary)
  result = Hash.new(0)
  string = string.downcase.split(' ')
  subs_dictionary.map do |sub|
    string.select { |s| result[sub] += 1 if s.match?(sub) }
  end
  puts result
end

dictionary = ["below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]
substrings("below", dictionary)
#=> { "below" => 1, "low" => 1 }

substrings("Howdy partner, sit down! How's it going?", dictionary)
#=> { "down" => 1, "go" => 1, "going" => 1, "how" => 2, "howdy" => 1, "it" => 2, "i" => 3, "own" => 1, "part" => 1, "partner" => 1, "sit" => 1 }
