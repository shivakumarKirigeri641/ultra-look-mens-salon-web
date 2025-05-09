const getTotalServicesAndRespectiveAmountForComboServices=(serviceItems, combolist)=>{        
    const distinctlist=new Set();
    serviceItems.forEach(x => {
        distinctlist.add(x);
    });
    let servicescount=0;
    let totalamount=0;
    for(const item of distinctlist){
        const eachPrice = combolist.find(x=>x._id.toString() === item.toString()).price;        
        const length = serviceItems.filter(x => x.toString() === item.toString()).length
        const totalprice = eachPrice*length;
        servicescount = servicescount + length;
        totalamount = totalamount + totalprice;
    }    
    return {services:servicescount,amount:Math.round(totalamount)};
};
export default getTotalServicesAndRespectiveAmountForComboServices;