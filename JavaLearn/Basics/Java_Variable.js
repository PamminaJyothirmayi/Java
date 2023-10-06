
//Java Variables

//Create a string variable
public class Main {
  public static void main(String[] args) {
    String name = "John";
    System.out.println(name);  //John
  }
}


//Create an integer variable
public class Main {
  public static void main(String[] args) {
    int myNum = 15;
    System.out.println(myNum);  //15
  }
}


//Create a variable without assiging the value, and assign the value later 
public class Main {
  public static void main(String[] args) {
    int myNum;
    myNum = 30;
    System.out.println(myNum);  //30
  }
}




//Changing variable or overwrite an existing variable value

public class Main {
  public static void main(String[] args) {
    int myNum = 15;
    myNum = 20;  // myNum is now 20
    System.out.println(myNum);    //20
  }
}





//Create a final variable that means unchangeable and read-only

public class Main {
  public static void main(String[] args) {
    final int myNum = 15;
    myNum = 20; // will generate an error
    System.out.println(myNum);
  }
}


/*Here result will be 
Main.java:4: error: cannot assign a value to final variable myNum
    myNum = 20;
         ^
1 error 
*/




//Combine text and a variable on display
public class Main {
  public static void main(String[] args) {
    String name = "Jyothirmayi";
    System.out.println("Hello " + name);      //Hello Jyothirmayi
  }
}



//Add a variable to another variable or combine two variable are called string concatenation.

public class Main {
  public static void main(String[] args) {
    String firstName = "Jyothirmayi ";
    String lastName = "Pammian";
    String fullName = firstName + lastName;
    System.out.println(fullName);          //Jyothirmayi Pammina
  }
}



//Declare many variables of the same type with a comma-seperated list
public class Main {
  public static void main(String[] args) {
    int x = 5, y = 6, z = 50;
    System.out.println(x + y + z);  //61
  }
}


