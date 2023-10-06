//Java How To Reverse a String
//We can easily reverse a string by characters

public class Main {
  public static void main(String[] args) {
    String originalStr = "Hello";
    String reversedStr = "";
    System.out.println("Original string: " + originalStr);
        
    for (int i = 0; i < originalStr.length(); i++) {
      reversedStr = originalStr.charAt(i) + reversedStr;
    }
    
    System.out.println("Reversed string: "+ reversedStr);
  }
}


Original string: Hello
Reversed string: olleH

