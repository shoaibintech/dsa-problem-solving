import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Scanner;

public class Change {

    public static int changeProblem(int amount) {
      

        int[] notes = { 10, 5, 1};
        int reminder = amount;
        int i = 0;
       int noteQuantity = 0;

        while (reminder != 0) {
            if (reminder >= notes[i] && reminder % notes[i] >= 0) {
               
                noteQuantity = noteQuantity+  reminder / notes[i];
              
            }

            reminder = reminder % notes[i];
            i++;
        }

        return noteQuantity;
    }

    public static void main(String[] args) {

         Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();

        System.out.println(changeProblem(n));
    }
}
