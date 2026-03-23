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
              "fps": 472.66295782075514,
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
                "fps": 11.192607609321284,
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
                "fps": 0.8287292817679558,
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
                "fps": 54.95181266363482,
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
                "fps": 9.823955057327161,
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
                "fps": 138.78174052276393,
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
              "fps": 455.7325700594685,
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
                "fps": 10.015238725357628,
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
                "fps": 0.4178272980501393,
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
                "fps": 57.61404120276391,
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
                "fps": 11.553932241920574,
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
                "fps": 165.7683696883042,
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
              "fps": 391.6116328232314,
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
                "fps": 10.41789291534261,
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
                "fps": 0.8571428571428571,
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
                "fps": 62.21673130882169,
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
                "fps": 12.292214006515096,
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
                "fps": 156.90375686651123,
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
              "fps": 558.5998527600212,
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
                "fps": 12.724423720726282,
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
                "fps": 0.4195804195804196,
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
                "fps": 69.04792834059798,
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
                "fps": 9.890649774868269,
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
                "fps": 155.71077232908058,
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
              "fps": 614.3460106040219,
              "model_size": 32459207.0
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/cook_spinach/3views/4DGaussians.mp4",
              "metrics": {
                "psnr": 30.0928614825359,
                "ssim": 0.9235472699006398,
                "lpips": 0.05511420217653116,
                "train_time": 1736.0,
                "eval_time": 80.0,
                "fps": 10.236668559106851,
                "model_size": 32459207.0
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
                "fps": 0.410958904109589,
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
                "fps": 57.932638247885706,
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
                "fps": 11.681769987866709,
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
                "fps": 140.2553698614051,
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
              "fps": 463.504469695588,
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
                "fps": 11.142619665243283,
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
                "fps": 0.8547008547008547,
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
                "fps": 71.31158081661032,
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
                "fps": 11.738339018016294,
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
                "fps": 157.19061361270823,
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
              "fps": 618.3381630062664,
              "model_size": 27902183.0
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/cut_roasted_beef/2views/4DGaussians.mp4",
              "metrics": {
                "psnr": 26.755822696311668,
                "ssim": 0.8800894737243652,
                "lpips": 0.10099755754073461,
                "train_time": 1694.0,
                "eval_time": 165.0,
                "fps": 12.588555967497214,
                "model_size": 27902183.0
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
                "fps": 0.45045045045045046,
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
                "fps": 57.275767410445624,
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
                "fps": 11.086579665192952,
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
                "fps": 141.2417928978662,
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
              "fps": 599.4473731443857,
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
                "fps": 12.2122260918766,
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
                "fps": 0.42075736325385693,
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
                "fps": 72.6436470304404,
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
                "fps": 12.177795437777341,
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
                "fps": 149.56807457312587,
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
              "fps": 539.7231125208108,
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
                "fps": 10.142482178451726,
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
                "fps": 0.8595988538681948,
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
                "fps": 70.99358411466541,
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
                "fps": 12.358968442511571,
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
                "fps": 148.6323850158369,
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
              "fps": 431.5023525345807,
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
                "fps": 9.656534118338119,
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
                "fps": 0.4132231404958678,
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
                "fps": 57.37108353549837,
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
                "fps": 11.140832670613088,
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
                "fps": 167.00389738869498,
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
              "fps": 400.33231992714735,
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
                "fps": 10.656327440139965,
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
                "fps": 0.4178272980501393,
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
                "fps": 67.59060760689218,
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
                "fps": 11.87514726554196,
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
                "fps": 139.98527879419257,
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
              "fps": 389.80983905677465,
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
                "fps": 12.6494597075685,
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
                "fps": 0.8547008547008547,
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
                "fps": 67.25024924275174,
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
                "fps": 11.833216584490824,
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
                "fps": 157.61498639324716,
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
              "fps": 414.46351617312644,
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
                "fps": 9.495256808036862,
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
                "fps": 0.45045045045045046,
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
                "fps": 70.28182483443145,
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
                "fps": 11.43147565848963,
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
                "fps": 156.3851066042538,
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
              "fps": 606.4232209761625,
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
                "fps": 11.902680233775255,
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
                "fps": 0.9287925696594427,
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
                "fps": 53.19811540246669,
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
                "fps": 12.326746015748649,
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
                "fps": 165.89028726565013,
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
              "fps": 554.6353985082454,
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
                "fps": 11.641275540902008,
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
                "fps": 0.8823529411764706,
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
                "fps": 63.19486626010552,
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
                "fps": 12.40474280357456,
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
                "fps": 151.63103161347377,
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
              "fps": 517.9401977714534,
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
                "fps": 11.585408306097795,
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
                "fps": 0.4219409282700422,
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
                "fps": 66.03126674239745,
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
                "fps": 12.811737996091496,
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
                "fps": 157.09578344403513,
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
              "fps": 613.5642584883761,
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
                "fps": 11.821533038410443,
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
                "fps": 0.8797653958944281,
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
                "fps": 71.4972489580133,
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
                "fps": 10.702036434205077,
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
                "fps": 154.78720144516137,
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
              "fps": 521.4954656261448,
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
                "fps": 12.526156654494494,
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
                "fps": 0.8547008547008547,
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
                "fps": 103.14019488770384,
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
                "fps": 12.522983576217673,
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
                "fps": 149.14891737431606,
                "model_size": 151231249.0
              }
            }
          }
        }
      }
    }
  ]
};
