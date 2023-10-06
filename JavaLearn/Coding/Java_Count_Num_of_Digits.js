/**********Java Program to Count Number of Digits in an Integer************/


//Example 1: Count Number of Digits in an Integer using while loop
public class Main {
  public static void main(String[] args) {
    int count = 0, num = 0003452;
    while (num != 0) {
      // num = num/10
      num /= 10;
      ++count;
    }
    System.out.println("Number of digits: " + count);
  }
}
//Output: Number of digits: 4





//Example 2: Count Number of Digits in an Integer using for loop
public class Main {
  public static void main(String[] args) {
    int count = 0, num = 123456;
    for (; num != 0; num /= 10, ++count) {
    }
    System.out.println("Number of digits: " + count);
  }
}
//Output : Number of digits: 6



