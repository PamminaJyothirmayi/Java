//Public class
public class Main {
  public static void main(String[] args) {
    System.out.println("Hello World");          //Hello World
  }
}

//Default class
class MyClass {
  public static void main(String[] args) {
    System.out.println("Hello World");          //Hello World
  }
}

//Public attribute

//Person.java  -->create a first file
public class Person {
  public String fname = "Jyothi";
  public String lname = "Pammina";
  public String email = "jyothi@pammina.com";
  public int age = 24;
}

//MyClass.java   -->create a second file
class MyClass {
  public static void main(String[] args) {
    Person myObj = new Person(); 
    System.out.println("Name: " + myObj.fname + " " + myObj.lname);
    System.out.println("Email: " + myObj.email);
    System.out.println("Age: " + myObj.age);
  }
}

// Name: Jyothi Pammina
// Email: jyothi@pammina.com
// Age: 24






//Private attribute
public class Main {
  private String fname = "Jyothi";
  private String lname = "Pammina";
  private String email = "jyothi@pammina.com";
  private int age = 24;
  
  public static void main(String[] args) {
    Main myObj = new Main();
    System.out.println("Name: " + myObj.fname + " " + myObj.lname);
    System.out.println("Email: " + myObj.email);
    System.out.println("Age: " + myObj.age);
  }
}
// Name: Jyothi Pammina
// Email: jyothi@pammina.com
// Age: 24





//Default attribute
class Person {
  String fname = "Jyothi";
  String lname = "Pammina";
  String email = "jyothi@pammina.com";
  int age = 24;
  
  public static void main(String[] args) {
    Person myObj = new Person();
    System.out.println("Name: " + myObj.fname + " " + myObj.lname);
    System.out.println("Email: " + myObj.email);
    System.out.println("Age: " + myObj.age);
  }
}

// Name: Jyothi Pammina
// Email: jyothi@pammina.com
// Age: 24




//Protected attribute
class Person {
  protected String fname = "Jyothi";
  protected String lname = "Pammina";
  protected String email = "jyothi@pammina.com";
  protected int age = 24;
}

class Student extends Person {
  private int graduationYear = 2020;
  public static void main(String[] args) {
    Student myObj = new Student();
    System.out.println("Name: " + myObj.fname + " " + myObj.lname);
    System.out.println("Email: " + myObj.email);
    System.out.println("Age: " + myObj.age);
    System.out.println("Graduation Year: " + myObj.graduationYear);
  }
}

// Name: Jyothi Pammina
// Email: jyothi@pammina.com
// Age: 24
// Graduation Year: 2020





//Final class
final class MyClass {
  public static void main(String[] args) {
    System.out.println("Hello World");    //Hello World
  }
}




//Abstract class with abstract methods

//First create file name Person.java

// abstract class
abstract class Person {
  public String fname = "John";
  public String lname = "Doe";
  public String email = "john@doe.com";
  public int age = 24;
  public abstract void study(); // abstract method 
}

// Subclass (inherit from Person)
class Student extends Person {
  public int graduationYear = 2018;
  public void study() {
    System.out.println("Studying all day long");
  }
}


//second create a file MyClass.java 
class MyClass {
  public static void main(String[] args) {
    // create an object of the Student class (which inherits attributes and methods from Person)
    Student myObj = new Student(); 
    
    System.out.println("Name: " + myObj.fname + " " + myObj.lname);
    System.out.println("Email: " + myObj.email);
    System.out.println("Age: " + myObj.age);
    System.out.println("Graduation Year: " + myObj.graduationYear);
    myObj.study(); // call abstract method
  }
}



// Name: Jyothi Pammina
// Email: jyothi@pammina.com
// Age: 24
// Graduation Year: 2020
//Studying all day long
