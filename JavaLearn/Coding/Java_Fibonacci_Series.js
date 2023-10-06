/*
Display Fibonacci Series
The Fibonacci series is a series where the next term is the sum of the previous two terms.
The first two terms of the Fibonacci sequence are 0 followed by 1.

Fibonacci Series: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
*/


//Example: Display Fibonacci Series Using for Loop

class Main {
  public static void main(String[] args) {
    int n = 10, firstTerm = 0, secondTerm = 1;
    System.out.println("Fibonacci Series till " + n + " terms:");

    for (int i = 1; i <= n; ++i) {
      System.out.print(firstTerm + ", ");

      // compute the next term
      int nextTerm = firstTerm + secondTerm;
      firstTerm = secondTerm;
      secondTerm = nextTerm;
    }
  }
}


/*
Output

Fibonacci Series till 10 terms:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34,

*/





//Example 2: Display Fibonacci series using while loop



class Main {
  public static void main(String[] args) {

    int i = 1, n = 10, firstTerm = 0, secondTerm = 1;
    System.out.println("Fibonacci Series till " + n + " terms:");

    while (i <= n) {
      System.out.print(firstTerm + ", ");

      int nextTerm = firstTerm + secondTerm;
      firstTerm = secondTerm;
      secondTerm = nextTerm;

      i++;
    }
  }
}

/*
Output

Fibonacci Series till 10 terms:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34,
*/






//Example 3: Display Fibonacci series up to a given number

class Fibonacci {
  public static void main(String[] args) {

    int n = 100, firstTerm = 0, secondTerm = 1;
        
    System.out.println("Fibonacci Series Upto " + n + ": ");
    
    while (firstTerm <= n) {
      System.out.print(firstTerm + ", ");

      int nextTerm = firstTerm + secondTerm;
      firstTerm = secondTerm;
      secondTerm = nextTerm;

    }
  }
}

/*
Output

Fibonacci Series Upto 100:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 
*/

