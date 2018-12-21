import java.io.*;
import java.util.*;
public class WriteData {
    static String filename= "../../../c_blog/src/dataText.json";
    static String post_file= "c_blog/src/post.json";
    public static ArrayList<String> store_file = new ArrayList<String>();
    static String end = "] \n }";
    WriteData() {

    }

    void Write(String content) {
        String file_temp= "c_blog/src/dataText.json";
        FileWriter fw=null;
        try {
            File file = new File(file_temp);

            BufferedWriter bw =new BufferedWriter(new FileWriter(file));
            PrintWriter out = new PrintWriter(bw);

            String text=content;
            out.write(text);
            out.close();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }
    /**
    void AddPost(String content) {
        if (store_file.isEmpty()) {
            store_file.add("{ \n \"post\": [ \n ");
            store_file.add(content);
            store_file.add(end);
        }
        else {
            store_file.remove(store_file.size()-1);
            store_file.add(content);
            store_file.add(end);
        }
        Append(store_file);
    }
     **/

    void Append(String content) {
        String file_temp= "c_blog/src/post.json";
        FileWriter fw=null;
        try {
            File file = new File(file_temp);

            BufferedWriter bw =new BufferedWriter(new FileWriter(file));
            PrintWriter out = new PrintWriter(bw);

            String text=content;
            out.write(text);
            out.close();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }

    void Result(String query) {
        String file_temp = "c_blog/src/query.json";
        FileWriter fw=null;
        try {
            File file = new File(file_temp);

            BufferedWriter bw =new BufferedWriter(new FileWriter(file));
            PrintWriter out = new PrintWriter(bw);

            String text=query;
            out.write(text);
            out.close();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }
}
