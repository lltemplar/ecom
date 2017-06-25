package cn.ll.bean.common;

import java.util.HashMap;

/**
 * Created by Administrator on 2017-6-14.
 */
public class ResultError extends HashMap<String, Object> {
    public ResultError() {
        this.put("status", "Error");
        this.put("code", "000");
        this.put("msg", "System Error.");
    }

    public ResultError(String code, String msg) {
        this.put("status", "Error");
        this.put("code", code);
        this.put("msg", msg);
    }

    public ResultError setError(String errorCode) {
        this.put("code", errorCode);
        return this;
    }

    public ResultError setErrorMsg(String errorMsg) {
        this.put("msg", errorMsg);
        return this;
    }
}
