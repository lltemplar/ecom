package cn.ll.service.memeber;

import cn.ll.bean.member.MemberBasicInfoBean;
import org.junit.Before;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import static org.junit.Assert.*;

/**
 * Created by Administrator on 2017-6-5.
 */
public class MemberServiceImplTest {

    private IMemberService memberService;

    @Before
    public void before() {
        @SuppressWarnings("resource")
        ApplicationContext context = new ClassPathXmlApplicationContext(new String[]{"classpath:conf/spring.xml"
                , "classpath:conf/spring-mybatis.xml"});
        memberService = (IMemberService) context.getBean("memberServiceImpl");
    }

    @Test
    public void insertMemberBasicInfo() throws Exception {
        MemberBasicInfoBean memberBasicInfoBean = new MemberBasicInfoBean();
        memberBasicInfoBean.setMemberName("test");
        memberBasicInfoBean.setMemberPwd("test");
        memberService.insertMemberBasicInfo(memberBasicInfoBean);
    }

}