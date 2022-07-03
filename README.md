# 买为

#### 介绍
一个仿淘宝的鸿蒙 HAP，使用 js 开发

#### 买为后端仓库链接
https://gitee.com/HRui66/buy-it-backend

#### 软件架构

#### 消息数据组成设计
##### 用户-用户
|       | send_type    | sender | receiver | content |
|-------|--------------|--------|----------|---------|
| 字符串消息 | int NORMAL=1 | int    | int      | String  |
| 商品分享  | int SHARE=2  | int    | int      | json    |

##### 后台-用户
|              | error_type |
|--------------|------------|
| 消息被对方屏蔽 | int REJECT=3  |
| 对方不接收商品分享  | int REJECT_PRODUCT=4 |







