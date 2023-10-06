//Read user input
import java.util.Scanner; // import the Scanner class 

class Main {
  public static void main(String[] args) {
    Scanner myObj = new Scanner(System.in);
    String userName;
    
    // Enter username and press Enter
    System.out.println("Enter username"); 
    userName = myObj.nextLine();   
       
    System.out.println("Username is: " + userName);        
  }
}

/*
Enter username
hello

Username is: hello
*/




//Read user input of various types
import java.util.Scanner;

class Main {
  public static void main(String[] args) {
    Scanner myObj = new Scanner(System.in);

    System.out.println("Enter name, age and salary:");

    // String input
    String name = myObj.nextLine();

    // Numerical input
    int age = myObj.nextInt();
    double salary = myObj.nextDouble();

    // Output input by user
    System.out.println("Name: " + name); 
    System.out.println("Age: " + age); 
    System.out.println("Salary: " + salary); 
  }
}


/*
Enter name, age and salary:
raju
25
500000

Name: raju
Age: 25
Salary: 300000
*/
