function century(CC){
    return ((CC/4) -2*CC-1);
}

function year(YY){
    return (5*YY/4);
}

function month (MM){
    return (26*(MM+1)/10);
}