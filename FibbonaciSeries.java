import java.util.*;
import java.io.*;

public class FibbonaciSeries {
    static long getFibbonaciNumber(int number) {

        int first = 0; 
     int second = 1; 
     int next ; 

     for(int i =1; i < number ; i++){

next = first +second; 

first = second;  
second = next;
System.out.println(next);
     }


return 0;
    }

    public static void main(String[] args) {
        FastScanner scanner = new FastScanner(System.in);
        int n = Integer.parseInt(scanner.next());
     
  System.out.println("enter number");
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
