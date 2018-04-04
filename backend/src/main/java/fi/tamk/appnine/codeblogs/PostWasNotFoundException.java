package fi.tamk.appnine.codeblogs;

public class PostWasNotFoundException extends IllegalArgumentException {

    private Integer postId;

    public PostWasNotFoundException(Integer id) {
        postId = id;
    }

    public Integer getPostId() {
        return postId;
    }

}
