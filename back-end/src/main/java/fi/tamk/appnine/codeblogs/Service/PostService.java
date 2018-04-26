package fi.tamk.appnine.codeblogs.Service;

import fi.tamk.appnine.codeblogs.Entity.Comment;
import fi.tamk.appnine.codeblogs.Repositories.CommentRepository;
import fi.tamk.appnine.codeblogs.Repositories.PostRepository;
import fi.tamk.appnine.codeblogs.Entity.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

/**
 * PostService class which handles all business logic for Post.
 */
@Service
@Transactional
public class PostService {

    private final PostRepository postRepository;
    private final CommentRepository commentRepository;

    @Autowired
    public PostService(PostRepository postRepository, CommentRepository commentRepository) {
        this.postRepository = postRepository;
        this.commentRepository = commentRepository;
   }

    public Iterable<Post> findAllPosts() {
        return this.postRepository.findAll();
    }

    /**
     * Add Post to database.
     *
     * @param post to be added to database.
     */
    public void addPostToDatabase(Post post) {
        Post p = new Post(
                post.getTitle(),
                post.getContent(),
                post.getWriter()
        );
        this.postRepository.save(p);
    }

    public Optional<Post> findById(Long id) {
        return this.postRepository.findById(id);
    }

    public void deleteById(Long id) {
        this.commentRepository.deleteCommentsByPostId(id);
        this.postRepository.deleteById(id);
    }

    /**
     * Update Post in database
     *
     * @param post object containing updated data.
     */
    public void updatePost(Post post) {
        Post p = new Post(
                post.getTitle(),
                post.getContent(),
                post.getWriter());
        p.setId(post.getId());
        this.postRepository.save(p);
    }


    /**
     * Method for adding like.
     *
     * @param id of the Post where like is added.
     * @return if like was added, return amount of likes, if not return -1.
     */
    public Integer addLike(Long id) {
        if (postRepository.findById(id).isPresent()) {
            Post p = postRepository.findById(id).get();
            p.addLike();
            postRepository.save(p);
            return p.getLikes();
        } else {
            return -1;
        }
    }

    public List<Comment> findCommentsByPostId(Long id) {
        return commentRepository.findCommentsByPostId(id);
    }

    /**
     * Add comment into database and link it to Post by its id.
     *
     * @param comment that is added to database and linked to Post.
     * @param id of the Post where comment is linked to.
     * @return true if successful, false if not.
     */
    public boolean addCommentToDatabase(Comment comment, Long id) {
        if (postRepository.findById(id).isPresent()) {
            Post p = postRepository.findById(id).get();
            Comment c = new Comment(
                    comment.getContent(),
                    comment.getWriter(),
                    p
            );
            commentRepository.save(c);
            return true;
        } else {
            return false;
        }
    }
}
