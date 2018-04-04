package fi.tamk.appnine.codeblogs;

import javax.persistence.*;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

@Entity
@Table(name = "admins")
public class Admin {

    @Id
    @GeneratedValue
    private Integer id;

    private String name;
    private String creationDate;

    public Admin(String name) {
        this.name = name;
        DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd");
        this.creationDate = dateFormat.format(new Date());
    }

    public Admin() {}

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", creationDate='" + creationDate + '\'' +
                '}';
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
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