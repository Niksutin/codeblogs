package fi.tamk.appnine.codeblogs.Entity;

import javax.persistence.*;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Model class for Post objects.
 */
@Entity
public class Comment {

    @Id @GeneratedValue
    private Long id;

    // Content of the Comment
    private String content;

    // Writer of the Comment
    private String writer;

    // Date when the Comment was posted
    private String date;

    @ManyToOne
    private Post post;

    private Comment() {} // JPA

    public Comment(String content, String writer, Post post) {
        this.content = content;
        this.writer = writer;
        this.post = post;

        // Set current date as Comment's date
        DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd");
        this.date = dateFormat.format(new Date());
    }

    @Override
    public String toString() {
        return "Comment{" +
                "id=" + id +
                ", content='" + content + '\'' +
                ", writer='" + writer + '\'' +
                ", date='" + date + '\'' +
                '}';
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getWriter() {
        return writer;
    }

    public void setWriter(String writer) {
        this.writer = writer;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
