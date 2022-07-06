import document from '@ohos.document';

export default {
    data: {
        title: ['全部', '美食', '音乐', '居家', '穿搭'],
        value:0,
        dynamic: [{
                      "image": "/common/findImage/image11.png",
                      "content": "好吃的",
                      "imagesrc": "/common/findImage/food (2).png",
                      "name": "桂电美食家"
                  },
                  {
                      "image": "/common/findImage/image12.png",
                      "content": "超有料的水果桶",
                      "imagesrc": "/common/icons/boy.png",
                      "name": "超能吃大嘴巴"
                  },
                  {
                      "image": "/common/findImage/music (3).png",
                      "content": "一篇乐谱",
                      "imagesrc": "/common/findImage/1 (3).png",
                      "name": "桂电号"
                  },
                  {
                      "image": "/common/findImage/food (4).png",
                      "content": "明明可以直接抢钱，他还给我一根雪糕",
                      "imagesrc": "/common/findImage/2 (3).png",
                      "name": "晓不得"
                  },
                  {
                      "image": "/common/findImage/clothes (2).png",
                      "content": "穿着看起来不错",
                      "imagesrc": "/common/findImage/1 (2).png",
                      "name": "超能吃大嘴巴"
                  },
                  {
                      "image": "/common/findImage/music (4).png",
                      "content": "试试弹钢琴",
                      "imagesrc": "/common/findImage/2 (3).png",
                      "name": "你是哪一个"
                  },
                  {
                      "image": "/common/findImage/jujia (3).png",
                      "content": "房间",
                      "imagesrc": "/common/findImage/1 (3).png",
                      "name": "好吧好吧"
                  },
                  {
                      "image": "/common/findImage/music (2).png",
                      "content": "音乐好物节",
                      "imagesrc": "/common/findImage/1 (2).png",
                      "name": "超能吃大嘴巴"
                  },
                  {
                      "image": "/common/findImage/clothes (4).png",
                      "content": "一个背包",
                      "imagesrc": "/common/findImage/2 (3).png",
                      "name": "帅哥666"
                  },

        ],
        familyData: [{
                         "image": "/common/findImage/jujia (1).png",
                         "content": "好吃的",
                         "imagesrc": "/common/findImage/1 (1).png",
                         "name": "桂电美食家"
                     },
                     {
                         "image": "/common/findImage/jujia (2).png",
                         "content": "调皮的猫想偷吃",
                         "imagesrc": "/common/findImage/1 (2).png",
                         "name": "超能吃大嘴巴"
                     },
                     {
                         "image": "/common/findImage/jujia (3).png",
                         "content": "房间",
                         "imagesrc": "/common/findImage/1 (3).png",
                         "name": "好吧好吧"
                     },
                     {
                         "image": "/common/findImage/jujia (4).png",
                         "content": "卧室被宠物霸占",
                         "imagesrc": "/common/findImage/2 (3).png",
                         "name": "桂电一号"
                     },

        ],
        musicData: [{
                        "image": "/common/findImage/music (1).png",
                        "content": "曾经的现场",
                        "imagesrc": "/common/findImage/1 (1).png",
                        "name": "桂电美食家"
                    },
                    {
                        "image": "/common/findImage/music (2).png",
                        "content": "音乐好物节",
                        "imagesrc": "/common/findImage/1 (2).png",
                        "name": "超能吃大嘴巴"
                    },
                    {
                        "image": "/common/findImage/music (3).png",
                        "content": "一篇乐谱",
                        "imagesrc": "/common/findImage/1 (3).png",
                        "name": "桂电号"
                    },
                    {
                        "image": "/common/findImage/music (4).png",
                        "content": "试试弹钢琴",
                        "imagesrc": "/common/findImage/2 (3).png",
                        "name": "你是哪一个"
                    },
        ],
        foodData: [{
                       "image": "/common/findImage/food (1).png",
                       "content": "好吃的葡萄",
                       "imagesrc": "/common/findImage/1 (1).png",
                       "name": "桂电美食家"
                   },
                   {
                       "image": "/common/findImage/food (2).png",
                       "content": "多芒小丸子，夏日必备",
                       "imagesrc": "/common/findImage/1 (2).png",
                       "name": "超能吃大嘴巴"
                   },
                   {
                       "image": "/common/findImage/food (3).png",
                       "content": "房间",
                       "imagesrc": "/common/findImage/1 (3).png",
                       "name": "桂电一号"
                   },
                   {
                       "image": "/common/findImage/food (4).png",
                       "content": "明明可以直接抢钱，他还给我一根雪糕",
                       "imagesrc": "/common/findImage/2 (3).png",
                       "name": "晓不得"
                   },
                   {
                       "image": "/common/findImage/food (4).png",
                       "content": "明明可以直接抢钱，他还给我一根雪糕",
                       "imagesrc": "/common/findImage/2 (3).png",
                       "name": "桂电一号"
                   },
        ],
        clothesData: [{
                          "image": "/common/findImage/clothes (1).png",
                          "content": "休闲穿搭",
                          "imagesrc": "/common/findImage/1 (1).png",
                          "name": "桂电美食家"
                      },
                      {
                          "image": "/common/findImage/clothes (2).png",
                          "content": "穿着看起来不错",
                          "imagesrc": "/common/findImage/1 (2).png",
                          "name": "超能吃大嘴巴"
                      },
                      {
                          "image": "/common/findImage/clothes (3).png",
                          "content": "一个大挎包",
                          "imagesrc": "/common/findImage/1 (3).png",
                          "name": "桂电一号"
                      },
                      {
                          "image": "/common/findImage/clothes (4).png",
                          "content": "一个背包",
                          "imagesrc": "/common/findImage/2 (3).png",
                          "name": "帅哥666"
                      },
        ]
    },
    tabchange(e) {
                console.info("Tab index: " + e.index )

    },
//    titleClick(e){
//        this.value=e
//        console.log(""+this.value)
//    }
}
