function For(i) {
    console.log(i)
    if (i <= 1) {
        return i;
    } 
    else {
        For(i - 1)
    }
}
For()
