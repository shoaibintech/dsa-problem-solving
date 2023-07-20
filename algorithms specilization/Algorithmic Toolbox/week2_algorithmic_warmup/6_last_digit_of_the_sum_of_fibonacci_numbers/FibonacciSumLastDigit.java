import java.util.*;

public class FibonacciSumLastDigit {

    public static long pisano(long m){
	
long prev = 0; 
long current =1 ;
long result = 0 ;




for (int i = 0; i < m*m; i++) {
    
    long temp  = 0 ;
    temp = current;
    current = ( prev + current ) % m ;
    prev = temp;

    if(prev== 0 && current == 1 ){
        result = i+1;
    }
 
}

    return result;
}

    private static long getFibonacciHugeNaive(long n) {

        long p = 60;
        long num = n;
        n = (n+2) % p;

    	long prev = 0;
	long curr = 1;
	
	if (n == 0)
		return 0;
	else if (n == 1)
		return 1;
	
	for(int i = 0; i < n - 1; i++)
	{
		long temp = 0;
		temp = curr;
		curr = (prev + curr) % 10;
		prev = temp;
	}
	return (curr-1) % 10;
    }
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        long n = scanner.nextLong();
       
        System.out.println(getFibonacciHugeNaive(n));
    }
}


// Java program to calculate
// Fibonacci no. modulo m using
// Pisano Period


// Calculate Fn mod m



