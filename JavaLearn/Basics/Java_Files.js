//1.Create a file
import java.io.File;       // Import the File class
import java.io.IOException;

public class CreateFile {  
  public static void main(String[] args) {  
    try {  
      File myObj = new File("filename.txt");  
      if (myObj.createNewFile()) {  
        System.out.println("File created: " + myObj.getName());  
      } else {  
        System.out.println("File already exists.");  
      }  
    } catch (IOException e) {
      System.out.println("An error occurred.");
      e.printStackTrace();  
    }  
  }  
} 

//result:  File created: filename.txt






//2.Write a file

import java.io.FileWriter;
import java.io.IOException;

public class WriteToFile {  
  public static void main(String[] args) {  
    try {  
      FileWriter myWriter = new FileWriter("filename.txt");
      myWriter.write("Files in Java might be tricky, but it is fun enough!");
      myWriter.close();
      System.out.println("Successfully wrote to the file.");
    } catch (IOException e) {
      System.out.println("An error occurred.");
      e.printStackTrace();
    } 
  }  
} 

//Successfully wrote to the file.





//3.Read a file
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class ReadFile {  
  public static void main(String[] args) {  
    try {
      File myObj = new File("filename.txt");
      Scanner myReader = new Scanner(myObj);  
      while (myReader.hasNextLine()) {
        String data = myReader.nextLine();
        System.out.println(data);
      }
      myReader.close();
    } catch (FileNotFoundException e) {
      System.out.println("An error occurred.");
      e.printStackTrace();
    } 
  }  
} 

//Files in Java might be tricky, but it is fun enough!






//4.Get file information
import java.io.File; 

public class GetFileInfo {  
  public static void main(String[] args) {  
    File myObj = new File("filename.txt");
    if (myObj.exists()) {
      System.out.println("File name: " + myObj.getName()); 
      System.out.println("Absolute path: " + myObj.getAbsolutePath()); 
      System.out.println("Writeable: " + myObj.canWrite()); 
      System.out.println("Readable: " + myObj.canRead()); 
      System.out.println("File size in bytes: " + myObj.length());
    } else {
      System.out.println("The file does not exist.");
    }
  }  
} 
/*
File name: filename.txt
Absolute path: C:\Users\MyName\filename.txt
Writeable: true
Readable: true
File size in bytes: 0
*/





//5.Delete a file : To delete a file in Java, use the delete() method.

import java.io.File; 

public class DeleteFile {
  public static void main(String[] args) { 
    File myObj = new File("filename.txt"); 
    if (myObj.delete()) { 
      System.out.println("Deleted the file: " + myObj.getName());
    } else {
      System.out.println("Failed to delete the file.");
    } 
  } 
}

//Deleted the file: filename.txt








//6.Delete a Folder
import java.io.File; 

public class DeleteFolder {
  public static void main(String[] args) { 
    File myObj = new File("C:\\Users\\MyName\\Test"); 
    if (myObj.delete()) { 
      System.out.println("Deleted the folder: " + myObj.getName());
    } else {
      System.out.println("Failed to delete the folder.");
    } 
  } 
}

//Deleted the folder: Test
