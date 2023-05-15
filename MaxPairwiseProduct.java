import java.util.*;
import java.io.*;

public class MaxPairwiseProduct {
    static long getMaxPairwiseProduct(long[] numbers) {
        
        int n = numbers.length;
        int firstLargestIndex = -1;
        int secondLargestIndex = -1;

    
        for (int i = 0; i < n; ++i){
            
if(firstLargestIndex == -1 ||  numbers[i] > numbers[firstLargestIndex]){
    secondLargestIndex = firstLargestIndex;
    firstLargestIndex = i ;

}else if(secondLargestIndex == -1 ||  numbers[i] >numbers[secondLargestIndex]){
    secondLargestIndex = i;
}

         
        }


        return numbers[firstLargestIndex] * numbers[secondLargestIndex];
    }

    public static void main(String[] args) {
        FastScanner scanner = new FastScanner(System.in);
        int n = Integer.parseInt(scanner.next());
        long[] numbers = new long[n];
        for (int i = 0; i < n; i++) {
            numbers[i] = scanner.nextInt();
        }
        System.out.println(getMaxPairwiseProduct(numbers));
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
