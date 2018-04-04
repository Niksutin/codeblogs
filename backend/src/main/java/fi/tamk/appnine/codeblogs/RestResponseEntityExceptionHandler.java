package fi.tamk.appnine.codeblogs;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class RestResponseEntityExceptionHandler {

    @ExceptionHandler(PostWasNotFoundException.class)
    public ResponseEntity<ErrorInfo> handleConflict(PostWasNotFoundException ex) {

        ErrorInfo e = new ErrorInfo("Could not find article with id " + ex.getPostId());

        return new ResponseEntity<>(e, HttpStatus.NOT_FOUND);
    }

}
