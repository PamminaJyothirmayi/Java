//1.Create and call a method
public class Main {
  static void myMethod() {
    System.out.println("I just got executed!");
  }

  public static void main(String[] args) {
    myMethod();
  }
}
//I just got executed!




//2.Call a method multiple times
public class Main {
  static void myMethod() {
    System.out.println("I just got executed!");
  }

  public static void main(String[] args) {
    myMethod();
    myMethod();
    myMethod();
  }
}
//I just got executed!
//I just got executed!
//I just got executed!



//3.Method with parameter
public class Main {
  static void myMethod(String fname) {
      System.out.println(" Hello " +fname );
  }

  public static void main(String[] args) {
    myMethod("Liam");
    myMethod("Jenny");
    myMethod("Anja");
  }
}
//  Hello Liam
//  Hello Jenny
//  Hello Anja





//4.Method with multiple parameters
public class Main {
  static void myMethod(String fname, int age) {
    System.out.println(fname + " is " + age);
  }

  public static void main(String[] args) {
    myMethod("Liam", 5);
    myMethod("Jenny", 8);
    myMethod("Anja", 31);
  }
}

// Liam is 5
// Jenny is 8
// Anja is 31




//5.Using Return value
public class Main {
  static int myMethod(int x) {
    return 5 + x;
  }

  public static void main(String[] args) {
    System.out.println(myMethod(3));        //8
  }
}


//6.A method with if...else
public class Main {

  // Create a checkAge() method with an integer parameter called age
  static void checkAge(int age) {

    // If age is less than 18, print "access denied"
    if (age < 18) {
      System.out.println("Access denied - You are not old enough!"); 
      
    // If age is greater than, or equal to, 18, print "access granted"
    } else {
      System.out.println("Access granted - You are old enough!"); 
    }    
  } 

  public static void main(String[] args) { 
    checkAge(20); // Call the checkAge method and pass along an age of 20
  } 
}



//7.Method overloading
public class Main {
  static int plusMethod(int x, int y) {
    return x + y;
  }
  
  static double plusMethod(double x, double y) {
    return x + y;
  }
  
  public static void main(String[] args) {
    int myNum1 = plusMethod(8, 5);
    double myNum2 = plusMethod(4.3, 6.26);
    System.out.println("int: " + myNum1);
    System.out.println("double: " + myNum2);
  }
}

// int: 13
// double: 10.559999999999999




//8.Recursion
public class Main {
  public static void main(String[] args) {
    int result = sum(10);
    System.out.println(result);        //55
  }
  public static int sum(int k) {
    if (k > 0) {
      return k + sum(k - 1);
    } else {
      return 0;
    }
  }
}



//Recursive function with a halting condition

public class Main {
  public static void main(String[] args) {
    int result = sum(5, 10);
    System.out.println(result);          //45
  }
  public static int sum(int start, int end) {
    if (end > start) {
      return end + sum(start, end - 1);
    } else {
      return end;
    }
  }
}
