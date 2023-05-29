
import java.util.*;
import java.io.*;
import java.math.BigInteger;

public class FibonacciLastDigit {
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
        Scanner scanner = new Scanner(System.in);
       
        System.out.println("Last digit of nth fibbonci number");
     System.out.println("enter number hjk to get ");
     int n = scanner.nextInt();
           System.out.println(getLastDigitOfFibbonaciNumber(n));
     
    }

    
   
}

