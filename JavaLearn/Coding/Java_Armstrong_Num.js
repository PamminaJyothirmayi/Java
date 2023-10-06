
/******************Java Program to Check Armstrong Number**************/

//A positive integer is called an Armstrong number of order n.
//In case of an Armstrong number of 3 digits, the sum of cubes of each digits is equal to the number itself.
//For example: 153 = 1*1*1 + 5*5*5 + 3*3*3  // 153 is an Armstrong number.

//Example1:

public class Armstrong {
    public static void main(String[] args) {
        int number = 371, originalNumber, remainder, result = 0;
        originalNumber = number;
        while (originalNumber != 0)
        {
            remainder = originalNumber % 10;
            result += Math.pow(remainder, 3);
            originalNumber /= 10;
        }

        if(result == number)
            System.out.println(number + " is an Armstrong number.");
        else
            System.out.println(number + " is not an Armstrong number.");
    }
}
//Output:371 is an Armstrong number.










//Example 2: Check Armstrong number for n digits

public class Armstrong {
    public static void main(String[] args) {
        int number = 1634, originalNumber, remainder, result = 0, n = 0;
        originalNumber = number;
      
        for (;originalNumber != 0; originalNumber /= 10, ++n);
        originalNumber = number;
      
        for (;originalNumber != 0; originalNumber /= 10)
        {
            remainder = originalNumber % 10;
            result += Math.pow(remainder, n);
        }

        if(result == number)
            System.out.println(number + " is an Armstrong number.");
        else
            System.out.println(number + " is not an Armstrong number.");
    }
}


//1634 is an Armstrong number.



//Example3: Armstrong Numbers Between Two Integers
class Main {
  public static void main(String[] args) {
    int low = 999, high = 99999;
    for(int number = low + 1; number < high; ++number) {
      int digits = 0;
      int result = 0;
      int originalNumber = number;

      // number of digits calculation
      while (originalNumber != 0) {
        originalNumber /= 10;
        ++digits;
      }

      originalNumber = number;

      // result contains sum of nth power of its digits
      while (originalNumber != 0) {
        int remainder = originalNumber % 10;
        result += Math.pow(remainder, digits);
        originalNumber /= 10;
      }

      if (result == number) {
        System.out.print(number + " ");
      }
    }
  }
}

//Output : 1634 8208 9474 54748 92727 93084 





//Example4: Armstrong Numbers Between Two Integers

public class Armstrong {
    public static void main(String[] args) {
        int low = 999, high = 99999;
        for(int number = low + 1; number < high; ++number) {
            if (checkArmstrong(number))
                System.out.print(number + " ");
        }
    }

    public static boolean checkArmstrong(int num) {
        int digits = 0;
        int result = 0;
        int originalNumber = num;

        // number of digits calculation
        while (originalNumber != 0) {
            originalNumber /= 10;
            ++digits;
        }
        originalNumber = num;

        // result contains sum of nth power of its digits
        while (originalNumber != 0) {
            int remainder = originalNumber % 10;
            result += Math.pow(remainder, digits);
            originalNumber /= 10;
        }

        if (result == num)
            return true;
        return false;
    }
}
//Output: 1634 8208 9474 54748 92727 93084 






