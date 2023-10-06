
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
