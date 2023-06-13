import java.util.*;

public class LCM {

  private static long gcd(int a , int b){

    if(b == 0){
      return a;
    }

   int aprime = a % b ;

   return gcd(b,aprime);

  }
  private static long lcm_naive(int a, int b) {
   

    

return (a*b )/ gcd(a,b);



  }

  public static void main(String args[]) {
    Scanner scanner = new Scanner(System.in);
    System.out.println("enter 2 numbers to get lcm");
    int a = scanner.nextInt();
    int b = scanner.nextInt();
long x = lcm_naive(a, b);
    System.out.println("ima x"+x);
  }
}
