import java.util.Scanner;

class Darray {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Prompt user for the size of the array
        System.out.println("Enter size of m and n:");
        int m = sc.nextInt(); // First read the size m
        int n = sc.nextInt(); // Then read the size n

        // Initialize the 2D array
        int num[][] = new int[m][n];

        // Prompt user for the elements to insert
        System.out.println("Enter the elements you want to insert:");
        for (int i = 0; i < m; i++) { // Use < instead of <=
            for (int j = 0; j < n; j++) { // Use < instead of <=
                num[i][j] = sc.nextInt(); // Correct the way to insert elements
            }
        }

        // Display the array
        System.out.println("enter tha numver u want to search:");
        int ch=sc.nextInt();
        for (int i = 0; i < m; i++) { // Use < instead of <=
            for (int j = 0; j < n; j++) { // Use < instead of <=
                if(num[i][j]==ch)
                System.out.println("Element found at location: ("+i+","+j+")");
            }
            System.out.println(); // Move to the next line after each row
        }

        sc.close(); // Close the scanner
    }
}
