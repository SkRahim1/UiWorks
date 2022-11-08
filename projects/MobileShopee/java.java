
// program to establish the connection
import java.sql.*;

class java {
    public static void main(String arg[]) {
        try {
            Class c = Class.forName("oracle.jdbc.driver.OracleDriver");
            Connection con = DriverManager.getConnection("jdbc:oracle:oci8:@xe", "system", "manager");
            System.out.println("Connection Established successfully");
        } catch (Exception ex) {

        }
    }
}