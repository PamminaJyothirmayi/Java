/***************Java Program to Display Factors of a Number***************/

//Example 1: Factors of a Positive Integer
public class Main {
  public static void main(String[] args) {
    // positive number
    int number = 60;
    System.out.print("Factors of " + number + " are: ");

    // loop runs from 1 to 60
    for (int i = 1; i <= number; ++i) {
      if (number % i == 0) {     // if number is divided by i and i is the factor
        System.out.print(i + " ");
      }
    }
  }
}
//Output : Factors of 60 are: 1 2 3 4 5 6 10 12 15 20 30 60





//Example 2: Factors of Negative Number
class Main {
  public static void main(String[] args) {
    // negative number
    int number = -60;
    System.out.print("Factors of " + number + " are: ");

    // run loop from -60 to 60  i.e  The Math.abs() method returns the absolute value of the number.
    for(int i = number; i <= Math.abs(number); ++i) {
      if(i == 0) {   // skips the iteration for i = 0
        continue;
      }
      else {
        if (number % i == 0) {
          System.out.print(i + " ");
        }
      }
    }
  }
}

//output: Factors of -60 are: -60 -30 -20 -15 -12 -10 -6 -5 -4 -3 -2 -1 1 2 3 4 5 6 10 12 15 20 30 60  
