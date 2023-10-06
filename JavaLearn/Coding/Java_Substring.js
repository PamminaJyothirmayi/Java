/*******Java Program to Check if a string contains a substring*********/



//Example 1: Check if a string contains a substring using contains()

class Main {
  public static void main(String[] args) {
    // create a string
    String txt = "This is Programiz";
    String str1 = "Programiz";
    String str2 = "Programming";

    // check if name is present in txt
    // using contains()
    boolean result = txt.contains(str1);
    if(result) {
      System.out.println(str1 + " is present in the string.");
    }
    else {
      System.out.println(str1 + " is not present in the string.");
    }

    result = txt.contains(str2);
    if(result) {
      System.out.println(str2 + " is present in the string.");
    }
    else {
      System.out.println(str2 + " is not present in the string.");
    }
  }
}


/*
Output:

Programiz is present in the string.
Programming is not present in the string.
*/





/***************Java String substring()************/

//The Java substring() method extracts a part of the string (substring) and returns it.
//The syntax of the substring() method is:
//string.substring(int startIndex, int endIndex)

//Example 1:

class Main {
  public static void main(String[] args) {
    String str1 = "java is fun";

    // extract substring from index 0 to 3
    System.out.println(str1.substring(0, 4));    //java

  }
}




//Example 2:

class Main {
  public static void main(String[] args) {
    String str1 = "program";

    // 1st to the 7th  character
    System.out.println(str1.substring(0, 7));  // program

    // 1st to the 5th  character
    System.out.println(str1.substring(0, 5));  // progr


    // 4th to the 5th character
    System.out.println(str1.substring(3, 5));  // gr
  }
}
// Output: java
