var heigh = [2,1,5,0,3,4,7,2,3,1,0];

	var leftMax = 0;
	var rightMax = 0;
	var left = 0;
	var right = heigh.length - 1;
	var volume = 0;
		
		while(left < right) {
			if(heigh[left] > leftMax) {
				leftMax = heigh[left];
			}
			if(heigh[right] > rightMax) {
				rightMax = heigh[right];
			}
			if(leftMax >= rightMax) {
				volume += rightMax - heigh[right];
				right--;
			} else {
				volume += leftMax - heigh[left];
				left++;
			}
		}
    console.log(volume)
