//package main.java;
//import com.mongodb.MongoClient;
import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.MongoIterable;
import com.mongodb.util.JSON;
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


