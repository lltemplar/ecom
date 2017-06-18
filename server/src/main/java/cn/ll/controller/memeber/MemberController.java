package cn.ll.controller.memeber;

import cn.ll.bean.common.ResultError;
import cn.ll.bean.member.MemberBasicInfoBean;
import cn.ll.dao.member.IMemberDao;
import cn.ll.bean.common.ResultSucess;
import cn.ll.util.Encrypt;
import com.alibaba.druid.support.json.JSONUtils;
import com.mysql.jdbc.StringUtils;
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
public class MemberController {

    @Autowired
    private IMemberDao memberDao;

    public void insertMemberBasicInfo(MemberBasicInfoBean user) {
        memberDao.insertMemberBasicInfo(user);
    }

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public @ResponseBody
    Map<String, String> register(@RequestBody Map<String, String> data) {
        MemberBasicInfoBean memberBasicInfoBean = new MemberBasicInfoBean();
        String userName = data.get("userName");

        MemberBasicInfoBean user = memberDao.queryMemberBasicInfoByName(userName);
        if (user != null) {
            return new ResultError("001", "The user is exist");
        }

        String password = data.get("password");
        password = Encrypt.SHA256(password);
        System.out.println(String.format("The userName is %s,the password is %s........", userName, password));
        memberBasicInfoBean.setMemberName(userName);
        memberBasicInfoBean.setMemberPwd(password);
        memberDao.insertMemberBasicInfo(memberBasicInfoBean);

        return new ResultSucess();
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public @ResponseBody
    Map<String, String> login(@RequestBody Map<String, String> data) {
        MemberBasicInfoBean memberBasicInfoBean = new MemberBasicInfoBean();
        String userName = (String) data.get("userName");
        String password = (String) data.get("password");
        password = Encrypt.SHA256(password);

        MemberBasicInfoBean user = memberDao.queryMemberBasicInfoByName(userName);
        if (user != null) {
            String dbpassword = user.getMemberPwd();
            System.out.println(String.format("The password is %s", dbpassword));
            if(StringUtils.isNullOrEmpty(password)){
                return new ResultError("000", "The password is empty");
            }else if(password.equals(dbpassword)){
                return new ResultSucess();
            }else {
                return new ResultError("001", "The password is wrong");
            }
        } else {
            return new ResultError("002", "The user is not exist");
        }

    }
}
