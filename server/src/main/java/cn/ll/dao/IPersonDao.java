package cn.ll.dao;

import java.util.List;

import cn.ll.bean.PersonBean;

public interface IPersonDao {
	/** 
     * ����һ����¼ 
     * @param person 
     */  
    public void insert(PersonBean person);  
      
    /** 
     * ��ѯ���м�¼ 
     * @return 
     */  
    public List<PersonBean> queryAll();  
}
