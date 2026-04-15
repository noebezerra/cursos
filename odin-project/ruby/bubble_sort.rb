def sort(array)
  array.each.with_index do |e, i|
    if i == array.length - 1
      break
    end
    if array[i] > array[i + 1]
      array[i], array[i + 1] = array[i + 1], array[i]
    end
  end
  return array
end

def bubble_sort(array)
  new_array = []
  while array.length > 1 do
    array = sort(array)
    new_array.insert(0, array[array.length - 1])
    array.pop
  end
  new_array.insert(0, array[0])
  p new_array
end


bubble_sort([4,3,78,2,0,2])
#=> [0,2,2,3,4,78]