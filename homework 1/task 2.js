var height = [2,1,5,0,3,4,7,2,3,1,0];

	var leftMax = 0;
	var rightMax = 0;
	var left = 0;
	var right = height.length - 1;
	var volume = 0;
		
		while(left < right) {
			if(height[left] > leftMax) {
				leftMax = height[left];
			}
			if(height[right] > rightMax) {
				rightMax = height[right];
			}
			if(leftMax >= rightMax) {
				volume += rightMax - height[right];
				right--;
			} else {
				volume += leftMax - height[left];
				left++;
			}
		}
    console.log(volume)
