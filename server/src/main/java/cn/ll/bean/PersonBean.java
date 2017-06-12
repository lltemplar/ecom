package cn.ll.bean;

public class PersonBean implements java.io.Serializable {

	private static final long serialVersionUID = 7375936354930720309L;
	
	private Integer id;
	
	private String name;
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override  
    public String toString() {  
        return "PersonEntity [id=" + id + ", name=" + name + "]";  
    } 
}
