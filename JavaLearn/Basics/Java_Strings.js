//Create a string
public class Main {
  public static void main(String[] args) {
    String greeting = "Hello";
    System.out.println(greeting);    //Hello
  }
}


//Quotes inside a string
public class Main {
  public static void main(String[] args) {
    String txt1 = "It's alright";
    String txt2 = "That's great";
    System.out.println(txt1);
    System.out.println(txt2);
  }
}
// It's alright
// That's great




//Find the length of a string
public class Main {
  public static void main(String[] args) {
    String txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    System.out.println("The length of the txt string is: " + txt.length());
  }
}
//The length of the txt string is: 26




//Using methods to convert strings to uppercase and lowercse
public class Main {
  public static void main(String[] args) {
    String txt = "Hello World";
    System.out.println(txt.toUpperCase());
    System.out.println(txt.toLowerCase());
  }
}

// HELLO WORLD
// hello world




//Finding a string in a string
public class Main {
  public static void main(String[] args) {
    String txt = "Please locate where 'locate' occurs!";
    System.out.println(txt.indexOf("locate"));            //7
  }
}




//String concatenation
public class Main {
  public static void main(String args[]) {
    String firstName = "Jyothi";
    String lastName = "Pammina";
    System.out.println(firstName + " " + lastName);      //Jyothi Pammina
  }
}


//If you add a number and a string, the result will be a string concatenation.
public class Main {
  public static void main(String[] args) {
    String x = "10";
    int y = 20;
    String z = x + y;
    System.out.println(z);        //1020
  }
}
