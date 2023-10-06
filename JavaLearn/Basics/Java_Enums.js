//1.Create an enum with a group of constants
enum Level {
  LOW,
  MEDIUM,
  HIGH
}

public class Main { 
  public static void main(String[] args) { 
    Level myVar = Level.MEDIUM; 
    System.out.println(myVar);             //MEDIUM
  } 
}




//2.An enum inside a public class
public class Main { 
  enum Level {
    LOW,
    MEDIUM,
    HIGH
  }

  public static void main(String[] args) { 
    Level myVar = Level.HIGH; 
    System.out.println(myVar);            //HIGH
  } 
}




//3.An enum in a switch statement
enum Level {
  LOW,
  MEDIUM,
  HIGH
}

public class Main { 
  public static void main(String[] args) {
    Level myVar = Level.MEDIUM; 
                
    switch(myVar) {
      case LOW:
        System.out.println("Low level");
        break;
      case MEDIUM:
        System.out.println("Medium level");
        break;
      case HIGH:
        System.out.println("High level");
        break;
    }
  }
}
//Medium level









//3.Loop through an enum
enum Level {
  LOW,
  MEDIUM,
  HIGH
}

public class Main { 
  public static void main(String[] args) { 
    for (Level myVar : Level.values()) {
      System.out.println(myVar);
    }
  } 
}
/*
LOW
MEDIUM
HIGH
*/
