// arrow function = ( () => {} )
    // map will return something(new arr) 
    var arr = [1,2,3,4,5,6]
    var count = 0;

    // forEach
    arr.forEach( () => {count++} )
    console.log(count);

    // map = it will return new arr 
    var doubled = arr.map( (n) => {return n*n} )
    console.log(doubled);

    // reduce = it will also return value
    var sum = arr.reduce( (total,curr) => {return total + curr} )
    console.log(sum);
    
    // filter
    var cond = arr.filter( (n) => {return n>4} )
    console.log(cond);
    


    
    