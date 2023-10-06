//While loop
public class Main {
  public static void main(String[] args) {
    int i = 0;
    while (i < 5) {
      System.out.println(i);
      i++;
    }  
  }
}

/*
0
1
2
3
4
*/


//Do while loop
public class Main {
  public static void main(String[] args) {
    int i = 0;
    do {
      System.out.println(i);
      i++;
    }
    while (i < 5);  
  }
}
/*
0
1
2
3
4
*/


//For loop
public class Main {
  public static void main(String[] args) {
    for (int i = 0; i < 5; i++) {
      System.out.println(i);
    }  
  }
}

/*
0
1
2
3
4
*/


//For-each loop
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



//Break a loop
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


//continue a loop
public class Main {
  public static void main(String[] args) {
    for (int i = 0; i < 6; i++) {
      if (i == 4) {
        continue;
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
5
6
*/

