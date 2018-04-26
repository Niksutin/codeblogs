package fi.tamk.appnine.codeblogs.Service;

import fi.tamk.appnine.codeblogs.Repositories.AdminRepository;
import fi.tamk.appnine.codeblogs.Entity.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Optional;

/**
 * Admin service class which handles all business logic for Admins.
 */
@Service
public class AdminService {

    private final AdminRepository adminRepository;

    @Autowired
    public AdminService(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    public Iterable<Admin> findAll() {
        return this.adminRepository.findAll();
    }

    public Optional<Admin> findById(Long id) {
        return this.adminRepository.findById(id);
    }

    public void addAdminToDatabase(Admin admin) {
        DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd");
        String date = dateFormat.format(new Date());

        admin.setCreationDate(date);
        this.adminRepository.save(admin);
    }

    public void deleteById(Long id) {
        this.adminRepository.deleteById(id);
    }


}
