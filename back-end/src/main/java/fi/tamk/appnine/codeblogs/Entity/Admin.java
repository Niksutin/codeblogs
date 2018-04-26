package fi.tamk.appnine.codeblogs.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Model class for Admin objects.
 */
@Entity
public class Admin {

    @Id @GeneratedValue
    private Long id;

    // Name of the Admin
    private String name;

    // Creation date
    private String creationDate;

    private Admin() {} // JPA

    public Admin(String name) {
        this.name = name;

        // Set current date as Admin creation date
        DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd");
        this.creationDate = dateFormat.format(new Date());
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", creationDate='" + creationDate + '\'' +
                '}';
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(String creationDate) {
        this.creationDate = creationDate;
    }
}