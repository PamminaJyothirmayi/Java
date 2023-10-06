//A demonstration of different data types in java
public class Main {
  public static void main(String[] args) {
    int myNum = 5;               // integer (whole number)
    float myFloatNum = 5.99f;    // floating point number
    char myLetter = 'D';         // character
    boolean myBool = true;       // boolean
    String myText = "Hello";     // String    
    System.out.println(myNum);
    System.out.println(myFloatNum);
    System.out.println(myLetter);
    System.out.println(myBool);
    System.out.println(myText);
  }
}
/*
5
5.99
D
true
Hello
*/




//Create a byte type

public class Main {
  public static void main(String[] args) {
    byte myNum = 100;
    System.out.println(myNum);  //100
  }
}


//Create a short type
public class Main {
  public static void main(String[] args) {
    short myNum = 5000;
    System.out.println(myNum);      //5000
  }
}


//Create an int type
public class Main {
  public static void main(String[] args) {
    int myNum = 100000;
    System.out.println(myNum);    //100000
  }
}




//Create an long type
public class Main {
  public static void main(String[] args) {
    long myNum = 15000000000L;
    System.out.println(myNum);    //15000000000
  }
}





//Create an float type
public class Main {
  public static void main(String[] args) {
    float myNum = 5.75f;
    System.out.println(myNum);  //5.75
  }
}



//Create a double type
public class Main {
  public static void main(String[] args) {
    double myNum = 19.99d;
    System.out.println(myNum); //19.99 
  }
}



//Create a boolean type
public class Main {
  public static void main(String[] args) {
    boolean isJavaFun = true;
    boolean isFishTasty = false;    
    System.out.println(isJavaFun);    //true
    System.out.println(isFishTasty);  //false
  }
}



//Create a char type
public class Main {
  public static void main(String[] args) {
    char myGrade = 'B';
    System.out.println(myGrade);    //B
  }
}


//Create a String type
public class Main {
  public static void main(String[] args) {
    String greeting = "Hello World";
    System.out.println(greeting);    //Hello World
  }
}








//**************Java Type Casting**************
//Widening Casting

public class Main {
  public static void main(String[] args) {
    int myInt = 9;
    double myDouble = myInt; // Automatic casting: int to double

    System.out.println(myInt);
    System.out.println(myDouble);
  }
}

// 9
// 9.0




//Narrowing Casting

public class Main {
  public static void main(String[] args) {
    double myDouble = 9.78d;
    int myInt = (int) myDouble; // Explicit casting: double to int

    System.out.println(myDouble);
    System.out.println(myInt);
  }
}

// 9.78
// 9




