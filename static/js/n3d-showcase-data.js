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
  "methodOrder": [
    {
      "key": "4DGaussians",
      "label": "4DGaussians"
    },
    {
      "key": "cem4dgs",
      "label": "CEM-4DGS"
    },
    {
      "key": "ex4dgs",
      "label": "Ex4DGS"
    },
    {
      "key": "spacetimegs",
      "label": "STGS"
    },
    {
      "key": "swift4d",
      "label": "Swift4D"
    }
  ],
  "scenes": [
    {
      "key": "coffee_martini",
      "label": "Coffee Martini",
      "thumb": "./n3d/thumbs/coffee_martini.png",
      "defaultMethod": "4DGaussians",
      "views": {
        "2views": {
          "label": "2 Views",
          "poster": "./n3d/thumbs/coffee_martini.png",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/coffee_martini/2views/ours.mp4",
            "metrics": {
              "psnr": 23.08164504536519,
              "ssim": 0.8369954574108124,
              "lpips": 0.10658204925556977,
              "train_time": 1218.1255309581757,
              "eval_time": 84.0890474319458,
              "fps": 155.378554,
              "model_size": 31238511.0
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/coffee_martini/2views/4DGaussians.mp4",
              "metrics": {
                "psnr": 19.125154095547703,
                "ssim": 0.718804228703181,
                "lpips": 0.21652373904983202,
                "train_time": 3084.0,
                "eval_time": 169.0,
                "fps": 103.235926,
                "model_size": 29189943.0
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/coffee_martini/2views/cem4dgs.mp4",
              "metrics": {
                "psnr": 17.728174767366113,
                "ssim": 0.6508133848508199,
                "lpips": 0.2779466740290324,
                "train_time": 0.0,
                "eval_time": 362.0,
                "fps": 100.125387,
                "model_size": 242127172.0
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Ex4DGS",
              "video": "./n3d/videos/coffee_martini/2views/ex4dgs.mp4",
              "metrics": {
                "psnr": 18.828580029876363,
                "ssim": 0.6541710905234019,
                "lpips": 0.26989977320035297,
                "train_time": 3652.0,
                "eval_time": 4568.0,
                "fps": 116.369497,
                "model_size": 163160732.0
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/coffee_martini/2views/spacetimegs.mp4",
              "metrics": {
                "psnr": 18.328774885804147,
                "ssim": 0.7253071709473928,
                "lpips": 0.2596687027812004,
                "train_time": 3046.5629482269287,
                "eval_time": 1014.3318891525269,
                "fps": 102.825149,
                "model_size": 6211976.0
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/coffee_martini/2views/swift4d.mp4",
              "metrics": {
                "psnr": 19.170319634325725,
                "ssim": 0.7301559269428253,
                "lpips": 0.20485127508640288,
                "train_time": 3801.0,
                "eval_time": 147.0,
                "fps": 141.529606,
                "model_size": 33777125.0
              }
            }
          }
        },
        "3views": {
          "label": "3 Views",
          "poster": "./n3d/thumbs/coffee_martini.png",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/coffee_martini/3views/ours.mp4",
            "metrics": {
              "psnr": 23.29858496556455,
              "ssim": 0.8487583102782568,
              "lpips": 0.10538583199183146,
              "train_time": 1323.3471503257751,
              "eval_time": 69.05672717094421,
              "fps": 150.192644,
              "model_size": 34843223.0
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/coffee_martini/3views/4DGaussians.mp4",
              "metrics": {
                "psnr": 21.577693790889754,
                "ssim": 0.8160680884122848,
                "lpips": 0.13234847436348599,
                "train_time": 3675.0,
                "eval_time": 78.06277751922607,
                "fps": 102.882559,
                "model_size": 30287999.0
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/coffee_martini/3views/cem4dgs.mp4",
              "metrics": {
                "psnr": 21.174283981323242,
                "ssim": 0.7966552972793579,
                "lpips": 0.15819820761680603,
                "train_time": 8184.0,
                "eval_time": 718.0,
                "fps": 100.002061,
                "model_size": 255477752.0
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Ex4DGS",
              "video": "./n3d/videos/coffee_martini/3views/ex4dgs.mp4",
              "metrics": {
                "psnr": 21.44724464416504,
                "ssim": 0.8016988039016724,
                "lpips": 0.1619824469089508,
                "train_time": 4896.0,
                "eval_time": 2167.0,
                "fps": 117.16852,
                "model_size": 122380288.0
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/coffee_martini/3views/spacetimegs.mp4",
              "metrics": {
                "psnr": 21.44465280797078,
                "ssim": 0.806564414302508,
                "lpips": 0.14668635214368503,
                "train_time": 3382.0,
                "eval_time": 1068.0,
                "fps": 103.344371,
                "model_size": 17715209.0
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/coffee_martini/3views/swift4d.mp4",
              "metrics": {
                "psnr": 21.886722099314174,
                "ssim": 0.8210614603757859,
                "lpips": 0.12013981692492962,
                "train_time": 1913.0,
                "eval_time": 62.725200176239014,
                "fps": 149.629178,
                "model_size": 40604562.0
              }
            }
          }
        },
        "4views": {
          "label": "4 Views",
          "poster": "./n3d/thumbs/coffee_martini.png",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/coffee_martini/4views/ours.mp4",
            "metrics": {
              "psnr": 24.2056043088034,
              "ssim": 0.8616299617290497,
              "lpips": 0.09405369932452838,
              "train_time": 1417.6564111709595,
              "eval_time": 68.2707302570343,
              "fps": 130.551903,
              "model_size": 38654096.0
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/coffee_martini/4views/4DGaussians.mp4",
              "metrics": {
                "psnr": 23.666999684878398,
                "ssim": 0.8627799852689108,
                "lpips": 0.09321528635919094,
                "train_time": 3289.0,
                "eval_time": 76.0,
                "fps": 103.003409,
                "model_size": 38246616.0
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/coffee_martini/4views/cem4dgs.mp4",
              "metrics": {
                "psnr": 23.282773971557617,
                "ssim": 0.8450766801834106,
                "lpips": 0.10939080268144608,
                "train_time": 7529.0,
                "eval_time": 350.0,
                "fps": 100.133914,
                "model_size": 222928624.0
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Ex4DGS",
              "video": "./n3d/videos/coffee_martini/4views/ex4dgs.mp4",
              "metrics": {
                "psnr": 21.862403869628906,
                "ssim": 0.8388805389404297,
                "lpips": 0.12413915246725082,
                "train_time": 4637.0,
                "eval_time": 1056.0,
                "fps": 118.549938,
                "model_size": 106387555.0
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/coffee_martini/4views/spacetimegs.mp4",
              "metrics": {
                "psnr": 23.403733222610498,
                "ssim": 0.8492854982614517,
                "lpips": 0.11182950802147389,
                "train_time": 3284.0,
                "eval_time": 1015.0,
                "fps": 103.565954,
                "model_size": 15082889.0
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/coffee_martini/4views/swift4d.mp4",
              "metrics": {
                "psnr": 23.61077272129022,
                "ssim": 0.858230442404747,
                "lpips": 0.08678492764631907,
                "train_time": 1903.0,
                "eval_time": 65.0,
                "fps": 146.968617,
                "model_size": 48426894.0
              }
            }
          }
        }
      }
    },
    {
      "key": "cook_spinach",
      "label": "Cook Spinach",
      "thumb": "./n3d/thumbs/cook_spinach.png",
      "defaultMethod": "cem4dgs",
      "views": {
        "2views": {
          "label": "2 Views",
          "poster": "./n3d/thumbs/cook_spinach.png",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/cook_spinach/2views/ours.mp4",
            "metrics": {
              "psnr": 27.833907727526316,
              "ssim": 0.9004861378669738,
              "lpips": 0.08882084312538306,
              "train_time": 1082.0,
              "eval_time": 78.74148154258728,
              "fps": 181.701692,
              "model_size": 28623559.0
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/cook_spinach/2views/4DGaussians.mp4",
              "metrics": {
                "psnr": 23.371225989728046,
                "ssim": 0.8248419078191122,
                "lpips": 0.16114824150999388,
                "train_time": 1727.0,
                "eval_time": 163.0,
                "fps": 103.695674,
                "model_size": 29745647.0
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/cook_spinach/2views/cem4dgs.mp4",
              "metrics": {
                "psnr": 22.900306701660156,
                "ssim": 0.7949084043502808,
                "lpips": 0.1917816400527954,
                "train_time": 11342.0,
                "eval_time": 715.0,
                "fps": 100.002588,
                "model_size": 328972120.0
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Ex4DGS",
              "video": "./n3d/videos/cook_spinach/2views/ex4dgs.mp4",
              "metrics": {
                "psnr": 22.345916748046875,
                "ssim": 0.7837618589401245,
                "lpips": 0.20102907717227936,
                "train_time": 4765.0,
                "eval_time": 4321.0,
                "fps": 120.600204,
                "model_size": 133443279.0
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/cook_spinach/2views/spacetimegs.mp4",
              "metrics": {
                "psnr": 21.63858264839381,
                "ssim": 0.8062880575656891,
                "lpips": 0.21266331603129704,
                "train_time": 1761.0,
                "eval_time": 980.1054708957672,
                "fps": 102.845166,
                "model_size": 2540168.0
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/cook_spinach/2views/swift4d.mp4",
              "metrics": {
                "psnr": 23.261410811578124,
                "ssim": 0.8323418486118317,
                "lpips": 0.14008553807934127,
                "train_time": 1890.2538223266602,
                "eval_time": 62.245927810668945,
                "fps": 146.610563,
                "model_size": 27342053.0
              }
            }
          }
        },
        "3views": {
          "label": "3 Views",
          "poster": "./n3d/thumbs/cook_spinach.png",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/cook_spinach/3views/ours.mp4",
            "metrics": {
              "psnr": 30.0928614825359,
              "ssim": 0.9273534590005874,
              "lpips": 0.05449379425495863,
              "train_time": 1147.0,
              "eval_time": 72.0,
              "fps": 198.777173,
              "model_size": 32459207.0
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/cook_spinach/3views/4DGaussians.mp4",
              "metrics": {
                "psnr": 29.726309247572267,
                "ssim": 0.9235472699006398,
                "lpips": 0.05511420217653116,
                "train_time": 1736.0,
                "eval_time": 80.0,
                "fps": 102.949017,
                "model_size": 35934695.0
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/cook_spinach/3views/cem4dgs.mp4",
              "metrics": {
                "psnr": 26.59340476989746,
                "ssim": 0.8877400755882263,
                "lpips": 0.09130895882844925,
                "train_time": 11733.0,
                "eval_time": 730.0,
                "fps": 100.0,
                "model_size": 342790064.0
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Ex4DGS",
              "video": "./n3d/videos/cook_spinach/3views/ex4dgs.mp4",
              "metrics": {
                "psnr": 26.381954193115234,
                "ssim": 0.8865537643432617,
                "lpips": 0.09156776964664459,
                "train_time": 4894.0,
                "eval_time": 2237.0,
                "fps": 117.264141,
                "model_size": 129727539.0
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/cook_spinach/3views/spacetimegs.mp4",
              "metrics": {
                "psnr": 27.12563827126954,
                "ssim": 0.894811202287674,
                "lpips": 0.09486519873142242,
                "train_time": 1689.277854681015,
                "eval_time": 1008.0,
                "fps": 103.38274,
                "model_size": 5164808.0
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/cook_spinach/3views/swift4d.mp4",
              "metrics": {
                "psnr": 29.745576943149256,
                "ssim": 0.9216883357365926,
                "lpips": 0.05203293267637491,
                "train_time": 2089.0,
                "eval_time": 65.23647046089172,
                "fps": 141.97189,
                "model_size": 31166153.0
              }
            }
          }
        },
        "4views": {
          "label": "4 Views",
          "poster": "./n3d/thumbs/cook_spinach.png",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/cook_spinach/4views/ours.mp4",
            "metrics": {
              "psnr": 30.145447495853162,
              "ssim": 0.9229107944170634,
              "lpips": 0.05955393694341183,
              "train_time": 1235.0,
              "eval_time": 70.01408076286316,
              "fps": 152.573238,
              "model_size": 36052432.0
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/cook_spinach/4views/4DGaussians.mp4",
              "metrics": {
                "psnr": 28.368130130967042,
                "ssim": 0.8924264319737752,
                "lpips": 0.07833154405156771,
                "train_time": 1667.0,
                "eval_time": 71.5747139453888,
                "fps": 103.220923,
                "model_size": 33087255.0
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/cook_spinach/4views/cem4dgs.mp4",
              "metrics": {
                "psnr": 26.262975692749023,
                "ssim": 0.8619443774223328,
                "lpips": 0.11256647855043411,
                "train_time": 11353.0,
                "eval_time": 351.0,
                "fps": 100.133182,
                "model_size": 345425944.0
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Ex4DGS",
              "video": "./n3d/videos/cook_spinach/4views/ex4dgs.mp4",
              "metrics": {
                "psnr": 25.372793197631836,
                "ssim": 0.8507135510444641,
                "lpips": 0.12996502220630646,
                "train_time": 4668.0,
                "eval_time": 1064.0,
                "fps": 121.2796,
                "model_size": 136200891.0
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/cook_spinach/4views/spacetimegs.mp4",
              "metrics": {
                "psnr": 25.86577632270489,
                "ssim": 0.8619192765156428,
                "lpips": 0.12853205762803555,
                "train_time": 1668.5660395622253,
                "eval_time": 970.1443161964417,
                "fps": 103.399718,
                "model_size": 7073288.0
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/cook_spinach/4views/swift4d.mp4",
              "metrics": {
                "psnr": 28.43763416121402,
                "ssim": 0.8925828651587169,
                "lpips": 0.0755992749830087,
                "train_time": 1876.0,
                "eval_time": 67.0,
                "fps": 147.054712,
                "model_size": 33470945.0
              }
            }
          }
        }
      }
    },
    {
      "key": "cut_roasted_beef",
      "label": "Cut Roasted Beef",
      "thumb": "./n3d/thumbs/cut_roasted_beef.png",
      "defaultMethod": "ex4dgs",
      "views": {
        "2views": {
          "label": "2 Views",
          "poster": "./n3d/thumbs/cut_roasted_beef.png",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/cut_roasted_beef/2views/ours.mp4",
            "metrics": {
              "psnr": 26.755822696311668,
              "ssim": 0.8800894737243652,
              "lpips": 0.10099755754073461,
              "train_time": 1061.0,
              "eval_time": 71.0,
              "fps": 200.0,
              "model_size": 27902183.0
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/cut_roasted_beef/2views/4DGaussians.mp4",
              "metrics": {
                "psnr": 24.915570957758572,
                "ssim": 0.8772301294406255,
                "lpips": 0.1071621182312568,
                "train_time": 1694.0,
                "eval_time": 165.0,
                "fps": 103.654896,
                "model_size": 30044143.0
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/cut_roasted_beef/2views/cem4dgs.mp4",
              "metrics": {
                "psnr": 25.03363037109375,
                "ssim": 0.8539521098136902,
                "lpips": 0.1301104873418808,
                "train_time": 7407.0,
                "eval_time": 666.0,
                "fps": 100.011853,
                "model_size": 207214712.0
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Ex4DGS",
              "video": "./n3d/videos/cut_roasted_beef/2views/ex4dgs.mp4",
              "metrics": {
                "psnr": 24.192514419555664,
                "ssim": 0.818864643573761,
                "lpips": 0.15577669441699982,
                "train_time": 4867.0,
                "eval_time": 2185.0,
                "fps": 117.066992,
                "model_size": 139280568.0
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/cut_roasted_beef/2views/spacetimegs.mp4",
              "metrics": {
                "psnr": 23.906085981963656,
                "ssim": 0.8365503259499868,
                "lpips": 0.17291123022635776,
                "train_time": 1719.1845293045044,
                "eval_time": 1006.7388818264008,
                "fps": 103.204104,
                "model_size": 3139848.0
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/cut_roasted_beef/2views/swift4d.mp4",
              "metrics": {
                "psnr": 26.208126840114605,
                "ssim": 0.8782920106252035,
                "lpips": 0.08946700553099314,
                "train_time": 1960.5865099430084,
                "eval_time": 72.0,
                "fps": 142.267948,
                "model_size": 146608057.0
              }
            }
          }
        },
        "3views": {
          "label": "3 Views",
          "poster": "./n3d/thumbs/cut_roasted_beef.png",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/cut_roasted_beef/3views/ours.mp4",
            "metrics": {
              "psnr": 32.40423569255146,
              "ssim": 0.9400700585047403,
              "lpips": 0.05090373980502288,
              "train_time": 1174.5850257873535,
              "eval_time": 67.0,
              "fps": 194.213604,
              "model_size": 36214504.0
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/cut_roasted_beef/3views/4DGaussians.mp4",
              "metrics": {
                "psnr": 29.26652994666924,
                "ssim": 0.9157961289087931,
                "lpips": 0.0731645047167937,
                "train_time": 1706.0,
                "eval_time": 69.0,
                "fps": 103.541947,
                "model_size": 33652207.0
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/cut_roasted_beef/3views/cem4dgs.mp4",
              "metrics": {
                "psnr": 26.768535614013672,
                "ssim": 0.8929112553596497,
                "lpips": 0.09487665444612503,
                "train_time": 7566.0,
                "eval_time": 713.0,
                "fps": 100.002941,
                "model_size": 187136136.0
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Ex4DGS",
              "video": "./n3d/videos/cut_roasted_beef/3views/ex4dgs.mp4",
              "metrics": {
                "psnr": 27.300355911254883,
                "ssim": 0.8900780081748962,
                "lpips": 0.10006489604711533,
                "train_time": 4748.0,
                "eval_time": 2085.0,
                "fps": 121.679397,
                "model_size": 134944187.0
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/cut_roasted_beef/3views/spacetimegs.mp4",
              "metrics": {
                "psnr": 27.502981397963584,
                "ssim": 0.8897890120744705,
                "lpips": 0.09957918713490169,
                "train_time": 1687.1115653514862,
                "eval_time": 1022.0,
                "fps": 103.531613,
                "model_size": 4909320.0
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/cut_roasted_beef/3views/swift4d.mp4",
              "metrics": {
                "psnr": 28.983601160132686,
                "ssim": 0.9146123868227005,
                "lpips": 0.06745956633239984,
                "train_time": 2101.0,
                "eval_time": 65.14013123512268,
                "fps": 144.766938,
                "model_size": 150978745.0
              }
            }
          }
        },
        "4views": {
          "label": "4 Views",
          "poster": "./n3d/thumbs/cut_roasted_beef.png",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/cut_roasted_beef/4views/ours.mp4",
            "metrics": {
              "psnr": 31.08280122192451,
              "ssim": 0.9312269270420075,
              "lpips": 0.05722081204255422,
              "train_time": 1179.0,
              "eval_time": 64.60210657119751,
              "fps": 175.9196,
              "model_size": 34230639.0
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/cut_roasted_beef/4views/4DGaussians.mp4",
              "metrics": {
                "psnr": 30.0012224543237,
                "ssim": 0.9177999979257584,
                "lpips": 0.064650955448548,
                "train_time": 1689.0,
                "eval_time": 80.0,
                "fps": 102.920749,
                "model_size": 33902023.0
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/cut_roasted_beef/4views/cem4dgs.mp4",
              "metrics": {
                "psnr": 28.343557357788086,
                "ssim": 0.9080167412757874,
                "lpips": 0.07772152125835419,
                "train_time": 7356.0,
                "eval_time": 349.0,
                "fps": 100.134652,
                "model_size": 193085084.0
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Ex4DGS",
              "video": "./n3d/videos/cut_roasted_beef/4views/ex4dgs.mp4",
              "metrics": {
                "psnr": 25.88844108581543,
                "ssim": 0.8893084526062012,
                "lpips": 0.10324740409851074,
                "train_time": 4674.0,
                "eval_time": 1031.0,
                "fps": 121.184159,
                "model_size": 123438779.0
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/cut_roasted_beef/4views/spacetimegs.mp4",
              "metrics": {
                "psnr": 28.075475065811432,
                "ssim": 0.8981981805960337,
                "lpips": 0.09553796408077081,
                "train_time": 1666.0,
                "eval_time": 974.0363972187042,
                "fps": 103.585989,
                "model_size": 5139080.0
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/cut_roasted_beef/4views/swift4d.mp4",
              "metrics": {
                "psnr": 28.26964570168214,
                "ssim": 0.9207714871565501,
                "lpips": 0.056565434137980146,
                "train_time": 1926.0,
                "eval_time": 72.0,
                "fps": 144.486107,
                "model_size": 152949638.0
              }
            }
          }
        }
      }
    },
    {
      "key": "flame_salmon_1",
      "label": "Flame Salmon 1",
      "thumb": "./n3d/thumbs/flame_salmon_1.png",
      "defaultMethod": "spacetimegs",
      "views": {
        "2views": {
          "label": "2 Views",
          "poster": "./n3d/thumbs/flame_salmon_1.png",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/flame_salmon_1/2views/ours.mp4",
            "metrics": {
              "psnr": 22.766238078495284,
              "ssim": 0.8315377565224965,
              "lpips": 0.12280566245317459,
              "train_time": 1189.4726622104645,
              "eval_time": 73.0,
              "fps": 142.770741,
              "model_size": 41231664.0
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/flame_salmon_1/2views/4DGaussians.mp4",
              "metrics": {
                "psnr": 13.848545776592994,
                "ssim": 0.7032816998163859,
                "lpips": 0.22674190933505695,
                "train_time": 5681.0,
                "eval_time": 82.0,
                "fps": 102.7749,
                "model_size": 29238503.0
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/flame_salmon_1/2views/cem4dgs.mp4",
              "metrics": {
                "psnr": 18.362274169921875,
                "ssim": 0.6865867376327515,
                "lpips": 0.2867976427078247,
                "train_time": 8216.0,
                "eval_time": 726.0,
                "fps": 100.00068,
                "model_size": 274677424.0
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Ex4DGS",
              "video": "./n3d/videos/flame_salmon_1/2views/ex4dgs.mp4",
              "metrics": {
                "psnr": 18.764041900634766,
                "ssim": 0.6876862645149231,
                "lpips": 0.28372374176979065,
                "train_time": 4724.0,
                "eval_time": 2160.0,
                "fps": 117.0956,
                "model_size": 136522975.0
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/flame_salmon_1/2views/spacetimegs.mp4",
              "metrics": {
                "psnr": 17.454174655466495,
                "ssim": 0.6892848042647044,
                "lpips": 0.27208746075630186,
                "train_time": 3449.515545129776,
                "eval_time": 1021.0,
                "fps": 103.220387,
                "model_size": 9459208.0
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/flame_salmon_1/2views/swift4d.mp4",
              "metrics": {
                "psnr": 19.90732994728444,
                "ssim": 0.7551112099488576,
                "lpips": 0.1860248958071073,
                "train_time": 1919.583872795105,
                "eval_time": 64.0,
                "fps": 150.0,
                "model_size": 35524494.0
              }
            }
          }
        },
        "3views": {
          "label": "3 Views",
          "poster": "./n3d/thumbs/flame_salmon_1.png",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/flame_salmon_1/3views/ours.mp4",
            "metrics": {
              "psnr": 25.998593988886043,
              "ssim": 0.8775751461585363,
              "lpips": 0.08362543632586797,
              "train_time": 1310.0,
              "eval_time": 66.09568786621094,
              "fps": 133.223118,
              "model_size": 37114720.0
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/flame_salmon_1/3views/4DGaussians.mp4",
              "metrics": {
                "psnr": 23.6553247443134,
                "ssim": 0.8311823707818985,
                "lpips": 0.12935727467139563,
                "train_time": 3081.0,
                "eval_time": 75.0,
                "fps": 103.074971,
                "model_size": 32628359.0
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/flame_salmon_1/3views/cem4dgs.mp4",
              "metrics": {
                "psnr": 22.039775848388672,
                "ssim": 0.8156500458717346,
                "lpips": 0.1361725628376007,
                "train_time": 8249.0,
                "eval_time": 718.0,
                "fps": 100.002061,
                "model_size": 252091084.0
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Ex4DGS",
              "video": "./n3d/videos/flame_salmon_1/3views/ex4dgs.mp4",
              "metrics": {
                "psnr": 22.304092407226562,
                "ssim": 0.8141327500343323,
                "lpips": 0.1415562778711319,
                "train_time": 4657.0,
                "eval_time": 2189.0,
                "fps": 120.162814,
                "model_size": 109200043.0
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/flame_salmon_1/3views/spacetimegs.mp4",
              "metrics": {
                "psnr": 22.367415798521414,
                "ssim": 0.8257749464114507,
                "lpips": 0.14646593327323595,
                "train_time": 3172.0,
                "eval_time": 1083.0,
                "fps": 103.440779,
                "model_size": 15772425.0
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/flame_salmon_1/3views/swift4d.mp4",
              "metrics": {
                "psnr": 23.35991115983431,
                "ssim": 0.8331762381394704,
                "lpips": 0.11698924022416274,
                "train_time": 2251.0,
                "eval_time": 77.0,
                "fps": 141.890827,
                "model_size": 44470746.0
              }
            }
          }
        },
        "4views": {
          "label": "4 Views",
          "poster": "./n3d/thumbs/flame_salmon_1.png",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/flame_salmon_1/4views/ours.mp4",
            "metrics": {
              "psnr": 26.25726357480839,
              "ssim": 0.8914286830027898,
              "lpips": 0.08057805024087429,
              "train_time": 1398.0,
              "eval_time": 66.17241215705872,
              "fps": 130.0,
              "model_size": 38887144.0
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/flame_salmon_1/4views/4DGaussians.mp4",
              "metrics": {
                "psnr": 23.27102307755233,
                "ssim": 0.8649693071842194,
                "lpips": 0.09207140574852625,
                "train_time": 3185.0,
                "eval_time": 63.0,
                "fps": 103.673175,
                "model_size": 37463392.0
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/flame_salmon_1/4views/cem4dgs.mp4",
              "metrics": {
                "psnr": 22.56334590825241,
                "ssim": 0.8319910707076391,
                "lpips": 0.11336137128372988,
                "train_time": 8296.0,
                "eval_time": 351.0,
                "fps": 100.133182,
                "model_size": 258219652.0
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Ex4DGS",
              "video": "./n3d/videos/flame_salmon_1/4views/ex4dgs.mp4",
              "metrics": {
                "psnr": 19.14757537841797,
                "ssim": 0.8252931833267212,
                "lpips": 0.13664695620536804,
                "train_time": 4487.0,
                "eval_time": 1068.0,
                "fps": 120.060661,
                "model_size": 110470400.0
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/flame_salmon_1/4views/spacetimegs.mp4",
              "metrics": {
                "psnr": 23.858659701239564,
                "ssim": 0.8572610280911128,
                "lpips": 0.11350500044723352,
                "train_time": 3188.0,
                "eval_time": 1001.0,
                "fps": 103.428194,
                "model_size": 18357257.0
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/flame_salmon_1/4views/swift4d.mp4",
              "metrics": {
                "psnr": 23.078674109653033,
                "ssim": 0.8644771218299866,
                "lpips": 0.08609602009256681,
                "train_time": 2149.0,
                "eval_time": 66.4632477760315,
                "fps": 147.18208,
                "model_size": 48773646.0
              }
            }
          }
        }
      }
    },
    {
      "key": "flame_steak",
      "label": "Flame Steak",
      "thumb": "./n3d/thumbs/flame_steak.png",
      "defaultMethod": "swift4d",
      "views": {
        "2views": {
          "label": "2 Views",
          "poster": "./n3d/thumbs/flame_steak.png",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/flame_steak/2views/ours.mp4",
            "metrics": {
              "psnr": 27.986509049322716,
              "ssim": 0.9123515168825785,
              "lpips": 0.07281280549863975,
              "train_time": 1143.546737909317,
              "eval_time": 70.65627884864807,
              "fps": 137.551613,
              "model_size": 28413239.0
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/flame_steak/2views/4DGaussians.mp4",
              "metrics": {
                "psnr": 24.835774289394507,
                "ssim": 0.8655202982823054,
                "lpips": 0.11218850245078404,
                "train_time": 1700.0,
                "eval_time": 172.0,
                "fps": 102.726495,
                "model_size": 25034247.0
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/flame_steak/2views/cem4dgs.mp4",
              "metrics": {
                "psnr": 22.80161476135254,
                "ssim": 0.8275541067123413,
                "lpips": 0.15227778255939484,
                "train_time": 4958.0,
                "eval_time": 666.0,
                "fps": 100.011853,
                "model_size": 315693660.0
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Ex4DGS",
              "video": "./n3d/videos/flame_steak/2views/ex4dgs.mp4",
              "metrics": {
                "psnr": 21.30785369873047,
                "ssim": 0.7968456745147705,
                "lpips": 0.1985766887664795,
                "train_time": 4593.0,
                "eval_time": 2218.0,
                "fps": 120.970536,
                "model_size": 109606915.0
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/flame_steak/2views/spacetimegs.mp4",
              "metrics": {
                "psnr": 20.59147395909698,
                "ssim": 0.8174168539047241,
                "lpips": 0.18184949859976768,
                "train_time": 1664.0,
                "eval_time": 941.3222398757935,
                "fps": 103.307618,
                "model_size": 2844424.0
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/flame_steak/2views/swift4d.mp4",
              "metrics": {
                "psnr": 23.772733083552236,
                "ssim": 0.8575271966060003,
                "lpips": 0.10006079172094663,
                "train_time": 1996.0,
                "eval_time": 63.43224596977234,
                "fps": 146.812953,
                "model_size": 144938305.0
              }
            }
          }
        },
        "3views": {
          "label": "3 Views",
          "poster": "./n3d/thumbs/flame_steak.png",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/flame_steak/3views/ours.mp4",
            "metrics": {
              "psnr": 30.352577969821482,
              "ssim": 0.9362490077813467,
              "lpips": 0.04335693967839082,
              "train_time": 1674.0,
              "eval_time": 69.16911005973816,
              "fps": 196.350361,
              "model_size": 32185983.0
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/flame_steak/3views/4DGaussians.mp4",
              "metrics": {
                "psnr": 30.352577969821482,
                "ssim": 0.9312463078896205,
                "lpips": 0.045976001222928366,
                "train_time": 1674.0,
                "eval_time": 70.0,
                "fps": 103.449042,
                "model_size": 32185983.0
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/flame_steak/3views/cem4dgs.mp4",
              "metrics": {
                "psnr": 27.836536407470703,
                "ssim": 0.9066805243492126,
                "lpips": 0.08171723783016205,
                "train_time": 5033.0,
                "eval_time": 323.0,
                "fps": 100.155419,
                "model_size": 261412028.0
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Ex4DGS",
              "video": "./n3d/videos/flame_steak/3views/ex4dgs.mp4",
              "metrics": {
                "psnr": 27.49890899658203,
                "ssim": 0.8973500728607178,
                "lpips": 0.08584284782409668,
                "train_time": 5904.0,
                "eval_time": 1091.0,
                "fps": 115.843155,
                "model_size": 102366255.0
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/flame_steak/3views/spacetimegs.mp4",
              "metrics": {
                "psnr": 27.980349463817127,
                "ssim": 0.9106026842196783,
                "lpips": 0.07984928568204244,
                "train_time": 1805.418470621109,
                "eval_time": 953.3610155582428,
                "fps": 103.576318,
                "model_size": 5143816.0
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/flame_steak/3views/swift4d.mp4",
              "metrics": {
                "psnr": 29.623140683672155,
                "ssim": 0.9326186203956603,
                "lpips": 0.0413546813155214,
                "train_time": 2271.0,
                "eval_time": 62.8696084022522,
                "fps": 149.665769,
                "model_size": 149703877.0
              }
            }
          }
        },
        "4views": {
          "label": "4 Views",
          "poster": "./n3d/thumbs/flame_steak.png",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/flame_steak/4views/ours.mp4",
            "metrics": {
              "psnr": 29.577273554068462,
              "ssim": 0.9317676764726639,
              "lpips": 0.05093060923119386,
              "train_time": 1175.0,
              "eval_time": 65.0,
              "fps": 180.487349,
              "model_size": 34317823.0
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/flame_steak/4views/4DGaussians.mp4",
              "metrics": {
                "psnr": 28.69013134603613,
                "ssim": 0.903408100605011,
                "lpips": 0.07398063180347283,
                "train_time": 1658.0,
                "eval_time": 69.0,
                "fps": 103.370586,
                "model_size": 32392391.0
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/flame_steak/4views/cem4dgs.mp4",
              "metrics": {
                "psnr": 26.688535842302432,
                "ssim": 0.8603860600789388,
                "lpips": 0.11823983413477739,
                "train_time": 4664.0,
                "eval_time": 340.0,
                "fps": 100.141481,
                "model_size": 235288296.0
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Ex4DGS",
              "video": "./n3d/videos/flame_steak/4views/ex4dgs.mp4",
              "metrics": {
                "psnr": 27.268964871482066,
                "ssim": 0.8619313607613246,
                "lpips": 0.11512289891640345,
                "train_time": 4689.0,
                "eval_time": 1080.0,
                "fps": 118.843508,
                "model_size": 119871595.0
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/flame_steak/4views/spacetimegs.mp4",
              "metrics": {
                "psnr": 26.82021615118254,
                "ssim": 0.8811829447746277,
                "lpips": 0.11977730425695578,
                "train_time": 1667.8839609622955,
                "eval_time": 969.6961464881897,
                "fps": 103.599728,
                "model_size": 4760584.0
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/flame_steak/4views/swift4d.mp4",
              "metrics": {
                "psnr": 28.674024816811542,
                "ssim": 0.9039766081174214,
                "lpips": 0.06513727231572072,
                "train_time": 2053.0,
                "eval_time": 66.0,
                "fps": 145.386099,
                "model_size": 151810849.0
              }
            }
          }
        }
      }
    },
    {
      "key": "sear_steak",
      "label": "Sear Steak",
      "thumb": "./n3d/thumbs/sear_steak.png",
      "defaultMethod": "4DGaussians",
      "views": {
        "2views": {
          "label": "2 Views",
          "poster": "./n3d/thumbs/sear_steak.png",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/sear_steak/2views/ours.mp4",
            "metrics": {
              "psnr": 28.062767080969177,
              "ssim": 0.9135538309812545,
              "lpips": 0.06879852193097273,
              "train_time": 1167.0,
              "eval_time": 71.0835485458374,
              "fps": 169.247324,
              "model_size": 27245015.0
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/sear_steak/2views/4DGaussians.mp4",
              "metrics": {
                "psnr": 23.973571653280036,
                "ssim": 0.8604873740673065,
                "lpips": 0.11246589004993439,
                "train_time": 2824.0,
                "eval_time": 73.26945424079895,
                "fps": 103.353818,
                "model_size": 24432407.0
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/sear_steak/2views/cem4dgs.mp4",
              "metrics": {
                "psnr": 22.743938446044922,
                "ssim": 0.8090876340866089,
                "lpips": 0.17086261510849,
                "train_time": 4974.0,
                "eval_time": 711.0,
                "fps": 100.003296,
                "model_size": 284442136.0
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Ex4DGS",
              "video": "./n3d/videos/sear_steak/2views/ex4dgs.mp4",
              "metrics": {
                "psnr": 22.882848739624023,
                "ssim": 0.8066728115081787,
                "lpips": 0.19162729382514954,
                "train_time": 4644.0,
                "eval_time": 2168.0,
                "fps": 119.694805,
                "model_size": 97714515.0
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/sear_steak/2views/spacetimegs.mp4",
              "metrics": {
                "psnr": 24.027658480205808,
                "ssim": 0.8387350314855575,
                "lpips": 0.13800119747718176,
                "train_time": 1706.66179728508,
                "eval_time": 1011.0,
                "fps": 103.72188,
                "model_size": 3543816.0
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/sear_steak/2views/swift4d.mp4",
              "metrics": {
                "psnr": 24.269967779585325,
                "ssim": 0.8632067535320918,
                "lpips": 0.09731316452225049,
                "train_time": 1990.0,
                "eval_time": 62.59413552284241,
                "fps": 147.02625,
                "model_size": 144467317.0
              }
            }
          }
        },
        "3views": {
          "label": "3 Views",
          "poster": "./n3d/thumbs/sear_steak.png",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/sear_steak/3views/ours.mp4",
            "metrics": {
              "psnr": 30.607906393361784,
              "ssim": 0.9349427555004756,
              "lpips": 0.04592712658147017,
              "train_time": 1140.0134842395782,
              "eval_time": 73.0,
              "fps": 198.537716,
              "model_size": 32546639.0
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/sear_steak/3views/4DGaussians.mp4",
              "metrics": {
                "psnr": 30.607906393361784,
                "ssim": 0.9317794410387675,
                "lpips": 0.046918771080672744,
                "train_time": 1683.0,
                "eval_time": 75.0,
                "fps": 103.424687,
                "model_size": 32546639.0
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/sear_steak/3views/cem4dgs.mp4",
              "metrics": {
                "psnr": 28.12763023376465,
                "ssim": 0.9151225686073303,
                "lpips": 0.06447231024503708,
                "train_time": 4777.0,
                "eval_time": 341.0,
                "fps": 100.140704,
                "model_size": 283661304.0
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Ex4DGS",
              "video": "./n3d/videos/sear_steak/3views/ex4dgs.mp4",
              "metrics": {
                "psnr": 25.985355377197266,
                "ssim": 0.8970187306404114,
                "lpips": 0.091600202023983,
                "train_time": 4583.0,
                "eval_time": 1048.0,
                "fps": 121.335325,
                "model_size": 100320319.0
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/sear_steak/3views/spacetimegs.mp4",
              "metrics": {
                "psnr": 28.492802492870688,
                "ssim": 0.9144265508651733,
                "lpips": 0.06732107603301604,
                "train_time": 1766.2953736782074,
                "eval_time": 976.0,
                "fps": 103.08869,
                "model_size": 5159560.0
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/sear_steak/3views/swift4d.mp4",
              "metrics": {
                "psnr": 30.187652215408452,
                "ssim": 0.9325418768326441,
                "lpips": 0.0409263252839446,
                "train_time": 2257.0,
                "eval_time": 61.11591410636902,
                "fps": 146.333369,
                "model_size": 149469517.0
              }
            }
          }
        },
        "4views": {
          "label": "4 Views",
          "poster": "./n3d/thumbs/sear_steak.png",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/sear_steak/4views/ours.mp4",
            "metrics": {
              "psnr": 29.30485682011606,
              "ssim": 0.929949791431427,
              "lpips": 0.05261284886548916,
              "train_time": 1260.0,
              "eval_time": 63.0,
              "fps": 170.33633,
              "model_size": 34564223.0
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/sear_steak/4views/4DGaussians.mp4",
              "metrics": {
                "psnr": 29.209977230909438,
                "ssim": 0.9057774905363719,
                "lpips": 0.06789820338288943,
                "train_time": 1622.0,
                "eval_time": 65.02623867988586,
                "fps": 103.636168,
                "model_size": 32913631.0
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/sear_steak/4views/cem4dgs.mp4",
              "metrics": {
                "psnr": 26.864793844826355,
                "ssim": 0.8738460910320281,
                "lpips": 0.09212508030235768,
                "train_time": 4904.0,
                "eval_time": 351.0,
                "fps": 100.133182,
                "model_size": 269949056.0
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Ex4DGS",
              "video": "./n3d/videos/sear_steak/4views/ex4dgs.mp4",
              "metrics": {
                "psnr": 27.497313291454606,
                "ssim": 0.876953887740771,
                "lpips": 0.09585749097168446,
                "train_time": 4575.0,
                "eval_time": 986.0,
                "fps": 130.83241,
                "model_size": 101632863.0
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/sear_steak/4views/spacetimegs.mp4",
              "metrics": {
                "psnr": 26.585882631493476,
                "ssim": 0.8806581246852875,
                "lpips": 0.10922504010299841,
                "train_time": 1561.0,
                "eval_time": 1114.3148121833801,
                "fps": 103.635216,
                "model_size": 4682248.0
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/sear_steak/4views/swift4d.mp4",
              "metrics": {
                "psnr": 27.712750966785723,
                "ssim": 0.9004149518410365,
                "lpips": 0.06812310439844926,
                "train_time": 2168.0,
                "eval_time": 67.44346284866333,
                "fps": 144.641135,
                "model_size": 151231249.0
              }
            }
          }
        }
      }
    },
    {
      "key": "techni-birthday",
      "label": "Birthday",
      "thumb": "./n3d/thumbs/techni-birthday.jpg",
      "defaultMethod": "4DGaussians",
      "views": {
        "2views": {
          "label": "2 Views",
          "poster": "./n3d/thumbs/techni-birthday.jpg",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/techni-birthday/2views/ours.mp4",
            "metrics": {
              "psnr": 24.15092912926062,
              "ssim": 0.9122401964664459,
              "lpips": 0.04957142896950245,
              "train_time": 834.4406974315643,
              "eval_time": 145.0,
              "fps": 148.5078,
              "model_size": 66417289.0
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/techni-birthday/2views/4DGaussians.mp4",
              "metrics": {
                "psnr": 22.207721522893753,
                "ssim": 0.8162771928310394,
                "lpips": 0.10477941945195197,
                "train_time": 1514.0,
                "eval_time": 20.908652305603027,
                "fps": 101.520741,
                "model_size": 57383136.0
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/techni-birthday/2views/cem4dgs.mp4",
              "metrics": {
                "psnr": 20.55221696203789,
                "ssim": 0.7828071916103363,
                "lpips": 0.11494484469294548,
                "train_time": 6933.583381652832,
                "eval_time": 44.0,
                "fps": 100.02165,
                "model_size": 168861808.0
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Ex4DGS",
              "video": "./n3d/videos/techni-birthday/2views/ex4dgs.mp4",
              "metrics": {
                "psnr": 20.783272550984442,
                "ssim": 0.7768670618534088,
                "lpips": 0.12240218803286552,
                "train_time": 3280.7168962955475,
                "eval_time": 345.0,
                "fps": 103.44307,
                "model_size": 137046545.0
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/techni-birthday/2views/spacetimegs.mp4",
              "metrics": {
                "psnr": 21.903356283611803,
                "ssim": 0.8576951289176941,
                "lpips": 0.08002273201942443,
                "train_time": 973.0,
                "eval_time": 151.0,
                "fps": 141.821806,
                "model_size": 58847625.0
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/techni-birthday/2views/swift4d.mp4",
              "metrics": {
                "psnr": 21.616897138402464,
                "ssim": 0.8225052773952484,
                "lpips": 0.08985667854547501,
                "train_time": 2178.0,
                "eval_time": 17.0,
                "fps": 104.662709,
                "model_size": 64954818.0
              }
            }
          }
        },
        "3views": {
          "label": "3 Views",
          "poster": "./n3d/thumbs/techni-birthday.jpg",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/techni-birthday/3views/ours.mp4",
            "metrics": {
              "psnr": 27.640786420469762,
              "ssim": 0.9433697152137757,
              "lpips": 0.030184500180184842,
              "train_time": 834.2498219013214,
              "eval_time": 138.0,
              "fps": 135.410534,
              "model_size": 69700105.0
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/techni-birthday/3views/4DGaussians.mp4",
              "metrics": {
                "psnr": 24.641796814429227,
                "ssim": 0.8836171388626098,
                "lpips": 0.07522224992513657,
                "train_time": 1344.0,
                "eval_time": 19.010681629180908,
                "fps": 101.887696,
                "model_size": 54145664.0
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/techni-birthday/3views/cem4dgs.mp4",
              "metrics": {
                "psnr": 23.474183756489186,
                "ssim": 0.8794757235050201,
                "lpips": 0.06224777325987816,
                "train_time": 5754.02579498291,
                "eval_time": 42.0,
                "fps": 100.025705,
                "model_size": 171227840.0
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Ex4DGS",
              "video": "./n3d/videos/techni-birthday/3views/ex4dgs.mp4",
              "metrics": {
                "psnr": 23.723729123015097,
                "ssim": 0.8785562002658844,
                "lpips": 0.06716706097126007,
                "train_time": 2594.1477823257446,
                "eval_time": 298.0,
                "fps": 104.411961,
                "model_size": 140385945.0
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/techni-birthday/3views/spacetimegs.mp4",
              "metrics": {
                "psnr": 24.24138620705553,
                "ssim": 0.9131594467163086,
                "lpips": 0.049848337471485135,
                "train_time": 1012.0,
                "eval_time": 164.0,
                "fps": 138.618876,
                "model_size": 66343305.0
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/techni-birthday/3views/swift4d.mp4",
              "metrics": {
                "psnr": 25.120372993799887,
                "ssim": 0.9103920161724091,
                "lpips": 0.04109134182333946,
                "train_time": 1780.1521492004395,
                "eval_time": 17.0,
                "fps": 105.309997,
                "model_size": 71159562.0
              }
            }
          }
        },
        "4views": {
          "label": "4 Views",
          "poster": "./n3d/thumbs/techni-birthday.jpg",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/techni-birthday/4views/ours.mp4",
            "metrics": {
              "psnr": 19.409349053699763,
              "ssim": 0.5468893799185753,
              "lpips": 0.30406300086528065,
              "train_time": 873.0,
              "eval_time": 424.0,
              "fps": 130.667545,
              "model_size": 72441737.0
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/techni-birthday/4views/4DGaussians.mp4",
              "metrics": {
                "psnr": 27.248656896552895,
                "ssim": 0.9146671032905579,
                "lpips": 0.0588399288803339,
                "train_time": 1237.7124302387238,
                "eval_time": 18.206356287002563,
                "fps": 102.44853,
                "model_size": 54622816.0
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/techni-birthday/4views/cem4dgs.mp4",
              "metrics": {
                "psnr": 27.074004427709852,
                "ssim": 0.9281661748886109,
                "lpips": 0.0368253380805254,
                "train_time": 8249.0,
                "eval_time": 44.0,
                "fps": 100.02165,
                "model_size": 185842520.0
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Ex4DGS",
              "video": "./n3d/videos/techni-birthday/4views/ex4dgs.mp4",
              "metrics": {
                "psnr": 26.828395244040266,
                "ssim": 0.9225128328800202,
                "lpips": 0.03976189009845257,
                "train_time": 2406.0,
                "eval_time": 370.0614287853241,
                "fps": 103.67304,
                "model_size": 146071065.0
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/techni-birthday/4views/spacetimegs.mp4",
              "metrics": {
                "psnr": 27.779918017987242,
                "ssim": 0.9440721344947814,
                "lpips": 0.028772317804396152,
                "train_time": 811.0,
                "eval_time": 154.42650866508484,
                "fps": 136.541101,
                "model_size": 69536649.0
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/techni-birthday/4views/swift4d.mp4",
              "metrics": {
                "psnr": 29.01751571683575,
                "ssim": 0.9473947942256927,
                "lpips": 0.024979474283754827,
                "train_time": 1948.0,
                "eval_time": 17.0,
                "fps": 105.87976,
                "model_size": 75358890.0
              }
            }
          }
        }
      }
    },
    {
      "key": "techni-fabien",
      "label": "Fabien",
      "thumb": "./n3d/thumbs/techni-fabien.jpg",
      "defaultMethod": "cem4dgs",
      "views": {
        "2views": {
          "label": "2 Views",
          "poster": "./n3d/thumbs/techni-fabien.jpg",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/techni-fabien/2views/ours.mp4",
            "metrics": {
              "psnr": 28.41689809028678,
              "ssim": 0.8610762655735016,
              "lpips": 0.09772700935602188,
              "train_time": 844.047285079956,
              "eval_time": 144.36811661720276,
              "fps": 156.034523,
              "model_size": 31985161.0
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/techni-fabien/2views/4DGaussians.mp4",
              "metrics": {
                "psnr": 20.303386298165993,
                "ssim": 0.6846286809444427,
                "lpips": 0.2653520029783249,
                "train_time": 3568.0,
                "eval_time": 36.0,
                "fps": 102.705749,
                "model_size": 52313936.0
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/techni-fabien/2views/cem4dgs.mp4",
              "metrics": {
                "psnr": 17.577615625003478,
                "ssim": 0.6088351929187774,
                "lpips": 0.32844575703144074,
                "train_time": 3351.0,
                "eval_time": 46.508764028549194,
                "fps": 100.017056,
                "model_size": 46890083.0
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Ex4DGS",
              "video": "./n3d/videos/techni-fabien/2views/ex4dgs.mp4",
              "metrics": {
                "psnr": 18.064003474707487,
                "ssim": 0.6112244546413421,
                "lpips": 0.3299690067768097,
                "train_time": 1671.0,
                "eval_time": 185.0,
                "fps": 123.144023,
                "model_size": 45141743.0
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/techni-fabien/2views/spacetimegs.mp4",
              "metrics": {
                "psnr": 22.27613072076701,
                "ssim": 0.7613253927230835,
                "lpips": 0.18185690075159072,
                "train_time": 922.0,
                "eval_time": 153.0,
                "fps": 143.832101,
                "model_size": 28135433.0
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/techni-fabien/2views/swift4d.mp4",
              "metrics": {
                "psnr": 19.60333197801017,
                "ssim": 0.6863324916362763,
                "lpips": 0.2552913999557495,
                "train_time": 2113.0,
                "eval_time": 14.71014666557312,
                "fps": 110.581521,
                "model_size": 26732465.0
              }
            }
          }
        },
        "3views": {
          "label": "3 Views",
          "poster": "./n3d/thumbs/techni-fabien.jpg",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/techni-fabien/3views/ours.mp4",
            "metrics": {
              "psnr": 31.097154780670518,
              "ssim": 0.8868099415302276,
              "lpips": 0.07374685809016228,
              "train_time": 845.4841318130493,
              "eval_time": 142.0,
              "fps": 156.694792,
              "model_size": 33429769.0
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/techni-fabien/3views/4DGaussians.mp4",
              "metrics": {
                "psnr": 25.286099445934564,
                "ssim": 0.7910409927368164,
                "lpips": 0.17065482318401337,
                "train_time": 1367.0,
                "eval_time": 19.0,
                "fps": 102.86682,
                "model_size": 52338528.0
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/techni-fabien/3views/cem4dgs.mp4",
              "metrics": {
                "psnr": 22.98916339185061,
                "ssim": 0.7770421659946442,
                "lpips": 0.170191188454628,
                "train_time": 3484.667519569397,
                "eval_time": 44.0,
                "fps": 100.02165,
                "model_size": 62869035.0
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Ex4DGS",
              "video": "./n3d/videos/techni-fabien/3views/ex4dgs.mp4",
              "metrics": {
                "psnr": 23.76016234003348,
                "ssim": 0.7670811104774475,
                "lpips": 0.17897436648607254,
                "train_time": 1599.0627524852753,
                "eval_time": 170.0,
                "fps": 127.138291,
                "model_size": 38388703.0
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/techni-fabien/3views/spacetimegs.mp4",
              "metrics": {
                "psnr": 27.924559018413596,
                "ssim": 0.8571751189231872,
                "lpips": 0.10059030294418335,
                "train_time": 825.0,
                "eval_time": 150.0,
                "fps": 141.102818,
                "model_size": 32302729.0
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/techni-fabien/3views/swift4d.mp4",
              "metrics": {
                "psnr": 25.337914395468314,
                "ssim": 0.7954146432876587,
                "lpips": 0.1506691387295723,
                "train_time": 1253.318204164505,
                "eval_time": 16.0,
                "fps": 111.250196,
                "model_size": 28430945.0
              }
            }
          }
        },
        "4views": {
          "label": "4 Views",
          "poster": "./n3d/thumbs/techni-fabien.jpg",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/techni-fabien/4views/ours.mp4",
            "metrics": {
              "psnr": 21.322529725561807,
              "ssim": 0.6305805194377899,
              "lpips": 0.3270006223767996,
              "train_time": 865.0,
              "eval_time": 459.0,
              "fps": 152.460941,
              "model_size": 35017481.0
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/techni-fabien/4views/4DGaussians.mp4",
              "metrics": {
                "psnr": 27.614716025927965,
                "ssim": 0.8367237281799317,
                "lpips": 0.1405157482624054,
                "train_time": 1214.0847182273865,
                "eval_time": 22.0,
                "fps": 102.104308,
                "model_size": 53083440.0
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/techni-fabien/4views/cem4dgs.mp4",
              "metrics": {
                "psnr": 26.114255501982424,
                "ssim": 0.837106556892395,
                "lpips": 0.11876570254564285,
                "train_time": 3508.0,
                "eval_time": 43.0,
                "fps": 100.02363,
                "model_size": 58077459.0
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Ex4DGS",
              "video": "./n3d/videos/techni-fabien/4views/ex4dgs.mp4",
              "metrics": {
                "psnr": 27.040909666604403,
                "ssim": 0.8362097644805908,
                "lpips": 0.11899347633123397,
                "train_time": 1702.6706581115723,
                "eval_time": 159.0,
                "fps": 128.655659,
                "model_size": 37000403.0
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/techni-fabien/4views/spacetimegs.mp4",
              "metrics": {
                "psnr": 31.566073866237492,
                "ssim": 0.8882730460166931,
                "lpips": 0.0729306823015213,
                "train_time": 838.0632898807526,
                "eval_time": 154.0,
                "fps": 139.647965,
                "model_size": 33804681.0
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/techni-fabien/4views/swift4d.mp4",
              "metrics": {
                "psnr": 28.665793244617806,
                "ssim": 0.8472772300243377,
                "lpips": 0.1120200851559639,
                "train_time": 1224.026725769043,
                "eval_time": 18.159003973007202,
                "fps": 109.788947,
                "model_size": 30926753.0
              }
            }
          }
        }
      }
    },
    {
      "key": "techni-painter",
      "label": "Painter",
      "thumb": "./n3d/thumbs/techni-painter.jpg",
      "defaultMethod": "ex4dgs",
      "views": {
        "2views": {
          "label": "2 Views",
          "poster": "./n3d/thumbs/techni-painter.jpg",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/techni-painter/2views/ours.mp4",
            "metrics": {
              "psnr": 33.336260753565035,
              "ssim": 0.9423161566257476,
              "lpips": 0.022399396784603596,
              "train_time": 744.4656112194061,
              "eval_time": 142.0,
              "fps": 158.8579,
              "model_size": 55411337.0
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/techni-painter/2views/4DGaussians.mp4",
              "metrics": {
                "psnr": 31.4165974228069,
                "ssim": 0.9042882943153381,
                "lpips": 0.05099637791514397,
                "train_time": 2704.0,
                "eval_time": 18.10185408592224,
                "fps": 102.502793,
                "model_size": 46447728.0
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/techni-painter/2views/cem4dgs.mp4",
              "metrics": {
                "psnr": 30.594152205524814,
                "ssim": 0.9080184817314148,
                "lpips": 0.040103333070874214,
                "train_time": 2656.0,
                "eval_time": 43.0,
                "fps": 100.02363,
                "model_size": 88278988.0
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Ex4DGS",
              "video": "./n3d/videos/techni-painter/2views/ex4dgs.mp4",
              "metrics": {
                "psnr": 30.295448384549726,
                "ssim": 0.8982970654964447,
                "lpips": 0.047495789900422095,
                "train_time": 1321.0,
                "eval_time": 245.0,
                "fps": 108.578109,
                "model_size": 74494664.0
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/techni-painter/2views/spacetimegs.mp4",
              "metrics": {
                "psnr": 33.458989193410744,
                "ssim": 0.9418819272518157,
                "lpips": 0.02783929094672203,
                "train_time": 899.0,
                "eval_time": 166.0,
                "fps": 142.337468,
                "model_size": 51620489.0
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/techni-painter/2views/swift4d.mp4",
              "metrics": {
                "psnr": 30.28452021361501,
                "ssim": 0.9155258846282959,
                "lpips": 0.03924892693758011,
                "train_time": 1839.0,
                "eval_time": 13.190044641494751,
                "fps": 111.143336,
                "model_size": 34677522.0
              }
            }
          }
        },
        "3views": {
          "label": "3 Views",
          "poster": "./n3d/thumbs/techni-painter.jpg",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/techni-painter/3views/ours.mp4",
            "metrics": {
              "psnr": 34.29908839989225,
              "ssim": 0.9540085506439209,
              "lpips": 0.020439786314964296,
              "train_time": 792.0,
              "eval_time": 131.0,
              "fps": 160.174974,
              "model_size": 59101705.0
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/techni-painter/3views/4DGaussians.mp4",
              "metrics": {
                "psnr": 33.715218302297785,
                "ssim": 0.9324285995960235,
                "lpips": 0.035993126556277275,
                "train_time": 1239.0115010738373,
                "eval_time": 19.0,
                "fps": 102.446374,
                "model_size": 52598776.0
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/techni-painter/3views/cem4dgs.mp4",
              "metrics": {
                "psnr": 32.019926707279694,
                "ssim": 0.9302070999145508,
                "lpips": 0.030054885745048523,
                "train_time": 2702.5397198200226,
                "eval_time": 44.0,
                "fps": 100.02165,
                "model_size": 94054264.0
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Ex4DGS",
              "video": "./n3d/videos/techni-painter/3views/ex4dgs.mp4",
              "metrics": {
                "psnr": 32.48440573182324,
                "ssim": 0.9279929900169372,
                "lpips": 0.03383878991007805,
                "train_time": 1338.0993087291718,
                "eval_time": 218.0,
                "fps": 109.789083,
                "model_size": 71705843.0
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/techni-painter/3views/spacetimegs.mp4",
              "metrics": {
                "psnr": 33.44541962653243,
                "ssim": 0.9452491116523742,
                "lpips": 0.0226179551333189,
                "train_time": 750.0,
                "eval_time": 209.0,
                "fps": 140.839846,
                "model_size": 55909385.0
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/techni-painter/3views/swift4d.mp4",
              "metrics": {
                "psnr": 33.109028241471584,
                "ssim": 0.9441702079772949,
                "lpips": 0.02285729840397835,
                "train_time": 1386.540320634842,
                "eval_time": 15.129164457321167,
                "fps": 109.373994,
                "model_size": 38140002.0
              }
            }
          }
        },
        "4views": {
          "label": "4 Views",
          "poster": "./n3d/thumbs/techni-painter.jpg",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/techni-painter/4views/ours.mp4",
            "metrics": {
              "psnr": 25.79593408917178,
              "ssim": 0.6201075404882431,
              "lpips": 0.19999474931508301,
              "train_time": 820.0,
              "eval_time": 439.0,
              "fps": 156.365041,
              "model_size": 60715657.0
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/techni-painter/4views/4DGaussians.mp4",
              "metrics": {
                "psnr": 34.42627464101567,
                "ssim": 0.940795578956604,
                "lpips": 0.03318699616938829,
                "train_time": 1210.0,
                "eval_time": 21.255250453948975,
                "fps": 102.124115,
                "model_size": 55741176.0
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/techni-painter/4views/cem4dgs.mp4",
              "metrics": {
                "psnr": 34.686866378527625,
                "ssim": 0.9486569154262543,
                "lpips": 0.02441470369696617,
                "train_time": 2536.234537124634,
                "eval_time": 43.0,
                "fps": 100.02363,
                "model_size": 100721288.0
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Ex4DGS",
              "video": "./n3d/videos/techni-painter/4views/ex4dgs.mp4",
              "metrics": {
                "psnr": 34.07164561154951,
                "ssim": 0.9434349286556244,
                "lpips": 0.0297587913274765,
                "train_time": 1307.0,
                "eval_time": 202.0,
                "fps": 112.348629,
                "model_size": 76275444.0
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/techni-painter/4views/spacetimegs.mp4",
              "metrics": {
                "psnr": 35.02882701355477,
                "ssim": 0.9555419027805329,
                "lpips": 0.019774440377950668,
                "train_time": 808.0,
                "eval_time": 137.1237120628357,
                "fps": 139.611138,
                "model_size": 58666249.0
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/techni-painter/4views/swift4d.mp4",
              "metrics": {
                "psnr": 34.718117906140144,
                "ssim": 0.9536772036552429,
                "lpips": 0.019367628283798694,
                "train_time": 1398.2809238433838,
                "eval_time": 18.0,
                "fps": 107.502209,
                "model_size": 41676066.0
              }
            }
          }
        }
      }
    },
    {
      "key": "techni-theater",
      "label": "Theater",
      "thumb": "./n3d/thumbs/techni-theater.jpg",
      "defaultMethod": "spacetimegs",
      "views": {
        "2views": {
          "label": "2 Views",
          "poster": "./n3d/thumbs/techni-theater.jpg",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/techni-theater/2views/ours.mp4",
            "metrics": {
              "psnr": 21.37507292939831,
              "ssim": 0.6643947958946228,
              "lpips": 0.15695956856012344,
              "train_time": 756.0,
              "eval_time": 142.0,
              "fps": 156.704943,
              "model_size": 67301129.0
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/techni-theater/2views/4DGaussians.mp4",
              "metrics": {
                "psnr": 12.601274639152967,
                "ssim": 0.31119227468967436,
                "lpips": 0.4180230438709259,
                "train_time": 1489.0,
                "eval_time": 18.559102296829224,
                "fps": 102.470511,
                "model_size": 73054096.0
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/techni-theater/2views/cem4dgs.mp4",
              "metrics": {
                "psnr": 18.45593497857873,
                "ssim": 0.48643447399139406,
                "lpips": 0.26063020825386046,
                "train_time": 3399.0,
                "eval_time": 42.873003005981445,
                "fps": 100.023888,
                "model_size": 61156163.0
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Ex4DGS",
              "video": "./n3d/videos/techni-theater/2views/ex4dgs.mp4",
              "metrics": {
                "psnr": 17.880055121947176,
                "ssim": 0.4732666575908661,
                "lpips": 0.2753132623434067,
                "train_time": 1625.3795533180237,
                "eval_time": 192.0,
                "fps": 114.144888,
                "model_size": 60415143.0
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/techni-theater/2views/spacetimegs.mp4",
              "metrics": {
                "psnr": 18.672126618065867,
                "ssim": 0.5528737962245941,
                "lpips": 0.22389734774827957,
                "train_time": 701.0,
                "eval_time": 157.0,
                "fps": 142.500465,
                "model_size": 57572745.0
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/techni-theater/2views/swift4d.mp4",
              "metrics": {
                "psnr": 17.530834095022986,
                "ssim": 0.4565680837631226,
                "lpips": 0.27878690779209137,
                "train_time": 1738.0,
                "eval_time": 14.0,
                "fps": 110.029442,
                "model_size": 34701966.0
              }
            }
          }
        },
        "3views": {
          "label": "3 Views",
          "poster": "./n3d/thumbs/techni-theater.jpg",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/techni-theater/3views/ours.mp4",
            "metrics": {
              "psnr": 22.931204275578015,
              "ssim": 0.7368141567707062,
              "lpips": 0.11230596184730529,
              "train_time": 766.0,
              "eval_time": 131.31546878814697,
              "fps": 144.44628,
              "model_size": 72912265.0
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/techni-theater/3views/4DGaussians.mp4",
              "metrics": {
                "psnr": 15.778413387463544,
                "ssim": 0.47606427609920504,
                "lpips": 0.2516660082340241,
                "train_time": 1487.0,
                "eval_time": 20.0,
                "fps": 101.711227,
                "model_size": 86742496.0
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/techni-theater/3views/cem4dgs.mp4",
              "metrics": {
                "psnr": 20.521237599570487,
                "ssim": 0.6219333279132843,
                "lpips": 0.17455660164356232,
                "train_time": 3440.0,
                "eval_time": 44.619250774383545,
                "fps": 100.020468,
                "model_size": 70989027.0
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Ex4DGS",
              "video": "./n3d/videos/techni-theater/3views/ex4dgs.mp4",
              "metrics": {
                "psnr": 20.53338822450836,
                "ssim": 0.6224338853359223,
                "lpips": 0.17145460844039917,
                "train_time": 1727.4159669876099,
                "eval_time": 193.0,
                "fps": 113.295854,
                "model_size": 69928063.0
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/techni-theater/3views/spacetimegs.mp4",
              "metrics": {
                "psnr": 20.958232990224715,
                "ssim": 0.6610812389850617,
                "lpips": 0.15659850776195527,
                "train_time": 755.0,
                "eval_time": 158.0,
                "fps": 139.722799,
                "model_size": 67433737.0
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/techni-theater/3views/swift4d.mp4",
              "metrics": {
                "psnr": 19.96596185464004,
                "ssim": 0.594620451927185,
                "lpips": 0.17067860215902328,
                "train_time": 1409.0,
                "eval_time": 14.256219387054443,
                "fps": 109.487045,
                "model_size": 40945014.0
              }
            }
          }
        },
        "4views": {
          "label": "4 Views",
          "poster": "./n3d/thumbs/techni-theater.jpg",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/techni-theater/4views/ours.mp4",
            "metrics": {
              "psnr": 17.819431828769673,
              "ssim": 0.4927990297973156,
              "lpips": 0.3515734652429819,
              "train_time": 836.0,
              "eval_time": 418.0,
              "fps": 130.0,
              "model_size": 78719113.0
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/techni-theater/4views/4DGaussians.mp4",
              "metrics": {
                "psnr": 18.955195301800725,
                "ssim": 0.6264304780960083,
                "lpips": 0.179780336022377,
                "train_time": 1448.494160413742,
                "eval_time": 24.0,
                "fps": 101.27806,
                "model_size": 90749344.0
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/techni-theater/4views/cem4dgs.mp4",
              "metrics": {
                "psnr": 23.041179978854842,
                "ssim": 0.7200753104686737,
                "lpips": 0.12335551708936691,
                "train_time": 3290.2487111091614,
                "eval_time": 44.1103630065918,
                "fps": 100.021436,
                "model_size": 77482911.0
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Ex4DGS",
              "video": "./n3d/videos/techni-theater/4views/ex4dgs.mp4",
              "metrics": {
                "psnr": 23.109422251431752,
                "ssim": 0.7231079041957855,
                "lpips": 0.11610220789909363,
                "train_time": 1705.0816247463226,
                "eval_time": 187.32746577262878,
                "fps": 115.731207,
                "model_size": 78443184.0
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/techni-theater/4views/spacetimegs.mp4",
              "metrics": {
                "psnr": 22.8985972175807,
                "ssim": 0.7382278370857239,
                "lpips": 0.11162663504481316,
                "train_time": 764.0,
                "eval_time": 150.75858116149902,
                "fps": 138.715251,
                "model_size": 72832265.0
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/techni-theater/4views/swift4d.mp4",
              "metrics": {
                "psnr": 23.198419107622964,
                "ssim": 0.7310315239429473,
                "lpips": 0.1040140950679779,
                "train_time": 1421.0,
                "eval_time": 17.0,
                "fps": 107.217486,
                "model_size": 46418454.0
              }
            }
          }
        }
      }
    },
    {
      "key": "techni-train",
      "label": "Train",
      "thumb": "./n3d/thumbs/techni-train.jpg",
      "defaultMethod": "swift4d",
      "views": {
        "2views": {
          "label": "2 Views",
          "poster": "./n3d/thumbs/techni-train.jpg",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/techni-train/2views/ours.mp4",
            "metrics": {
              "psnr": 25.401505450895776,
              "ssim": 0.9009180033206939,
              "lpips": 0.03706751428544521,
              "train_time": 845.4784033298492,
              "eval_time": 134.0,
              "fps": 200.0,
              "model_size": 86130953.0
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/techni-train/2views/4DGaussians.mp4",
              "metrics": {
                "psnr": 15.88172670381713,
                "ssim": 0.5449063098430633,
                "lpips": 0.26067180633544923,
                "train_time": 1714.0,
                "eval_time": 17.77757954597473,
                "fps": 102.208786,
                "model_size": 96618720.0
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/techni-train/2views/cem4dgs.mp4",
              "metrics": {
                "psnr": 19.45051926989431,
                "ssim": 0.5810554122924805,
                "lpips": 0.22567396968603134,
                "train_time": 6444.376352548599,
                "eval_time": 59.0,
                "fps": 100.0,
                "model_size": 179941635.0
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Ex4DGS",
              "video": "./n3d/videos/techni-train/2views/ex4dgs.mp4",
              "metrics": {
                "psnr": 18.55626516721778,
                "ssim": 0.5750989258289337,
                "lpips": 0.23197926074266434,
                "train_time": 3518.0,
                "eval_time": 695.2309868335724,
                "fps": 101.261935,
                "model_size": 168646804.0
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/techni-train/2views/spacetimegs.mp4",
              "metrics": {
                "psnr": 21.428732804860665,
                "ssim": 0.7958754920959472,
                "lpips": 0.09268073007464409,
                "train_time": 750.0,
                "eval_time": 138.0,
                "fps": 150.0,
                "model_size": 77281545.0
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/techni-train/2views/swift4d.mp4",
              "metrics": {
                "psnr": 16.876450918335845,
                "ssim": 0.6714223313331604,
                "lpips": 0.14756352603435516,
                "train_time": 1815.0,
                "eval_time": 15.0,
                "fps": 106.858078,
                "model_size": 60995646.0
              }
            }
          }
        },
        "3views": {
          "label": "3 Views",
          "poster": "./n3d/thumbs/techni-train.jpg",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/techni-train/3views/ours.mp4",
            "metrics": {
              "psnr": 27.770025431193467,
              "ssim": 0.9290738308429718,
              "lpips": 0.026087791323661805,
              "train_time": 923.0719947814941,
              "eval_time": 136.46762228012085,
              "fps": 178.068179,
              "model_size": 93078409.0
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/techni-train/3views/4DGaussians.mp4",
              "metrics": {
                "psnr": 19.85649859611915,
                "ssim": 0.6708907437324524,
                "lpips": 0.2374281245470047,
                "train_time": 1574.0,
                "eval_time": 18.45262360572815,
                "fps": 102.218698,
                "model_size": 97756144.0
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/techni-train/3views/cem4dgs.mp4",
              "metrics": {
                "psnr": 23.098095495743916,
                "ssim": 0.771360799074173,
                "lpips": 0.11388321399688721,
                "train_time": 7345.574421882629,
                "eval_time": 41.0,
                "fps": 100.02788,
                "model_size": 162780651.0
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Ex4DGS",
              "video": "./n3d/videos/techni-train/3views/ex4dgs.mp4",
              "metrics": {
                "psnr": 22.992592436488067,
                "ssim": 0.758133819103241,
                "lpips": 0.12399399682879447,
                "train_time": 2891.146354675293,
                "eval_time": 2483.0,
                "fps": 101.634467,
                "model_size": 144521004.0
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/techni-train/3views/spacetimegs.mp4",
              "metrics": {
                "psnr": 26.074661985444564,
                "ssim": 0.9009796416759491,
                "lpips": 0.037038730606436726,
                "train_time": 825.0,
                "eval_time": 138.0,
                "fps": 147.434453,
                "model_size": 85482761.0
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/techni-train/3views/swift4d.mp4",
              "metrics": {
                "psnr": 22.936917479153113,
                "ssim": 0.847180745601654,
                "lpips": 0.061098449304699896,
                "train_time": 1677.2972707748413,
                "eval_time": 16.0,
                "fps": 106.719382,
                "model_size": 62971326.0
              }
            }
          }
        },
        "4views": {
          "label": "4 Views",
          "poster": "./n3d/thumbs/techni-train.jpg",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/techni-train/4views/ours.mp4",
            "metrics": {
              "psnr": 19.530632958165384,
              "ssim": 0.5221832747757434,
              "lpips": 0.3129433447308838,
              "train_time": 2887.0,
              "eval_time": 396.0,
              "fps": 175.205592,
              "model_size": 98871305.0
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/techni-train/4views/4DGaussians.mp4",
              "metrics": {
                "psnr": 21.29609251325586,
                "ssim": 0.6796131885051727,
                "lpips": 0.2204598730802536,
                "train_time": 1462.0,
                "eval_time": 19.0,
                "fps": 102.021645,
                "model_size": 99360536.0
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/techni-train/4views/cem4dgs.mp4",
              "metrics": {
                "psnr": 25.247460669462438,
                "ssim": 0.8424260008335114,
                "lpips": 0.07279252395033836,
                "train_time": 5077.0,
                "eval_time": 39.0,
                "fps": 100.032567,
                "model_size": 170661755.0
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Ex4DGS",
              "video": "./n3d/videos/techni-train/4views/ex4dgs.mp4",
              "metrics": {
                "psnr": 24.793880775143872,
                "ssim": 0.8284422433376313,
                "lpips": 0.08755310401320457,
                "train_time": 2622.0,
                "eval_time": 507.0,
                "fps": 101.973035,
                "model_size": 150206444.0
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/techni-train/4views/spacetimegs.mp4",
              "metrics": {
                "psnr": 27.868963883165257,
                "ssim": 0.9298814308643341,
                "lpips": 0.026055571660399436,
                "train_time": 900.0,
                "eval_time": 131.3769338130951,
                "fps": 143.478628,
                "model_size": 93290505.0
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/techni-train/4views/swift4d.mp4",
              "metrics": {
                "psnr": 25.824904390770726,
                "ssim": 0.8777037799358368,
                "lpips": 0.045602311566472056,
                "train_time": 1616.391901254654,
                "eval_time": 16.033345937728882,
                "fps": 106.453844,
                "model_size": 65933082.0
              }
            }
          }
        }
      }
    }
  ]
};
