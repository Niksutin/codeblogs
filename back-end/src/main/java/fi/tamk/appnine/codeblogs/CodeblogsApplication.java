package fi.tamk.appnine.codeblogs;

import fi.tamk.appnine.codeblogs.Entity.Admin;
import fi.tamk.appnine.codeblogs.Entity.Comment;
import fi.tamk.appnine.codeblogs.Entity.Post;
import fi.tamk.appnine.codeblogs.Repositories.AdminRepository;
import fi.tamk.appnine.codeblogs.Repositories.CommentRepository;
import fi.tamk.appnine.codeblogs.Repositories.PostRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CodeblogsApplication {

    public static void main(String[] args) {
	    SpringApplication.run(CodeblogsApplication.class, args);
	}

    /**
     * Initiate test data.
     */
	@Bean
	CommandLineRunner initData(PostRepository postRepository,
                               AdminRepository adminRepository,
                               CommentRepository commentRepository) {
		return args -> {

            Post niko = new Post("Spring with H2 database!",
                    "Bacon ipsum dolor amet filet mignon " +
                            "andouille bresaola jerky, corned beef ham burgdoggen buffalo pork belly sausage shank " +
                            "leberkas kevin. Filet mignon cow pork chop jerky bacon rump ball tip. Ground round kevin " +
                            "meatloaf frankfurter tail doner, jowl short loin leberkas tenderloin picanha prosciutto " +
                            "beef ribs beef. Bacon corned beef capicola pastrami frankfurter, spare ribs meatball " +
                            "andouille bresaola jerky, corned beef ham burgdoggen buffalo pork belly sausage shank " +
                            "leberkas kevin. Filet mignon cow pork chop jerky bacon rump ball tip. Ground round kevin " +
                            "meatloaf frankfurter tail doner, jowl short loin leberkas tenderloin picanha prosciutto " +
                            "beef ribs beef. Bacon corned beef capicola pastrami frankfurter, spare ribs meatball " +
                            "andouille bresaola jerky, corned beef ham burgdoggen buffalo pork belly sausage shank " +
                            "leberkas kevin. Filet mignon cow pork chop jerky bacon rump ball tip. Ground round kevin " +
                            "meatloaf frankfurter tail doner, jowl short loin leberkas tenderloin picanha prosciutto " +
                            "beef ribs beef. Bacon corned beef capicola pastrami frankfurter, spare ribs meatball " +
                            "leberkas kevin. Filet mignon cow pork chop jerky bacon rump ball tip. Ground round kevin " +
                            "meatloaf frankfurter tail doner, jowl short loin leberkas tenderloin picanha prosciutto " +
                            "beef ribs beef. Bacon corned beef capicola pastrami frankfurter, spare ribs meatball " +
                            "andouille bresaola jerky, corned beef ham burgdoggen buffalo pork belly sausage shank " +
                            "leberkas kevin. Filet mignon cow pork chop jerky bacon rump ball tip. Ground round kevin " +
                            "meatloaf frankfurter tail doner, jowl short loin leberkas tenderloin picanha prosciutto " +
                            "beef ribs beef. Bacon corned beef capicola pastrami frankfurter, spare ribs meatball " +
                            "leberkas kevin. Filet mignon cow pork chop jerky bacon rump ball tip. Ground round kevin " +
                            "meatloaf frankfurter tail doner, jowl short loin leberkas tenderloin picanha prosciutto " +
                            "beef ribs beef. Bacon corned beef capicola pastrami frankfurter, spare ribs meatball " +
                            "andouille bresaola jerky, corned beef ham burgdoggen buffalo pork belly sausage shank " +
                            "leberkas kevin. Filet mignon cow pork chop jerky bacon rump ball tip. Ground round kevin " +
                            "meatloaf frankfurter tail doner, jowl short loin leberkas tenderloin picanha prosciutto " +
                            "beef ribs beef. Bacon corned beef capicola pastrami frankfurter, spare ribs meatball " +
                            "rump ribeye short loin. Pork chop ham spare ribs t-bone cupim jowl, beef short ribs "
                    , "Niko");

            niko.addTag("Java");
            niko.addTag("H2");
            niko.addTag("Spring");

            Post neea = new Post("CSS basics!",
                    "Bacon ipsum dolor amet filet mignon " +
                            "andouille bresaola jerky, corned beef ham burgdoggen buffalo pork belly sausage shank " +
                            "leberkas kevin. Filet mignon cow pork chop jerky bacon rump ball tip. Ground round kevin " +
                            "meatloaf frankfurter tail doner, jowl short loin leberkas tenderloin picanha prosciutto " +
                            "beef ribs beef. Bacon corned beef capicola pastrami frankfurter, spare ribs meatball " +
                            "rump ribeye short loin. Pork chop ham spare ribs t-bone cupim jowl, beef short ribs "
                    , "Neea");

            neea.addTag("CSS");
            neea.addTag("HTML");

            Post jussi = new Post("The only thing i hate more than JS is MATLAB!!!",
                    "Bacon ipsum dolor amet filet mignon " +
                            "andouille bresaola jerky, corned beef ham burgdoggen buffalo pork belly sausage shank " +
                            "leberkas kevin. Filet mignon cow pork chop jerky bacon rump ball tip. Ground round kevin " +
                            "meatloaf frankfurter tail doner, jowl short loin leberkas tenderloin picanha prosciutto " +
                            "beef ribs beef. Bacon corned beef capicola pastrami frankfurter, spare ribs meatball " +
                            "andouille bresaola jerky, corned beef ham burgdoggen buffalo pork belly sausage shank " +
                            "leberkas kevin. Filet mignon cow pork chop jerky bacon rump ball tip. Ground round kevin " +
                            "meatloaf frankfurter tail doner, jowl short loin leberkas tenderloin picanha prosciutto " +
                            "beef ribs beef. Bacon corned beef capicola pastrami frankfurter, spare ribs meatball " +
                            "rump ribeye short loin. Pork chop ham spare ribs t-bone cupim jowl, beef short ribs "
                    , "Jussi");

            jussi.addTag("MATLAB");
            jussi.addTag("JavaScript");

            Post koodari = new Post("I like to code with my curtains closed..",
                    "Bacon ipsum dolor amet filet mignon " +
                            "andouille bresaola jerky, corned beef ham burgdoggen buffalo pork belly sausage shank " +
                            "leberkas kevin. Filet mignon cow pork chop jerky bacon rump ball tip. Ground round kevin " +
                            "meatloaf frankfurter tail doner, jowl short loin leberkas tenderloin picanha prosciutto " +
                            "beef ribs beef. Bacon corned beef capicola pastrami frankfurter, spare ribs meatball " +
                            "andouille bresaola jerky, corned beef ham burgdoggen buffalo pork belly sausage shank " +
                            "leberkas kevin. Filet mignon cow pork chop jerky bacon rump ball tip. Ground round kevin " +
                            "meatloaf frankfurter tail doner, jowl short loin leberkas tenderloin picanha prosciutto " +
                            "beef ribs beef. Bacon corned beef capicola pastrami frankfurter, spare ribs meatball " +
                            "andouille bresaola jerky, corned beef ham burgdoggen buffalo pork belly sausage shank " +
                            "leberkas kevin. Filet mignon cow pork chop jerky bacon rump ball tip. Ground round kevin " +
                            "meatloaf frankfurter tail doner, jowl short loin leberkas tenderloin picanha prosciutto " +
                            "beef ribs beef. Bacon corned beef capicola pastrami frankfurter, spare ribs meatball " +
                            "rump ribeye short loin. Pork chop ham spare ribs t-bone cupim jowl, beef short ribs "
                    , "Koodari");

            koodari.addTag("C++");

            Post robert = new Post("I like trains.",
                    "Bacon ipsum dolor amet filet mignon " +
                            "andouille bresaola jerky, corned beef ham burgdoggen buffalo pork belly sausage shank " +
                            "leberkas kevin. Filet mignon cow pork chop jerky bacon rump ball tip. Ground round kevin " +
                            "meatloaf frankfurter tail doner, jowl short loin leberkas tenderloin picanha prosciutto " +
                            "beef ribs beef. Bacon corned beef capicola pastrami frankfurter, spare ribs meatball " +
                            "andouille bresaola jerky, corned beef ham burgdoggen buffalo pork belly sausage shank " +
                            "leberkas kevin. Filet mignon cow pork chop jerky bacon rump ball tip. Ground round kevin " +
                            "meatloaf frankfurter tail doner, jowl short loin leberkas tenderloin picanha prosciutto " +
                            "beef ribs beef. Bacon corned beef capicola pastrami frankfurter, spare ribs meatball " +
                            "andouille bresaola jerky, corned beef ham burgdoggen buffalo pork belly sausage shank " +
                            "leberkas kevin. Filet mignon cow pork chop jerky bacon rump ball tip. Ground round kevin " +
                            "meatloaf frankfurter tail doner, jowl short loin leberkas tenderloin picanha prosciutto " +
                            "beef ribs beef. Bacon corned beef capicola pastrami frankfurter, spare ribs meatball " +
                            "rump ribeye short loin. Pork chop ham spare ribs t-bone cupim jowl, beef short ribs "
                    , "Robert");

            postRepository.save(niko);
            postRepository.save(neea);
            postRepository.save(jussi);
            postRepository.save(koodari);
            postRepository.save(robert);

            adminRepository.save(new Admin("Niko"));
            adminRepository.save(new Admin("Jussi"));
            adminRepository.save(new Admin("Neea"));
            adminRepository.save(new Admin("Koodari"));
            adminRepository.save(new Admin("Robert"));

            commentRepository.save(new Comment("This blog is nice!", "Stranger", niko));
            commentRepository.save(new Comment("Post has typo, LOL!", "Jussi", niko));
            commentRepository.save(new Comment("Great post! 5/5", "Jorma666", jussi));
            commentRepository.save(new Comment("This post needs more JS", "jake", jussi));
            commentRepository.save(new Comment("what is matlabz?", "dragonslayer789", jussi));
            commentRepository.save(new Comment("I agree.", "AgreeGuy", jussi));
            commentRepository.save(new Comment("This introduction to CSS was great","Anonymous", neea));
            commentRepository.save(new Comment("...","IHateTrains", robert));

        };
	}
}
