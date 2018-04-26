package fi.tamk.appnine.codeblogs.Repositories;

import fi.tamk.appnine.codeblogs.Entity.Admin;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface AdminRepository extends CrudRepository<Admin, Long> {
}
