/*********************Java Program to Check Leap Year****************/

//A leap year is exactly divisible by 4 except for century years (years ending with 00). 
//The century year is a leap year only if it is perfectly divisible by 400.

public class Main {
  public static void main(String[] args) {
    int year = 1900;
    boolean leap = false;                      
    if (year % 4 == 0) {    // if the year is divided by 4
      if (year % 100 == 0) {    // if the year is century
        
        if (year % 400 == 0)   // if year is divided by 400 and  then it is a leap year
          leap = true;
        else
          leap = false;
      }
        
      // if the year is not century
      else
        leap = true;
    }
    
    else
      leap = false;

    if (leap)
      System.out.println(year + " is a leap year.");
    else
      System.out.println(year + " is not a leap year.");
  }
}

//Output : 1900 is not a leap year.



