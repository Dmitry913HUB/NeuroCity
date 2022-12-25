function circleSquare(radius){
    return Math.PI * Math.pow(radius, 2)
}
function triangleSquare(a, b, c){
    let p = (Number(a)+Number(b)+Number(c))/2;
    return Math.sqrt(p*(p-a)*(p-b)*(p-c))
}
module.exports = {
    circleSquare,
    triangleSquare,
}
