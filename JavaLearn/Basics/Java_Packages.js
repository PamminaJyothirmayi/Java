//1.Import a class from the Java API

import java.util.Scanner; // import the Scanner class 

class Main {
  public static void main(String[] args) {
    Scanner myObj = new Scanner(System.in);
    String userName;
    
    // Enter username and press Enter
    System.out.println("Enter username:"); 
    userName = myObj.nextLine();       
    System.out.println("Username is: " + userName);        
  }
}
// ----------------
// Enter username: Balaji
// Username is: Balaji




//2.Import a pakage from the Java API
import java.util.*; // import the java.util package 
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
//--------------
// Enter username
// siva
// Username is: siva




//3.Create a package
package mypack;

class MyPackageClass { 
  public static void main(String[] args) { 
    System.out.println("This is my package!"); 
  } 
}
//This is my package!
