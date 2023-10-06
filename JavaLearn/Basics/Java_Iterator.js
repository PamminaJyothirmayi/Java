//1.Getting an iterator
import java.util.ArrayList;
import java.util.Iterator;

public class Main {
  public static void main(String[] args) {
  
    // Make a collection
    ArrayList<String> cars = new ArrayList<String>();
    cars.add("Volvo");
    cars.add("BMW");
    cars.add("Ford");
    cars.add("Mazda");
  
    // Get the iterator
    Iterator<String> it = cars.iterator();
  
    // Print the first item
    System.out.println(it.next());
  }
}


//Volvo








//2.Looping through a collection
import java.util.ArrayList;
import java.util.Iterator;

public class Main {
  public static void main(String[] args) {
  
    // Make a collection
    ArrayList<String> cars = new ArrayList<String>();
    cars.add("Volvo");
    cars.add("BMW");
    cars.add("Ford");
    cars.add("Mazda");
  
    // Get the iterator
    Iterator<String> it = cars.iterator();
    
    // Loop through a collection
    while(it.hasNext()) {
      System.out.println(it.next());
    }
  }
}

/*
Volvo
BMW
Ford
Mazda
*/


//Removing items from a collection
import java.util.ArrayList;
import java.util.Iterator;

public class Main {
  public static void main(String[] args) {
    ArrayList<Integer> numbers = new ArrayList<Integer>();
    numbers.add(12);
    numbers.add(8);
    numbers.add(2);
    numbers.add(23);
    Iterator<Integer> it = numbers.iterator();
    while(it.hasNext()) {
      Integer i = it.next();
      if(i < 10) {
        it.remove();
      }
    }
    System.out.println(numbers);
  }
}

//[12,23]
