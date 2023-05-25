import java.util.*;
import java.io.*;

public class FibbonaciSeries {
    static long getFibbonaciNumber(int number) {

        long first = 0; 
     long second = 1; 
     long next =1 ; 

     for(int i =1; i < number ; i++){

next = first +second; 

first = second;  
second = next;
     }


return next;
    }

    public static void main(String[] args) {
        FastScanner scanner = new FastScanner(System.in);
       
     
  System.out.println("enter number");
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
