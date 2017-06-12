package cn.ll.dao;

import java.util.List;

import cn.ll.bean.PersonBean;

public interface IPersonDao {
	/** 
     * 插入一条记录 
     * @param person 
     */  
    public void insert(PersonBean person);  
      
    /** 
     * 查询所有记录 
     * @return 
     */  
    public List<PersonBean> queryAll();  
}
