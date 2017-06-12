package cn.ll.service.memeber;

import cn.ll.bean.member.MemberBasicInfoBean;
import cn.ll.dao.member.IMemberDao;
import cn.ll.bean.common.ResultSucess;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Map;

/**
 * Created by Administrator on 2017-6-4.
 */
@Service
public class MemberServiceImpl implements IMemberService {

    @Autowired
    private IMemberDao memberDao;

    public void insertMemberBasicInfo(MemberBasicInfoBean user) {
        memberDao.insertMemberBasicInfo(user);
    }

    @RequestMapping(value = "/regist", method = RequestMethod.POST)
    public @ResponseBody
    Map<String, String> register(@RequestBody Map<String, Object> data) {
        return new ResultSucess();
    }
}
