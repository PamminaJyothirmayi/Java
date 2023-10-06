/*******Java Program to Check if a String is Empty or Null************/


//Example 1: Check if String is Empty or Null

class Main {
  public static void main(String[] args) {
    // create null, empty, and regular strings
    String str1 = null;
    String str2 = "";
    String str3 = "  ";

    // check if str1 is null or empty
    System.out.println("str1 is " + isNullEmpty(str1));

    // check if str2 is null or empty
    System.out.println("str2 is " + isNullEmpty(str2));

    // check if str3 is null or empty
    System.out.println("str3 is " + isNullEmpty(str3));
  }

  // method check if string is null or empty
  public static String isNullEmpty(String str) {

    // check if string is null
    if (str == null) {
      return "NULL";
    }

    // check if string is empty
    else if(str.isEmpty()){
      return "EMPTY";
    }

    else {
      return "neither NULL nor EMPTY";
    }
  }
}


/*
str1 is NULL
str2 is EMPTY
str3 is neither NULL nor EMPTY
*/





//Example 2: Check if String with spaces is Empty or Null


class Main {
  public static void main(String[] args) {
    
    // create a string with white spaces
    String str = "    ";

    // check if str1 is null or empty
    System.out.println("str is " + isNullEmpty(str));
  }

  // method check if string is null or empty
  public static String isNullEmpty(String str) {

    // check if string is null
    if (str == null) {
      return "NULL";
    }

    // check if string is empty
    else if (str.trim().isEmpty()){
      return "EMPTY";
    }

    else {
      return "neither NULL nor EMPTY";
    }
  }
}

/*
Output : str is EMPTY
*/

