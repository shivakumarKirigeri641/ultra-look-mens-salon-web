const getTotalServicesAndRespectiveAmountForStandardServices=(addremoveservices, servcieslist)=>{        
    const distinctlist=new Set();
    addremoveservices.serviceItems.forEach(x => {
        distinctlist.add(x);
    });
    let servicescount=0;
    let totalamount=0;
    for(const item of distinctlist){
        const eachPrice = servcieslist.find(x=>x._id.toString() === item.toString()).price;
        const length = addremoveservices.serviceItems.filter(x => x.toString() === item.toString()).length
        const totalprice = eachPrice*length;
        servicescount = servicescount + length;
        totalamount = totalamount + totalprice;
    }
    return {services:servicescount,amount:totalamount};
};
export default getTotalServicesAndRespectiveAmountForStandardServices;