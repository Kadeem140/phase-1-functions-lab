const hq = 42
function distanceFromHqInBlocks(location){
    let blocks = 0

    if (location < hq){
       blocks = hq - location 
    }
    else if(location == hq){
        return blocks
    }
    else{
        blocks = location - hq
    }
    return blocks
}

const destination = blocks

function distanceFromHqInFeet(start){
    let destination = 42
    let feet = 0 
    if(destination > start){
        feet = (destination - start)*264
    }
    else if(destination == start){
        return feet
    }
    else {
        feet = (start - destination)*264
    }
    return feet
}


function distanceTravelledInFeet(start, destination){
    let feet = 0
    if(destination > start){
        feet = (destination - start)*264
    }
    else if(destination == start){
        return feet
    }
    else {
        feet = (start - destination)*264
    }
    return feet
}

function calculatesFarePrice(start, destination){

    let feet = distanceTravelledInFeet(start, destination)

    if(feet <= 400){
        return 0
    }
    else if(feet > 400 && feet <= 2000){
        return (feet - 400) * 0.02
    }
    else if(feet > 2000 && feet < 2500){
        return 25
    }
    else if(feet > 2500){
        return 'cannot travel that far'
    }


}