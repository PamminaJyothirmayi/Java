/*************Java Program to Capitalize the first character of each word in a String***/

//Example 1: Java program to make the first letter of a String capital

class Main {
  public static void main(String[] args) {

    // create a string
    String name = "jyothirmayi";

    // create two substrings from name
    // first substring contains first letter of name
    // second substring contains remaining letters
    String firstLetter = name.substring(0, 1);
    String remainingLetters = name.substring(1, name.length());

    // change the first letter to uppercase
    firstLetter = firstLetter.toUpperCase();

    // join the two substrings
    name = firstLetter + remainingLetters;
    System.out.println("Name: " + name);

  }
}

//Name: Jyothirmayi 








//Example 2: Convert every word of a String to uppercase

class Main {
  public static void main(String[] args) {

    // create a string
    String message = "my name is jyothirmayi";

    // stores each characters to a char array
    char[] charArray = message.toCharArray();
    boolean foundSpace = true;

    for(int i = 0; i < charArray.length; i++) {

      // if the array element is a letter
      if(Character.isLetter(charArray[i])) {

        // check space is present before the letter
        if(foundSpace) {

          // change the letter into uppercase
          charArray[i] = Character.toUpperCase(charArray[i]);
          foundSpace = false;
        }
      }

      else {
        // if the new character is not character
        foundSpace = true;
      }
    }

    // convert the char array to the string
    message = String.valueOf(charArray);
    System.out.println("Message: " + message);
  }
}

//Message: My Name Is Jyothirmayi
