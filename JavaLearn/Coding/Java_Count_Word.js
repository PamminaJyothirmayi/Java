

//Java How To Count Words 
//Count Number of Words in a String : We can easily count the number of words in a string 

public class Main {
  public static void main(String[] args) {
    String words = "One Two Three Four";
    int countWords = words.split("\\s").length;   or  int countWords = words.split(" ").length;  
    System.out.println(countWords);			//4
  }
}
