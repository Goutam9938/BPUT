import java.util.*;

class Array {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the size of the array: ");
        int size = sc.nextInt();
        
        int num[] = new int[size];
        System.out.println("Enter the elements you want to insert:");
        for (int i = 0; i < size; i++) {
            num[i] = sc.nextInt();
        }
        
        System.out.println("The array elements are:");
        for (int i = 0; i < size; i++) {
            System.out.println(num[i]);
        }
        
        sc.close(); // Close the scanner to avoid resource leaks
    }
}
