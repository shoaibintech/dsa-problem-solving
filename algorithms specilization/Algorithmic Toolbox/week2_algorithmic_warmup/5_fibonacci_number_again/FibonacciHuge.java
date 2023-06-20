import java.util.*;

public class FibonacciHuge {
public static long fibonacciModulo(long n,long m){
	
	// Getting the period
	long pisanoPeriod = pisano(m);
	
	n = n % pisanoPeriod;
	
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
		curr = (prev + curr) % m;
		prev = temp;
	}
	return curr % m;
}

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

  
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        long n = scanner.nextLong();
        long m = scanner.nextLong();
        System.out.println(fibonacciModulo(n, m));
    }
}


// Java program to calculate
// Fibonacci no. modulo m using
// Pisano Period


// Calculate Fn mod m



