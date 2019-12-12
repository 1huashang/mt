import axios from 'axios'
const instance = axios.create({
  //基础URL
	baseURL:`http://${process.env.HOST||'localhost'}:${process.env.PORT||3000}`,
  //设置超时
	// timeout:1000,
	headers:{

	}
})

export default instance
