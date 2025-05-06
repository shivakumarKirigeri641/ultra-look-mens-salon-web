const getCurrentDayServiceTotal =(todaysummary)=>{    
    let sum=0;
    todaysummary?.forEach(element => {
        element.prices.forEach(element => {
            sum = sum + element.price
        });        
    });
    return sum;
};
export default getCurrentDayServiceTotal;