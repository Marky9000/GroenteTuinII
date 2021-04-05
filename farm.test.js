const {getYieldForPlant, 
        getYieldForCrop, 
        getTotalYield, 
        getCostsForCrop,
        getRevenueForCrop,
        getProfitForCrop,
        getTotalProfit,
        getYieldWithEnvironmentFactor,
        getYieldWithTwoFactors,
      
} = require("./farm");

describe("getYieldwithTwoFactors",() => {
    test("get profit for crop with two environmentfactors",()=>{ 
    
    const corn = {
      name: "corn",
      yield: 32,
      factors: {
          wind:{
              strong: -10,
              medium: 0,
              weak:10,
            },
          sun: {
              low: -50,
              medium: 0,
              high: 50,
            },
        },
    };
    
    const environmentFactors = {
      sun: "high",
      wind: "strong",
    };
    expect(getYieldWithTwoFactors(corn, environmentFactors)).toBe(44.8);
 
  })
  })



describe("getProfitWithEnvironmentFactor",() => {
  test("get profit for crop with environmentfactors",()=>{ 
  
  const corn = {
    name: "corn",
    yield: 32,
    factors: {
      sun: {
        low: -50,
        medium: 0,
        high: 50,
      },

    },
  };
  
  const environmentFactors = {
    sun: "medium",

  };
  expect(getYieldWithEnvironmentFactor(corn, environmentFactors)).toBe(32);

})
})

describe("getTotalProfit", () => {
    test("Calculate total profit with multiple crops", () => {
        const potato = {
            name: "potato",
            yield: 10,
            salePrice: 3,
            
        };
        const tomato = {
            name: "tomato",
            yield: 4,
            salePrice: 10,

        };
        const crops = [
            { crop: potato, numCrops: 1000 },
            { crop: tomato, numCrops: 10 },

        ];
        expect(getTotalProfit({ crops })).toBe(390+29000);
    });
});


describe("getProfitForCrop", () => {
    const crop ={
        name: "potato",
        numCrops: 1000,
        yield:5500,
        saleprice: 2
    };

    test("Get profit for crop", () =>{
        expect(getProfitForCrop(crop)).toBe(10000);
    })

});

describe("getRevenueForCrop", () =>{
    const crop ={
        name: "corn",
        numCrops: 2,
        yield: 11,
        saleprice: 4
    };

    test("Get revenue for crop", () =>{
        expect(getRevenueForCrop(crop)).toBe(44);
    })
})
    // getTotalYield 
describe("getCostsForCrop", ()=>{
    const crop = { 
        name: "corn", 
        numCrops: 5 
    };
   
    test("Get costs for Crops", ()=>{
        expect(getCostsForCrop(crop)).toBe(5);
    });
});


describe("getYieldForPlant", () => {

  const corn = {
        name: "corn",
        yield: 30,

    };

    test("Get yield for plant with no environment factors", () => {
        expect(getYieldForPlant(corn)).toBe(30);
    });
});

describe("getYieldForCrop", () => {
    test("Get yield for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCrop(input)).toBe(30);
    });
});

describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalYield({ crops })).toBe(23);
    });


});

    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        expect(getTotalYield({ crops })).toBe(0);
    });


