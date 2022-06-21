class Solution {
    public boolean isPalindrome(int x) {
        String y = String.valueOf(x);
       
        int length = y.length();
        
        for(int i = 0; i < length; i++){
            if(y.charAt(i) != y.charAt(length - i - 1))
                return false;
        }
        return true;
    }
}