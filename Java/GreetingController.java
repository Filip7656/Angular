package Rest.MakeRest;


import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.util.stream.Stream;

import org.bson.Document;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


@SpringBootApplication(scanBasePackages={"com.websystique.springboot"})

@RestController
@RequestMapping("/json")
public class GreetingController {
	public static String data;
	public static String data_log;
    private static final Logger log = LoggerFactory.getLogger(GreetingController.class);

	public static void main(String[] args) {
		SpringApplication.run(GreetingController.class, args);
		 
	}
	 
	
    @Autowired
    private MongoTemplate mongoTemplate;
    
	@RequestMapping( method = {RequestMethod.POST})
	@CrossOrigin(origins = "http://145.239.87.1:4200")
	   public String create(@RequestBody String json_data) {
	      data = json_data;
	 //   Quote dane = new Quote(quote);
	      
	      Document doc = Document.parse(data);
	       mongoTemplate.insert(doc, "dane");
	       

			      File log = new File("/ang-form/src/data/log.json");
			      try{
			    	   FileWriter fileWriter = new FileWriter(log,true);
			    	   FileReader filereader = new FileReader(log);
			    	    BufferedWriter bufferedWriter = new BufferedWriter(fileWriter);
						BufferedReader br = new BufferedReader(filereader);
			    	    data_log = br.readLine();
			    	    System.out.println(data_log);
			    	    br.close();
			    	    
			    	    if(log.exists()){
			    	    	PrintWriter albo = new PrintWriter(log);
			    	    	albo.close();			    	    }
			    	    
						if(!log.exists()){
			    	        System.out.println("Making new one");
			    	        log.createNewFile();
			    	    }

				    	    
				    	    if (log.length() == 0 && data_log==null) {
				    	    System.out.println("File is empty!!!");
			    	        bufferedWriter.write('{');
			    	        bufferedWriter.write('"');
			    	        bufferedWriter.write("json_data");
			    	        bufferedWriter.write('"');
			    	        bufferedWriter.write(":[");
			    	    	bufferedWriter.write(data);
			    	    	bufferedWriter.write("]}");
			    	    	bufferedWriter.close();
			    	    	}
			    	    else 
			    	    
			    	        System.out.println("File is not empty!!!");
			    	    	if (data_log == null) {
			    	    		
				    	    	bufferedWriter.write(data);


			    	    	} else {
			    	    	 	bufferedWriter.write(data_log.replace("]}", ""));
				    	    	bufferedWriter.write(","+ data);	
			    	    	}

			    	    	bufferedWriter.write("]}");
			    	    	bufferedWriter.close();
			    	    	
			    	    	System.out.println("Done");
			    	} 
			    		catch(IOException e) {
			    			System.out.println("COULD NOT LOG!!");
			    		}

  
		 return null;
	     
	   }
	 
	 
	 @RequestMapping(method=RequestMethod.GET)
	 @ResponseBody
	 public String getAll() {
		 return data;
		 	     }


  }


//<dependency>
//<groupId>org.springframework.data</groupId>
//<artifactId>spring-data-mongodb</artifactId>
//</dependency>
 