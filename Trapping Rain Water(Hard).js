var trap = function(height) {
    let leftMax = 0 
    let leftArr = [height.length]
    let water = 0

    for(let i = 0; i < height.length; i++){   //create arr of the max element on the left of the current index
        if(height[i] > leftMax){
            leftMax = height[i]
        }
        leftArr[i] = leftMax
    }

    let rightMax = 0
    let rightArr = [height.length]

    for(let i = height.length - 1; i >= 0; i--){ //create arr of the max element on the right of the current index
        if(height[i] > rightMax){
            rightMax = height[i]
        }
        rightArr[i] = rightMax
    }
    //example input = [0,1,0,2,1,0,1,3,2,1,2,1]
    //leftArr = [0,0,1,1,2,2,2,2,3,3,3,3]
    //rightArr = [0,0,1,1,2,2,2,2,2,2,1,0]

    //algo at each index, water += min(l,r) - height[i]

    for(let i = 0; i < height.length; i++){
        water += Math.min(leftArr[i], rightArr[i]) - height[i]
    }

    return water
};
