// @ts-nocheck
import document from '@ohos.document';

export default {
    data: {
        title: ['全部', '美食', '音乐', '居家', '穿搭'],
        value: 0,
        defaultIndex: 0,
        dynamic: [{
                      "image": "/common/findImage/image11.png",
                      "content": "好吃的",
                      "imagesrc": "/common/findImage/food (2).png",
                      "name": "桂电美食家",
                      "likeImageSrc": '/common/icons/like3.png',
                      "likeSum": 122
                  },
                  {
                      "image": "/common/findImage/image12.png",
                      "content": "超有料的水果桶",
                      "imagesrc": "/common/icons/boy.png",
                      "name": "超能吃大嘴巴",
                      "likeImageSrc": '/common/icons/like3.png',
                      "likeSum": 1
                  },
                  {
                      "image": "/common/findImage/music (3).png",
                      "content": "一篇乐谱",
                      "imagesrc": "/common/findImage/1 (3).png",
                      "name": "桂电号",
                      "likeImageSrc": '/common/icons/like3.png',
                      "likeSum": 12
                  },
                  {
                      "image": "/common/findImage/food (4).png",
                      "content": "明明可以直接抢钱，他还给我一根雪糕",
                      "imagesrc": "/common/findImage/2 (3).png",
                      "name": "晓不得",
                      "likeImageSrc": '/common/icons/like3.png',
                      "likeSum": 72
                  },
                  {
                      "image": "/common/findImage/clothes (2).png",
                      "content": "穿着看起来不错",
                      "imagesrc": "/common/findImage/1 (2).png",
                      "name": "超能吃大嘴巴",
                      "likeImageSrc": '/common/icons/like3.png',
                      "likeSum": 62
                  },
                  {
                      "image": "/common/findImage/music (4).png",
                      "content": "试试弹钢琴",
                      "imagesrc": "/common/findImage/2 (3).png",
                      "name": "你是哪一个",
                      "likeImageSrc": '/common/icons/like3.png',
                      "likeSum": 22
                  },
                  {
                      "image": "/common/findImage/jujia (3).png",
                      "content": "房间",
                      "imagesrc": "/common/findImage/1 (3).png",
                      "name": "好吧好吧",
                      "likeImageSrc": '/common/icons/like3.png',
                      "likeSum": 32
                  },
                  {
                      "image": "/common/findImage/music (2).png",
                      "content": "音乐好物节",
                      "imagesrc": "/common/findImage/1 (2).png",
                      "name": "超能吃大嘴巴",
                      "likeImageSrc": '/common/icons/like3.png',
                      "likeSum": 64
                  },
                  {
                      "image": "/common/findImage/clothes (4).png",
                      "content": "一个背包",
                      "imagesrc": "/common/findImage/2 (3).png",
                      "name": "帅哥666",
                      "likeImageSrc": '/common/icons/like3.png',
                      "likeSum": 8
                  },

        ],
        familyData: [{
                         "image": "/common/findImage/jujia (1).png",
                         "content": "好吃的",
                         "imagesrc": "/common/findImage/1 (1).png",
                         "name": "桂电美食家",
                         "likeImageSrc": '/common/icons/like3.png',
                         "likeSum": 82
                     },
                     {
                         "image": "/common/findImage/jujia (2).png",
                         "content": "调皮的猫想偷吃",
                         "imagesrc": "/common/findImage/1 (2).png",
                         "name": "超能吃大嘴巴",
                         "likeImageSrc": '/common/icons/like3.png',
                         "likeSum": 56
                     },
                     {
                         "image": "/common/findImage/jujia (3).png",
                         "content": "房间",
                         "imagesrc": "/common/findImage/1 (3).png",
                         "name": "好吧好吧",
                         "likeImageSrc": '/common/icons/like3.png',
                         "likeSum": 28
                     },
                     {
                         "image": "/common/findImage/jujia (4).png",
                         "content": "卧室被宠物霸占",
                         "imagesrc": "/common/findImage/2 (3).png",
                         "name": "桂电一号",
                         "likeImageSrc": '/common/icons/like3.png',
                         "likeSum": 37
                     },

        ],
        musicData: [{
                        "image": "/common/findImage/music (1).png",
                        "content": "曾经的现场",
                        "imagesrc": "/common/findImage/1 (1).png",
                        "name": "桂电美食家",
                        "likeImageSrc": '/common/icons/like3.png',
                        "likeSum": 89
                    },
                    {
                        "image": "/common/findImage/music (2).png",
                        "content": "音乐好物节",
                        "imagesrc": "/common/findImage/1 (2).png",
                        "name": "超能吃大嘴巴",
                        "likeImageSrc": '/common/icons/like3.png',
                        "likeSum": 76
                    },
                    {
                        "image": "/common/findImage/music (3).png",
                        "content": "一篇乐谱",
                        "imagesrc": "/common/findImage/1 (3).png",
                        "name": "桂电号",
                        "likeImageSrc": '/common/icons/like3.png',
                        "likeSum": 64
                    },
                    {
                        "image": "/common/findImage/music (4).png",
                        "content": "试试弹钢琴",
                        "imagesrc": "/common/findImage/2 (3).png",
                        "name": "你是哪一个",
                        "likeImageSrc": '/common/icons/like3.png',
                        "likeSum": 51
                    },
        ],
        foodData: [{
                       "image": "/common/findImage/food (1).png",
                       "content": "好吃的葡萄",
                       "imagesrc": "/common/findImage/1 (1).png",
                       "name": "桂电美食家",
                       "likeImageSrc": '/common/icons/like3.png',
                       "likeSum": 45
                   },
                   {
                       "image": "/common/findImage/food (2).png",
                       "content": "多芒小丸子，夏日必备",
                       "imagesrc": "/common/findImage/1 (2).png",
                       "name": "超能吃大嘴巴",
                       "likeImageSrc": '/common/icons/like3.png',
                       "likeSum": 174
                   },
                   {
                       "image": "/common/findImage/food (3).png",
                       "content": "房间",
                       "imagesrc": "/common/findImage/1 (3).png",
                       "name": "桂电一号",
                       "likeImageSrc": '/common/icons/like3.png',
                       "likeSum": 33
                   },
                   {
                       "image": "/common/findImage/food (4).png",
                       "content": "明明可以直接抢钱，他还给我一根雪糕",
                       "imagesrc": "/common/findImage/2 (3).png",
                       "name": "晓不得",
                       "likeImageSrc": '/common/icons/like3.png',
                       "likeSum": 77
                   },
                   {
                       "image": "/common/findImage/food (4).png",
                       "content": "明明可以直接抢钱，他还给我一根雪糕",
                       "imagesrc": "/common/findImage/2 (3).png",
                       "name": "桂电一号",
                       "likeImageSrc": '/common/icons/like3.png',
                       "likeSum": 111
                   },
        ],
        clothesData: [{
                          "image": "/common/findImage/clothes (1).png",
                          "content": "休闲穿搭",
                          "imagesrc": "/common/findImage/1 (1).png",
                          "name": "桂电美食家",
                          "likeImageSrc": '/common/icons/like3.png',
                          "likeSum": 22
                      },
                      {
                          "image": "/common/findImage/clothes (2).png",
                          "content": "穿着看起来不错",
                          "imagesrc": "/common/findImage/1 (2).png",
                          "name": "超能吃大嘴巴",
                          "likeImageSrc": '/common/icons/like3.png',
                          "likeSum": 122
                      },
                      {
                          "image": "/common/findImage/clothes (3).png",
                          "content": "一个大挎包",
                          "imagesrc": "/common/findImage/1 (3).png",
                          "name": "桂电一号",
                          "likeImageSrc": '/common/icons/like3.png',
                          "likeSum": 122
                      },
                      {
                          "image": "/common/findImage/clothes (4).png",
                          "content": "一个背包",
                          "imagesrc": "/common/findImage/2 (3).png",
                          "name": "帅哥666",
                          "likeImageSrc": '/common/icons/like3.png',
                          "likeSum": 122
                      },
        ]
    },
    tabchange(e) {
        console.info("Tab index: " + e.index)
        this.defaultIndex = e.index
    },
    //    titleClick(e){
    //        this.defaultIndex = e
    //        console.log(""+this.value)
    //    }
    findLikeClick(e){
        console.log(e)
        if (this.dynamic[e].likeImageSrc == '/common/icons/like3.png') {
            this.dynamic[e].likeImageSrc = '/common/icons/like2.png'
            this.dynamic[e].likeSum=this.dynamic[e].likeSum+1
        }else{
            this.dynamic[e].likeImageSrc = '/common/icons/like3.png'
            this.dynamic[e].likeSum=this.dynamic[e].likeSum-1
        }
    },
    foodLikeClick(e){
        console.log(e)
        if (this.foodData[e].likeImageSrc == '/common/icons/like3.png') {
            this.foodData[e].likeImageSrc = '/common/icons/like2.png'
            this.foodData[e].likeSum=this.foodData[e].likeSum+1
        }else{
            this.foodData[e].likeImageSrc = '/common/icons/like3.png'
            this.foodData[e].likeSum=this.foodData[e].likeSum-1
        }
    },
    musicLikeClick(e){
        console.log(e)
        if (this.musicData[e].likeImageSrc == '/common/icons/like3.png') {
            this.musicData[e].likeImageSrc = '/common/icons/like2.png'
            this.musicData[e].likeSum=this.musicData[e].likeSum+1
        }else{
            this.musicData[e].likeImageSrc = '/common/icons/like3.png'
            this.musicData[e].likeSum=this.musicData[e].likeSum-1
        }
    },
    homeLikeClick(e){
        console.log(e)
        if (this.familyData[e].likeImageSrc == '/common/icons/like3.png') {
            this.familyData[e].likeImageSrc = '/common/icons/like2.png'
            this.familyData[e].likeSum=this.familyData[e].likeSum+1
        }else{
            this.familyData[e].likeImageSrc = '/common/icons/like3.png'
            this.familyData[e].likeSum=this.familyData[e].likeSum-1
        }
    },
    clothLikeClick(e){
        console.log(e)
        if (this.clothesData[e].likeImageSrc == '/common/icons/like3.png') {
            this.clothesData[e].likeImageSrc = '/common/icons/like2.png'
            this.clothesData[e].likeSum=this.clothesData[e].likeSum+1
        }else{
            this.clothesData[e].likeImageSrc = '/common/icons/like3.png'
            this.clothesData[e].likeSum=this.clothesData[e].likeSum-1
        }
    }
}
