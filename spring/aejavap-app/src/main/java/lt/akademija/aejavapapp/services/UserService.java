//package lt.akademija.aejavapapp.services;
//
//import lt.akademija.aejavapapp.models.User;
//import lt.akademija.aejavapapp.repositories.UserRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import javax.transaction.Transactional;
//import java.util.List;
//
//@Service
//public class UserService {
//
//    @Autowired
//    private UserRepository userRepository;
//
//    @Transactional
//    public List<User> getUsers(){
//        return userRepository.findAll();
//    }
//
//    @Transactional
//    public void createUser(User user){
//        userRepository.save(user);
//    }
//}
