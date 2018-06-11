import axios from 'axios';
// 设置默认基本路径
axios.defaults.baseURL =
'http://localhost:3000';

// 获取轮播图数据
export let getSlider = () =>{
    return axios.get('/sliders');
}