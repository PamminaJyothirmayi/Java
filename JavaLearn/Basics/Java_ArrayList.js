//Create an ArrayList
import java.util.ArrayList;         // import the ArrayList class

public class Main { 
  public static void main(String[] args) { 
    ArrayList<String> cars = new ArrayList<String>();    // Create an ArrayList object
    System.out.println(cars);
    cars.add("Volvo");
    cars.add("BMW");
    cars.add("Ford");
    cars.add("Mazda");
    System.out.println(cars);
  } 
}

//[]
//[Volvo, BMW, Ford, Mazda]

/*
cars.add(56);
Main.java:11: error: incompatible types: int cannot be converted to String
    cars.add(56);
*/







//Access an item in an ArrayList
import java.util.ArrayList;

public class Main { 
  public static void main(String[] args) { 
    ArrayList<String> cars = new ArrayList<String>();
    cars.add("Volvo");
    cars.add("BMW");
    cars.add("Ford");
    cars.add("Mazda");
    System.out.println(cars.get(0));
  } 
}
//Volvo





//Remove an item from an ArrayList
import java.util.ArrayList;

public class Main { 
  public static void main(String[] args) { 
    ArrayList<String> cars = new ArrayList<String>();
    cars.add("Volvo");
    cars.add("BMW");
    cars.add("Ford");
    cars.add("Mazda");
    cars.remove(0);
    System.out.println(cars);
  } 
}

//[BMW, Ford, Mazda]





//Remove all items from an ArrayList
import java.util.ArrayList;

public class Main { 
  public static void main(String[] args) { 
    ArrayList<String> cars = new ArrayList<String>();
    cars.add("Volvo");
    cars.add("BMW");
    cars.add("Ford");
    cars.add("Mazda");
    cars.clear();
    System.out.println(cars);      //[]
  } 
}




//Get the size of an ArrayList
import java.util.ArrayList;

public class Main { 
  public static void main(String[] args) { 
    ArrayList<String> cars = new ArrayList<String>();
    cars.add("Volvo");
    cars.add("BMW");
    cars.add("Ford");
    cars.add("Mazda");
    System.out.println(cars.size());        //4
  } 
}





//Loop thorugh an ArrayList
import java.util.ArrayList;

public class Main { 
  public static void main(String[] args) { 
    ArrayList<String> cars = new ArrayList<String>();
    cars.add("Volvo");
    cars.add("BMW");
    cars.add("Ford");
    cars.add("Mazda");
    for (int i = 0; i < cars.size(); i++) {
      System.out.println(cars.get(i));
    }
  } 
}
/*
Volvo
BMW
Ford
Mazda
*/







//Loop thorugh an ArrayList with for-each
import java.util.ArrayList;

public class Main { 
  public static void main(String[] args) { 
    ArrayList<String> cars = new ArrayList<String>();
    cars.add("Volvo");
    cars.add("BMW");
    cars.add("Ford");
    cars.add("Mazda");
    for (String i : cars) {
      System.out.println(i);
    }
  } 
}

/*
Volvo
BMW
Ford
Mazda
*/






//Create an ArrayList that should store numbers

import java.util.ArrayList;

public class Main { 
  public static void main(String[] args) { 
    ArrayList<Integer> myNumbers = new ArrayList<Integer>();
    myNumbers.add(10);
    myNumbers.add(15);
    myNumbers.add(20);
    myNumbers.add(25);
    for (int i : myNumbers) {
      System.out.println(i);
    }
  } 
}



/*
10
15
20
25
*/
