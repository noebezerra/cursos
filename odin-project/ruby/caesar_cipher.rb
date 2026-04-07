def caesar_cipher(word, key)
  alphabetic_down = ('a'..'z').to_a
  alphabetic_upper = ('A'..'Z').to_a
  cipher_word = []
  word.split('').each do |w|
    if alphabetic_down.include?(w)
      index = alphabetic_down.index(w)
      new_index = (index + key) % 26
      cipher_word.push(alphabetic_down[new_index])
    elsif alphabetic_upper.include?(w)
      index = alphabetic_upper.index(w)
      new_index = (index + key) % 26
      cipher_word.push(alphabetic_upper[new_index])
    else
      cipher_word.push(w)
    end
  end
 	puts cipher_word.join()
end

caesar_cipher("What a string!", 5)
#=>"Bmfy f xywnsl!"
