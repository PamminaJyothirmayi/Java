//Create a simple "Hello World" Program

public class Main {
  public static void main(String[] args) {
    System.out.println("Hello World");  //Hello World
  }
}

//Java Comments
public class Main {
  public static void main(String[] args) {
    // This is single line comment before a line of code
    System.out.println("Hello World");
  }
}


public class Main {
  public static void main(String[] args) {
    System.out.println("Hello World");  // This is single line comment at the end of a line of code
  }
}


public class Main {
  public static void main(String[] args) {
    /* The code below will print the words Hello World
    to the screen, and it is amazing */
    System.out.println("Hello World");
  }
}


//Java How To Add Two Numbers
public class Main {
  public static void main(String[] args) {
    int x = 5;
    int y = 6;
    int sum = x + y;
    System.out.println(sum); //11
  }
}




//Add Two Numbers with User Input

import java.util.Scanner; // Import the Scanner class
class MyClass {
  public static void main(String[] args) {
    int x, y, sum;
    Scanner myObj = new Scanner(System.in); // Create a Scanner object
    System.out.println("Type a number:");
    x = myObj.nextInt(); // Read user input

    System.out.println("Type another number:");
    y = myObj.nextInt(); // Read user input

    sum = x + y;  // Calculate the sum of x + y
    System.out.println("Sum is: " + sum); // Print the sum
  }
} 


Type a number: 11

Type another number:22

Sum is: 33






//Java How To Count Words 
//Count Number of Words in a String : We can easily count the number of words in a string 

public class Main {
  public static void main(String[] args) {
    String words = "One Two Three Four";
    int countWords = words.split("\\s").length;   or  int countWords = words.split(" ").length;  
    System.out.println(countWords);			//4
  }
}






//Java How To Reverse a String
//We can easily reverse a string by characters

public class Main {
  public static void main(String[] args) {
    String originalStr = "Hello";
    String reversedStr = "";
    System.out.println("Original string: " + originalStr);
        
    for (int i = 0; i < originalStr.length(); i++) {
      reversedStr = originalStr.charAt(i) + reversedStr;
    }
    
    System.out.println("Reversed string: "+ reversedStr);
  }
}


Original string: Hello
Reversed string: olleH





//Java How To Calculate the Sum of Elements
//Calculate the Sum of an Array: Get the sum of array elements


public class Main {
  public static void main(String[] args) {
    int[] myArray = {1, 5, 10, 25};
    int sum = 0;
    int i; 
      
    // Loop through array elements and get the sum
    for (i = 0; i < myArray.length; i++) {
      sum += myArray[i];
    }
    System.out.println("The sum is: " + sum);	
  }
}


//The sum is: 41








//Java How To Get the Area of a Rectangle
//Area of Rectangle : The area of a rectangle can be found by multiplying the length of the rectangle by the width

public class Main {
  public static void main(String[] args) {
    int length = 5;  
    int width = 2;  
    int area = length * width;  
    System.out.println("Area of rectangle: " + area);  
  }
}

//Area of rectangle: 10





//Java How To Find Even or Odd Numbers
//Check Whether a Number is Even or Odd
//Find out if a number is even or odd:


public class Main {
  public static void main(String[] args) {
    int number = 5;
    
    if (number % 2 == 0) {
      System.out.println(number + " is even.");
    } else {
      System.out.println(number + " is odd.");
    }
  }
}

//5 is odd.




//Java break stament

public class Main {
  public static void main(String[] args) {
    for (int i = 0; i < 10; i++) {
      if (i == 4) {
        break;
      }
      System.out.println(i);
    }  
  }
}

/*
0
1
2
3
*/






/*********Prime Number Program in Java********/

//Prime number is a number that is greater than 1 and divided by 1 or itself only.
//In other words, prime numbers can't be divided by other numbers than itself or 1.
//For example 2, 3, 5, 7, 11, 13, 17.... are the prime numbers.


