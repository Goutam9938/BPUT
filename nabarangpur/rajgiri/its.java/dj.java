import java.util.Scanner;

public class dj {
    public static int calculateSum(int n) {
        int sum = 0;
        
        for (int i = 1; i <= n; i++) {
            if (i % 2 != 0) {
                sum += i; // Add the odd number to the sum
            }
        }
        
        return sum;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter the number of terms n: ");
        int n = sc.nextInt();
        
        int sum = calculateSum(n);
        System.out.println("The sum of odd numbers from 1 to " + n + " is: " + sum);
        
        sc.close(); // Close the scanner
    }
}
