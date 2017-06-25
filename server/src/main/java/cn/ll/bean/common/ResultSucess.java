package cn.ll.bean.common;

import java.util.HashMap;

/**
 * Created by Administrator on 2017-6-12.
 */
public class ResultSucess extends HashMap<String, Object> {

    public ResultSucess() {
        this.put("status", "Success");
    }

    public ResultSucess setData(Object data) {
        this.put("data",data);
        return this;
    }
}
