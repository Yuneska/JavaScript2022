
function clearHouse (isJobDone){
    setTimeout (handler: ()=>
    {
        if (isJobDone) {
            money=500;
        }else{
            document.write('No money, No honey')
        }
    } 2000)
};

clearHouse (isJobDone (true));

console.log(money)
