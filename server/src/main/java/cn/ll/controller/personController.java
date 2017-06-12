package cn.ll.controller;

import cn.ll.bean.PersonBean;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping("/person")
public class personController {
    @RequestMapping(value = "/get/{name}", method = RequestMethod.GET)
    public @ResponseBody Map<String,String> index(@PathVariable String name) {
        Map<String,String> result = new HashMap<String, String>();
        result.put("status","success");
        result.put("data",name);
        return result;
    }

    @RequestMapping(value = "/post/add", method = RequestMethod.POST)
    public @ResponseBody PersonBean add(@RequestBody Map<String,Object> body) {
        PersonBean personBean  =new PersonBean();
        personBean.setName("lianglin");
        personBean.setId((Integer)body.get("a"));
        return personBean;
    }
}
