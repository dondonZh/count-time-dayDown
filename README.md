# count_down

> count_down

## Build Setup
### 安装教程
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
### 使用
> 组件引用
```javascript
import countDown from 'count_time_daydown'

 components:{
    countDown
  }

```
> 全局引用 在main.js中引用
```javascript
import countDown from 'count_time_daydown'

Vue.component('countDown', countDown)
```
### 参数设置
#### endTime （传入当前时间）2019/02/22格式

#### seconds （传入当前时间）秒格式

#### timeDown 时间到达后的截止函数

## 示例
```javascript
<countDown  @time-end="timeOver" :endTime='endTime'></countDown>
```
![time.png](http://tc.lihail.cn/time.png)