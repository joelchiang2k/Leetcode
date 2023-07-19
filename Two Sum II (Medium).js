var twoSum = function(numbers, target) {
    let left = 0
    let right = numbers.length - 1

    while(left < right){
        let sum = numbers[left] + numbers[right]
        if(target == sum){
            return [left + 1, right + 1]
        }
        else if(sum > target){ //since its sorted, if sum is greater than target, move right pointer to decrease value
            right--
        }
        else{     //else increase left pointer
            left++
        }
    }
};
