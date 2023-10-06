//1.Java abstract classes and methods

abstract class Animal {        // Abstract class
  public abstract void animalSound();    // Abstract method (does not have a body)
 
  public void sleep() {     // Regular method
    System.out.println("Zzz");
  }
}

// Subclass (inherit from Animal)
class Pig extends Animal {
  public void animalSound() {
    // The body of animalSound() is provided here
    System.out.println("The pig says: wee wee");
  }
}

class Main {
  public static void main(String[] args) {
    Pig myPig = new Pig(); // Create a Pig object
    myPig.animalSound();
    myPig.sleep();
  }
}

/*
The pig says: wee wee
Zzz
*/













//2.Java interface(implements)
interface Animal {
  public void animalSound(); // interface method (does not have a body)
  public void sleep(); // interface method (does not have a body)
}

class Pig implements Animal {
  public void animalSound() {
    System.out.println("The pig says: wee wee");
  }
  public void sleep() {
    System.out.println("Zzz");
  }
}

class Main {
  public static void main(String[] args) {
    Pig myPig = new Pig();
    myPig.animalSound();
    myPig.sleep();
  }
}

/*
The pig says: wee wee
Zzz
*/









//  Multiple interfaces

interface FirstInterface {
  public void myMethod(); // interface method
}

interface SecondInterface {
  public void myOtherMethod(); // interface method
}

// DemoClass "implements" FirstInterface and SecondInterface
class DemoClass implements FirstInterface, SecondInterface {
  public void myMethod() {
    System.out.println("This is First interfaces method");
  }
  public void myOtherMethod() {
    System.out.println("This is Second interfaces method");
  }
}

class Main {
  public static void main(String[] args) {
    DemoClass myObj = new DemoClass();
    myObj.myMethod();
    myObj.myOtherMethod();
  }
}



//This is First interfaces method
// This is Second interfaces method
