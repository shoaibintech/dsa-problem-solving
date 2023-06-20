import java.util.*;

public class GCD {
public static int gcd(int a,int  b) {




    if (b == 0) {
        return a;
    }

    int aprime = a % b;

    return gcd(b, aprime);



}

  public static void main(String args[]) {
    Scanner scanner = new Scanner(System.in);
    int a = scanner.nextInt();
    int b = scanner.nextInt();

    System.out.println(gcd(a, b));
  }
}
