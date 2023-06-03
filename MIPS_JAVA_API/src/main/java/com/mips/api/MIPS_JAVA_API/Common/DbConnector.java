package com.mips.api.MIPS_JAVA_API.Common;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.ResourceBundle;

public class DbConnector {
    private static final ResourceBundle bundle = ResourceBundle.getBundle("application");
    private static final String JDBC_URL = bundle.getString("jdbc.url");
    private static final String USERNAME = bundle.getString("jdbc.username");
    private static final String PASSWORD = bundle.getString("jdbc.password");
    
    public static Connection getConnection() throws SQLException {
        return DriverManager.getConnection(JDBC_URL, USERNAME, PASSWORD);
    }
}
