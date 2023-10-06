//Creates and access an array
public class Main {
  public static void main(String[] args) {
    String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
    System.out.println(cars[0]);      //Volvo
  }
}


//Change an array element
public class Main {
  public static void main(String[] args) {
    String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
    cars[0] = "Opel";
    System.out.println(cars[0]);      //Opel
  }
}


//Find the length of an array
public class Main {
  public static void main(String[] args) {
    String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
    System.out.println(cars.length);    //4
  }
}



//Access an array
public class Main {
  public static void main(String[] args) {
    String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
    cars[0] = "Opel";
    System.out.println(cars[0]);      //Opel
  }
}


//Loop through an array
public class Main {
  public static void main(String[] args) {
    String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
    for (int i = 0; i < cars.length; i++) {
      System.out.println(cars[i]);
    }
  }
}
/*
Volvo
BMW
Ford
Mazda
*/


//Loop through an array with for-each
public class Main {
  public static void main(String[] args) {
    String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
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


//Multidimensional array
public class Main {
  public static void main(String[] args) {
    int[][] myNumbers = { {1, 2, 3, 4}, {5, 6, 7} };
    System.out.println(myNumbers[1][2]);  //7
    System.out.println(myNumbers[0][2]);  //3
  }
}

//Loop through a multidimensional array
public class Main {
   public static void main(String[] args) {
     int[][] myNumbers = { {1, 2, 3, 4}, {5, 6, 7} };
     for (int i = 0; i < myNumbers.length; ++i) {
        for(int j = 0; j < myNumbers[i].length; ++j) {
           System.out.println(myNumbers[i][j]);
        }
     }
   }
}
/*
1
2
3
4
5
6
7
*/
