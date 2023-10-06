//  ************Java Exceptions (Try...Catch) **************

//syntax
try {
  //  Block of code to try
}
catch(Exception e) {
  //  Block of code to handle errors
}




//1.The try...catch statement
public class Main {
  public static void main(String[] args) {
    try {
      int[] myNumbers = {1, 2, 3};
       System.out.println(myNumbers[2]);    
      System.out.println(myNumbers[10]);              
    } catch (Exception e) {
      System.out.println("Something went wrong.");
    }
  }
}

/*
3
Something went wrong.
*/







//2.The finally statement
public class Main {
  public static void main(String[] args) {
    try {
      int[] myNumbers = {1, 2, 3};
      System.out.println(myNumbers[10]);
    } catch (Exception e) {
      System.out.println("Something went wrong.");
    } finally {
      System.out.println("The 'try catch' is finished.");
    }
  }
}

/*
Something went wrong.
The 'try catch' is finished.
*/



//3.The throw statement
public class Main {
  static void checkAge(int age) { 
    if (age < 18) {
      throw new ArithmeticException("Access denied - You must be at least 18 years old."); 
    } else {
      System.out.println("Access granted - You are old enough!"); 
    }
 } 
 
 public static void main(String[] args) { 
   checkAge(15); 
 } 
}


/*
Exception in thread "main" java.lang.ArithmeticException: Access denied - You must be at least 18 years old.
        at Main.checkAge(Main.java:4)
        at Main.main(Main.java:12)
*/



/*
The throw statement allows you to create a custom error.

The throw statement is used together with an exception type. 
There are many exception types available in Java: ArithmeticException, 
FileNotFoundException, ArrayIndexOutOfBoundsException, SecurityException, etc:


*/
