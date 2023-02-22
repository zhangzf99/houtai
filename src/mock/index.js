import Mock from "mockjs";

//Random方法是mockjs的核心方法，可以生成各种占位符
const Random = Mock.Random;

// 如果下面直接这样写，只是模拟了一段静态的json文件
let json = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  "list|1-10": [
    {
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      "id|+1": 1,
    },
  ],
});
// export default json;  //这样只是导出了一段json,需要在使用的地方直接导入即可

// 如果是想通过模拟接口来使用数据，可以这样做：
Mock.mock("/api/userList", "get", {
  // 生成招聘岗位数据
  "data|0-120": [
    {
      //随机生成guid
      guid: "@guid",
      // 属性名|生成规则:属性值
      "name|1": ["王宇", "朱华", "吴强", "张迪", "马慧"],
      companyDescription: "@cparagraph(1)",
      logo: function () {
        return Random.image("36x36", "#d8d8d8", "#000", "png", "Logo");
      },
      "city|1": "长沙市岳麓区",
      "sex|+1": ["男", "女"],
      // 薪资
      "salaryRange|1": ["5k-8k", "10k-15k", "15k-20k"],
      // 工作年限
      "workTime|2-10": 2,
      // 年纪
      "age|1-100": 1,
      // 学历
      "degree|1": ["专科", "本科", "硕士", "博士"],
      // 用户状态
      "status|+1": [true, false],
      // 职位描述
      jobDescription: "@cparagraph(1)",
    },
  ],
});
