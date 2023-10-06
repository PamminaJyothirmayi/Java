//MyClass.java    
public class Main {
  public static void main(String[] args) {
    Person myObj = new Person();
    myObj.setName("Jyothi");
    System.out.println(myObj.getName());                    //Jyothi
  }
}

//Person.java
public class Person {
   private String name;

   // Getter
   public String getName() {
     return name;
   }

   // Setter
   public void setName(String newName) {
     this.name = newName;
   }
}
