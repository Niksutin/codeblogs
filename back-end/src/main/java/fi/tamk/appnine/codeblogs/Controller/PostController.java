package fi.tamk.appnine.codeblogs.Controller;

import fi.tamk.appnine.codeblogs.Entity.Comment;
import fi.tamk.appnine.codeblogs.Entity.Post;
import fi.tamk.appnine.codeblogs.Repositories.CommentRepository;
import fi.tamk.appnine.codeblogs.Service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import javax.print.attribute.standard.Media;
import java.util.*;

/**
 * Controller class for Posts.
 */
@RestController
@RequestMapping("/posts")
public class PostController {

    // Post service which handles business logic
    final private PostService postService;

    @Autowired
    public PostController(PostService postService) {
        this.postService = postService;
    }

    /**
     * Controller method for getting comments by Post id.
     *
     * @param id of the Post where comments are fetched from.
     * @return list of comments from Post.
     */
    @RequestMapping(value = "/{id}/comments", method = RequestMethod.GET)
    public List<Comment> getComments(@PathVariable("id") Long id) {
        return postService.findCommentsByPostId(id);
    }

    /**
     * Controller method for adding a comment to the database by Post id.
     *
     * @param id of the Post where comment is linked to.
     * @param comment that is added to database.
     * @return true if successful, false if not.
     */
    @RequestMapping(value = "/{id}/comments", method = RequestMethod.POST)
    public boolean addComment(@PathVariable("id") Long id, @RequestBody Comment comment) {
        return postService.addCommentToDatabase(comment, id);
    }

    /**
     * Controller method for adding a like to Post.
     *
     * @param id of the Post where like is added to.
     * @return new amount of likes.
     */
    @RequestMapping(value = "/{id}/like", method = RequestMethod.POST)
    public Integer addLike(@PathVariable("id") Long id) {
        return postService.addLike(id);
    }

    /**
     * Controller method for getting all Posts.
     *
     * @return Iterable list of Post objects.
     */
    @RequestMapping(method = RequestMethod.GET)
    public Iterable<Post> getPosts() {
        return postService.findAllPosts();
    }

    /**
     * Controller method for getting one Post by its id.
     *
     * @param id of the post to be fetched from Repository.
     * @return the Post fetched from Repository.
     */
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Optional<Post> getPost(@PathVariable("id") Long id, @RequestBody String content, @RequestBody String writer) {
        return postService.findById(id);
    }

    /**
     * Controller method for adding a Post item to PostRepository.
     *
     * @param post that is inserted into the PostRepository.
     * @param builder builds response.
     * @return ResponseEntity.
     */
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<Post> addPost(@RequestBody Post post, UriComponentsBuilder builder) {

        postService.addPostToDatabase(post);

        UriComponents uriComponents =
                builder.path("/{id}").buildAndExpand(post.getId());
        HttpHeaders header = new HttpHeaders();
        header.setLocation(uriComponents.toUri());
        return new ResponseEntity<>(header, HttpStatus.CREATED);
    }

    /**
     * Controller method for updating Post object.
     *
     * @param post to be updated.
     * @return ResponseEntity.
     */
    @RequestMapping(method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Post> updatePost(@RequestBody Post post) {
        if (postService.findById(post.getId()).isPresent()) {
            postService.updatePost(post);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_MODIFIED);
        }
    }

    /**
     * Controller method for deleting a Post by its id from PostRepository.
     *
     * @param id of the post to be deleted.
     */
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deletePost(@PathVariable("id") Long id) {
        postService.deleteById(id);
    }
}
