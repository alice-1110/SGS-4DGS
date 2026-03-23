window.N3D_SHOWCASE_DATA = {
  "defaultScene": "coffee_martini",
  "viewOrder": [
    {
      "key": "2views",
      "label": "2 Views"
    },
    {
      "key": "3views",
      "label": "3 Views"
    },
    {
      "key": "4views",
      "label": "4 Views"
    }
  ],
  "scenes": [
    {
      "key": "coffee_martini",
      "label": "Coffee Martini",
      "thumb": "./n3d/thumbs/coffee_martini.png",
      "methodKey": "4DGaussians",
      "methodLabel": "4DGaussians",
      "views": {
        "2views": {
          "label": "2 Views",
          "leftLabel": "Ours",
          "rightLabel": "4DGaussians",
          "leftVideo": "./n3d/videos/coffee_martini/2views/ours.mp4",
          "rightVideo": "./n3d/videos/coffee_martini/2views/baseline.mp4",
          "poster": "./n3d/thumbs/coffee_martini.png",
          "leftMetrics": {
            "psnr": 23.08164504536519,
            "ssim": 0.8369954574108124,
            "lpips": 0.10658204925556977,
            "train_time": 1218.1255309581757,
            "eval_time": 84.0890474319458,
            "fps": 472.66295782075514,
            "model_size": 31238511
          },
          "rightMetrics": {
            "psnr": 19.125154095547703,
            "ssim": 0.718804228703181,
            "lpips": 0.21652373904983202,
            "train_time": 3084.0,
            "eval_time": 169.0,
            "fps": 11.192607609321284,
            "model_size": 29189943
          }
        },
        "3views": {
          "label": "3 Views",
          "leftLabel": "Ours",
          "rightLabel": "4DGaussians",
          "leftVideo": "./n3d/videos/coffee_martini/3views/ours.mp4",
          "rightVideo": "./n3d/videos/coffee_martini/3views/baseline.mp4",
          "poster": "./n3d/thumbs/coffee_martini.png",
          "leftMetrics": {
            "psnr": 23.29858496556455,
            "ssim": 0.8487583102782568,
            "lpips": 0.10538583199183146,
            "train_time": 1323.3471503257751,
            "eval_time": 69.05672717094421,
            "fps": 455.7325700594685,
            "model_size": 34843223
          },
          "rightMetrics": {
            "psnr": 21.577693790889754,
            "ssim": 0.8160680884122848,
            "lpips": 0.13234847436348599,
            "train_time": 3675.0,
            "eval_time": 78.06277751922607,
            "fps": 10.015238725357628,
            "model_size": 30287999
          }
        },
        "4views": {
          "label": "4 Views",
          "leftLabel": "Ours",
          "rightLabel": "4DGaussians",
          "leftVideo": "./n3d/videos/coffee_martini/4views/ours.mp4",
          "rightVideo": "./n3d/videos/coffee_martini/4views/baseline.mp4",
          "poster": "./n3d/thumbs/coffee_martini.png",
          "leftMetrics": {
            "psnr": 24.2056043088034,
            "ssim": 0.8616299617290497,
            "lpips": 0.09405369932452838,
            "train_time": 1417.6564111709595,
            "eval_time": 68.2707302570343,
            "fps": 391.6116328232314,
            "model_size": 38654096
          },
          "rightMetrics": {
            "psnr": 23.666999684878398,
            "ssim": 0.8627799852689108,
            "lpips": 0.09321528635919094,
            "train_time": 3289.0,
            "eval_time": 76.0,
            "fps": 10.41789291534261,
            "model_size": 38246616
          }
        }
      }
    },
    {
      "key": "cook_spinach",
      "label": "Cook Spinach",
      "thumb": "./n3d/thumbs/cook_spinach.png",
      "methodKey": "cem4dgs",
      "methodLabel": "CEM-4DGS",
      "views": {
        "2views": {
          "label": "2 Views",
          "leftLabel": "Ours",
          "rightLabel": "CEM-4DGS",
          "leftVideo": "./n3d/videos/cook_spinach/2views/ours.mp4",
          "rightVideo": "./n3d/videos/cook_spinach/2views/baseline.mp4",
          "poster": "./n3d/thumbs/cook_spinach.png",
          "leftMetrics": {
            "psnr": 27.833907727526316,
            "ssim": 0.9004861378669738,
            "lpips": 0.08882084312538306,
            "train_time": 1082.0,
            "eval_time": 78.74148154258728,
            "fps": 558.5998527600212,
            "model_size": 28623559
          },
          "rightMetrics": {
            "psnr": 22.900306701660156,
            "ssim": 0.7949084043502808,
            "lpips": 0.1917816400527954,
            "train_time": 11342.0,
            "eval_time": 715.0,
            "fps": 0.4195804195804196,
            "model_size": 328972120
          }
        },
        "3views": {
          "label": "3 Views",
          "leftLabel": "Ours",
          "rightLabel": "CEM-4DGS",
          "leftVideo": "./n3d/videos/cook_spinach/3views/ours.mp4",
          "rightVideo": "./n3d/videos/cook_spinach/3views/baseline.mp4",
          "poster": "./n3d/thumbs/cook_spinach.png",
          "leftMetrics": {
            "psnr": 29.726309247572267,
            "ssim": 0.9273534590005874,
            "lpips": 0.05449379425495863,
            "train_time": 1147.0,
            "eval_time": 72.0,
            "fps": 614.3460106040219,
            "model_size": 35934695
          },
          "rightMetrics": {
            "psnr": 26.59340476989746,
            "ssim": 0.8877400755882263,
            "lpips": 0.09130895882844925,
            "train_time": 11733.0,
            "eval_time": 730.0,
            "fps": 0.410958904109589,
            "model_size": 342790064
          }
        },
        "4views": {
          "label": "4 Views",
          "leftLabel": "Ours",
          "rightLabel": "CEM-4DGS",
          "leftVideo": "./n3d/videos/cook_spinach/4views/ours.mp4",
          "rightVideo": "./n3d/videos/cook_spinach/4views/baseline.mp4",
          "poster": "./n3d/thumbs/cook_spinach.png",
          "leftMetrics": {
            "psnr": 30.145447495853162,
            "ssim": 0.9229107944170634,
            "lpips": 0.05955393694341183,
            "train_time": 1235.0,
            "eval_time": 70.01408076286316,
            "fps": 463.504469695588,
            "model_size": 36052432
          },
          "rightMetrics": {
            "psnr": 26.262975692749023,
            "ssim": 0.8619443774223328,
            "lpips": 0.11256647855043411,
            "train_time": 11353.0,
            "eval_time": 351.0,
            "fps": 0.8547008547008547,
            "model_size": 345425944
          }
        }
      }
    },
    {
      "key": "cut_roasted_beef",
      "label": "Cut Roasted Beef",
      "thumb": "./n3d/thumbs/cut_roasted_beef.png",
      "methodKey": "ex4dgs",
      "methodLabel": "Ex4DGS",
      "views": {
        "2views": {
          "label": "2 Views",
          "leftLabel": "Ours",
          "rightLabel": "Ex4DGS",
          "leftVideo": "./n3d/videos/cut_roasted_beef/2views/ours.mp4",
          "rightVideo": "./n3d/videos/cut_roasted_beef/2views/baseline.mp4",
          "poster": "./n3d/thumbs/cut_roasted_beef.png",
          "leftMetrics": {
            "psnr": 24.915570957758572,
            "ssim": 0.8772301294406255,
            "lpips": 0.1071621182312568,
            "train_time": 1061.0,
            "eval_time": 71.0,
            "fps": 618.3381630062664,
            "model_size": 30044143
          },
          "rightMetrics": {
            "psnr": 24.192514419555664,
            "ssim": 0.818864643573761,
            "lpips": 0.15577669441699982,
            "train_time": 4867.0,
            "eval_time": 2185.0,
            "fps": 57.275767410445624,
            "model_size": 139280568
          }
        },
        "3views": {
          "label": "3 Views",
          "leftLabel": "Ours",
          "rightLabel": "Ex4DGS",
          "leftVideo": "./n3d/videos/cut_roasted_beef/3views/ours.mp4",
          "rightVideo": "./n3d/videos/cut_roasted_beef/3views/baseline.mp4",
          "poster": "./n3d/thumbs/cut_roasted_beef.png",
          "leftMetrics": {
            "psnr": 32.40423569255146,
            "ssim": 0.9400700585047403,
            "lpips": 0.05090373980502288,
            "train_time": 1174.5850257873535,
            "eval_time": 67.0,
            "fps": 599.4473731443857,
            "model_size": 36214504
          },
          "rightMetrics": {
            "psnr": 27.300355911254883,
            "ssim": 0.8900780081748962,
            "lpips": 0.10006489604711533,
            "train_time": 4748.0,
            "eval_time": 2085.0,
            "fps": 72.6436470304404,
            "model_size": 134944187
          }
        },
        "4views": {
          "label": "4 Views",
          "leftLabel": "Ours",
          "rightLabel": "Ex4DGS",
          "leftVideo": "./n3d/videos/cut_roasted_beef/4views/ours.mp4",
          "rightVideo": "./n3d/videos/cut_roasted_beef/4views/baseline.mp4",
          "poster": "./n3d/thumbs/cut_roasted_beef.png",
          "leftMetrics": {
            "psnr": 31.08280122192451,
            "ssim": 0.9312269270420075,
            "lpips": 0.05722081204255422,
            "train_time": 1179.0,
            "eval_time": 64.60210657119751,
            "fps": 539.7231125208108,
            "model_size": 34230639
          },
          "rightMetrics": {
            "psnr": 25.88844108581543,
            "ssim": 0.8893084526062012,
            "lpips": 0.10324740409851074,
            "train_time": 4674.0,
            "eval_time": 1031.0,
            "fps": 70.99358411466541,
            "model_size": 123438779
          }
        }
      }
    },
    {
      "key": "flame_salmon_1",
      "label": "Flame Salmon",
      "thumb": "./n3d/thumbs/flame_salmon_1.png",
      "methodKey": "spacetimegs",
      "methodLabel": "SpaceTimeGS",
      "views": {
        "2views": {
          "label": "2 Views",
          "leftLabel": "Ours",
          "rightLabel": "SpaceTimeGS",
          "leftVideo": "./n3d/videos/flame_salmon_1/2views/ours.mp4",
          "rightVideo": "./n3d/videos/flame_salmon_1/2views/baseline.mp4",
          "poster": "./n3d/thumbs/flame_salmon_1.png",
          "leftMetrics": {
            "psnr": 22.766238078495284,
            "ssim": 0.8315377565224965,
            "lpips": 0.12280566245317459,
            "train_time": 1189.4726622104645,
            "eval_time": 73.0,
            "fps": 431.5023525345807,
            "model_size": 41231664
          },
          "rightMetrics": {
            "psnr": 17.454174655466495,
            "ssim": 0.6892848042647044,
            "lpips": 0.27208746075630186,
            "train_time": 3449.515545129776,
            "eval_time": 1021.0,
            "fps": 11.140832670613088,
            "model_size": 9459208
          }
        },
        "3views": {
          "label": "3 Views",
          "leftLabel": "Ours",
          "rightLabel": "SpaceTimeGS",
          "leftVideo": "./n3d/videos/flame_salmon_1/3views/ours.mp4",
          "rightVideo": "./n3d/videos/flame_salmon_1/3views/baseline.mp4",
          "poster": "./n3d/thumbs/flame_salmon_1.png",
          "leftMetrics": {
            "psnr": 25.998593988886043,
            "ssim": 0.8775751461585363,
            "lpips": 0.08362543632586797,
            "train_time": 1310.0,
            "eval_time": 66.09568786621094,
            "fps": 400.33231992714735,
            "model_size": 37114720
          },
          "rightMetrics": {
            "psnr": 22.367415798521414,
            "ssim": 0.8257749464114507,
            "lpips": 0.14646593327323595,
            "train_time": 3172.0,
            "eval_time": 1083.0,
            "fps": 11.87514726554196,
            "model_size": 15772425
          }
        },
        "4views": {
          "label": "4 Views",
          "leftLabel": "Ours",
          "rightLabel": "SpaceTimeGS",
          "leftVideo": "./n3d/videos/flame_salmon_1/4views/ours.mp4",
          "rightVideo": "./n3d/videos/flame_salmon_1/4views/baseline.mp4",
          "poster": "./n3d/thumbs/flame_salmon_1.png",
          "leftMetrics": {
            "psnr": 26.25726357480839,
            "ssim": 0.8914286830027898,
            "lpips": 0.08057805024087429,
            "train_time": 1398.0,
            "eval_time": 66.17241215705872,
            "fps": 389.80983905677465,
            "model_size": 38887144
          },
          "rightMetrics": {
            "psnr": 23.858659701239564,
            "ssim": 0.8572610280911128,
            "lpips": 0.11350500044723352,
            "train_time": 3188.0,
            "eval_time": 1001.0,
            "fps": 11.833216584490824,
            "model_size": 18357257
          }
        }
      }
    },
    {
      "key": "flame_steak",
      "label": "Flame Steak",
      "thumb": "./n3d/thumbs/flame_steak.png",
      "methodKey": "swift4d",
      "methodLabel": "Swift4D",
      "views": {
        "2views": {
          "label": "2 Views",
          "leftLabel": "Ours",
          "rightLabel": "Swift4D",
          "leftVideo": "./n3d/videos/flame_steak/2views/ours.mp4",
          "rightVideo": "./n3d/videos/flame_steak/2views/baseline.mp4",
          "poster": "./n3d/thumbs/flame_steak.png",
          "leftMetrics": {
            "psnr": 27.986509049322716,
            "ssim": 0.9123515168825785,
            "lpips": 0.07281280549863975,
            "train_time": 1143.546737909317,
            "eval_time": 70.65627884864807,
            "fps": 414.46351617312644,
            "model_size": 28413239
          },
          "rightMetrics": {
            "psnr": 23.772733083552236,
            "ssim": 0.8575271966060003,
            "lpips": 0.10006079172094663,
            "train_time": 1996.0,
            "eval_time": 63.43224596977234,
            "fps": 156.3851066042538,
            "model_size": 144938305
          }
        },
        "3views": {
          "label": "3 Views",
          "leftLabel": "Ours",
          "rightLabel": "Swift4D",
          "leftVideo": "./n3d/videos/flame_steak/3views/ours.mp4",
          "rightVideo": "./n3d/videos/flame_steak/3views/baseline.mp4",
          "poster": "./n3d/thumbs/flame_steak.png",
          "leftMetrics": {
            "psnr": 29.31457406804342,
            "ssim": 0.9362490077813467,
            "lpips": 0.04335693967839082,
            "train_time": 2010.0,
            "eval_time": 69.16911005973816,
            "fps": 606.4232209761625,
            "model_size": 35024607
          },
          "rightMetrics": {
            "psnr": 29.623140683672155,
            "ssim": 0.9326186203956603,
            "lpips": 0.0413546813155214,
            "train_time": 2271.0,
            "eval_time": 62.8696084022522,
            "fps": 165.89028726565013,
            "model_size": 149703877
          }
        },
        "4views": {
          "label": "4 Views",
          "leftLabel": "Ours",
          "rightLabel": "Swift4D",
          "leftVideo": "./n3d/videos/flame_steak/4views/ours.mp4",
          "rightVideo": "./n3d/videos/flame_steak/4views/baseline.mp4",
          "poster": "./n3d/thumbs/flame_steak.png",
          "leftMetrics": {
            "psnr": 29.577273554068462,
            "ssim": 0.9317676764726639,
            "lpips": 0.05093060923119386,
            "train_time": 1175.0,
            "eval_time": 65.0,
            "fps": 554.6353985082454,
            "model_size": 34317823
          },
          "rightMetrics": {
            "psnr": 28.674024816811542,
            "ssim": 0.9039766081174214,
            "lpips": 0.06513727231572072,
            "train_time": 2053.0,
            "eval_time": 66.0,
            "fps": 151.63103161347377,
            "model_size": 151810849
          }
        }
      }
    },
    {
      "key": "sear_steak",
      "label": "Sear Steak",
      "thumb": "./n3d/thumbs/sear_steak.png",
      "methodKey": "4DGaussians",
      "methodLabel": "4DGaussians",
      "views": {
        "2views": {
          "label": "2 Views",
          "leftLabel": "Ours",
          "rightLabel": "4DGaussians",
          "leftVideo": "./n3d/videos/sear_steak/2views/ours.mp4",
          "rightVideo": "./n3d/videos/sear_steak/2views/baseline.mp4",
          "poster": "./n3d/thumbs/sear_steak.png",
          "leftMetrics": {
            "psnr": 28.062767080969177,
            "ssim": 0.9135538309812545,
            "lpips": 0.06879852193097273,
            "train_time": 1167.0,
            "eval_time": 71.0835485458374,
            "fps": 517.9401977714534,
            "model_size": 27245015
          },
          "rightMetrics": {
            "psnr": 23.973571653280036,
            "ssim": 0.8604873740673065,
            "lpips": 0.11246589004993439,
            "train_time": 2824.0,
            "eval_time": 73.26945424079895,
            "fps": 11.585408306097795,
            "model_size": 24432407
          }
        },
        "3views": {
          "label": "3 Views",
          "leftLabel": "Ours",
          "rightLabel": "4DGaussians",
          "leftVideo": "./n3d/videos/sear_steak/3views/ours.mp4",
          "rightVideo": "./n3d/videos/sear_steak/3views/baseline.mp4",
          "poster": "./n3d/thumbs/sear_steak.png",
          "leftMetrics": {
            "psnr": 29.749656044469976,
            "ssim": 0.9349427555004756,
            "lpips": 0.04592712658147017,
            "train_time": 1140.0134842395782,
            "eval_time": 73.0,
            "fps": 613.5642584883761,
            "model_size": 35105207
          },
          "rightMetrics": {
            "psnr": 30.607906393361784,
            "ssim": 0.9317794410387675,
            "lpips": 0.046918771080672744,
            "train_time": 1683.0,
            "eval_time": 75.0,
            "fps": 11.821533038410443,
            "model_size": 32546639
          }
        },
        "4views": {
          "label": "4 Views",
          "leftLabel": "Ours",
          "rightLabel": "4DGaussians",
          "leftVideo": "./n3d/videos/sear_steak/4views/ours.mp4",
          "rightVideo": "./n3d/videos/sear_steak/4views/baseline.mp4",
          "poster": "./n3d/thumbs/sear_steak.png",
          "leftMetrics": {
            "psnr": 29.30485682011606,
            "ssim": 0.929949791431427,
            "lpips": 0.05261284886548916,
            "train_time": 1260.0,
            "eval_time": 63.0,
            "fps": 521.4954656261448,
            "model_size": 34564223
          },
          "rightMetrics": {
            "psnr": 29.209977230909438,
            "ssim": 0.9057774905363719,
            "lpips": 0.06789820338288943,
            "train_time": 1622.0,
            "eval_time": 65.02623867988586,
            "fps": 12.526156654494494,
            "model_size": 32913631
          }
        }
      }
    }
  ]
};
