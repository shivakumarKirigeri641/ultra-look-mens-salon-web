const getSummaryDetails=(currentDateSummary, standardservices, comboservices)=>{
let standardservicesummarydetails = [];
let comboservicesummarydetails = [];
    try{
        let mydistinctStdServicesIDs=new Set();                
        let mydistinctComoboServicesIDs=new Set();
        let temp = currentDateSummary?.
            map(x=>(x.serviceData?.
            filter(z=>z.isCombo === false).
            map(y=>y.jobID))); 
            temp.forEach(element => {
            element.forEach(x => {
                mydistinctStdServicesIDs.add(x);
            });
        });
        //combo        
        temp = currentDateSummary?.map(x=>(x.serviceData.filter(z=>z.isCombo === true).map(y=>y.jobID))); 
        temp.forEach(element => {
            element.forEach(x => {
                mydistinctComoboServicesIDs.add(x);
            });
        });

        //now filter from servicelists
        standardservices.forEach(element => {
            const tempresult = [...mydistinctStdServicesIDs].filter(x=>x.toString() === element._id.toString()).length;
            let count = 0;
            if(0< tempresult){                
                currentDateSummary.forEach(z => {
                    z.serviceData.forEach(subelement=>{
                        if(subelement.jobID.toString() === element._id.toString()){
                            count = count +1;
                        }
                    })
                });
            }
            standardservicesummarydetails.push({_id:element._id, jobName:element.serviceName, count:count, price:element.price});
        });

        //now filter from comboservicelists
        comboservices.forEach(element => {
            const tempresult = [...mydistinctComoboServicesIDs].filter(x=>x.toString() === element._id.toString()).length;
            let count = 0;
            if(0< tempresult){                
                currentDateSummary.forEach(z => {
                    z.serviceData.forEach(subelement=>{
                        if(subelement.jobID.toString() === element._id.toString()){
                            count = count +1;
                        }
                    })
                });
            }
            comboservicesummarydetails.push({_id:element._id, jobName:element.serviceName, count:count, price:element.price});
        });
    }
    catch(err){
        throw new Error(err);
    }
    return {standardservicesummarydetails, comboservicesummarydetails};
};
export default getSummaryDetails;