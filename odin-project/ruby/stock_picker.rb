def stock_picker(actions)
  ordens = Hash.new
  for i in 0..(actions.length - 1) do
    for j in i..(actions.length - 1) do
      profit = actions[j] - actions[i]
      ordens[profit] = [i, j]
    end 
  end
  max = ordens.keys.first
  ordens.each_key { |key| max = key if key > max }
  p ordens[max]
end

stock_picker([17,3,6,9,15,8,6,1,10])
 #=> [1,4]  # for a profit of $15 - $3 == $12
