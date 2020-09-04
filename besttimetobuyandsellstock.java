//Java Solution

class Solution {
    public int maxProfit(int[] prices) {
        int max = 0;
        int min = Integer.MAX_VALUE;
        
        for (int price : prices) {
            if (price < min) {
                min = price;
            } else if (max < price - min) {
                max = price - min;
            }
        }
        
        return max;
    }
}