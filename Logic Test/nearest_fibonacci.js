function nearestFibonacci(sum){    
    if (sum == 0) {
        console.log(0);
        return;
    }
 
    let first = 0, second = 1;    
    let third = first + second; 
    
    while (third <= sum) {        
        first = second;
        second = third;
        third = first + second;
    }
 
    let ans = (Math.abs(third - sum) >= Math.abs(second - sum)) ? second : third; 

    if( ans > sum){
        let c = ans - sum;
        console.log(c);
    }else if (ans < sum){
        let c = sum - ans;
        console.log(c);
    }else{
        console.log(0);
    }
}
 
    var array = [15, 1, 3];
    sum = array.reduce((a, b) => a + b, 0);
    nearestFibonacci(sum);

    