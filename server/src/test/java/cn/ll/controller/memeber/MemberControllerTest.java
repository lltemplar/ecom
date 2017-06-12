package cn.ll.controller.memeber;

import cn.ll.bean.member.MemberBasicInfoBean;
import org.junit.Before;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.util.HashMap;
import java.util.Map;

import static org.junit.Assert.*;

/**
 * Created by Administrator on 2017-6-13.
 */
public class MemberControllerTest {
    @Before
    public void before() {
        @SuppressWarnings("resource")
        ApplicationContext context = new ClassPathXmlApplicationContext(new String[]{"classpath:conf/spring.xml"
                , "classpath:conf/spring-mybatis.xml"});
    }

    @Test
    public void register() throws Exception {
        MemberController memberController = new MemberController();
        Map<String,Object> param = new HashMap<String,Object>();
        param.put("userName","lianglin");
        param.put("password","123123");
        memberController.register(param);
    }

}