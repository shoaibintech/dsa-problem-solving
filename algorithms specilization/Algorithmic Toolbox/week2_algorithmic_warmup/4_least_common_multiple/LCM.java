import java.util.*;

public class LCM {

  private static long gcd(long a , long b){

    if(b == 0){
      return a;
    }

   long aprime = a % b ;

   return gcd(b,aprime);

  }
  private static long lcm_naive(long a, long b) {
   long gcd = gcd(a, b);
return (a*b )/ gcd;



  }

  public static void main(String args[]) {
    Scanner scanner = new Scanner(System.in);
    long a = scanner.nextInt();
    long b = scanner.nextInt();
    System.out.println(lcm_naive(a, b));
  }
}
