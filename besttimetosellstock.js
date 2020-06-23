//Objective is to maximize the profit gained from selling a stock. Stock prices
//are given in a 1-D array in chronological order.
//Note: You cannot sell a stock before you buy one.

let stocks = [7,1,5,3,6,4]


//O(n^2) brute force solution that iterates over the list twice over and
//continuously updates the maxprofit.

let maxprofit = 0

//Keep the nested iterator ahead of the first
for (let i = 0; i < stocks.length; i++) {
    for (let j = i + 1; j < stocks.length; j++) {
        if (stocks[j] - stocks[i] > maxprofit) {
            maxprofit = stocks[j] - stocks[i]
        }
    }
}

return maxprofit


//O(n) solution that does a one pass and continously updates the min price as well
//as the max difference gained from subtracting the price of the day from the min

let min = Infinity 
let max = 0

for (let i = 0; i < stocks.length; i++) {
    //Update the min
    if (stocks[i] < min) {
        min = stocks[i]
    //If the min cannot be updated, update the max
    } else if (stocks[i] - min > max) {
        max = stocks[i] - min
    }
}

return max
