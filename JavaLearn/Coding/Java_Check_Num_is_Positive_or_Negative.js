/*******************************Java Program to Check Whether a Number is Positive or Negative******************************/

Example: Check if a Number is Positive or Negative using if else
public class PositiveNegative {

    public static void main(String[] args) {
        double number = 12;

        // true if number is less than 0
        if (number < 0)
            System.out.println(number + " is a negative number.");

        // true if number is greater than 0
        else if ( number > 0)
            System.out.println(number + " is a positive number.");

        // if both test expression is evaluated to false
        else
            System.out.println(number + " is 0.");
    }
}
//Output : 12 is a positive number.

//Output : -12.3 is a negative number.
