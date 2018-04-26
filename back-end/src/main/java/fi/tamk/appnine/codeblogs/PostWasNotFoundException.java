package fi.tamk.appnine.codeblogs;

/**
 * Exception handling (not implemented yet).
 */
public class PostWasNotFoundException extends IllegalArgumentException {

    private Integer postId;

    public PostWasNotFoundException(Integer id) {
        postId = id;
    }

    public Integer getPostId() {
        return postId;
    }

}
