package cn.ll.controller.memeber;

import cn.ll.bean.member.MemberBasicInfoBean;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.Map;

import static org.junit.Assert.*;

/**
 * Created by Administrator on 2017-6-13.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath:conf/spring.xml", "classpath:conf/spring-mybatis.xml", "classpath:conf/spring-mvc.xml"})
@Transactional()
public class MemberControllerTest {

    @Autowired
    private  MemberController memberController;

    @Test
    @Rollback(true)
    public void register() throws Exception {
        Map<String, Object> param = new HashMap<String, Object>();
        param.put("userName", "TestUser");
        param.put("password", "123123");
        Map<String,String> result = memberController.register(param);
        Assert.assertEquals(result.get("status"),"Success");
    }

}