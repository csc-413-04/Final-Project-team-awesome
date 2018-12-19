package main.java;
//import com.mongodb.MongoClient;
import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;

import java.text.SimpleDateFormat;
import static spark.Spark.*;
import java.util.ArrayList;
import java.util.Date;
public class Main {
    public static int number = 0;

    // increments id for every username added to the database
    public static int AutoID() {
        number++;
        return number;
    }


    public static void main(String[] args) {
        MongoClient mongoClient = new MongoClient("localhost", 27017);
        MongoDatabase db = mongoClient.getDatabase("REST2");

        //Creating Collections
        MongoCollection<Document> userCollect = db.getCollection("users");
      // staticFiles.externalLocation("public");
      // http://sparkjava.com/documentation
      port(4321);

      //Map<String, Object> map = new HashMap<String, Object>();
      //BasicBSONList map = new BasicBSONList();
      ArrayList<Object> map = new ArrayList<Object>();

      // calling get will make your app start listening for the GET path with the /hello endpoint
      get("/hello", (req, res) -> "Hello World");

      //newuser
      //get("/newuser", (req, res) -> "okay");
      get("/newuser", (req, res)-> {
          //Getting the username value
          String username = req.queryParams("username");
          System.out.print(username);
          //Getting the pasword value
          String password = req.queryParams("password");
          Document document = new Document("username", username);
          Document dummy = new Document();
          //If there are no documents inside the collection yet...
          if (userCollect.count() == 0) {
            document.append("username", username).append("password", password).append("id", AutoID());
          }
          // if that's not the case then...
          else {
            // retrieve the last documents to get the latest id
            MongoIterable<Document> doc = userCollect.find();
            MongoCursor cursor = doc.iterator();
            // while there are still documents...
            while (cursor.hasNext()) {
                dummy = (Document) cursor.next();
                if ((int) dummy.get("id") > count) {
                    count = (int) dummy.get("id");
                }
            }
            document.append("username", username).append("password", password).append("id", count + 1);
          }
          document.append("friends", map);
          MongoIterable<Document> findUser = userCollect.find();
          MongoCursor<Document> userCursor = findUser.iterator();
          //checks if username already exist in the collection
          while (userCursor.hasNext()) {
            Document dummy_user = userCursor.next();
            if (dummy_user.get("username").equals(username)) {
                output = "username already exists";
                break;
            }
        }
        // if the output hasn't changed...
        if (output != "username already exists") {
            userCollect.insertOne(document);
            output = "okay";
        }
        return output;
      });
      //user - Login
      get("/user", (req, res) -> req.params("user"));
    }
}