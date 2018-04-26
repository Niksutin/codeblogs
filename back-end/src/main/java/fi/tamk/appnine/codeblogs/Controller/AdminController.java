package fi.tamk.appnine.codeblogs.Controller;

import fi.tamk.appnine.codeblogs.Entity.Admin;
import fi.tamk.appnine.codeblogs.Service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.Optional;

/**
 * Controller class for Admins.
 */
@RestController
@RequestMapping("/admins")
public class AdminController {

    final private AdminService adminService;

    @Autowired
    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public Iterable<Admin> getAdmins() {
        return adminService.findAll();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Optional<Admin> getAdmin(@PathVariable("id") Long id) {
        return adminService.findById(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<Admin> addAdmin(@RequestBody Admin admin, UriComponentsBuilder builder) {
        adminService.addAdminToDatabase(admin);

        UriComponents uriComponents =
                builder.path("/{id}").buildAndExpand(admin.getId());
        HttpHeaders header = new HttpHeaders();
        header.setLocation(uriComponents.toUri());
        return new ResponseEntity<>(header, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteAdmin(@PathVariable("id") Long id) {
        adminService.deleteById(id);
    }
}
