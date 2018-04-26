package fi.tamk.appnine.codeblogs.Entity;

import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Model class for Post object
 */
@Entity
public class Post {

    // Automatically generated id
    @Id @GeneratedValue
    private Long id;

    // Title of the Post
    private String title;

    // Content of the Post in text
    @Lob @Type(type="text")
    private String content;

    // Writer of the Post
    private String writer;

    // Date of saving Post in database
    private String date;

    // Amount of likes in the Post
    private int likes;

    // Tags for the Post
    private ArrayList<String> tags;

    // Comments for the Post
    @OneToMany(mappedBy = "post")
    private List<Comment> comments;

    private Post() {} // JPA

    public Post(String title, String  content, String writer) {
        this.title = title;
        this.content = content;
        this.writer = writer;

        // Start with 0 likes
        this.likes = 0;

        // Start with 0 tags
        tags = new ArrayList<>();

        // Set current date as the creation date of the Post
        DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd");
        this.date = dateFormat.format(new Date());
    }

    @Override
    public String toString() {
        return "Post{" +
                "id=" + id +
                ", title='" + title + '\'' +
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

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
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

    public int getLikes() {
        return likes;
    }

    public void setLikes(int likes) {
        this.likes = likes;
    }

    public void addLike() {
        likes++;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }

    public ArrayList<String> getTags() {
        return tags;
    }

    public void setTags(ArrayList<String> tags) {
        this.tags = tags;
    }

    public void addTag(String tag) {
        tags.add(tag);
    }
}
