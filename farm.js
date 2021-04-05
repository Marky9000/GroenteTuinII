
const getYieldWithTwoFactors = function (corn, environmentFactors){

  const {sun : sunFactor} = environmentFactors;
  const {wind : windFactor} = environmentFactors;
  const {sun: sunFactors} = corn.factors;
  const {wind: windFactors} = corn.factors;
  
  let toCalculateSunFactor = '' ;
  
    if(sunFactor === Object.keys(sunFactors)[0]){
               toCalculateSunFactor = Object.values(sunFactors)[0]
              }
    if(sunFactor === Object.keys(sunFactors)[1]){
               toCalculateSunFactor = Object.values(sunFactors)[1]
              }
    if(sunFactor === Object.keys(sunFactors)[2]){
              toCalculateSunFactor = Object.values(sunFactors)[2]
              }
  
              let toCalculateWindFactor = '' ;
  
              if(windFactor === Object.keys(windFactors)[0]){
                         toCalculateWindFactor = Object.values(windFactors)[0]
                        }
              if(windFactor === Object.keys(windFactors)[1]){
                         toCalculateWindFactor = Object.values(windFactors)[1]
                        }
              if(windFactor === Object.keys(windFactors)[2]){
                        toCalculateWindFactor = Object.values(windFactors)[2]
                        }


const thisYield = corn.yield
const totalYieldwithTwoFactors = thisYield + (thisYield*toCalculateSunFactor/100) +(thisYield*toCalculateWindFactor/100) 

return totalYieldwithTwoFactors
// console.log(windFactor)

// return 29
}

 
const getYieldWithEnvironmentFactor = function (corn, environmentFactors){

  const {sun : newFactor} = environmentFactors;
  const  {sun: sunFactors} = corn.factors;

  let toCalculateFactor = '' ;

    if(newFactor === Object.keys(sunFactors)[0]){
             toCalculateFactor = Object.values(sunFactors)[0]
        }
    if(newFactor === Object.keys(sunFactors)[1]){
             toCalculateFactor = Object.values(sunFactors)[1]
        }
    if(newFactor === Object.keys(sunFactors)[2]){
             toCalculateFactor = Object.values(sunFactors)[2]
            }

const thisYield = corn.yield
const totalYieldwithFactors = thisYield + (thisYield*toCalculateFactor/100) 

return totalYieldwithFactors

}


const getTotalProfit = function ({crops}) {
    const arrOfCrops = crops.map (item => item.crop);
        const yieldPerCrop = arrOfCrops.map (item => item.yield); 
            const arrOfNumCrops = crops.map (item => item.numCrops);
                const totalSalePrice = crops.map(item => item.crop.salePrice)
//all revenue
                let totalRevenue = 0;
      for (i=0; i < yieldPerCrop.length; i++) {
      totalRevenue += (yieldPerCrop[i] *arrOfNumCrops[i]*totalSalePrice[i]);
};
//costs
    const totalCosts = arrOfNumCrops.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue
}, 0);

    return totalRevenue-totalCosts;
}

const getProfitForCrop = function (crop){
  let costs = getCostsForCrop(crop);
      let revenue = getRevenueForCrop(crop);
    
    return revenue - costs;
}

const  getRevenueForCrop = function (crop){
  const revenueForCrop = crop.saleprice * crop.yield ;

    return revenueForCrop;  
}

const getCostsForCrop = function (crop){
  const costsForCrop = crop.numCrops;
    
    return costsForCrop;
 }

const getYieldForPlant = function (currentCrop){
  const currentCropYield = currentCrop.yield;
  
    return currentCropYield
}

const getYieldForCrop = function (input){

  const yieldForCrop = input.crop.yield;
    const getTotalYieldForCrop = yieldForCrop*input.numCrops;

    return getTotalYieldForCrop; 
}

const getTotalYield = function ({crops}){

  let arrOfCrops = crops.map (item => item.crop);
      let yieldPerCrop = arrOfCrops.map (item => item.yield); 
          let arrOfNumCrops = crops.map (item => item.numCrops);

  let totalYield = 0;
    for (i=0; i < yieldPerCrop.length; i++) {
    totalYield += (yieldPerCrop[i] * arrOfNumCrops[i]);
    };

    return totalYield;
}


module.exports = { 
  getYieldForPlant, 
  getYieldForCrop, 
  getTotalYield,
  getCostsForCrop,
  getRevenueForCrop,
  getProfitForCrop,
  getTotalProfit,
  getYieldWithEnvironmentFactor,
  getYieldWithTwoFactors,
}
