function max(){
    const numb = Array.prototype.slice.call(arguments)//变为数组
    let max = 0
    numb.forEach(element => {
        if(element>max){
            max = element
        }
    });
    return max
}
console.log(max(12,32,53,64,143,1243,53))

