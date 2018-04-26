package fi.tamk.appnine.codeblogs.Repositories;

import fi.tamk.appnine.codeblogs.Entity.Comment;
import fi.tamk.appnine.codeblogs.Entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(exported = false)
public interface CommentRepository extends CrudRepository<Comment, Long> {
    List<Comment> findCommentsByPostId(Long postId);
    void deleteCommentsByPostId(Long id);
}
