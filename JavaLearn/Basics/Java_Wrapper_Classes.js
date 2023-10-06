//1.Create an ArrayList that should store integer numbers

import java.util.ArrayList;

public class Main { 
  public static void main(String[] args) { 
    ArrayList<Integer> myNumbers = new ArrayList<Integer>();
    myNumbers.add(10);
    myNumbers.add(15);
    myNumbers.add(20);
    myNumbers.add(25);
    for (int i : myNumbers) {
      System.out.println(i);
    }
  } 
}

/*
10
15
20
25
*/




//2.Create wrapper objects
public class Main { 
  public static void main(String[] args) { 
    Integer myInt = 5; 
    Double myDouble = 5.99; 
    Character myChar = 'A'; 
    System.out.println(myInt);
    System.out.println(myDouble);
    System.out.println(myChar);
  }
}

/*
5
5.99
A
*/



//Using wrapper methods
public class Main { 
  public static void main(String[] args) { 
    Integer myInt = 5; 
    Double myDouble = 5.99; 
    Character myChar = 'A'; 
    System.out.println(myInt.intValue());
    System.out.println(myDouble.doubleValue());
    System.out.println(myChar.charValue());
  }
}
/*
5
5.99
A
*/




//Convert wrapper objects to strings
public class Main { 
  public static void main(String[] args) { 
    Integer myInt = 100; 
    String myString = myInt.toString();
    System.out.println(myString.length());
  }
}
//3
