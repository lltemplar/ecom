package cn.ll.dao.member;

import cn.ll.bean.member.MemberBasicInfoBean;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * Created by Administrator on 2017-6-4.
 */
@Component
public interface IMemberDao {

    /**
     * insert member basic info
     *
     * @param memberBasicInfoBean
     */
    public void insertMemberBasicInfo(MemberBasicInfoBean memberBasicInfoBean);


    public MemberBasicInfoBean queryMemberBasicInfoByName(String userName);
}
