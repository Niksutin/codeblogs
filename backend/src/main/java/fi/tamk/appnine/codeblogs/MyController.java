package fi.tamk.appnine.codeblogs;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Optional;

@RestController
public class MyController {

    final private PostRepository postRepository;

    final private AdminRepository adminRepository;

    @Autowired
    public MyController(PostRepository postRepository, AdminRepository adminRepository) {

        this.postRepository = postRepository;
        this.adminRepository = adminRepository;
    }

    // Methods for posts!!!
    @CrossOrigin
    @RequestMapping(value = "/posts", method = RequestMethod.GET)
    public Iterable<Post> getPosts() {
        return postRepository.findAll();
    }

    @CrossOrigin
    @RequestMapping(value = "/posts", method = RequestMethod.POST)
    public ResponseEntity<Post> savePost(@RequestBody Post a, UriComponentsBuilder b) {

        DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd");
        String date = dateFormat.format(new Date());

        a.setDate(date);
        postRepository.save(a);

        UriComponents uriComponents =
                b.path("/posts/{id}").buildAndExpand(a.getId());

        HttpHeaders header = new HttpHeaders();
        header.setLocation(uriComponents.toUri());

        return new ResponseEntity<>(header, HttpStatus.CREATED);
    }

    @CrossOrigin
    @RequestMapping(value = "/posts/{id}", method = RequestMethod.GET)
    public Optional<Post> getPost(@PathVariable Integer id) {
        return postRepository.findById(id);
    }

    @CrossOrigin
    @RequestMapping(value = "/posts/{id}", method = RequestMethod.DELETE)
    public void deletePost(@PathVariable Integer id) {
        postRepository.deleteById(id);
    }

    // Methods for admins!!!
    @CrossOrigin
    @RequestMapping(value = "/admins", method = RequestMethod.GET)
    public Iterable<Admin> getAdmins() {
        return adminRepository.findAll();
    }

    @CrossOrigin
    @RequestMapping(value = "/admins", method = RequestMethod.POST)
    public ResponseEntity<Admin> saveAdmin(@RequestBody Admin a, UriComponentsBuilder b) {
        adminRepository.save(a);

        UriComponents uriComponents =
                b.path("/admins/{id}").buildAndExpand(a.getId());

        HttpHeaders header = new HttpHeaders();
        header.setLocation(uriComponents.toUri());

        return new ResponseEntity<>(header, HttpStatus.CREATED);
    }

    @CrossOrigin
    @RequestMapping(value = "/admins/{id}", method = RequestMethod.GET)
    public Optional<Admin> getAdmin(@PathVariable Integer id) {
        return adminRepository.findById(id);
    }

    @CrossOrigin
    @RequestMapping(value = "/admins/{id}", method = RequestMethod.DELETE)
    public void deleteAdmin(@PathVariable Integer id) {
        adminRepository.deleteById(id);
    }

    @Bean
    public CommandLineRunner test() {
        class RunTest implements CommandLineRunner {

            @Override
            public void run(String... strings) {

                Admin niko = new Admin("Niko");
                adminRepository.save(niko);

                Admin neea = new Admin("Nenunen");
                adminRepository.save(neea);


                postRepository.save(new Post("This is test text 1",
                        "Bacon ipsum dolor amet filet mignon " +
                        "andouille bresaola jerky, corned beef ham burgdoggen buffalo pork belly sausage shank " +
                        "leberkas kevin. Filet mignon cow pork chop jerky bacon rump ball tip. Ground round kevin " +
                        "meatloaf frankfurter tail doner, jowl short loin leberkas tenderloin picanha prosciutto " +
                        "beef ribs beef. Bacon corned beef capicola pastrami frankfurter, spare ribs meatball " +
                        "rump ribeye short loin. Pork chop ham spare ribs t-bone cupim jowl, beef short ribs "
                        , niko.getName()));

                postRepository.save(new Post("This is test text 2",
                        "Bacon ipsum dolor amet filet mignon " +
                        "andouille bresaola jerky, corned beef ham burgdoggen buffalo pork belly sausage shank " +
                        "leberkas kevin. Filet mignon cow pork chop jerky bacon rump ball tip. Ground round kevin " +
                        "meatloaf frankfurter tail doner, jowl short loin leberkas tenderloin picanha prosciutto " +
                        "beef ribs beef. Bacon corned beef capicola pastrami frankfurter, spare ribs meatball " +
                        "rump ribeye short loin. Pork chop ham spare ribs t-bone cupim jowl, beef short ribs "
                        , niko.getName()));

                postRepository.save(new Post("This is test text 3",
                        "Bacon ipsum dolor amet filet mignon " +
                        "andouille bresaola jerky, corned beef ham burgdoggen buffalo pork belly sausage shank " +
                        "leberkas kevin. Filet mignon cow pork chop jerky bacon rump ball tip. Ground round kevin " +
                        "meatloaf frankfurter tail doner, jowl short loin leberkas tenderloin picanha prosciutto " +
                        "beef ribs beef. Bacon corned beef capicola pastrami frankfurter, spare ribs meatball " +
                        "rump ribeye short loin. Pork chop ham spare ribs t-bone cupim jowl, beef short ribs "
                        , neea.getName()));
            }
        }
        return new RunTest();
    }
}
