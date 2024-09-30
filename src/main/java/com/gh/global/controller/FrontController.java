package com.gh.global.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class FrontController {

    @RequestMapping("/{page:^(?!.*[.].*$).*$}")
    public String requestPage(@PathVariable("page") String page) {
        String htmlPage = "/"+page+".html";
        return htmlPage;
    }
}
