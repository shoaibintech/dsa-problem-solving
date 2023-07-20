import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.Scanner;



public class FractionalKnapsack {


    static class Pair {
    double a;
    double b;
    Pair(double a, double b) {
        this.a = a;
        this.b = b;
    }
}


private static Object[] SortByUnitValue (double[] a, double[] b ){

    
Pair[] p = new Pair[a.length];
for (int i = 0; i < p.length; i++)
    p[i] = new Pair(a[i], b[i]);

Arrays.sort(p, (p1, p2) -> Double.compare(p1.a/p1.b, p2.a/p2.b));

for (int i = 0; i < p.length; i++) {
    
    a[i] = p[p.length - i -1].a;
    b[i] = p[p.length - i -1 ].b;
}
return new Object[]{a,b};
  

}

    private static double getMaximumLoot(int capacity, double[] values, double[] weights) {

   
   
  for (int i = 0; i < weights.length; i++) {
    
   // System.out.println(values[i]);
   // System.out.println(weights[i]);
  }


  double remainingCapacity = capacity; 

  double totalValue = 0; 

System.out.println(values.length);
  for (int i = 0; i < weights.length; i++) {

System.out.println(i);

    if(capacity == 0){
        return 0;
    }

    if(weights[i] <= remainingCapacity){

        totalValue = totalValue + weights[i] * (values[i]/ weights[i]);
        
        remainingCapacity = remainingCapacity - weights[i];

   

    }else if(remainingCapacity > 0 &&  weights[i] - remainingCapacity > 0){
        totalValue = totalValue +  remainingCapacity * (values[i]/weights[i]);

        remainingCapacity = remainingCapacity - remainingCapacity;
    }


  }

return totalValue;
    }


    public static void main(String args[]) {
        Scanner scanner = new Scanner(System.in);
      
        double[] values = {30,28,24};
        double[] weights = {5,4,3};
        // for (int i = 0; i < n; i++) {
        //     values[i] = scanner.nextInt();
        //     weights[i] = scanner.nextInt();
        // }

Object[] obj =  SortByUnitValue(values, weights);

 values = (double []) obj[0];
 weights = (double []) obj[1];
 System.out.println( getMaximumLoot(9, values, weights));
 




    }
} 
