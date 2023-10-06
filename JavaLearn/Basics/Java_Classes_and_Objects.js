//1.Creates  a class and an object of a class
public class Main {
  int x = 5;

  public static void main(String[] args) {
    Main myObj = new Main();
    System.out.println(myObj.x);    //5
  }
}


//2.Create multiple objects of a class
public class Main {
  int x = 5;

  public static void main(String[] args) {
    Main myObj1 = new Main();
    Main myObj2 = new Main();
    System.out.println(myObj1.x);  
    System.out.println(myObj2.x);
  }
}

// 5
// 5



//3.Accessing class attributes(variable)
public class Main {
  int x = 5;

  public static void main(String[] args) {
    Main myObj = new Main();
    System.out.println(myObj.x);      //5
  }
}



//4.Modify attributes
public class Main {
  int x;

  public static void main(String[] args) {
    Main myObj = new Main();
    myObj.x = 40;
    System.out.println(myObj.x);      //40
  }
}


//5.Override existing attribute values
public class Main {
  int x;

  public static void main(String[] args) {
    Main myObj = new Main();
    myObj.x = 40;
    System.out.println(myObj.x);  //25
  }
}


//6.Multiple attributes
public class Main {
  String fname = "Jyothi";
  String lname = "Pammina";
  int age = 24;

  public static void main(String[] args) {
    Main myObj = new Main();
    System.out.println("Name: " + myObj.fname + " " + myObj.lname);
    System.out.println("Age: " + myObj.age);
  }
}

// Name: Jyothi Pammina
// Age: 24


//7.Creates a class method
public class Main {
  static void myMethod() {
    System.out.println("Hello World!");
  }

  public static void main(String[] args) {
    myMethod();                                    //Hello World!
  }
}




//8.Method with Parameters
public class Main {
  static void myMethod(int x) {
    System.out.println(x);                        //10
  }

  public static void main(String[] args) {
    myMethod(10);
  }
}


//9.Access class methods with an object

public class Main {    // Create a Main class
 
  public void fullThrottle() {    // Create a fullThrottle() method
    System.out.println("The car is going as fast as it can!");
  }

  public void speed(int maxSpeed) {   // Create a speed() method and add a parameter
    System.out.println("Max speed is: " + maxSpeed);
  }

  public static void main(String[] args) {      // Inside main, call the methods on the myCar object
    Main myCar = new Main();     // Create a myCar object
    myCar.fullThrottle();      // Call the fullThrottle() method
    myCar.speed(200);          // Call the speed() method
  }
}

//The car is going as fast as it can!
//Max speed is: 200






//10.Create a class constructor

// Create a Main class
public class Main {
  int x;

  // Create a class constructor for the Main class
  public Main() {
    x = 5;
  }

  public static void main(String[] args) {
    Main myObj = new Main();
    System.out.println(myObj.x);          //5
  }
}


//11.Constructor with parameters

//filename: Main.java
public class Main {
  int modelYear;
  String modelName;

  public Main(int year, String name) {
    modelYear = year;
    modelName = name;
  }

  public static void main(String[] args) {
    Main myCar = new Main(1969, "Mustang");
    System.out.println(myCar.modelYear + " " + myCar.modelName);
  }
}

//1969 Mustang
