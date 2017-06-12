package cn.ll.bean.member;

/**
 * Created by Administrator on 2017-6-4.
 */
public class MemberBasicInfoBean {
    //会员名称
    private String memberName;

    //会员密码
    private String memberPwd;

    public String getMemberName() {
        return memberName;
    }

    public void setMemberName(String memberName) {
        this.memberName = memberName;
    }

    public String getMemberPwd() {
        return memberPwd;
    }

    public void setMemberPwd(String memberPwd) {
        this.memberPwd = memberPwd;
    }
}
