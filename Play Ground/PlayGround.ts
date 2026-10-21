

function coffee(size: 'small' | 'medium' | 'large' | number)
{
    if(size === 'small')
    {
        return 'small coffee for small people'
    }
    if(size === 'medium')
    {
        return 'medium coffee for average people'
    }
    if(size === 'large')
    {
        return 'large for tallest people'
    }
    if(typeof size === "number")
    {
        return `this will be the size ${size}` 
    }
}

const val = coffee(8)
console.log(val)