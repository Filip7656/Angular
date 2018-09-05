package Rest.MakeRest;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Quote {

	private String email;
    private String password;
    private String firstName;
    private String lastName;
  
 
	

	public String getEmail() {
    	return email;	
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
  
    public String getfirstName() {
        return firstName;
    }
    public void setType(String firstName) {
        this.firstName = firstName;
    }

    public String getlastName() {
        return lastName;
    }
    public void setlastName(String lastName) {
        this.lastName = lastName;
    }

    @Override
    public  String toString() {
        return "{\"firstName\":"+ firstName+ ","
        		+ "\"lastName\":"+lastName+","
        		+ "\"email\":"+email+","
        		+ "\"password\":"+password
        		+"}";
    }
}
	