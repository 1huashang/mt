export default {
  dbs:'mongodb://127.0.0.1:27017/student',
  redis:{
    get host(){
      return '127.0.0.1'
    },
    get port(){
      //端口号
      return 6379
    }
  },
  smtp:{
    get host(){
      return 'smtp.qq.com'
    },
    get user(){
      return '508754230@qq.com'
    },
    get pass(){
      return 'kmjkoswpqyqqbjfa'
    },
    get code(){
      return ()=>{
        //给邮箱发送验证码,每次都不一样
        return Math.random().toString(16).slice(2,6).toUpperCase()
      }
    },
    get expire(){
      //设置过期时间,保证唯一
      return ()=>{
        return new Date().getTime()+60*60*1000
      }
    }
  }
}
