import java.util.*;
import java.io.*;
import java.math.BigInteger;

public class FibbonaciSeries {
    static BigInteger getFibbonaciNumber(int number) {

        BigInteger first = BigInteger.ZERO;
        BigInteger second = BigInteger.ONE;
        BigInteger next = BigInteger.ZERO;
     
     if(number == 0){
        return first;
     }else if (number ==1 ){
return second;
     }
    

     for(int i =2; i <= number ; i++){

next = first.add(second) ; 

first = second;  
second = next;
     }


return next;
    }

    public static void main(String[] args) {
        FastScanner scanner = new FastScanner(System.in);
       
     
  int n = Integer.parseInt(scanner.next());
        System.out.println(getFibbonaciNumber(n));
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
