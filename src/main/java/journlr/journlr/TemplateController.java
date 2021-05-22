package journlr.journlr;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ModelAttribute;

@Controller
public class TemplateController {
    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("/create")
    public String journalForm(Model model) {
        model.addAttribute("journal", new Journal());
        return "journal";
    }

    @PostMapping("/create")
    public String journalSubmit(@ModelAttribute Journal journal ) {
        System.out.println(journal.getNote());
        System.out.println(journal.getSongLink());
        return "journal_success";
    }
}