public class PrimeExample{    
 public static void main(String args[]){    
  int m=0, flag=0;      
  int n=3;//it is the number to be checked         
  if(n==0||n==1){  
   System.out.println(n+" is not prime number");      
  }else{  
   for(int i=2;i<=n/2;i++){      
    if(n%i==0){      
     System.out.println(n+" is not prime number");      
     flag=1;      
     break;      
    }      
   }      
   if(flag==0)  { System.out.println(n+" is prime number"); }  
  }
}    

public static void main(String args[]){    
  checkPrime(1);  
  checkPrime(3);  
  checkPrime(17);  
  checkPrime(20);  
}    
} 
/*
Compile by: javac PrimeExample.java
Run by: java PrimeExample

1 is not prime number
3 is prime number
17 is prime number
20 is not prime number
*/

//(or)


Example 1: Program to Check Prime Number using a for loop
public class Main {
  public static void main(String[] args) {
    int num = 29;
    boolean flag = false;
    for (int i = 2; i <= num / 2; ++i) {
      // condition for nonprime number
      if (num % i == 0) {
        flag = true;
        break;
      }
    }

    if (!flag)
      System.out.println(num + " is a prime number.");
    else
      System.out.println(num + " is not a prime number.");
  }
}
//29 is a prime number.

//(or)


//Example 3: Program to Check Prime Number using a while loop
public class Main {
  public static void main(String[] args) {
    int num = 33, i = 2;
    boolean flag = false;
    while (i <= num / 2) {
      // condition for nonprime number
      if (num % i == 0) {
        flag = true;
        break;
      }
      ++i;
    }

    if (!flag)
      System.out.println(num + " is a prime number.");
    else
      System.out.println(num + " is not a prime number.");
  }
}

//33 is not a prime number.





//Example4: Prime Numbers Between Two Integers

public class Prime {
    public static void main(String[] args) {
        int start_val = 20, end_val = 50;
        while (start_val < end_val) {
            if(checkPrimeNumber(start_val))
                System.out.print(start_val + " ");
            ++start_val;
        }
    }
    public static boolean checkPrimeNumber(int num) {
        boolean flag = true;
        for(int i = 2; i <= num/2; ++i) {
            if(num % i == 0) {
                flag = false;
                break;
            }
        }
        return flag;
    }
}


//23 29 31 37 41 43 47 






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







/*****************Palindrome Program in Java*******************/
//A palindrome number is a number that is same after reverse.
//For example 545, 151, 34543, 343, 171, 48984 are the palindrome numbers.
//It can also be a string like LOL, MADAM etc.


/*
Palindrome number algorithm
-Get the number to check for palindrome
-Hold the number in temporary variable
-Reverse the number
-Compare the temporary number with reversed number
-If both numbers are same, print "palindrome number"
-Else print "not palindrome number"
*/

//Example1:
class PalindromeExample{  
 public static void main(String args[]){  
  int r,sum=0,temp;    
  int n=454;//It is the number variable to be checked for palindrome  
  
  temp=n;    
  while(n>0){    
   r=n%10;  //getting remainder  
   sum=(sum*10)+r;    
   n=n/10;    
  }    
  if(temp==sum)    
   System.out.println("palindrome number ");    
  else    
   System.out.println("not palindrome");    
}  
}  
//palindrome  number






//Example2:

import java.util.*;   
class PalindromeExample2  
{  
   public static void main(String args[])  
   {  
      String original, reverse = ""; // Objects of String class  
      Scanner in = new Scanner(System.in);   
      System.out.println("Enter a string/number to check if it is a palindrome");  
      original = in.nextLine();   
      int length = original.length();   
      for ( int i = length - 1; i >= 0; i-- )  
         reverse = reverse + original.charAt(i);  
      if (original.equals(reverse))  
         System.out.println("Entered string/number is a palindrome.");  
      else  
         System.out.println("Entered string/number isn't a palindrome.");   
   }  
}
