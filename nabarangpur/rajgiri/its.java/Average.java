import java.util.Scanner;

public class Average {
    public static float calculateAvg(int a, int b, int c) {
        return (a + b + c) / 3.0f; // Use 3.0f for float division
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter three numbers: ");
        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();

        float avg = calculateAvg(a, b, c);
        System.out.println("The average of the three numbers is: " + avg);
        
       // sc.close(); // Close the scanner
    }
}
