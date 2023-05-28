
import java.util.*;
import java.io.*;
import java.math.BigInteger;

public class GetLastDigitOfFibbonaciNumber  {
    static BigInteger getLastDigitOfFibbonaciNumber(int number) {

        BigInteger first = BigInteger.ZERO;
        BigInteger second = BigInteger.ONE;
        BigInteger next = BigInteger.ZERO;
        BigInteger ten = BigInteger.TEN;
     
     if(number == 0){
        return first;
     }else if (number ==1 ){
return second;
     } else{
        
     for(int i =2; i <= number ; ++i){

        next = first.add(second); 
        
        first = second;  
        second = next;
             }
     }
     



return next.mod(ten);
    }

    public static void main(String[] args) {
        FastScanner scanner = new FastScanner(System.in);
       
     System.out.println("Last digit of nth fibbonci number");
  System.out.println("enter number  to get ");
  int n = Integer.parseInt(scanner.next());
        System.out.println(getLastDigitOfFibbonaciNumber(n));
    }

    static class FastScanner {
        BufferedReader br;
        StringTokenizer st;

        FastScanner(InputStream stream) {
            try {
                br = new BufferedReader(new
                    InputStreamReader(stream));
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

        String next() {
            while (st == null || !st.hasMoreTokens()) {
                try {
                    st = new StringTokenizer(br.readLine());
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            return st.nextToken();
        }

        long nextInt() {
            return Long.parseLong(next());
        }
    }

}
