import { useSelector } from "react-redux";

const getCurrentDayServiceCounts =(todaysummary)=>{
    let sum=0;
    todaysummary?.forEach(x => {
        x.prices.forEach(element => {
            sum = sum + element.count
        });        
    });
    return sum;
};
export default getCurrentDayServiceCounts;