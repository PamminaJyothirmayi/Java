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

