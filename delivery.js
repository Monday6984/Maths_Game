function isEligible(distance, membershipStatus) {
    if(distance < 1 || membershipStatus ==="active" && distance > 10 || membershipStatus === "inactive" && distance > 5){
            return false;
        } return true;
    } 
    console.log( isEligible(.5, "active") );
