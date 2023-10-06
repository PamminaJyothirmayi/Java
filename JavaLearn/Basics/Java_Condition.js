//The if statement
public class Main {
  public static void main(String[] args) {
    if (20 > 18) {
      System.out.println("20 is greater than 18"); //20 is greater than 18
    }  
  }
}


//The else statement
public class Main {
  public static void main(String[] args) {
    int time = 20;
    if (time < 18) {
      System.out.println("Good day.");
    } else {
      System.out.println("Good evening.");
    }  
  }
}
//Good evening.




//The else if statement
public class Main {
  public static void main(String[] args) {
    int time = 22;
    if (time < 10) {
      System.out.println("Good morning.");
    } else if (time < 18) {
      System.out.println("Good day.");
    }  else {
      System.out.println("Good evening.");
    }
  }
}
//Good evening.




//java switch statement
public class Main {
  public static void main(String[] args) {
    int day = 4;
    switch (day) {
      case 1:
        System.out.println("Monday");
        break;
      case 2:
        System.out.println("Tuesday");
        break;
      case 3:
        System.out.println("Wednesday");
        break;
      case 4:
        System.out.println("Thursday");
        break;
      case 5:
        System.out.println("Friday");
        break;
      case 6:
        System.out.println("Saturday");
        break;
      case 7:
        System.out.println("Sunday");
        break;
    }
  }
}
//Thursday



//The switch statement with a default keyword
public class Main {
  public static void main(String[] args) {
    int day = 4;
    switch (day) {
      case 6:
        System.out.println("Today is Saturday");
        break;
      case 7:
        System.out.println("Today is Sunday");
        break;
      default:
        System.out.println("Looking forward to the Weekend");
    }    
  }
}
//Looking forward to the Weekend
