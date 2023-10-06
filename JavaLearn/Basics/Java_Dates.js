//1.Display  current date

import java.time.LocalDate;  // import the LocalDate class

public class Main {  
  public static void main(String[] args) {  
    LocalDate myObj = LocalDate.now();  // Create a date object
    System.out.println(myObj);  // Display the current date
  }  
}  
//2022-10-05












//2.Display current time
import java.time.LocalTime;  // import the LocalTime class

public class Main {  
  public static void main(String[] args) {  
    LocalTime myObj = LocalTime.now();
    System.out.println(myObj);
  }  
}  
//14:41:45.992652








//3.Display current date and time
import java.time.LocalDateTime;  // import the LocalDateTime class

public class Main {  
  public static void main(String[] args) {  
    LocalDateTime myObj = LocalDateTime.now();
    System.out.println(myObj);
  }  
}  

//2023-10-05T14:42:23.372441









//4.Formatting date and time
import java.time.LocalDateTime;  // Import the LocalDateTime class
import java.time.format.DateTimeFormatter;  // Import the DateTimeFormatter class

public class Main {
  public static void main(String[] args) {  
    LocalDateTime myDateObj = LocalDateTime.now();  
    System.out.println("Before formatting: " + myDateObj);  
    DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");  
    
    String formattedDate = myDateObj.format(myFormatObj);  
    System.out.println("After formatting: " + formattedDate);  
  }  
}  

/*
Before Formatting: 2023-10-05T14:43:27.784677
After Formatting: 05-10-2023 14:43:27
*/







//yyyy-MM-dd        "1988-09-29"
import java.time.LocalDateTime;  // Import the LocalDateTime class
import java.time.format.DateTimeFormatter;  // Import the DateTimeFormatter class

public class Main {
  public static void main(String[] args) {  
    LocalDateTime myDateObj = LocalDateTime.now();  
    System.out.println("Before formatting: " + myDateObj);  
    DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");  
    
    String formattedDate = myDateObj.format(myFormatObj);  
    System.out.println("After formatting: " + formattedDate);  
  }  
}  
/*
Before Formatting: 2023-10-05T14:47:38.935318
After Formatting: 05-10-2023 14:47:38
*/





//dd/MM/yyyy         "29/09/1988"
import java.time.LocalDateTime;  // Import the LocalDateTime class
import java.time.format.DateTimeFormatter;  // Import the DateTimeFormatter class

public class Main {
  public static void main(String[] args) {  
    LocalDateTime myDateObj = LocalDateTime.now();  
    System.out.println("Before Formatting: " + myDateObj);  
    DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");  
    
    String formattedDate = myDateObj.format(myFormatObj);  
    System.out.println("After Formatting: " + formattedDate);  
  }  
}  

/*
Before Formatting: 2023-10-05T14:48:20.138918
After Formatting: 05/10/2023 14:48:20
*/






//dd-MMM-yyyy        "29-Sep-1988"
import java.time.LocalDateTime;  // Import the LocalDateTime class
import java.time.format.DateTimeFormatter;  // Import the DateTimeFormatter class

public class Main {
  public static void main(String[] args) {  
    LocalDateTime myDateObj = LocalDateTime.now();  
    System.out.println("Before Formatting: " + myDateObj);  
    DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("dd-MMM-yyyy HH:mm:ss");  
    
    String formattedDate = myDateObj.format(myFormatObj);  
    System.out.println("After Formatting: " + formattedDate);  
  }  
}  

/*
Before Formatting: 2023-10-05T14:48:51.561944
After Formatting: 05-Oct-2023 14:48:51
*/





//E,   MMM dd yyy      "Thu, Sep 29 1988"
import java.time.LocalDateTime;  // Import the LocalDateTime class
import java.time.format.DateTimeFormatter;  // Import the DateTimeFormatter class

public class Main {
  public static void main(String[] args) {  
    LocalDateTime myDateObj = LocalDateTime.now();  
    System.out.println("Before Formatting: " + myDateObj);  
    DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("E, MMM dd yyyy HH:mm:ss");  
    
    String formattedDate = myDateObj.format(myFormatObj);  
    System.out.println("After Formatting: " + formattedDate);  
  }  
}  

/*
Before Formatting: 2023-10-05T14:49:23.425626
After Formatting: Thu, Oct 05 2023 14:49:23
*/
