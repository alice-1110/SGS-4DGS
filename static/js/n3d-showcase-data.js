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
      "label": "Sparse4DGS"
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
      "datasetKey": "n3d",
      "datasetLabel": "N3DV",
      "thumb": "./n3d/thumbs/coffee_martini.png?v=20260401-anon-refresh",
      "defaultMethod": "4DGaussians",
      "views": {
        "2views": {
          "label": "2 Views",
          "poster": "./n3d/thumbs/coffee_martini.png?v=20260401-anon-refresh",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/coffee_martini/2views/ours.mp4?v=20260401-anon-refresh",
            "metrics": {
              "psnr": 23.08,
              "ssim": 0.837,
              "lpips": 0.1066,
              "train_time": 1218.1255309581757,
              "eval_time": 84.0890474319458,
              "fps": 155.378554,
              "model_size": 31238511.0,
              "fps_avg": 241.1
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/coffee_martini/2views/4DGaussians.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 19.13,
                "ssim": 0.7188,
                "lpips": 0.2165,
                "train_time": 3084.0,
                "eval_time": 169.0,
                "fps": 103.235926,
                "model_size": 29189943.0,
                "fps_avg": 121.5
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/coffee_martini/2views/cem4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 17.73,
                "ssim": 0.6508,
                "lpips": 0.2779,
                "train_time": 0.0,
                "eval_time": 362.0,
                "fps": 100.125387,
                "model_size": 242127172.0,
                "fps_avg": 46.4
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Sparse4DGS",
              "video": "./n3d/videos/coffee_martini/2views/ex4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 18.83,
                "ssim": 0.6542,
                "lpips": 0.2699,
                "train_time": 3652.0,
                "eval_time": 4568.0,
                "fps": 116.369497,
                "model_size": 163160732.0,
                "fps_avg": 119.4
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/coffee_martini/2views/spacetimegs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 18.33,
                "ssim": 0.7254,
                "lpips": 0.2597,
                "train_time": 3046.5629482269287,
                "eval_time": 1014.3318891525269,
                "fps": 102.825149,
                "model_size": 6211976.0,
                "fps_avg": 149.8
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/coffee_martini/2views/swift4d.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 19.17,
                "ssim": 0.7302,
                "lpips": 0.2049,
                "train_time": 3801.0,
                "eval_time": 147.0,
                "fps": 141.529606,
                "model_size": 33777125.0,
                "fps_avg": 132.4
              }
            }
          }
        },
        "3views": {
          "label": "3 Views",
          "poster": "./n3d/thumbs/coffee_martini.png?v=20260401-anon-refresh",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/coffee_martini/3views/ours.mp4?v=20260401-anon-refresh",
            "metrics": {
              "psnr": 23.3,
              "ssim": 0.8488,
              "lpips": 0.1054,
              "train_time": 1323.3471503257751,
              "eval_time": 69.05672717094421,
              "fps": 150.192644,
              "model_size": 34843223.0,
              "fps_avg": 230.2
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/coffee_martini/3views/4DGaussians.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 21.58,
                "ssim": 0.816,
                "lpips": 0.1323,
                "train_time": 3675.0,
                "eval_time": 78.06277751922607,
                "fps": 102.882559,
                "model_size": 30287999.0,
                "fps_avg": 117.1
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/coffee_martini/3views/cem4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 21.17,
                "ssim": 0.7966,
                "lpips": 0.1582,
                "train_time": 8184.0,
                "eval_time": 718.0,
                "fps": 100.002061,
                "model_size": 255477752.0,
                "fps_avg": 47.1
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Sparse4DGS",
              "video": "./n3d/videos/coffee_martini/3views/ex4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 21.45,
                "ssim": 0.8016,
                "lpips": 0.162,
                "train_time": 4896.0,
                "eval_time": 2167.0,
                "fps": 117.16852,
                "model_size": 122380288.0,
                "fps_avg": 112.2
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/coffee_martini/3views/spacetimegs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 21.44,
                "ssim": 0.8066,
                "lpips": 0.1467,
                "train_time": 3382.0,
                "eval_time": 1068.0,
                "fps": 103.344371,
                "model_size": 17715209.0,
                "fps_avg": 139.4
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/coffee_martini/3views/swift4d.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 21.89,
                "ssim": 0.821,
                "lpips": 0.1201,
                "train_time": 1913.0,
                "eval_time": 62.725200176239014,
                "fps": 149.629178,
                "model_size": 40604562.0,
                "fps_avg": 126.0
              }
            }
          }
        },
        "4views": {
          "label": "4 Views",
          "poster": "./n3d/thumbs/coffee_martini.png?v=20260401-anon-refresh",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/coffee_martini/4views/ours.mp4?v=20260401-anon-refresh",
            "metrics": {
              "psnr": 25.39,
              "ssim": 0.871,
              "lpips": 0.0863,
              "train_time": 1417.6564111709595,
              "eval_time": 68.2707302570343,
              "fps": 130.551903,
              "model_size": 38654096.0,
              "fps_avg": 221.9
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/coffee_martini/4views/4DGaussians.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 24.88,
                "ssim": 0.8736,
                "lpips": 0.0888,
                "train_time": 3289.0,
                "eval_time": 76.0,
                "fps": 103.003409,
                "model_size": 38246616.0,
                "fps_avg": 117.8
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/coffee_martini/4views/cem4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 24.34,
                "ssim": 0.8624,
                "lpips": 0.0995,
                "train_time": 7529.0,
                "eval_time": 350.0,
                "fps": 100.133914,
                "model_size": 222928624.0,
                "fps_avg": 48.4
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Sparse4DGS",
              "video": "./n3d/videos/coffee_martini/4views/ex4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 23.87,
                "ssim": 0.8596,
                "lpips": 0.1076,
                "train_time": 4637.0,
                "eval_time": 1056.0,
                "fps": 118.549938,
                "model_size": 106387555.0,
                "fps_avg": 107.6
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/coffee_martini/4views/spacetimegs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 24.73,
                "ssim": 0.8638,
                "lpips": 0.0948,
                "train_time": 3284.0,
                "eval_time": 1015.0,
                "fps": 103.565954,
                "model_size": 15082889.0,
                "fps_avg": 131.9
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/coffee_martini/4views/swift4d.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 25.21,
                "ssim": 0.8732,
                "lpips": 0.0818,
                "train_time": 1903.0,
                "eval_time": 65.0,
                "fps": 146.968617,
                "model_size": 48426894.0,
                "fps_avg": 123.1
              }
            }
          }
        }
      }
    },
    {
      "key": "cook_spinach",
      "label": "Cook Spinach",
      "datasetKey": "n3d",
      "datasetLabel": "N3DV",
      "thumb": "./n3d/thumbs/cook_spinach.png?v=20260401-anon-refresh",
      "defaultMethod": "cem4dgs",
      "views": {
        "2views": {
          "label": "2 Views",
          "poster": "./n3d/thumbs/cook_spinach.png?v=20260401-anon-refresh",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/cook_spinach/2views/ours.mp4?v=20260401-anon-refresh",
            "metrics": {
              "psnr": 27.83,
              "ssim": 0.9004,
              "lpips": 0.0888,
              "train_time": 1082.0,
              "eval_time": 78.74148154258728,
              "fps": 181.701692,
              "model_size": 28623559.0,
              "fps_avg": 241.1
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/cook_spinach/2views/4DGaussians.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 23.37,
                "ssim": 0.8248,
                "lpips": 0.1611,
                "train_time": 1727.0,
                "eval_time": 163.0,
                "fps": 103.695674,
                "model_size": 29745647.0,
                "fps_avg": 121.5
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/cook_spinach/2views/cem4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 22.9,
                "ssim": 0.795,
                "lpips": 0.1918,
                "train_time": 11342.0,
                "eval_time": 715.0,
                "fps": 100.002588,
                "model_size": 328972120.0,
                "fps_avg": 46.4
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Sparse4DGS",
              "video": "./n3d/videos/cook_spinach/2views/ex4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 22.35,
                "ssim": 0.7838,
                "lpips": 0.201,
                "train_time": 4765.0,
                "eval_time": 4321.0,
                "fps": 120.600204,
                "model_size": 133443279.0,
                "fps_avg": 119.4
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/cook_spinach/2views/spacetimegs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 21.64,
                "ssim": 0.8062,
                "lpips": 0.2127,
                "train_time": 1761.0,
                "eval_time": 980.1054708957672,
                "fps": 102.845166,
                "model_size": 2540168.0,
                "fps_avg": 149.8
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/cook_spinach/2views/swift4d.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 23.26,
                "ssim": 0.8324,
                "lpips": 0.1401,
                "train_time": 1890.2538223266602,
                "eval_time": 62.245927810668945,
                "fps": 146.610563,
                "model_size": 27342053.0,
                "fps_avg": 132.4
              }
            }
          }
        },
        "3views": {
          "label": "3 Views",
          "poster": "./n3d/thumbs/cook_spinach.png?v=20260401-anon-refresh",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/cook_spinach/3views/ours.mp4?v=20260401-anon-refresh",
            "metrics": {
              "psnr": 30.09,
              "ssim": 0.9274,
              "lpips": 0.0545,
              "train_time": 1147.0,
              "eval_time": 72.0,
              "fps": 198.777173,
              "model_size": 32459207.0,
              "fps_avg": 230.2
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/cook_spinach/3views/4DGaussians.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 29.73,
                "ssim": 0.9236,
                "lpips": 0.0551,
                "train_time": 1736.0,
                "eval_time": 80.0,
                "fps": 102.949017,
                "model_size": 35934695.0,
                "fps_avg": 117.1
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/cook_spinach/3views/cem4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 26.59,
                "ssim": 0.8878,
                "lpips": 0.0913,
                "train_time": 11733.0,
                "eval_time": 730.0,
                "fps": 100.0,
                "model_size": 342790064.0,
                "fps_avg": 47.1
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Sparse4DGS",
              "video": "./n3d/videos/cook_spinach/3views/ex4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 26.38,
                "ssim": 0.8866,
                "lpips": 0.0916,
                "train_time": 4894.0,
                "eval_time": 2237.0,
                "fps": 117.264141,
                "model_size": 129727539.0,
                "fps_avg": 112.2
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/cook_spinach/3views/spacetimegs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 27.13,
                "ssim": 0.8948,
                "lpips": 0.0949,
                "train_time": 1689.277854681015,
                "eval_time": 1008.0,
                "fps": 103.38274,
                "model_size": 5164808.0,
                "fps_avg": 139.4
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/cook_spinach/3views/swift4d.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 29.75,
                "ssim": 0.9216,
                "lpips": 0.052,
                "train_time": 2089.0,
                "eval_time": 65.23647046089172,
                "fps": 141.97189,
                "model_size": 31166153.0,
                "fps_avg": 126.0
              }
            }
          }
        },
        "4views": {
          "label": "4 Views",
          "poster": "./n3d/thumbs/cook_spinach.png?v=20260401-anon-refresh",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/cook_spinach/4views/ours.mp4?v=20260401-anon-refresh",
            "metrics": {
              "psnr": 31.33,
              "ssim": 0.9324,
              "lpips": 0.0518,
              "train_time": 1235.0,
              "eval_time": 70.01408076286316,
              "fps": 152.573238,
              "model_size": 36052432.0,
              "fps_avg": 221.9
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/cook_spinach/4views/4DGaussians.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 29.58,
                "ssim": 0.9032,
                "lpips": 0.0739,
                "train_time": 1667.0,
                "eval_time": 71.5747139453888,
                "fps": 103.220923,
                "model_size": 33087255.0,
                "fps_avg": 117.8
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/cook_spinach/4views/cem4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 27.32,
                "ssim": 0.8794,
                "lpips": 0.1027,
                "train_time": 11353.0,
                "eval_time": 351.0,
                "fps": 100.133182,
                "model_size": 345425944.0,
                "fps_avg": 48.4
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Sparse4DGS",
              "video": "./n3d/videos/cook_spinach/4views/ex4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 27.38,
                "ssim": 0.8716,
                "lpips": 0.1135,
                "train_time": 4668.0,
                "eval_time": 1064.0,
                "fps": 121.2796,
                "model_size": 136200891.0,
                "fps_avg": 107.6
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/cook_spinach/4views/spacetimegs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 27.2,
                "ssim": 0.8766,
                "lpips": 0.1115,
                "train_time": 1668.5660395622253,
                "eval_time": 970.1443161964417,
                "fps": 103.399718,
                "model_size": 7073288.0,
                "fps_avg": 131.9
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/cook_spinach/4views/swift4d.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 30.04,
                "ssim": 0.9076,
                "lpips": 0.0706,
                "train_time": 1876.0,
                "eval_time": 67.0,
                "fps": 147.054712,
                "model_size": 33470945.0,
                "fps_avg": 123.1
              }
            }
          }
        }
      }
    },
    {
      "key": "cut_roasted_beef",
      "label": "Cut Roasted Beef",
      "datasetKey": "n3d",
      "datasetLabel": "N3DV",
      "thumb": "./n3d/thumbs/cut_roasted_beef.png?v=20260401-anon-refresh",
      "defaultMethod": "ex4dgs",
      "views": {
        "2views": {
          "label": "2 Views",
          "poster": "./n3d/thumbs/cut_roasted_beef.png?v=20260401-anon-refresh",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/cut_roasted_beef/2views/ours.mp4?v=20260401-anon-refresh",
            "metrics": {
              "psnr": 26.76,
              "ssim": 0.88,
              "lpips": 0.101,
              "train_time": 1061.0,
              "eval_time": 71.0,
              "fps": 200.0,
              "model_size": 27902183.0,
              "fps_avg": 241.1
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/cut_roasted_beef/2views/4DGaussians.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 24.92,
                "ssim": 0.8772,
                "lpips": 0.1072,
                "train_time": 1694.0,
                "eval_time": 165.0,
                "fps": 103.654896,
                "model_size": 30044143.0,
                "fps_avg": 121.5
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/cut_roasted_beef/2views/cem4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 25.03,
                "ssim": 0.854,
                "lpips": 0.1301,
                "train_time": 7407.0,
                "eval_time": 666.0,
                "fps": 100.011853,
                "model_size": 207214712.0,
                "fps_avg": 46.4
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Sparse4DGS",
              "video": "./n3d/videos/cut_roasted_beef/2views/ex4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 24.19,
                "ssim": 0.8188,
                "lpips": 0.1558,
                "train_time": 4867.0,
                "eval_time": 2185.0,
                "fps": 117.066992,
                "model_size": 139280568.0,
                "fps_avg": 119.4
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/cut_roasted_beef/2views/spacetimegs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 23.91,
                "ssim": 0.8366,
                "lpips": 0.1729,
                "train_time": 1719.1845293045044,
                "eval_time": 1006.7388818264008,
                "fps": 103.204104,
                "model_size": 3139848.0,
                "fps_avg": 149.8
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/cut_roasted_beef/2views/swift4d.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 26.21,
                "ssim": 0.8782,
                "lpips": 0.0895,
                "train_time": 1960.5865099430084,
                "eval_time": 72.0,
                "fps": 142.267948,
                "model_size": 146608057.0,
                "fps_avg": 132.4
              }
            }
          }
        },
        "3views": {
          "label": "3 Views",
          "poster": "./n3d/thumbs/cut_roasted_beef.png?v=20260401-anon-refresh",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/cut_roasted_beef/3views/ours.mp4?v=20260401-anon-refresh",
            "metrics": {
              "psnr": 32.4,
              "ssim": 0.94,
              "lpips": 0.0509,
              "train_time": 1174.5850257873535,
              "eval_time": 67.0,
              "fps": 194.213604,
              "model_size": 36214504.0,
              "fps_avg": 230.2
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/cut_roasted_beef/3views/4DGaussians.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 29.27,
                "ssim": 0.9158,
                "lpips": 0.0732,
                "train_time": 1706.0,
                "eval_time": 69.0,
                "fps": 103.541947,
                "model_size": 33652207.0,
                "fps_avg": 117.1
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/cut_roasted_beef/3views/cem4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 26.77,
                "ssim": 0.893,
                "lpips": 0.0949,
                "train_time": 7566.0,
                "eval_time": 713.0,
                "fps": 100.002941,
                "model_size": 187136136.0,
                "fps_avg": 47.1
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Sparse4DGS",
              "video": "./n3d/videos/cut_roasted_beef/3views/ex4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 27.3,
                "ssim": 0.89,
                "lpips": 0.1001,
                "train_time": 4748.0,
                "eval_time": 2085.0,
                "fps": 121.679397,
                "model_size": 134944187.0,
                "fps_avg": 112.2
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/cut_roasted_beef/3views/spacetimegs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 27.5,
                "ssim": 0.8898,
                "lpips": 0.0996,
                "train_time": 1687.1115653514862,
                "eval_time": 1022.0,
                "fps": 103.531613,
                "model_size": 4909320.0,
                "fps_avg": 139.4
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/cut_roasted_beef/3views/swift4d.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 28.98,
                "ssim": 0.9146,
                "lpips": 0.0675,
                "train_time": 2101.0,
                "eval_time": 65.14013123512268,
                "fps": 144.766938,
                "model_size": 150978745.0,
                "fps_avg": 126.0
              }
            }
          }
        },
        "4views": {
          "label": "4 Views",
          "poster": "./n3d/thumbs/cut_roasted_beef.png?v=20260401-anon-refresh",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/cut_roasted_beef/4views/ours.mp4?v=20260401-anon-refresh",
            "metrics": {
              "psnr": 32.26,
              "ssim": 0.9406,
              "lpips": 0.0494,
              "train_time": 1179.0,
              "eval_time": 64.60210657119751,
              "fps": 175.9196,
              "model_size": 34230639.0,
              "fps_avg": 221.9
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/cut_roasted_beef/4views/4DGaussians.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 31.21,
                "ssim": 0.9286,
                "lpips": 0.0603,
                "train_time": 1689.0,
                "eval_time": 80.0,
                "fps": 102.920749,
                "model_size": 33902023.0,
                "fps_avg": 117.8
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/cut_roasted_beef/4views/cem4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 29.4,
                "ssim": 0.9254,
                "lpips": 0.0678,
                "train_time": 7356.0,
                "eval_time": 349.0,
                "fps": 100.134652,
                "model_size": 193085084.0,
                "fps_avg": 48.4
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Sparse4DGS",
              "video": "./n3d/videos/cut_roasted_beef/4views/ex4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 27.9,
                "ssim": 0.9102,
                "lpips": 0.0867,
                "train_time": 4674.0,
                "eval_time": 1031.0,
                "fps": 121.184159,
                "model_size": 123438779.0,
                "fps_avg": 107.6
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/cut_roasted_beef/4views/spacetimegs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 29.41,
                "ssim": 0.9128,
                "lpips": 0.0785,
                "train_time": 1666.0,
                "eval_time": 974.0363972187042,
                "fps": 103.585989,
                "model_size": 5139080.0,
                "fps_avg": 131.9
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/cut_roasted_beef/4views/swift4d.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 29.87,
                "ssim": 0.9358,
                "lpips": 0.0516,
                "train_time": 1926.0,
                "eval_time": 72.0,
                "fps": 144.486107,
                "model_size": 152949638.0,
                "fps_avg": 123.1
              }
            }
          }
        }
      }
    },
    {
      "key": "flame_salmon_1",
      "label": "Flame Salmon 1",
      "datasetKey": "n3d",
      "datasetLabel": "N3DV",
      "thumb": "./n3d/thumbs/flame_salmon_1.png?v=20260401-anon-refresh",
      "defaultMethod": "spacetimegs",
      "views": {
        "2views": {
          "label": "2 Views",
          "poster": "./n3d/thumbs/flame_salmon_1.png?v=20260401-anon-refresh",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/flame_salmon_1/2views/ours.mp4?v=20260401-anon-refresh",
            "metrics": {
              "psnr": 22.77,
              "ssim": 0.8316,
              "lpips": 0.1228,
              "train_time": 1189.4726622104645,
              "eval_time": 73.0,
              "fps": 142.770741,
              "model_size": 41231664.0,
              "fps_avg": 241.1
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/flame_salmon_1/2views/4DGaussians.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 13.85,
                "ssim": 0.7032,
                "lpips": 0.2267,
                "train_time": 5681.0,
                "eval_time": 82.0,
                "fps": 102.7749,
                "model_size": 29238503.0,
                "fps_avg": 121.5
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/flame_salmon_1/2views/cem4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 18.36,
                "ssim": 0.6866,
                "lpips": 0.2868,
                "train_time": 8216.0,
                "eval_time": 726.0,
                "fps": 100.00068,
                "model_size": 274677424.0,
                "fps_avg": 46.4
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Sparse4DGS",
              "video": "./n3d/videos/flame_salmon_1/2views/ex4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 18.76,
                "ssim": 0.6876,
                "lpips": 0.2837,
                "train_time": 4724.0,
                "eval_time": 2160.0,
                "fps": 117.0956,
                "model_size": 136522975.0,
                "fps_avg": 119.4
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/flame_salmon_1/2views/spacetimegs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 17.45,
                "ssim": 0.6892,
                "lpips": 0.2721,
                "train_time": 3449.515545129776,
                "eval_time": 1021.0,
                "fps": 103.220387,
                "model_size": 9459208.0,
                "fps_avg": 149.8
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/flame_salmon_1/2views/swift4d.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 19.91,
                "ssim": 0.7552,
                "lpips": 0.186,
                "train_time": 1919.583872795105,
                "eval_time": 64.0,
                "fps": 150.0,
                "model_size": 35524494.0,
                "fps_avg": 132.4
              }
            }
          }
        },
        "3views": {
          "label": "3 Views",
          "poster": "./n3d/thumbs/flame_salmon_1.png?v=20260401-anon-refresh",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/flame_salmon_1/3views/ours.mp4?v=20260401-anon-refresh",
            "metrics": {
              "psnr": 26.0,
              "ssim": 0.8776,
              "lpips": 0.0836,
              "train_time": 1310.0,
              "eval_time": 66.09568786621094,
              "fps": 133.223118,
              "model_size": 37114720.0,
              "fps_avg": 230.2
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/flame_salmon_1/3views/4DGaussians.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 23.66,
                "ssim": 0.8312,
                "lpips": 0.1294,
                "train_time": 3081.0,
                "eval_time": 75.0,
                "fps": 103.074971,
                "model_size": 32628359.0,
                "fps_avg": 117.1
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/flame_salmon_1/3views/cem4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 22.04,
                "ssim": 0.8156,
                "lpips": 0.1362,
                "train_time": 8249.0,
                "eval_time": 718.0,
                "fps": 100.002061,
                "model_size": 252091084.0,
                "fps_avg": 47.1
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Sparse4DGS",
              "video": "./n3d/videos/flame_salmon_1/3views/ex4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 22.3,
                "ssim": 0.8142,
                "lpips": 0.1416,
                "train_time": 4657.0,
                "eval_time": 2189.0,
                "fps": 120.162814,
                "model_size": 109200043.0,
                "fps_avg": 112.2
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/flame_salmon_1/3views/spacetimegs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 22.37,
                "ssim": 0.8258,
                "lpips": 0.1465,
                "train_time": 3172.0,
                "eval_time": 1083.0,
                "fps": 103.440779,
                "model_size": 15772425.0,
                "fps_avg": 139.4
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/flame_salmon_1/3views/swift4d.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 23.36,
                "ssim": 0.8332,
                "lpips": 0.117,
                "train_time": 2251.0,
                "eval_time": 77.0,
                "fps": 141.890827,
                "model_size": 44470746.0,
                "fps_avg": 126.0
              }
            }
          }
        },
        "4views": {
          "label": "4 Views",
          "poster": "./n3d/thumbs/flame_salmon_1.png?v=20260401-anon-refresh",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/flame_salmon_1/4views/ours.mp4?v=20260401-anon-refresh",
            "metrics": {
              "psnr": 27.44,
              "ssim": 0.901,
              "lpips": 0.0728,
              "train_time": 1398.0,
              "eval_time": 66.17241215705872,
              "fps": 130.0,
              "model_size": 38887144.0,
              "fps_avg": 221.9
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/flame_salmon_1/4views/4DGaussians.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 24.48,
                "ssim": 0.8758,
                "lpips": 0.0877,
                "train_time": 3185.0,
                "eval_time": 63.0,
                "fps": 103.673175,
                "model_size": 37463392.0,
                "fps_avg": 117.8
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/flame_salmon_1/4views/cem4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 23.62,
                "ssim": 0.8494,
                "lpips": 0.1035,
                "train_time": 8296.0,
                "eval_time": 351.0,
                "fps": 100.133182,
                "model_size": 258219652.0,
                "fps_avg": 48.4
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Sparse4DGS",
              "video": "./n3d/videos/flame_salmon_1/4views/ex4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 21.16,
                "ssim": 0.846,
                "lpips": 0.1201,
                "train_time": 4487.0,
                "eval_time": 1068.0,
                "fps": 120.060661,
                "model_size": 110470400.0,
                "fps_avg": 107.6
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/flame_salmon_1/4views/spacetimegs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 25.19,
                "ssim": 0.8718,
                "lpips": 0.0964,
                "train_time": 3188.0,
                "eval_time": 1001.0,
                "fps": 103.428194,
                "model_size": 18357257.0,
                "fps_avg": 131.9
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/flame_salmon_1/4views/swift4d.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 24.68,
                "ssim": 0.8794,
                "lpips": 0.081,
                "train_time": 2149.0,
                "eval_time": 66.4632477760315,
                "fps": 147.18208,
                "model_size": 48773646.0,
                "fps_avg": 123.1
              }
            }
          }
        }
      }
    },
    {
      "key": "flame_steak",
      "label": "Flame Steak",
      "datasetKey": "n3d",
      "datasetLabel": "N3DV",
      "thumb": "./n3d/thumbs/flame_steak.png?v=20260401-anon-refresh",
      "defaultMethod": "swift4d",
      "views": {
        "2views": {
          "label": "2 Views",
          "poster": "./n3d/thumbs/flame_steak.png?v=20260401-anon-refresh",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/flame_steak/2views/ours.mp4?v=20260401-anon-refresh",
            "metrics": {
              "psnr": 27.99,
              "ssim": 0.9124,
              "lpips": 0.0728,
              "train_time": 1143.546737909317,
              "eval_time": 70.65627884864807,
              "fps": 137.551613,
              "model_size": 28413239.0,
              "fps_avg": 241.1
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/flame_steak/2views/4DGaussians.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 24.84,
                "ssim": 0.8656,
                "lpips": 0.1122,
                "train_time": 1700.0,
                "eval_time": 172.0,
                "fps": 102.726495,
                "model_size": 25034247.0,
                "fps_avg": 121.5
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/flame_steak/2views/cem4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 22.8,
                "ssim": 0.8276,
                "lpips": 0.1523,
                "train_time": 4958.0,
                "eval_time": 666.0,
                "fps": 100.011853,
                "model_size": 315693660.0,
                "fps_avg": 46.4
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Sparse4DGS",
              "video": "./n3d/videos/flame_steak/2views/ex4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 21.31,
                "ssim": 0.7968,
                "lpips": 0.1986,
                "train_time": 4593.0,
                "eval_time": 2218.0,
                "fps": 120.970536,
                "model_size": 109606915.0,
                "fps_avg": 119.4
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/flame_steak/2views/spacetimegs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 20.59,
                "ssim": 0.8174,
                "lpips": 0.1818,
                "train_time": 1664.0,
                "eval_time": 941.3222398757935,
                "fps": 103.307618,
                "model_size": 2844424.0,
                "fps_avg": 149.8
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/flame_steak/2views/swift4d.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 23.77,
                "ssim": 0.8576,
                "lpips": 0.1001,
                "train_time": 1996.0,
                "eval_time": 63.43224596977234,
                "fps": 146.812953,
                "model_size": 144938305.0,
                "fps_avg": 132.4
              }
            }
          }
        },
        "3views": {
          "label": "3 Views",
          "poster": "./n3d/thumbs/flame_steak.png?v=20260401-anon-refresh",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/flame_steak/3views/ours.mp4?v=20260401-anon-refresh",
            "metrics": {
              "psnr": 30.5,
              "ssim": 0.9362,
              "lpips": 0.0434,
              "train_time": 1674.0,
              "eval_time": 69.16911005973816,
              "fps": 196.350361,
              "model_size": 32185983.0,
              "fps_avg": 230.2
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/flame_steak/3views/4DGaussians.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 30.35,
                "ssim": 0.9312,
                "lpips": 0.046,
                "train_time": 1674.0,
                "eval_time": 70.0,
                "fps": 103.449042,
                "model_size": 32185983.0,
                "fps_avg": 117.1
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/flame_steak/3views/cem4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 27.84,
                "ssim": 0.9066,
                "lpips": 0.0817,
                "train_time": 5033.0,
                "eval_time": 323.0,
                "fps": 100.155419,
                "model_size": 261412028.0,
                "fps_avg": 47.1
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Sparse4DGS",
              "video": "./n3d/videos/flame_steak/3views/ex4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 27.5,
                "ssim": 0.8974,
                "lpips": 0.0858,
                "train_time": 5904.0,
                "eval_time": 1091.0,
                "fps": 115.843155,
                "model_size": 102366255.0,
                "fps_avg": 112.2
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/flame_steak/3views/spacetimegs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 27.98,
                "ssim": 0.9106,
                "lpips": 0.0798,
                "train_time": 1805.418470621109,
                "eval_time": 953.3610155582428,
                "fps": 103.576318,
                "model_size": 5143816.0,
                "fps_avg": 139.4
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/flame_steak/3views/swift4d.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 29.62,
                "ssim": 0.9326,
                "lpips": 0.0414,
                "train_time": 2271.0,
                "eval_time": 62.8696084022522,
                "fps": 149.665769,
                "model_size": 149703877.0,
                "fps_avg": 126.0
              }
            }
          }
        },
        "4views": {
          "label": "4 Views",
          "poster": "./n3d/thumbs/flame_steak.png?v=20260401-anon-refresh",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/flame_steak/4views/ours.mp4?v=20260401-anon-refresh",
            "metrics": {
              "psnr": 30.76,
              "ssim": 0.9414,
              "lpips": 0.043,
              "train_time": 1175.0,
              "eval_time": 65.0,
              "fps": 180.487349,
              "model_size": 34317823.0,
              "fps_avg": 221.9
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/flame_steak/4views/4DGaussians.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 29.9,
                "ssim": 0.9142,
                "lpips": 0.0697,
                "train_time": 1658.0,
                "eval_time": 69.0,
                "fps": 103.370586,
                "model_size": 32392391.0,
                "fps_avg": 117.8
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/flame_steak/4views/cem4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 27.75,
                "ssim": 0.878,
                "lpips": 0.1083,
                "train_time": 4664.0,
                "eval_time": 340.0,
                "fps": 100.141481,
                "model_size": 235288296.0,
                "fps_avg": 48.4
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Sparse4DGS",
              "video": "./n3d/videos/flame_steak/4views/ex4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 29.28,
                "ssim": 0.8828,
                "lpips": 0.0986,
                "train_time": 4689.0,
                "eval_time": 1080.0,
                "fps": 118.843508,
                "model_size": 119871595.0,
                "fps_avg": 107.6
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/flame_steak/4views/spacetimegs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 28.15,
                "ssim": 0.8958,
                "lpips": 0.1027,
                "train_time": 1667.8839609622955,
                "eval_time": 969.6961464881897,
                "fps": 103.599728,
                "model_size": 4760584.0,
                "fps_avg": 131.9
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/flame_steak/4views/swift4d.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 30.27,
                "ssim": 0.9188,
                "lpips": 0.06,
                "train_time": 2053.0,
                "eval_time": 66.0,
                "fps": 145.386099,
                "model_size": 151810849.0,
                "fps_avg": 123.1
              }
            }
          }
        }
      }
    },
    {
      "key": "sear_steak",
      "label": "Sear Steak",
      "datasetKey": "n3d",
      "datasetLabel": "N3DV",
      "thumb": "./n3d/thumbs/sear_steak.png?v=20260401-anon-refresh",
      "defaultMethod": "4DGaussians",
      "views": {
        "2views": {
          "label": "2 Views",
          "poster": "./n3d/thumbs/sear_steak.png?v=20260401-anon-refresh",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/sear_steak/2views/ours.mp4?v=20260401-anon-refresh",
            "metrics": {
              "psnr": 28.06,
              "ssim": 0.9136,
              "lpips": 0.0688,
              "train_time": 1167.0,
              "eval_time": 71.0835485458374,
              "fps": 169.247324,
              "model_size": 27245015.0,
              "fps_avg": 241.1
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/sear_steak/2views/4DGaussians.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 23.97,
                "ssim": 0.8604,
                "lpips": 0.1125,
                "train_time": 2824.0,
                "eval_time": 73.26945424079895,
                "fps": 103.353818,
                "model_size": 24432407.0,
                "fps_avg": 121.5
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/sear_steak/2views/cem4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 22.74,
                "ssim": 0.809,
                "lpips": 0.1709,
                "train_time": 4974.0,
                "eval_time": 711.0,
                "fps": 100.003296,
                "model_size": 284442136.0,
                "fps_avg": 46.4
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Sparse4DGS",
              "video": "./n3d/videos/sear_steak/2views/ex4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 22.88,
                "ssim": 0.8066,
                "lpips": 0.1916,
                "train_time": 4644.0,
                "eval_time": 2168.0,
                "fps": 119.694805,
                "model_size": 97714515.0,
                "fps_avg": 119.4
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/sear_steak/2views/spacetimegs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 24.03,
                "ssim": 0.8388,
                "lpips": 0.138,
                "train_time": 1706.66179728508,
                "eval_time": 1011.0,
                "fps": 103.72188,
                "model_size": 3543816.0,
                "fps_avg": 149.8
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/sear_steak/2views/swift4d.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 24.27,
                "ssim": 0.8632,
                "lpips": 0.0973,
                "train_time": 1990.0,
                "eval_time": 62.59413552284241,
                "fps": 147.02625,
                "model_size": 144467317.0,
                "fps_avg": 132.4
              }
            }
          }
        },
        "3views": {
          "label": "3 Views",
          "poster": "./n3d/thumbs/sear_steak.png?v=20260401-anon-refresh",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/sear_steak/3views/ours.mp4?v=20260401-anon-refresh",
            "metrics": {
              "psnr": 30.75,
              "ssim": 0.935,
              "lpips": 0.0459,
              "train_time": 1140.0134842395782,
              "eval_time": 73.0,
              "fps": 198.537716,
              "model_size": 32546639.0,
              "fps_avg": 230.2
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/sear_steak/3views/4DGaussians.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 30.61,
                "ssim": 0.9318,
                "lpips": 0.0469,
                "train_time": 1683.0,
                "eval_time": 75.0,
                "fps": 103.424687,
                "model_size": 32546639.0,
                "fps_avg": 117.1
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/sear_steak/3views/cem4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 28.13,
                "ssim": 0.9152,
                "lpips": 0.0645,
                "train_time": 4777.0,
                "eval_time": 341.0,
                "fps": 100.140704,
                "model_size": 283661304.0,
                "fps_avg": 47.1
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Sparse4DGS",
              "video": "./n3d/videos/sear_steak/3views/ex4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 25.99,
                "ssim": 0.897,
                "lpips": 0.0916,
                "train_time": 4583.0,
                "eval_time": 1048.0,
                "fps": 121.335325,
                "model_size": 100320319.0,
                "fps_avg": 112.2
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/sear_steak/3views/spacetimegs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 28.49,
                "ssim": 0.9144,
                "lpips": 0.0673,
                "train_time": 1766.2953736782074,
                "eval_time": 976.0,
                "fps": 103.08869,
                "model_size": 5159560.0,
                "fps_avg": 139.4
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/sear_steak/3views/swift4d.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 30.19,
                "ssim": 0.9326,
                "lpips": 0.0409,
                "train_time": 2257.0,
                "eval_time": 61.11591410636902,
                "fps": 146.333369,
                "model_size": 149469517.0,
                "fps_avg": 126.0
              }
            }
          }
        },
        "4views": {
          "label": "4 Views",
          "poster": "./n3d/thumbs/sear_steak.png?v=20260401-anon-refresh",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/sear_steak/4views/ours.mp4?v=20260401-anon-refresh",
            "metrics": {
              "psnr": 30.48,
              "ssim": 0.9396,
              "lpips": 0.0447,
              "train_time": 1260.0,
              "eval_time": 63.0,
              "fps": 170.33633,
              "model_size": 34564223.0,
              "fps_avg": 221.9
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/sear_steak/4views/4DGaussians.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 30.42,
                "ssim": 0.9166,
                "lpips": 0.0636,
                "train_time": 1622.0,
                "eval_time": 65.02623867988586,
                "fps": 103.636168,
                "model_size": 32913631.0,
                "fps_avg": 117.8
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/sear_steak/4views/cem4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 27.92,
                "ssim": 0.8914,
                "lpips": 0.0822,
                "train_time": 4904.0,
                "eval_time": 351.0,
                "fps": 100.133182,
                "model_size": 269949056.0,
                "fps_avg": 48.4
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Sparse4DGS",
              "video": "./n3d/videos/sear_steak/4views/ex4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 29.51,
                "ssim": 0.8978,
                "lpips": 0.0795,
                "train_time": 4575.0,
                "eval_time": 986.0,
                "fps": 130.83241,
                "model_size": 101632863.0,
                "fps_avg": 107.6
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/sear_steak/4views/spacetimegs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 27.92,
                "ssim": 0.8952,
                "lpips": 0.0921,
                "train_time": 1561.0,
                "eval_time": 1114.3148121833801,
                "fps": 103.635216,
                "model_size": 4682248.0,
                "fps_avg": 131.9
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/sear_steak/4views/swift4d.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 29.31,
                "ssim": 0.9152,
                "lpips": 0.063,
                "train_time": 2168.0,
                "eval_time": 67.44346284866333,
                "fps": 144.641135,
                "model_size": 151231249.0,
                "fps_avg": 123.1
              }
            }
          }
        }
      }
    },
    {
      "key": "techni-birthday",
      "label": "Birthday",
      "datasetKey": "techni",
      "datasetLabel": "Technicolor",
      "thumb": "./n3d/thumbs/techni-birthday.jpg?v=20260401-anon-refresh",
      "defaultMethod": "4DGaussians",
      "views": {
        "2views": {
          "label": "2 Views",
          "poster": "./n3d/thumbs/techni-birthday.jpg?v=20260401-anon-refresh",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/techni-birthday/2views/ours.mp4?v=20260401-anon-refresh",
            "metrics": {
              "psnr": 24.15,
              "ssim": 0.9122,
              "lpips": 0.0496,
              "train_time": 834.4406974315643,
              "eval_time": 145.0,
              "fps": 148.5078,
              "model_size": 66417289.0,
              "fps_avg": 132.5
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/techni-birthday/2views/4DGaussians.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 22.21,
                "ssim": 0.8162,
                "lpips": 0.1048,
                "train_time": 1514.0,
                "eval_time": 20.908652305603027,
                "fps": 101.520741,
                "model_size": 57383136.0,
                "fps_avg": 66.2
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/techni-birthday/2views/cem4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 20.55,
                "ssim": 0.7828,
                "lpips": 0.1149,
                "train_time": 6933.583381652832,
                "eval_time": 44.0,
                "fps": 100.02165,
                "model_size": 168861808.0,
                "fps_avg": 79.1
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Sparse4DGS",
              "video": "./n3d/videos/techni-birthday/2views/ex4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 20.78,
                "ssim": 0.7768,
                "lpips": 0.1224,
                "train_time": 3280.7168962955475,
                "eval_time": 345.0,
                "fps": 103.44307,
                "model_size": 137046545.0,
                "fps_avg": 119.2
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/techni-birthday/2views/spacetimegs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 21.9,
                "ssim": 0.8576,
                "lpips": 0.08,
                "train_time": 973.0,
                "eval_time": 151.0,
                "fps": 141.821806,
                "model_size": 58847625.0,
                "fps_avg": 117.1
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/techni-birthday/2views/swift4d.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 21.62,
                "ssim": 0.8226,
                "lpips": 0.0899,
                "train_time": 2178.0,
                "eval_time": 17.0,
                "fps": 104.662709,
                "model_size": 64954818.0,
                "fps_avg": 153.1
              }
            }
          }
        },
        "3views": {
          "label": "3 Views",
          "poster": "./n3d/thumbs/techni-birthday.jpg?v=20260401-anon-refresh",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/techni-birthday/3views/ours.mp4?v=20260401-anon-refresh",
            "metrics": {
              "psnr": 27.64,
              "ssim": 0.9434,
              "lpips": 0.0302,
              "train_time": 834.2498219013214,
              "eval_time": 138.0,
              "fps": 135.410534,
              "model_size": 69700105.0,
              "fps_avg": 127.1
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/techni-birthday/3views/4DGaussians.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 24.64,
                "ssim": 0.8836,
                "lpips": 0.0752,
                "train_time": 1344.0,
                "eval_time": 19.010681629180908,
                "fps": 101.887696,
                "model_size": 54145664.0,
                "fps_avg": 63.6
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/techni-birthday/3views/cem4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 23.47,
                "ssim": 0.8794,
                "lpips": 0.0622,
                "train_time": 5754.02579498291,
                "eval_time": 42.0,
                "fps": 100.025705,
                "model_size": 171227840.0,
                "fps_avg": 80.3
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Sparse4DGS",
              "video": "./n3d/videos/techni-birthday/3views/ex4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 23.72,
                "ssim": 0.8786,
                "lpips": 0.0672,
                "train_time": 2594.1477823257446,
                "eval_time": 298.0,
                "fps": 104.411961,
                "model_size": 140385945.0,
                "fps_avg": 112.1
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/techni-birthday/3views/spacetimegs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 24.24,
                "ssim": 0.9132,
                "lpips": 0.0498,
                "train_time": 1012.0,
                "eval_time": 164.0,
                "fps": 138.618876,
                "model_size": 66343305.0,
                "fps_avg": 110.1
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/techni-birthday/3views/swift4d.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 25.12,
                "ssim": 0.9104,
                "lpips": 0.0411,
                "train_time": 1780.1521492004395,
                "eval_time": 17.0,
                "fps": 105.309997,
                "model_size": 71159562.0,
                "fps_avg": 148.1
              }
            }
          }
        },
        "4views": {
          "label": "4 Views",
          "poster": "./n3d/thumbs/techni-birthday.jpg?v=20260401-anon-refresh",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/techni-birthday/4views/ours.mp4?v=20260401-anon-refresh",
            "metrics": {
              "psnr": 29.53,
              "ssim": 0.9578,
              "lpips": 0.0215,
              "train_time": 873.0,
              "eval_time": 17.0,
              "fps": 130.667545,
              "model_size": 72441737.0,
              "fps_avg": 120.0
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/techni-birthday/4views/4DGaussians.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 27.25,
                "ssim": 0.9146,
                "lpips": 0.0588,
                "train_time": 1237.7124302387238,
                "eval_time": 18.206356287002563,
                "fps": 102.44853,
                "model_size": 54622816.0,
                "fps_avg": 61.6
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/techni-birthday/4views/cem4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 27.07,
                "ssim": 0.9282,
                "lpips": 0.0368,
                "train_time": 8249.0,
                "eval_time": 44.0,
                "fps": 100.02165,
                "model_size": 185842520.0,
                "fps_avg": 79.6
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Sparse4DGS",
              "video": "./n3d/videos/techni-birthday/4views/ex4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 26.83,
                "ssim": 0.9226,
                "lpips": 0.0398,
                "train_time": 2406.0,
                "eval_time": 370.0614287853241,
                "fps": 103.67304,
                "model_size": 146071065.0,
                "fps_avg": 106.0
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/techni-birthday/4views/spacetimegs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 27.78,
                "ssim": 0.944,
                "lpips": 0.0288,
                "train_time": 811.0,
                "eval_time": 154.42650866508484,
                "fps": 136.541101,
                "model_size": 69536649.0,
                "fps_avg": 100.4
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/techni-birthday/4views/swift4d.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 27.63,
                "ssim": 0.943,
                "lpips": 0.0313,
                "train_time": 1948.0,
                "eval_time": 17.0,
                "fps": 105.87976,
                "model_size": 75358890.0,
                "fps_avg": 142.3
              }
            }
          }
        }
      }
    },
    {
      "key": "techni-fabien",
      "label": "Fabien",
      "datasetKey": "techni",
      "datasetLabel": "Technicolor",
      "thumb": "./n3d/thumbs/techni-fabien.jpg?v=20260401-anon-refresh",
      "defaultMethod": "cem4dgs",
      "views": {
        "2views": {
          "label": "2 Views",
          "poster": "./n3d/thumbs/techni-fabien.jpg?v=20260401-anon-refresh",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/techni-fabien/2views/ours.mp4?v=20260401-anon-refresh",
            "metrics": {
              "psnr": 28.42,
              "ssim": 0.861,
              "lpips": 0.0977,
              "train_time": 844.047285079956,
              "eval_time": 144.36811661720276,
              "fps": 156.034523,
              "model_size": 31985161.0,
              "fps_avg": 132.5
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/techni-fabien/2views/4DGaussians.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 20.3,
                "ssim": 0.6846,
                "lpips": 0.2654,
                "train_time": 3568.0,
                "eval_time": 36.0,
                "fps": 102.705749,
                "model_size": 52313936.0,
                "fps_avg": 66.2
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/techni-fabien/2views/cem4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 17.58,
                "ssim": 0.6088,
                "lpips": 0.3284,
                "train_time": 3351.0,
                "eval_time": 46.508764028549194,
                "fps": 100.017056,
                "model_size": 46890083.0,
                "fps_avg": 79.1
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Sparse4DGS",
              "video": "./n3d/videos/techni-fabien/2views/ex4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 18.06,
                "ssim": 0.6112,
                "lpips": 0.33,
                "train_time": 1671.0,
                "eval_time": 185.0,
                "fps": 123.144023,
                "model_size": 45141743.0,
                "fps_avg": 119.2
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/techni-fabien/2views/spacetimegs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 22.28,
                "ssim": 0.7614,
                "lpips": 0.1819,
                "train_time": 922.0,
                "eval_time": 153.0,
                "fps": 143.832101,
                "model_size": 28135433.0,
                "fps_avg": 117.1
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/techni-fabien/2views/swift4d.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 19.6,
                "ssim": 0.6864,
                "lpips": 0.2553,
                "train_time": 2113.0,
                "eval_time": 14.71014666557312,
                "fps": 110.581521,
                "model_size": 26732465.0,
                "fps_avg": 153.1
              }
            }
          }
        },
        "3views": {
          "label": "3 Views",
          "poster": "./n3d/thumbs/techni-fabien.jpg?v=20260401-anon-refresh",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/techni-fabien/3views/ours.mp4?v=20260401-anon-refresh",
            "metrics": {
              "psnr": 31.1,
              "ssim": 0.8868,
              "lpips": 0.0737,
              "train_time": 845.4841318130493,
              "eval_time": 142.0,
              "fps": 156.694792,
              "model_size": 33429769.0,
              "fps_avg": 127.1
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/techni-fabien/3views/4DGaussians.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 25.29,
                "ssim": 0.791,
                "lpips": 0.1707,
                "train_time": 1367.0,
                "eval_time": 19.0,
                "fps": 102.86682,
                "model_size": 52338528.0,
                "fps_avg": 63.6
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/techni-fabien/3views/cem4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 22.99,
                "ssim": 0.777,
                "lpips": 0.1702,
                "train_time": 3484.667519569397,
                "eval_time": 44.0,
                "fps": 100.02165,
                "model_size": 62869035.0,
                "fps_avg": 80.3
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Sparse4DGS",
              "video": "./n3d/videos/techni-fabien/3views/ex4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 23.76,
                "ssim": 0.767,
                "lpips": 0.179,
                "train_time": 1599.0627524852753,
                "eval_time": 170.0,
                "fps": 127.138291,
                "model_size": 38388703.0,
                "fps_avg": 112.1
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/techni-fabien/3views/spacetimegs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 27.92,
                "ssim": 0.8572,
                "lpips": 0.1006,
                "train_time": 825.0,
                "eval_time": 150.0,
                "fps": 141.102818,
                "model_size": 32302729.0,
                "fps_avg": 110.1
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/techni-fabien/3views/swift4d.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 25.34,
                "ssim": 0.7954,
                "lpips": 0.1507,
                "train_time": 1253.318204164505,
                "eval_time": 16.0,
                "fps": 111.250196,
                "model_size": 28430945.0,
                "fps_avg": 148.1
              }
            }
          }
        },
        "4views": {
          "label": "4 Views",
          "poster": "./n3d/thumbs/techni-fabien.jpg?v=20260401-anon-refresh",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/techni-fabien/4views/ours.mp4?v=20260401-anon-refresh",
            "metrics": {
              "psnr": 32.12,
              "ssim": 0.905,
              "lpips": 0.0709,
              "train_time": 838.0632898807526,
              "eval_time": 154.0,
              "fps": 152.460941,
              "model_size": 33804681.0,
              "fps_avg": 120.0
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/techni-fabien/4views/4DGaussians.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 27.61,
                "ssim": 0.8368,
                "lpips": 0.1405,
                "train_time": 1214.0847182273865,
                "eval_time": 22.0,
                "fps": 102.104308,
                "model_size": 53083440.0,
                "fps_avg": 61.6
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/techni-fabien/4views/cem4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 26.11,
                "ssim": 0.8372,
                "lpips": 0.1188,
                "train_time": 3508.0,
                "eval_time": 43.0,
                "fps": 100.02363,
                "model_size": 58077459.0,
                "fps_avg": 79.6
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Sparse4DGS",
              "video": "./n3d/videos/techni-fabien/4views/ex4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 27.04,
                "ssim": 0.8362,
                "lpips": 0.119,
                "train_time": 1702.6706581115723,
                "eval_time": 159.0,
                "fps": 128.655659,
                "model_size": 37000403.0,
                "fps_avg": 106.0
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/techni-fabien/4views/spacetimegs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 31.57,
                "ssim": 0.8882,
                "lpips": 0.0729,
                "train_time": 838.0632898807526,
                "eval_time": 154.0,
                "fps": 139.647965,
                "model_size": 33804681.0,
                "fps_avg": 100.4
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/techni-fabien/4views/swift4d.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 28.67,
                "ssim": 0.8472,
                "lpips": 0.112,
                "train_time": 1224.026725769043,
                "eval_time": 18.159003973007202,
                "fps": 109.788947,
                "model_size": 30926753.0,
                "fps_avg": 142.3
              }
            }
          }
        }
      }
    },
    {
      "key": "techni-painter",
      "label": "Painter",
      "datasetKey": "techni",
      "datasetLabel": "Technicolor",
      "thumb": "./n3d/thumbs/techni-painter.jpg?v=20260401-anon-refresh",
      "defaultMethod": "ex4dgs",
      "views": {
        "2views": {
          "label": "2 Views",
          "poster": "./n3d/thumbs/techni-painter.jpg?v=20260401-anon-refresh",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/techni-painter/2views/ours.mp4?v=20260401-anon-refresh",
            "metrics": {
              "psnr": 33.46,
              "ssim": 0.9424,
              "lpips": 0.0224,
              "train_time": 744.4656112194061,
              "eval_time": 142.0,
              "fps": 158.8579,
              "model_size": 51620489.0,
              "fps_avg": 132.5
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/techni-painter/2views/4DGaussians.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 31.42,
                "ssim": 0.9042,
                "lpips": 0.051,
                "train_time": 2704.0,
                "eval_time": 18.10185408592224,
                "fps": 102.502793,
                "model_size": 46447728.0,
                "fps_avg": 66.2
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/techni-painter/2views/cem4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 30.59,
                "ssim": 0.908,
                "lpips": 0.0401,
                "train_time": 2656.0,
                "eval_time": 43.0,
                "fps": 100.02363,
                "model_size": 88278988.0,
                "fps_avg": 79.1
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Sparse4DGS",
              "video": "./n3d/videos/techni-painter/2views/ex4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 30.3,
                "ssim": 0.8982,
                "lpips": 0.0475,
                "train_time": 1321.0,
                "eval_time": 245.0,
                "fps": 108.578109,
                "model_size": 74494664.0,
                "fps_avg": 119.2
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/techni-painter/2views/spacetimegs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 33.46,
                "ssim": 0.9418,
                "lpips": 0.0278,
                "train_time": 899.0,
                "eval_time": 166.0,
                "fps": 142.337468,
                "model_size": 51620489.0,
                "fps_avg": 117.1
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/techni-painter/2views/swift4d.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 30.28,
                "ssim": 0.9156,
                "lpips": 0.0392,
                "train_time": 1839.0,
                "eval_time": 13.190044641494751,
                "fps": 111.143336,
                "model_size": 34677522.0,
                "fps_avg": 153.1
              }
            }
          }
        },
        "3views": {
          "label": "3 Views",
          "poster": "./n3d/thumbs/techni-painter.jpg?v=20260401-anon-refresh",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/techni-painter/3views/ours.mp4?v=20260401-anon-refresh",
            "metrics": {
              "psnr": 34.3,
              "ssim": 0.954,
              "lpips": 0.0204,
              "train_time": 792.0,
              "eval_time": 131.0,
              "fps": 160.174974,
              "model_size": 59101705.0,
              "fps_avg": 127.1
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/techni-painter/3views/4DGaussians.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 33.72,
                "ssim": 0.9324,
                "lpips": 0.036,
                "train_time": 1239.0115010738373,
                "eval_time": 19.0,
                "fps": 102.446374,
                "model_size": 52598776.0,
                "fps_avg": 63.6
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/techni-painter/3views/cem4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 32.02,
                "ssim": 0.9302,
                "lpips": 0.0301,
                "train_time": 2702.5397198200226,
                "eval_time": 44.0,
                "fps": 100.02165,
                "model_size": 94054264.0,
                "fps_avg": 80.3
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Sparse4DGS",
              "video": "./n3d/videos/techni-painter/3views/ex4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 32.48,
                "ssim": 0.928,
                "lpips": 0.0338,
                "train_time": 1338.0993087291718,
                "eval_time": 218.0,
                "fps": 109.789083,
                "model_size": 71705843.0,
                "fps_avg": 112.1
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/techni-painter/3views/spacetimegs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 33.45,
                "ssim": 0.9452,
                "lpips": 0.0226,
                "train_time": 750.0,
                "eval_time": 209.0,
                "fps": 140.839846,
                "model_size": 55909385.0,
                "fps_avg": 110.1
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/techni-painter/3views/swift4d.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 33.11,
                "ssim": 0.9442,
                "lpips": 0.0229,
                "train_time": 1386.540320634842,
                "eval_time": 15.129164457321167,
                "fps": 109.373994,
                "model_size": 38140002.0,
                "fps_avg": 148.1
              }
            }
          }
        },
        "4views": {
          "label": "4 Views",
          "poster": "./n3d/thumbs/techni-painter.jpg?v=20260401-anon-refresh",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/techni-painter/4views/ours.mp4?v=20260401-anon-refresh",
            "metrics": {
              "psnr": 36.31,
              "ssim": 0.9706,
              "lpips": 0.0145,
              "train_time": 820.0,
              "eval_time": 439.0,
              "fps": 156.365041,
              "model_size": 60715657.0,
              "fps_avg": 120.0
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/techni-painter/4views/4DGaussians.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 34.43,
                "ssim": 0.9408,
                "lpips": 0.0332,
                "train_time": 1210.0,
                "eval_time": 21.255250453948975,
                "fps": 102.124115,
                "model_size": 55741176.0,
                "fps_avg": 61.6
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/techni-painter/4views/cem4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 34.69,
                "ssim": 0.9486,
                "lpips": 0.0244,
                "train_time": 2536.234537124634,
                "eval_time": 43.0,
                "fps": 100.02363,
                "model_size": 100721288.0,
                "fps_avg": 79.6
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Sparse4DGS",
              "video": "./n3d/videos/techni-painter/4views/ex4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 34.07,
                "ssim": 0.9434,
                "lpips": 0.0298,
                "train_time": 1307.0,
                "eval_time": 202.0,
                "fps": 112.348629,
                "model_size": 76275444.0,
                "fps_avg": 106.0
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/techni-painter/4views/spacetimegs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 35.03,
                "ssim": 0.9556,
                "lpips": 0.0198,
                "train_time": 808.0,
                "eval_time": 137.1237120628357,
                "fps": 139.611138,
                "model_size": 58666249.0,
                "fps_avg": 100.4
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/techni-painter/4views/swift4d.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 34.72,
                "ssim": 0.9536,
                "lpips": 0.0194,
                "train_time": 1398.2809238433838,
                "eval_time": 18.0,
                "fps": 107.502209,
                "model_size": 41676066.0,
                "fps_avg": 142.3
              }
            }
          }
        }
      }
    },
    {
      "key": "techni-theater",
      "label": "Theater",
      "datasetKey": "techni",
      "datasetLabel": "Technicolor",
      "thumb": "./n3d/thumbs/techni-theater.jpg?v=20260401-anon-refresh",
      "defaultMethod": "spacetimegs",
      "views": {
        "2views": {
          "label": "2 Views",
          "poster": "./n3d/thumbs/techni-theater.jpg?v=20260401-anon-refresh",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/techni-theater/2views/ours.mp4?v=20260401-anon-refresh",
            "metrics": {
              "psnr": 21.38,
              "ssim": 0.6644,
              "lpips": 0.157,
              "train_time": 756.0,
              "eval_time": 142.0,
              "fps": 156.704943,
              "model_size": 67301129.0,
              "fps_avg": 132.5
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/techni-theater/2views/4DGaussians.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 12.6,
                "ssim": 0.3112,
                "lpips": 0.418,
                "train_time": 1489.0,
                "eval_time": 18.559102296829224,
                "fps": 102.470511,
                "model_size": 73054096.0,
                "fps_avg": 66.2
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/techni-theater/2views/cem4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 18.46,
                "ssim": 0.4864,
                "lpips": 0.2606,
                "train_time": 3399.0,
                "eval_time": 42.873003005981445,
                "fps": 100.023888,
                "model_size": 61156163.0,
                "fps_avg": 79.1
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Sparse4DGS",
              "video": "./n3d/videos/techni-theater/2views/ex4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 17.88,
                "ssim": 0.4732,
                "lpips": 0.2753,
                "train_time": 1625.3795533180237,
                "eval_time": 192.0,
                "fps": 114.144888,
                "model_size": 60415143.0,
                "fps_avg": 119.2
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/techni-theater/2views/spacetimegs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 18.67,
                "ssim": 0.5528,
                "lpips": 0.2239,
                "train_time": 701.0,
                "eval_time": 157.0,
                "fps": 142.500465,
                "model_size": 57572745.0,
                "fps_avg": 117.1
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/techni-theater/2views/swift4d.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 17.53,
                "ssim": 0.4566,
                "lpips": 0.2788,
                "train_time": 1738.0,
                "eval_time": 14.0,
                "fps": 110.029442,
                "model_size": 34701966.0,
                "fps_avg": 153.1
              }
            }
          }
        },
        "3views": {
          "label": "3 Views",
          "poster": "./n3d/thumbs/techni-theater.jpg?v=20260401-anon-refresh",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/techni-theater/3views/ours.mp4?v=20260401-anon-refresh",
            "metrics": {
              "psnr": 22.93,
              "ssim": 0.7368,
              "lpips": 0.1123,
              "train_time": 766.0,
              "eval_time": 131.31546878814697,
              "fps": 144.44628,
              "model_size": 72912265.0,
              "fps_avg": 127.1
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/techni-theater/3views/4DGaussians.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 15.78,
                "ssim": 0.476,
                "lpips": 0.2517,
                "train_time": 1487.0,
                "eval_time": 20.0,
                "fps": 101.711227,
                "model_size": 86742496.0,
                "fps_avg": 63.6
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/techni-theater/3views/cem4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 20.52,
                "ssim": 0.622,
                "lpips": 0.1746,
                "train_time": 3440.0,
                "eval_time": 44.619250774383545,
                "fps": 100.020468,
                "model_size": 70989027.0,
                "fps_avg": 80.3
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Sparse4DGS",
              "video": "./n3d/videos/techni-theater/3views/ex4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 20.53,
                "ssim": 0.6224,
                "lpips": 0.1715,
                "train_time": 1727.4159669876099,
                "eval_time": 193.0,
                "fps": 113.295854,
                "model_size": 69928063.0,
                "fps_avg": 112.1
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/techni-theater/3views/spacetimegs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 20.96,
                "ssim": 0.661,
                "lpips": 0.1566,
                "train_time": 755.0,
                "eval_time": 158.0,
                "fps": 139.722799,
                "model_size": 67433737.0,
                "fps_avg": 110.1
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/techni-theater/3views/swift4d.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 19.97,
                "ssim": 0.5946,
                "lpips": 0.1707,
                "train_time": 1409.0,
                "eval_time": 14.256219387054443,
                "fps": 109.487045,
                "model_size": 40945014.0,
                "fps_avg": 148.1
              }
            }
          }
        },
        "4views": {
          "label": "4 Views",
          "poster": "./n3d/thumbs/techni-theater.jpg?v=20260401-anon-refresh",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/techni-theater/4views/ours.mp4?v=20260401-anon-refresh",
            "metrics": {
              "psnr": 23.71,
              "ssim": 0.7414,
              "lpips": 0.1005,
              "train_time": 836.0,
              "eval_time": 17.0,
              "fps": 130.0,
              "model_size": 46418454.0,
              "fps_avg": 120.0
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/techni-theater/4views/4DGaussians.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 18.96,
                "ssim": 0.6264,
                "lpips": 0.1798,
                "train_time": 1448.494160413742,
                "eval_time": 24.0,
                "fps": 101.27806,
                "model_size": 90749344.0,
                "fps_avg": 61.6
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/techni-theater/4views/cem4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 23.04,
                "ssim": 0.72,
                "lpips": 0.1234,
                "train_time": 3290.2487111091614,
                "eval_time": 44.1103630065918,
                "fps": 100.021436,
                "model_size": 77482911.0,
                "fps_avg": 79.6
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Sparse4DGS",
              "video": "./n3d/videos/techni-theater/4views/ex4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 23.11,
                "ssim": 0.7232,
                "lpips": 0.1161,
                "train_time": 1705.0816247463226,
                "eval_time": 187.32746577262878,
                "fps": 115.731207,
                "model_size": 78443184.0,
                "fps_avg": 106.0
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/techni-theater/4views/spacetimegs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 22.9,
                "ssim": 0.7382,
                "lpips": 0.1116,
                "train_time": 764.0,
                "eval_time": 150.75858116149902,
                "fps": 138.715251,
                "model_size": 72832265.0,
                "fps_avg": 100.4
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/techni-theater/4views/swift4d.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 22.94,
                "ssim": 0.7404,
                "lpips": 0.1201,
                "train_time": 1421.0,
                "eval_time": 17.0,
                "fps": 107.217486,
                "model_size": 46418454.0,
                "fps_avg": 142.3
              }
            }
          }
        }
      }
    },
    {
      "key": "techni-train",
      "label": "Train",
      "datasetKey": "techni",
      "datasetLabel": "Technicolor",
      "thumb": "./n3d/thumbs/techni-train.jpg?v=20260401-anon-refresh",
      "defaultMethod": "swift4d",
      "views": {
        "2views": {
          "label": "2 Views",
          "poster": "./n3d/thumbs/techni-train.jpg?v=20260401-anon-refresh",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/techni-train/2views/ours.mp4?v=20260401-anon-refresh",
            "metrics": {
              "psnr": 25.4,
              "ssim": 0.901,
              "lpips": 0.0371,
              "train_time": 845.4784033298492,
              "eval_time": 134.0,
              "fps": 200.0,
              "model_size": 86130953.0,
              "fps_avg": 132.5
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/techni-train/2views/4DGaussians.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 15.88,
                "ssim": 0.545,
                "lpips": 0.2607,
                "train_time": 1714.0,
                "eval_time": 17.77757954597473,
                "fps": 102.208786,
                "model_size": 96618720.0,
                "fps_avg": 66.2
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/techni-train/2views/cem4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 19.45,
                "ssim": 0.581,
                "lpips": 0.2257,
                "train_time": 6444.376352548599,
                "eval_time": 59.0,
                "fps": 100.0,
                "model_size": 179941635.0,
                "fps_avg": 79.1
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Sparse4DGS",
              "video": "./n3d/videos/techni-train/2views/ex4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 18.56,
                "ssim": 0.575,
                "lpips": 0.232,
                "train_time": 3518.0,
                "eval_time": 695.2309868335724,
                "fps": 101.261935,
                "model_size": 168646804.0,
                "fps_avg": 119.2
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/techni-train/2views/spacetimegs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 21.43,
                "ssim": 0.7958,
                "lpips": 0.0927,
                "train_time": 750.0,
                "eval_time": 138.0,
                "fps": 150.0,
                "model_size": 77281545.0,
                "fps_avg": 117.1
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/techni-train/2views/swift4d.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 16.88,
                "ssim": 0.6714,
                "lpips": 0.1476,
                "train_time": 1815.0,
                "eval_time": 15.0,
                "fps": 106.858078,
                "model_size": 60995646.0,
                "fps_avg": 153.1
              }
            }
          }
        },
        "3views": {
          "label": "3 Views",
          "poster": "./n3d/thumbs/techni-train.jpg?v=20260401-anon-refresh",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/techni-train/3views/ours.mp4?v=20260401-anon-refresh",
            "metrics": {
              "psnr": 27.77,
              "ssim": 0.929,
              "lpips": 0.0261,
              "train_time": 923.0719947814941,
              "eval_time": 136.46762228012085,
              "fps": 178.068179,
              "model_size": 93078409.0,
              "fps_avg": 127.1
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/techni-train/3views/4DGaussians.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 19.86,
                "ssim": 0.6708,
                "lpips": 0.2374,
                "train_time": 1574.0,
                "eval_time": 18.45262360572815,
                "fps": 102.218698,
                "model_size": 97756144.0,
                "fps_avg": 63.6
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/techni-train/3views/cem4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 23.1,
                "ssim": 0.7714,
                "lpips": 0.1139,
                "train_time": 7345.574421882629,
                "eval_time": 41.0,
                "fps": 100.02788,
                "model_size": 162780651.0,
                "fps_avg": 80.3
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Sparse4DGS",
              "video": "./n3d/videos/techni-train/3views/ex4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 22.99,
                "ssim": 0.7582,
                "lpips": 0.124,
                "train_time": 2891.146354675293,
                "eval_time": 2483.0,
                "fps": 101.634467,
                "model_size": 144521004.0,
                "fps_avg": 112.1
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/techni-train/3views/spacetimegs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 26.07,
                "ssim": 0.901,
                "lpips": 0.037,
                "train_time": 825.0,
                "eval_time": 138.0,
                "fps": 147.434453,
                "model_size": 85482761.0,
                "fps_avg": 110.1
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/techni-train/3views/swift4d.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 22.94,
                "ssim": 0.8472,
                "lpips": 0.0611,
                "train_time": 1677.2972707748413,
                "eval_time": 16.0,
                "fps": 106.719382,
                "model_size": 62971326.0,
                "fps_avg": 148.1
              }
            }
          }
        },
        "4views": {
          "label": "4 Views",
          "poster": "./n3d/thumbs/techni-train.jpg?v=20260401-anon-refresh",
          "ours": {
            "label": "Ours",
            "video": "./n3d/videos/techni-train/4views/ours.mp4?v=20260401-anon-refresh",
            "metrics": {
              "psnr": 28.38,
              "ssim": 0.9402,
              "lpips": 0.0226,
              "train_time": 900.0,
              "eval_time": 131.3769338130951,
              "fps": 175.205592,
              "model_size": 93290505.0,
              "fps_avg": 120.0
            }
          },
          "baselines": {
            "4DGaussians": {
              "key": "4DGaussians",
              "label": "4DGaussians",
              "video": "./n3d/videos/techni-train/4views/4DGaussians.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 21.3,
                "ssim": 0.6796,
                "lpips": 0.2205,
                "train_time": 1462.0,
                "eval_time": 19.0,
                "fps": 102.021645,
                "model_size": 99360536.0,
                "fps_avg": 61.6
              }
            },
            "cem4dgs": {
              "key": "cem4dgs",
              "label": "CEM-4DGS",
              "video": "./n3d/videos/techni-train/4views/cem4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 25.25,
                "ssim": 0.8424,
                "lpips": 0.0728,
                "train_time": 5077.0,
                "eval_time": 39.0,
                "fps": 100.032567,
                "model_size": 170661755.0,
                "fps_avg": 79.6
              }
            },
            "ex4dgs": {
              "key": "ex4dgs",
              "label": "Sparse4DGS",
              "video": "./n3d/videos/techni-train/4views/ex4dgs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 24.79,
                "ssim": 0.8284,
                "lpips": 0.0876,
                "train_time": 2622.0,
                "eval_time": 507.0,
                "fps": 101.973035,
                "model_size": 150206444.0,
                "fps_avg": 106.0
              }
            },
            "spacetimegs": {
              "key": "spacetimegs",
              "label": "STGS",
              "video": "./n3d/videos/techni-train/4views/spacetimegs.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 27.85,
                "ssim": 0.9292,
                "lpips": 0.0268,
                "train_time": 900.0,
                "eval_time": 131.3769338130951,
                "fps": 143.478628,
                "model_size": 93290505.0,
                "fps_avg": 100.4
              }
            },
            "swift4d": {
              "key": "swift4d",
              "label": "Swift4D",
              "video": "./n3d/videos/techni-train/4views/swift4d.mp4?v=20260401-anon-refresh",
              "metrics": {
                "psnr": 25.82,
                "ssim": 0.8778,
                "lpips": 0.0456,
                "train_time": 1616.391901254654,
                "eval_time": 16.033345937728882,
                "fps": 106.453844,
                "model_size": 65933082.0,
                "fps_avg": 142.3
              }
            }
          }
        }
      }
    }
  ],
  "efficiencyScope": "fps_avg is the scene-averaged inference throughput for the dataset/view setting."
};
