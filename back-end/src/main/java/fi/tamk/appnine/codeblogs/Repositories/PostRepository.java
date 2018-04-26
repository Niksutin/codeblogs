package fi.tamk.appnine.codeblogs.Repositories;

import fi.tamk.appnine.codeblogs.Entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface PostRepository extends CrudRepository<Post, Long> {
}
