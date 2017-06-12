package cn.ll.controller.memeber;

import cn.ll.bean.member.MemberBasicInfoBean;
import cn.ll.dao.member.IMemberDao;
import cn.ll.bean.common.ResultSucess;
import cn.ll.util.Encrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Map;

/**
 * Created by Administrator on 2017-6-4.
 */
@Controller
@RequestMapping("/v1/member")
public class MemberController{

    @Autowired
    private IMemberDao memberDao;

    public void insertMemberBasicInfo(MemberBasicInfoBean user) {
        memberDao.insertMemberBasicInfo(user);
    }

    @RequestMapping(value = "/regist", method = RequestMethod.POST)
    public @ResponseBody
    Map<String, String> register(@RequestBody Map<String, Object> data) {
        MemberBasicInfoBean memberBasicInfoBean = new MemberBasicInfoBean();
        String userName = (String)data.get("userName");
        String password = (String)data.get("password");
        password = Encrypt.SHA256(password);
        System.out.println(String.format("The userName is %s,the password is %s........",userName,password));
        memberBasicInfoBean.setMemberName(userName);
        memberBasicInfoBean.setMemberPwd(password);
        memberDao.insertMemberBasicInfo(memberBasicInfoBean);
        return new ResultSucess();
    }
}
