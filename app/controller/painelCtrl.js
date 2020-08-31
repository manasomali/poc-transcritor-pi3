app.controller('painelCtrl', function($scope,$timeout,$interval) {
        var ctx1 = document.getElementById('myChartGeracao').getContext('2d');
    var myChartGeracao = new Chart(ctx1, {
        type: 'line',
        data: {
          labels: [],
          datasets: [
            {
                label: "CSVPA",
                data: [],
                fill: false,
                borderColor: '#377eb8',
                backgroundColor: '#377eb899',
                pointRadius: 0,
                tension: 0
            },
            {
                label: "CMRO2",
                data: [],
                fill: false,
                borderColor: '#66a61e',
                backgroundColor: '#66a61e99',
                pointRadius: 0,
                tension: 0
            },
            {
                label: "CQ138",
                data: [],
                fill: false,
                borderColor: '#984ea3',
                backgroundColor: '#984ea399',
                pointRadius: 0,
                tension: 0
            },
            {
                label: "CQ69",
                data: [],
                fill: false,
                borderColor: '#00d2d5',
                backgroundColor: '#00d2d599',
                pointRadius: 0,
                tension: 0
            },
            {
                label: "CLIV2",
                data: [],
                fill: false,
                borderColor: '#ff7f00',
                backgroundColor: '#ff7f0099',
                pointRadius: 0,
                tension: 0
            },
            {
                label: "Melo",
                data: [],
                fill: false,
                borderColor: '#af8d00',
                backgroundColor: '#af8d0099',
                pointRadius: 0,
                tension: 0
            }
        ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          title: {
            display: true,
            text: 'Geração Conjuntos [MW]',
            fontColor: '#000'
          },
          legend: {
            display: true,
            position: 'bottom',
            aling: 'center',
            labels: {
                fontColor: '#000',
                boxWidth: 15,
                fontSize: 9,
            }
          },
          scales: {
            yAxes: [{
                scaleLabel: {
                    display: false,
                    labelString: 'MW'
                },
                ticks: {
                    beginAtZero: true
                }
            }]
          }
        }
    });
    var ctx2 = document.getElementById('myChartFluxo').getContext('2d');
    var myChartFluxo = new Chart(ctx2, {
        type: 'line',
        data: {
          labels: [],
          datasets: [
            {
                label: "Fluxo LT",
                data: [],
                fill: false,
                borderColor: '#377eb8',
                backgroundColor: '#377eb899',
                pointRadius: 0,
                tension: 0
            },
            {
                label: "Limite LT",
                data: [],
                fill: false,
                borderColor: '#ff0029',
                backgroundColor: '#ff002999',
                pointRadius: 0,
                tension: 0
            }
        ]
        },
        elements: {
            line: {
                tension: 0
            }
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          title: {
            display: true,
            text: 'Fluxo na LT [MW]',
            fontColor: '#000'
          },
          legend: {
            display: true,
            position: 'bottom',
            aling: 'center',
            labels: {
                fontColor: '#000',
                boxWidth: 15,
                fontSize: 9
            }
          },
          scales: {
            yAxes: [{
                scaleLabel: {
                    display: false,
                    labelString: 'MW'
                },
                ticks: {
                    beginAtZero: true
                }
            }]
          }
        }
    });
    $scope.nodes = new vis.DataSet([
        {id: 1,  label: 'GBI1', x: 44, y: 7},
        {id: 2,  label: 'STA', x: 256, y: 12},
        {id: 3,  label: 'GBI2', x: 44, y: 29},
        {id: 4,  label: 'UTUR', x: 18, y: 44},
        {id: 44444, x: 18, y: 50, shape: 'image', size: 2.5, image: 'app/img/icotermica.png'},
        {id: 5,  label: 'MBR', x: 88, y: 43},
        {id: 6,  label: 'SBO2', x: 139, y: 53, group: 'caixa_amarela'},
        {id: 7,  label: 'SVI', x: 140, y: 71},
        {id: 8,  label: 'URU5', x: 17, y: 81},
        {id: 9,  label: 'ALE2', x: 126, y: 127},
        {id: 10,  label: 'CUR', x: 37, y: 98},
        {id: 11,  label: 'RIV', x: 26, y: 135},
        {id: 12,  label: 'LIV2', x: 90, y: 135},
        {id: 13,  label: 'CCH', x: 60, y: 115},
        {id: 1333, x: 74, y: 114, shape: 'image', size: 3.5, image: 'app/img/icoeolica.png'},
        {id: 14,  label: 'SMA3', x: 140, y: 110},
        {id: 15,  label: 'BAG2', x: 146, y: 147},
        {id: 16,  label: 'PIN2', x: 393, y: 24},
        {id: 17,  label: 'UHFC', x: 459, y: 25},
        {id: 18,  label: 'MIS', x: 198, y: 54},
        {id: 19,  label: 'SROl', x: 287, y: 50},
        {id: 20,  label: 'SAG2', x: 254, y: 75},
        {id: 21,  label: 'IJU2', x: 306, y: 75},
        {id: 22,  label: 'UDFR', x: 188, y: 111},
        {id: 23,  label: 'UITA', x: 231, y: 110},
        {id: 24,  label: 'UPRE', x: 307, y: 110},
        {id: 25,  label: 'GRT', x: 369, y: 49},
        {id: 26,  label: 'UHPF', x: 426, y: 51},
        {id: 27,  label: 'TPR2', x: 347, y: 81},
        {id: 28,  label: 'SMT', x: 383, y: 83},
        {id: 29,  label: 'GAR1', x: 383, y: 99},
        {id: 30,  label: 'NPR2', x: 424, y: 100},
        {id: 31,  label: 'LVE2', x: 475, y: 83},
        {id: 32,  label: 'MLO', x: 27, y: 152},
        {id: 322,  label: 'xxxx', x: 29, y: 158, group: 'geracao'},
        {id: 33,  label: 'CTA', x: 65, y: 153},
        {id: 34,  label: 'PME', x: 112, y: 152},
        {id: 35,  label: 'SCR1', x: 169, y: 153},
        {id: 36,  label: 'CHA', x: 209, y: 152},
        {id: 37,  label: 'SCH2', x: 308, y: 152},
        {id: 38,  label: 'CSPVA', x: 29, y: 176, group: 'eolica'},
        {id: 388,  label: 'xxxx', x: 39, y: 182, group: 'geracao'},
        {id: 38888, x: 22, y: 182, shape: 'image', size: 3.5, image: 'app/img/icoeolica.png'},
        {id: 39,  label: 'UTEC', x: 160, y: 172},
        {id: 3999, x: 160, y: 177, shape: 'image', size: 2.5, image: 'app/img/icotermica.png'},
        {id: 40,  label: 'CLIV2', x: 73, y: 185, group: 'eolica'},
        {id: 400,  label: 'xxxx', x: 81, y: 192, group: 'geracao'},
        {id: 4000, x: 68, y: 192, shape: 'image', size: 3.5, image: 'app/img/icoeolica.png'},
        {id: 41,  label: 'QUI69', x: 88, y: 236, group: 'eolica'},
        {id: 411,  label: 'xxxx', x: 87, y: 243, group: 'geracao'},
        {id: 4111, x: 74, y: 243, shape: 'image', size: 3.5, image: 'app/img/icoeolica.png'},
        {id: 42,  label: 'QUI138', x: 58, y: 206, group: 'eolica'},
        {id: 422,  label: 'xxxx', x: 68, y: 212, group: 'geracao'},
        {id: 4222, x: 55, y: 212, shape: 'image', size: 3.5, image: 'app/img/icoeolica.png'},
        {id: 43,  label: 'QUI', x: 87, y: 216},
        {id: 44,  label: 'CMRO2', x: 29, y: 226, group: 'eolica'},
        {id: 444,  label: 'xxxx', x: 39, y: 233, group: 'geracao'},
        {id: 4444, x: 22, y: 233, shape: 'image', size: 3.5, image: 'app/img/icoeolica.png'},
        {id: 45,  label: 'PEL3', x: 112, y: 198},
        {id: 46,  label: 'CAM', x: 162, y: 197},
        {id: 47,  label: 'CAM3', x: 111, y: 245},
        {id: 48,  label: 'PPE', x: 220, y: 184},
        {id: 49,  label: 'UHCA', x: 452, y: 130},
        {id: 50,  label: 'FAR', x: 386, y: 152},
        {id: 51,  label: 'LAJ2', x: 345, y: 130},
        {id: 52,  label: 'MCL', x: 426, y: 149},
        {id: 53,  label: 'UHMC', x: 451, y: 151},
        {id: 54,  label: 'UHQJ', x: 454, y: 167},
        {id: 55,  label: 'CAX5', x: 424, y: 185},
        {id: 56,  label: 'UHBG', x: 479, y: 150},
        {id: 57,  label: 'CAX2', x: 366, y: 242},
        {id: 58,  label: 'LGR', x: 425, y: 243},
        {id: 59,  label: 'NSR', x: 220, y: 274},
        {id: 60,  label: 'PNO', x: 30, y: 274},
        {id: 61,  label: 'ELD', x: 66, y: 283},
        {id: 62,  label: 'GUA2', x: 185, y: 213},
        {id: 63,  label: 'LAG', x: 442, y: 280},
        {id: 64,  label: 'ABT', x: 477, y: 281},
        {id: 65,  label: 'CTT', x: 366, y: 293},
        {id: 66,  label: 'PAL9', x: 25, y: 310},
        {id: 67,  label: 'CIN', x: 150, y: 312},
        {id: 68,  label: 'CNA1', x: 91, y: 321},
        {id: 69,  label: 'CAC1', x: 71, y: 336},
        {id: 70,  label: 'CNA3', x: 110, y: 336},
        {id: 71,  label: 'PAL4', x: 23, y: 352},
        {id: 72,  label: 'UTST', x: 96, y: 370},
        {id: 722, x: 96, y: 375, shape: 'image', size: 2.5, image: 'app/img/icotermica.png'},
        {id: 73,  label: 'CNA2', x: 131, y: 370},
        {id: 74,  label: 'PA10', x: 56, y: 375},
        {id: 75,  label: 'MDE', x: 34, y: 384},
        {id: 76,  label: 'PUC', x: 36, y: 396},
        {id: 77,  label: 'GRA3', x: 196, y: 394},
        {id: 78,  label: 'PAL8', x: 96, y: 406},
        {id: 79,  label: 'PA12', x: 62, y: 420},
        {id: 80,  label: 'GRA2', x: 150, y: 427},
        {id: 81,  label: 'PAL6', x: 24, y: 433},
        {id: 82,  label: 'GRA', x: 150, y: 443},
        {id: 83,  label: 'VAI', x: 229, y: 308},
        {id: 84,  label: 'CAX6', x: 365, y: 345},
        {id: 85,  label: 'RSU', x: 442, y: 339, group: 'caixa_amarela'},
        {id: 86,  label: 'FIB', x: 196, y: 358},
        {id: 87,  label: 'FHA', x: 425, y: 359},
        {id: 88,  label: 'ATL2', x: 234, y: 394},
        {id: 89,  label: 'UECI', x: 273, y: 383},
        {id: 899, x: 286, y: 382, shape: 'image', size: 3.5, image: 'app/img/icoeolica.png'},
        {id: 90,  label: 'OSO2', x: 272, y: 394},
        {id: 91,  label: 'TAQ', x: 317, y: 394},
        {id: 92,  label: 'NPE2', x: 346, y: 395},
        {id: 93,  label: 'CAX', x: 384, y: 395},
        {id: 94,  label: 'XLA', x: 234, y: 407},
        {id: 944, x: 223, y: 405, shape: 'image', size: 3.5, image: 'app/img/icoeolica.png'},
        {id: 95,  label: 'ACA', x: 290, y: 415},
        {id: 955, x: 290, y: 421, shape: 'image', size: 3.5, image: 'app/img/icoeolica.png'},
        {id: 96,  label: 'LBA', x: 274, y: 418},
        {id: 966, x: 274, y: 424, shape: 'image', size: 3.5, image: 'app/img/icoeolica.png'},
        {id: 97,  label: 'CBO', x: 276, y: 437},
        {id: 98,  label: 'CAX', x: 390, y: 409, group: 'caixa_amarela'},
        {id: 99,  label: 'SID', x: 424, y: 411},
        {id: 100,  label: 'VIA3', x: 70, y: 453},
        {id: 101,  label: 'UTLB', x: 395, y: 462},
        {id: 1011, x: 395, y: 467, shape: 'image', size: 2.5, image: 'app/img/icotermica.png'},
        {id: 102,  label: 'JLB', x: 424, y: 461},
        {id: 103,  label: 'PTL', x: 94, y: 470},
        {id: 104,  label: 'CVIA', x: 117, y: 470},
        {id: 105,  label: 'PA13', x: 23, y: 483},
        {id: 106,  label: 'UTLA', x: 422, y: 486},
        {id: 1066, x: 422, y: 491, shape: 'image', size: 2.5, image: 'app/img/icotermica.png'},
        {id: 107,  label: 'UTLC', x: 458, y: 487},
        {id: 1077, x: 458, y: 492, shape: 'image', size: 2.5, image: 'app/img/icotermica.png'},
        {id: 108,  label: 'XAN', x: 555, y: 25},
        {id: 109,  label: 'UHSO', x: 644, y: 26},
        {id: 110,  label: 'PTO', x: 597, y: 32},
        {id: 111,  label: 'FOC', x: 698, y: 25},
        {id: 112,  label: 'CEL', x: 739, y: 25},
        {id: 113,  label: 'CVO', x: 811, y: 24},
        {id: 114,  label: 'STF6', x: 845, y: 8},
        {id: 115,  label: 'GUA', x: 880, y: 25},
        {id: 116,  label: 'DOU', x: 918, y: 23},
        {id: 117,  label: 'FIN', x: 764, y: 41},
        {id: 118,  label: 'RZS', x: 729, y: 63},
        {id: 119,  label: 'CVN', x: 840, y: 58},
        {id: 120,  label: 'UMS', x: 878, y: 58},
        {id: 121,  label: 'IVI2', x: 918, y: 56},
        {id: 122,  label: 'COR2', x: 949, y: 56},
        {id: 123,  label: 'UHSS', x: 641, y: 74},
        {id: 124,  label: 'NPP', x: 918, y: 92},
        {id: 125,  label: 'RBE', x: 952, y: 92},
        {id: 126,  label: 'UHIT', x: 538, y: 103},
        {id: 127,  label: 'YTA', x: 576, y: 103, group: 'caixa_amarela'},
        {id: 128,  label: 'SSA', x: 644, y: 102},
        {id: 129,  label: 'SCX', x: 781, y: 101},
        {id: 130,  label: 'APA', x: 894, y: 108},
        {id: 131,  label: 'PPR', x: 918, y: 115},
        {id: 132,  label: 'CMO', x: 790, y: 126},
        {id: 133,  label: 'SDI', x: 857, y: 130},
        {id: 134,  label: 'MCH', x: 573, y: 160},
        {id: 135,  label: 'MGA', x: 856, y: 159},
        {id: 136,  label: 'UHCN', x: 538, y: 180},
        {id: 137,  label: 'SGD', x: 642, y: 180},
        {id: 138,  label: 'JATT', x: 942, y: 187},
        {id: 139,  label: 'VID', x: 614, y: 200},
        {id: 140,  label: 'IVP', x: 811, y: 208},
        {id: 141,  label: 'LON', x: 894, y: 209},
        {id: 142,  label: 'ASS', x: 946, y: 208},
        {id: 143,  label: 'IBP', x: 853, y: 228},
        {id: 144,  label: 'GAR', x: 515, y: 245},
        {id: 145,  label: 'PGN', x: 769, y: 241},
        {id: 146,  label: 'STIV', x: 810, y: 239},
        {id: 147,  label: 'CNO', x: 570, y: 263},
        {id: 148,  label: 'ARE', x: 666, y: 262},
        {id: 149,  label: 'GBM', x: 709, y: 263},
        {id: 150,  label: 'SAG', x: 947, y: 260},
        {id: 151,  label: 'KCL', x: 827, y: 272},
        {id: 152,  label: 'LNA', x: 923, y: 272},
        {id: 153,  label: 'PGS', x: 770, y: 285},
        {id: 154,  label: 'CAN', x: 610, y: 294},
        {id: 155,  label: 'SMS', x: 650, y: 294},
        {id: 156,  label: 'FRA', x: 862, y: 294},
        {id: 157,  label: 'CHV', x: 947, y: 292},
        {id: 158,  label: 'ISO2', x: 981, y: 292},
        {id: 159,  label: 'BIG', x: 555, y: 318},
        {id: 160,  label: 'CBA', x: 665, y: 331},
        {id: 161,  label: 'BTA', x: 769, y: 330},
        {id: 162,  label: 'MUA', x: 828, y: 313},
        {id: 163,  label: 'STIN', x: 827, y: 330},
        {id: 164,  label: 'JGI', x: 904, y: 313},
        {id: 165,  label: 'ITR2', x: 947, y: 314},
        {id: 166,  label: 'CBA', x: 679, y: 345, group: 'caixa_amarela'},
        {id: 167,  label: 'JNO', x: 629, y: 352, group: 'caixa_amarela'},
        {id: 168,  label: 'CCO', x: 727, y: 354},
        {id: 169,  label: 'CTN', x: 867, y: 359},
        {id: 170,  label: 'SQT', x: 683, y: 379},
        {id: 171,  label: 'PIL', x: 931, y: 379},
        {id: 172,  label: 'GAS2', x: 595, y: 355},
        {id: 173,  label: 'CIC', x: 701, y: 392},
        {id: 174,  label: 'DRO', x: 516, y: 400},
        {id: 175,  label: 'JOI', x: 626, y: 406},
        {id: 176,  label: 'GRL', x: 887, y: 419},
        {id: 177,  label: 'ARC', x: 923, y: 419},
        {id: 1777, x: 923, y: 424, shape: 'image', size: 2.5, image: 'app/img/icotermica.png'},
        {id: 178,  label: 'TDE', x: 516, y: 429},
        {id: 179,  label: 'UMB', x: 664, y: 437},
        {id: 180,  label: 'BLU', x: 585, y: 450},
        {id: 181,  label: 'PAL', x: 515, y: 462},
        {id: 182,  label: 'BLU', x: 575, y: 460, group: 'caixa_amarela'},
        {id: 183,  label: 'CSO', x: 745, y: 437},
        {id: 184,  label: 'UBR', x: 743, y: 455},
        {id: 185,  label: 'DJP', x: 787, y: 455},
        {id: 186,  label: 'REP', x: 840, y: 437},
        {id: 187,  label: 'CTL', x: 839, y: 455},
        {id: 188,  label: 'PFL', x: 930, y: 462},
        {id: 189,  label: 'ANA', x: 980, y: 23},
        {id: 190,  label: 'SIA2', x: 980, y: 56},
        {id: 191,  label: 'IMB', x: 982, y: 93},
        {id: 192,  label: 'CGT', x: 982, y: 138},
        {id: 193,  label: 'CAO', x: 982, y: 187},
        {id: 194,  label: 'INO', x: 981, y: 247},
        {id: 195,  label: 'ILS', x: 981, y: 323},
        {id: 196,  label: 'SMC', x: 981, y: 379},
        {id: 197,  label: 'GPS', x: 981, y: 461},
        {id: 198,  label: 'ICO', x: 516, y: 489},
        {id: 199,  label: 'ITJ', x: 585, y: 489}
    ]);
    $scope.edges = new vis.DataSet([
        {"from":1,"to":2,"id":"1","color":{"color":"red"}},
        {"from":2,"to":20,"id":"2","color":{"color":"green"}},
        {"from":2,"to":19,"id":"3","color":{"color":"green"}},
        {"from":18,"to":2,"id":"4","color":{"color":"green"}},
        {"from":1,"to":3,"id":"5","color":{"color":"red"}},
        {"from":3,"to":2,"id":"6","color":{"color":"red"}},
        {"from":16,"to":17,"id":"7","color":{"color":"green"}},
        {"from":17,"to":25,"id":"8","color":{"color":"green"}},
        {"from":25,"to":26,"id":"9","color":{"color":"green"}},
        {"from":19,"to":25,"id":"10","color":{"color":"green"}},
        {"from":18,"to":6,"id":"11","color":{"color":"green"}},
        {"from":5,"to":2,"id":"12","color":{"color":"green"}},
        {"from":6,"to":5,"id":"13","color":{"color":"green"}},
        {"from":4,"to":5,"id":"14","color":{"color":"green"}},
        {"from":4,"to":9,"id":"15","color":{"color":"green"}},
        {"from":5,"to":9,"id":"16","color":{"color":"green"}},
        {"from":4,"to":8,"id":"17","color":{"color":"green"}},
        {"from":8,"to":9,"id":"18","color":{"color":"green"}},
        {"from":9,"to":7,"id":"19","color":{"color":"green"}},
        {"from":7,"to":14,"id":"20","color":{"color":"green"}},
        {"from":20,"to":14,"id":"21","color":{"color":"green"}},
        {"from":13,"to":12,"id":"22","color":{"color":"green"}},
        {"from":12,"to":9,"id":"23","color":{"color":"green"}},
        {"from":8,"to":10,"id":"24","color":{"color":"green"}},
        {"from":11,"to":12,"id":"25","color":{"color":"green"}},
        {"from":12,"to":15,"id":"26","color":{"color":"green"}},
        {"from":15,"to":34,"id":"27","color":{"color":"green"}},
        {"from":32,"to":33,"id":"28","color":{"color":"red"}},
        {"from":33,"to":34,"id":"29","color":{"color":"green"}},
        {"from":14,"to":22,"id":"30","color":{"color":"green"}},
        {"from":22,"to":23,"id":"31","color":{"color":"green"}},
        {"from":23,"to":24,"id":"32","color":{"color":"green"}},
        {"from":20,"to":21,"id":"33","color":{"color":"green"}},
        {"from":21,"to":24,"id":"34","color":{"color":"green"}},
        {"from":27,"to":24,"id":"35","color":{"color":"green"}},
        {"from":27,"to":28,"id":"36","color":{"color":"green"}},
        {"from":28,"to":26,"id":"37","color":{"color":"green"}},
        {"from":17,"to":108,"id":"38","color":{"color":"green"}},
        {"from":108,"to":26,"id":"39","color":{"color":"green"}},
        {"from":34,"to":35,"id":"40","color":{"color":"green"}},
        {"from":23,"to":35,"id":"41","color":{"color":"green"}},
        {"from":23,"to":48,"id":"42","color":{"color":"green"}},
        {"from":37,"to":36,"id":"43","color":{"color":"green"}},
        {"from":23,"to":59,"id":"44","color":{"color":"green"}},
        {"from":36,"to":35,"id":"45","color":{"color":"green"}},
        {"from":48,"to":59,"id":"46","color":{"color":"green"}},
        {"from":36,"to":67,"id":"47","color":{"color":"green"}},
        {"from":48,"to":67,"id":"48","color":{"color":"green"}},
        {"from":59,"to":47,"id":"49","color":{"color":"green"}},
        {"from":46,"to":62,"id":"50","color":{"color":"green"}},
        {"from":46,"to":34,"id":"51","color":{"color":"green"}},
        {"from":34,"to":45,"id":"52","color":{"color":"green"}},
        {"from":45,"to":47,"id":"53","color":{"color":"green"}},
        {"from":43,"to":45,"id":"54","color":{"color":"green"}},
        {"from":43,"to":34,"id":"55","color":{"color":"green"}},
        {"from":38,"to":44,"id":"56","color":{"color":"red"}},
        {"from":44,"to":60,"id":"57","color":{"color":"red"}},
        {"from":43,"to":60,"id":"58","color":{"color":"green"}},
        {"from":60,"to":47,"id":"59","color":{"color":"green"}},
        {"from":47,"to":62,"id":"60","color":{"color":"green"}},
        {"from":59,"to":60,"id":"61","label":"xxxx","color":{"color":"red"},"label":"xxxx","font":{"size":6,"strokeWidth":0,"color":"rgb(122,112,186)","background":"black"}},
        {"from":26,"to":30,"id":"62","color":{"color":"green"}},
        {"from":28,"to":31,"id":"63","color":{"color":"green"}},
        {"from":31,"to":56,"id":"64","color":{"color":"green"}},
        {"from":30,"to":52,"id":"65","color":{"color":"green"}},
        {"from":49,"to":52,"id":"66","color":{"color":"green"}},
        {"from":53,"to":52,"id":"67","color":{"color":"green"}},
        {"from":54,"to":52,"id":"68","color":{"color":"green"}},
        {"from":50,"to":52,"id":"69","color":{"color":"green"}},
        {"from":29,"to":52,"id":"70","color":{"color":"green"}},
        {"from":29,"to":50,"id":"71","color":{"color":"green"}},
        {"from":37,"to":50,"id":"72","color":{"color":"green"}},
        {"from":24,"to":51,"id":"73","color":{"color":"green"}},
        {"from":24,"to":83,"id":"74","color":{"color":"green"}},
        {"from":37,"to":59,"id":"75","color":{"color":"green"}},
        {"from":61,"to":62,"id":"76","color":{"color":"green"}},
        {"from":61,"to":66,"id":"77","color":{"color":"green"}},
        {"from":66,"to":67,"id":"78","color":{"color":"green"}},
        {"from":62,"to":67,"id":"79","color":{"color":"green"}},
        {"from":67,"to":59,"id":"80","color":{"color":"green"}},
        {"from":55,"to":50,"id":"81","color":{"color":"green"}},
        {"from":55,"to":58,"id":"82","color":{"color":"green"}},
        {"from":50,"to":57,"id":"83","color":{"color":"green"}},
        {"from":57,"to":65,"id":"84","color":{"color":"green"}},
        {"from":59,"to":51,"id":"85","color":{"color":"green"}},
        {"from":126,"to":127,"id":"86","color":{"color":"red"}},
        {"from":110,"to":108,"id":"87","color":{"color":"green"}},
        {"from":110,"to":109,"id":"88","color":{"color":"green"}},
        {"from":109,"to":108,"id":"89","color":{"color":"green"}},
        {"from":109,"to":111,"id":"90","color":{"color":"green"}},
        {"from":111,"to":112,"id":"91","color":{"color":"green"}},
        {"from":112,"to":109,"id":"92","color":{"color":"green"}},
        {"from":111,"to":118,"id":"93","color":{"color":"green"}},
        {"from":123,"to":128,"id":"94","color":{"color":"green"}},
        {"from":127,"to":2,"id":"95","color":{"color":"red"}},
        {"from":127,"to":128,"id":"96","color":{"color":"red"}},
        {"from":128,"to":137,"id":"97","color":{"color":"red"}},
        {"from":128,"to":129,"id":"98","color":{"color":"red"}},
        {"from":129,"to":113,"id":"99","color":{"color":"red"}},
        {"from":113,"to":114,"id":"100","color":{"color":"red"}},
        {"from":112,"to":117,"id":"101","color":{"color":"green"}},
        {"from":112,"to":113,"id":"102","color":{"color":"green"}},
        {"from":113,"to":119,"id":"103","color":{"color":"green"}},
        {"from":113,"to":115,"id":"104","color":{"color":"green"}},
        {"from":115,"to":120,"id":"105","color":{"color":"green"}},
        {"from":120,"to":119,"id":"106","color":{"color":"green"}},
        {"from":115,"to":116,"id":"107","color":{"color":"green"}},
        {"from":116,"to":121,"id":"108","color":{"color":"green"}},
        {"from":121,"to":124,"id":"109","color":{"color":"green"}},
        {"from":124,"to":131,"id":"110","color":{"color":"purple"}},
        {"from":132,"to":109,"id":"111","color":{"color":"green"}},
        {"from":128,"to":140,"id":"112","color":{"color":"red"}},
        {"from":140,"to":113,"id":"113","color":{"color":"red"}},
        {"from":132,"to":130,"id":"114","color":{"color":"green"}},
        {"from":133,"to":130,"id":"115","color":{"color":"green"}},
        {"from":133,"to":135,"id":"116","color":{"color":"green"}},
        {"from":132,"to":135,"id":"117","color":{"color":"green"}},
        {"from":135,"to":141,"id":"118","color":{"color":"green"}},
        {"from":130,"to":141,"id":"119","color":{"color":"green"}},
        {"from":138,"to":193,"id":"120","color":{"color":"green"}},
        {"from":193,"to":192,"id":"121","color":{"color":"green"}},
        {"from":192,"to":191,"id":"122","color":{"color":"green"}},
        {"from":124,"to":125,"id":"123","color":{"color":"green"}},
        {"from":125,"to":191,"id":"124","color":{"color":"green"}},
        {"from":191,"to":190,"id":"125","color":{"color":"green"}},
        {"from":190,"to":122,"id":"126","color":{"color":"green"}},
        {"from":122,"to":189,"id":"127","color":{"color":"green"}},
        {"from":189,"to":190,"id":"128","color":{"color":"green"}},
        {"from":116,"to":189,"id":"129","color":{"color":"green"}},
        {"from":142,"to":141,"id":"130","color":{"color":"red"}},
        {"from":141,"to":140,"id":"131","color":{"color":"red"}},
        {"from":141,"to":143,"id":"132","color":{"color":"green"}},
        {"from":141,"to":152,"id":"133","color":{"color":"green"}},
        {"from":152,"to":142,"id":"134","color":{"color":"green"}},
        {"from":142,"to":150,"id":"135","color":{"color":"green"}},
        {"from":150,"to":157,"id":"136","color":{"color":"green"}},
        {"from":193,"to":194,"id":"137","color":{"color":"green"}},
        {"from":158,"to":194,"id":"138","color":{"color":"green"}},
        {"from":195,"to":158,"id":"139","color":{"color":"purple"}},
        {"from":156,"to":141,"id":"140","color":{"color":"green"}},
        {"from":157,"to":156,"id":"141","color":{"color":"green"}},
        {"from":165,"to":164,"id":"142","color":{"color":"green"}},
        {"from":164,"to":156,"id":"143","color":{"color":"green"}},
        {"from":156,"to":151,"id":"144","color":{"color":"green"}},
        {"from":151,"to":145,"id":"145","color":{"color":"green"}},
        {"from":146,"to":140,"id":"146","color":{"color":"green"}},
        {"from":156,"to":162,"id":"147","color":{"color":"green"}},
        {"from":151,"to":162,"id":"148","color":{"color":"green"}},
        {"from":145,"to":153,"id":"149","color":{"color":"green"}},
        {"from":149,"to":148,"id":"150","color":{"color":"red"}},
        {"from":137,"to":148,"id":"151","color":{"color":"red"}},
        {"from":148,"to":140,"id":"152","color":{"color":"red"}},
        {"from":164,"to":162,"id":"153","color":{"color":"green"}},
        {"from":163,"to":161,"id":"154","color":{"color":"red"}},
        {"from":161,"to":153,"id":"155","color":{"color":"green"}},
        {"from":127,"to":134,"id":"156","color":{"color":"red"}},
        {"from":134,"to":147,"id":"157","color":{"color":"red"}},
        {"from":147,"to":139,"id":"158","color":{"color":"green"}},
        {"from":147,"to":148,"id":"159","color":{"color":"red"}},
        {"from":136,"to":147,"id":"160","color":{"color":"green"}},
        {"from":127,"to":93,"id":"161","color":{"color":"red"}},
        {"from":56,"to":147,"id":"162","color":{"color":"green"}},
        {"from":147,"to":64,"id":"163","color":{"color":"red"}},
        {"from":144,"to":64,"id":"164","color":{"color":"green"}},
        {"from":56,"to":64,"id":"165","color":{"color":"green"}},
        {"from":64,"to":63,"id":"166","color":{"color":"green"}},
        {"from":85,"to":63,"id":"167","color":{"color":"green"}},
        {"from":154,"to":155,"id":"168","color":{"color":"green"}},
        {"from":155,"to":148,"id":"169","color":{"color":"green"}},
        {"from":109,"to":148,"id":"170","color":{"color":"green"}},
        {"from":148,"to":161,"id":"171","color":{"color":"red"}},
        {"from":164,"to":161,"id":"172","color":{"color":"green"}},
        {"from":169,"to":171,"id":"173","color":{"color":"green"}},
        {"from":171,"to":196,"id":"174","color":{"color":"green"}},
        {"from":169,"to":161,"id":"175","color":{"color":"green"}},
        {"from":171,"to":161,"id":"176","color":{"color":"green"}},
        {"from":168,"to":161,"id":"177","color":{"color":"green"}},
        {"from":160,"to":161,"id":"178","color":{"color":"green"}},
        {"from":155,"to":160,"id":"179","color":{"color":"green"}},
        {"from":148,"to":160,"id":"180","color":{"color":"green"}},
        {"from":64,"to":159,"id":"181","color":{"color":"red"}},
        {"from":58,"to":87,"id":"182","color":{"color":"green"}},
        {"from":65,"to":84,"id":"183","color":{"color":"green"}},
        {"from":55,"to":93,"id":"184","color":{"color":"green"}},
        {"from":83,"to":67,"id":"185","color":{"color":"green"}},
        {"from":66,"to":68,"id":"186","color":{"color":"green"}},
        {"from":68,"to":67,"id":"187","color":{"color":"green"}},
        {"from":70,"to":67,"id":"188","color":{"color":"yellow"}},
        {"from":69,"to":70,"id":"189","color":{"color":"yellow"}},
        {"from":73,"to":67,"id":"190","color":{"color":"green"}},
        {"from":73,"to":72,"id":"191","color":{"color":"green"}},
        {"from":147,"to":93,"id":"192","color":{"color":"red"}},
        {"from":159,"to":172,"id":"193","color":{"color":"green"}},
        {"from":159,"to":174,"id":"194","color":{"color":"green"}},
        {"from":159,"to":102,"id":"195","color":{"color":"green"}},
        {"from":174,"to":178,"id":"196","color":{"color":"yellow"}},
        {"from":181,"to":178,"id":"197","color":{"color":"yellow"}},
        {"from":181,"to":159,"id":"198","color":{"color":"green"}},
        {"from":172,"to":181,"id":"199","color":{"color":"green"}},
        {"from":180,"to":172,"id":"200","color":{"color":"green"}},
        {"from":180,"to":159,"id":"201","color":{"color":"green"}},
        {"from":147,"to":180,"id":"202","color":{"color":"red"}},
        {"from":160,"to":180,"id":"203","color":{"color":"red"}},
        {"from":167,"to":160,"id":"204","color":{"color":"green"}},
        {"from":87,"to":99,"id":"205","color":{"color":"green"}},
        {"from":197,"to":196,"id":"206","color":{"color":"green"}},
        {"from":188,"to":197,"id":"207","color":{"color":"green"}},
        {"from":177,"to":176,"id":"208","color":{"color":"green"}},
        {"from":186,"to":176,"id":"209","color":{"color":"green"}},
        {"from":196,"to":187,"id":"210","color":{"color":"green"}},
        {"from":187,"to":188,"id":"211","color":{"color":"green"}},
        {"from":185,"to":186,"id":"212","color":{"color":"green"}},
        {"from":187,"to":160,"id":"213","color":{"color":"red"}},
        {"from":187,"to":185,"id":"214","color":{"color":"green"}},
        {"from":187,"to":184,"id":"215","color":{"color":"green"}},
        {"from":185,"to":184,"id":"216","color":{"color":"green"}},
        {"from":184,"to":179,"id":"217","color":{"color":"green"}},
        {"from":179,"to":160,"id":"218","color":{"color":"green"}},
        {"from":170,"to":179,"id":"219","color":{"color":"green"}},
        {"from":173,"to":179,"id":"220","color":{"color":"green"}},
        {"from":170,"to":168,"id":"221","color":{"color":"green"}},
        {"from":173,"to":168,"id":"222","color":{"color":"green"}},
        {"from":168,"to":176,"id":"223","color":{"color":"green"}},
        {"from":171,"to":168,"id":"224","color":{"color":"green"}},
        {"from":167,"to":175,"id":"225","color":{"color":"green"}},
        {"from":175,"to":160,"id":"226","color":{"color":"green"}},
        {"from":175,"to":180,"id":"227","color":{"color":"green"}},
        {"from":167,"to":180,"id":"228","color":{"color":"green"}},
        {"from":199,"to":180,"id":"229","color":{"color":"green"}},
        {"from":198,"to":181,"id":"230","color":{"color":"yellow"}},
        {"from":107,"to":102,"id":"231","color":{"color":"green"}},
        {"from":181,"to":102,"id":"232","color":{"color":"green"}},
        {"from":106,"to":102,"id":"233","color":{"color":"green"}},
        {"from":101,"to":102,"id":"234","color":{"color":"green"}},
        {"from":99,"to":102,"id":"235","color":{"color":"green"}},
        {"from":93,"to":84,"id":"236","color":{"color":"green"}},
        {"from":93,"to":50,"id":"237","color":{"color":"green"}},
        {"from":93,"to":92,"id":"238","color":{"color":"green"}},
        {"from":92,"to":91,"id":"239","color":{"color":"green"}},
        {"from":91,"to":90,"id":"240","color":{"color":"green"}},
        {"from":93,"to":80,"id":"241","color":{"color":"red"}},
        {"from":80,"to":59,"id":"242","color":{"color":"red"}},
        {"from":97,"to":93,"id":"243","color":{"color":"green"}},
        {"from":86,"to":90,"id":"244","color":{"color":"green"}},
        {"from":77,"to":88,"id":"245","color":{"color":"green"}},
        {"from":86,"to":77,"id":"246","color":{"color":"green"}},
        {"from":96,"to":90,"id":"247","color":{"color":"green"}},
        {"from":90,"to":89,"id":"248","color":{"color":"black"}},
        {"from":103,"to":100,"id":"249","color":{"color":"green"}},
        {"from":100,"to":80,"id":"250","color":{"color":"green"}},
        {"from":80,"to":67,"id":"251","color":{"color":"green"}},
        {"from":73,"to":80,"id":"252","color":{"color":"green"}},
        {"from":78,"to":80,"id":"253","color":{"color":"green"}},
        {"from":74,"to":80,"id":"254","color":{"color":"green"}},
        {"from":74,"to":71,"id":"255","color":{"color":"green"}},
        {"from":71,"to":66,"id":"256","color":{"color":"green"}},
        {"from":81,"to":71,"id":"257","color":{"color":"green"}},
        {"from":81,"to":105,"id":"258","color":{"color":"green"}},
        {"from":81,"to":100,"id":"259","color":{"color":"green"}},
        {"from":81,"to":80,"id":"260","color":{"color":"green"}},
        {"from":79,"to":81,"id":"261","color":{"color":"blue"}},
        {"from":76,"to":81,"id":"262","color":{"color":"blue"}},
        {"from":74,"to":81,"id":"263","color":{"color":"blue"}},
        {"from":75,"to":74,"id":"264","color":{"color":"blue"}},
        {"from":75,"to":76,"id":"265","color":{"color":"blue"}},
        {"from":183,"to":179,"id":"266","color":{"color":"green"}},
        {"from":183,"to":185,"id":"267","color":{"color":"green"}},
        {"from":59,"to":127,"id":"268","color":{"color":"red"}},
        {"from":80,"to":77,"id":"269","color":{"color":"green"}},
        {"from":80,"to":97,"id":"270","color":{"color":"green"}},
        {"from":40,"to":12,"id":"271","color":{"color":"green"}},
        {"from":43,"to":42,"id":"272","color":{"color":"green"}},
        {"from":34,"to":39,"id":"273","color":{"color":"green"}},
        {"from":41,"to":43,"id":"274","color":{"color":"green"}}
    ]);
    var container = document.getElementById('mynetwork');
    var width = 100;
    var height = 100;
    var options = {
        width: width + '%',
        height: height + '%',
        nodes: {
            color: 'rgba(255,255,255,0.0)',
            shadow: false,
            labelHighlightBold: true,
            font: {
                color: 'white',
                background: 'black',
                size: 8,
                face: 'arial',
                align: 'center'
            }
        },
        edges: {
            width: 2,
            color: {
                color:'white',
                highlight:'white',
                hover: 'grey',
                opacity:1.0
            },
            smooth: {
                enabled: false
            }
        },
        groups: {
            caixa_amarela: {
                color: {background:'black',border:'yellow'},
                shape: 'box',
                margin: 2,
                shapeProperties: {borderRadius: 0}
            },
            eolica: {
                color: 'rgba(255,255,255,0.0)',
                shadow: false,
                labelHighlightBold: true,
                font: {
                    color: 'white',
                    background: 'black',
                    size: 8,
                    face: 'arial',
                    align: 'center'
                }
            },
            geracao: {
                color: {
                    background:'black'
                },
                shape: 'box',
                margin: 1,
                font: {
                    color: 'rgb(122,112,186)',
                    background: 'black',
                    size: 5,
                    face: 'arial',
                    align: 'center'
                }
            },
            pisca: {
                color: {
                    background:'black'
                },
                shape: 'box',
                margin: 1,
                font: {
                    color: 'rgb(178, 166, 247)',
                    background: 'black',
                    size: 6,
                    face: 'arial',
                    align: 'center'
                }
            }
        },
        physics: false,
        interaction: {
            dragNodes: false,
            zoomView: true,
            dragView: true
        },
        manipulation: {
            enabled: false
        }    
    };
    var data = {
        nodes: $scope.nodes,
        edges: $scope.edges
    };
    
    var network = new vis.Network(container, data, options);
    
    network.fit();
    
    $timeout( function(){
        network.moveTo({
            position: {x:125, y:200},
            scale: 2.7,
            animation: {
                duration: 2000
            }
        });
        $timeout(function() {
            $scope.nodes.remove(1)
            $scope.nodes.remove(2)
            $scope.nodes.remove(3)
            $scope.nodes.remove(4)
            $scope.nodes.remove(44444)
            $scope.nodes.remove(5)
            $scope.nodes.remove(6)
            $scope.nodes.remove(8)
            $scope.nodes.remove(10)
            $scope.nodes.remove(13)
            $scope.nodes.remove(14)
            $scope.nodes.remove(16)
            $scope.nodes.remove(17)
            $scope.nodes.remove(18)
            $scope.nodes.remove(19)
            $scope.nodes.remove(20)
            $scope.nodes.remove(21)
            $scope.nodes.remove(22)
            $scope.nodes.remove(23)
            $scope.nodes.remove(24)
            $scope.nodes.remove(25)
            $scope.nodes.remove(26)
            $scope.nodes.remove(27)
            $scope.nodes.remove(28)
            $scope.nodes.remove(29)
            $scope.nodes.remove(30)
            $scope.nodes.remove(31)
            $scope.nodes.remove(36)
            $scope.nodes.remove(37)
            $scope.nodes.remove(48)
            $scope.nodes.remove(49)
            $scope.nodes.remove(50)
            $scope.nodes.remove(51)
            $scope.nodes.remove(52)
            $scope.nodes.remove(53)
            $scope.nodes.remove(54)
            $scope.nodes.remove(55)
            $scope.nodes.remove(56)
            $scope.nodes.remove(57)
            $scope.nodes.remove(58)
            $scope.nodes.remove(61)
            $scope.nodes.remove(63)
            $scope.nodes.remove(64)
            $scope.nodes.remove(65)
            $scope.nodes.remove(66)
            $scope.nodes.remove(67)
            $scope.nodes.remove(68)
            $scope.nodes.remove(69)
            $scope.nodes.remove(70)
            $scope.nodes.remove(71)
            $scope.nodes.remove(72)
            $scope.nodes.remove(722)
            $scope.nodes.remove(73)
            $scope.nodes.remove(74)
            $scope.nodes.remove(75)
            $scope.nodes.remove(76)
            $scope.nodes.remove(77)
            $scope.nodes.remove(78)
            $scope.nodes.remove(79)
            $scope.nodes.remove(80)
            $scope.nodes.remove(81)
            $scope.nodes.remove(82)
            $scope.nodes.remove(83)
            $scope.nodes.remove(84)
            $scope.nodes.remove(85)
            $scope.nodes.remove(86)
            $scope.nodes.remove(87)
            $scope.nodes.remove(88)
            $scope.nodes.remove(89)
            $scope.nodes.remove(899)
            $scope.nodes.remove(90)
            $scope.nodes.remove(91)
            $scope.nodes.remove(92)
            $scope.nodes.remove(93)
            $scope.nodes.remove(94)
            $scope.nodes.remove(944)
            $scope.nodes.remove(95)
            $scope.nodes.remove(955)
            $scope.nodes.remove(96)
            $scope.nodes.remove(966)
            $scope.nodes.remove(97)
            $scope.nodes.remove(98)
            $scope.nodes.remove(99)
            $scope.nodes.remove(100)
            $scope.nodes.remove(101)
            $scope.nodes.remove(1011)
            $scope.nodes.remove(102)
            $scope.nodes.remove(103)
            $scope.nodes.remove(104)
            $scope.nodes.remove(105)
            $scope.nodes.remove(106)
            $scope.nodes.remove(1066)
            $scope.nodes.remove(107)
            $scope.nodes.remove(1077)
            $scope.nodes.remove(108)
            $scope.nodes.remove(109)
            $scope.nodes.remove(110)
            $scope.nodes.remove(111)
            $scope.nodes.remove(112)
            $scope.nodes.remove(113)
            $scope.nodes.remove(114)
            $scope.nodes.remove(115)
            $scope.nodes.remove(116)
            $scope.nodes.remove(117)
            $scope.nodes.remove(118)
            $scope.nodes.remove(119)
            $scope.nodes.remove(120)
            $scope.nodes.remove(121)
            $scope.nodes.remove(122)
            $scope.nodes.remove(123)
            $scope.nodes.remove(124)
            $scope.nodes.remove(125)
            $scope.nodes.remove(126)
            $scope.nodes.remove(127)
            $scope.nodes.remove(128)
            $scope.nodes.remove(129)
            $scope.nodes.remove(130)
            $scope.nodes.remove(131)
            $scope.nodes.remove(132)
            $scope.nodes.remove(133)
            $scope.nodes.remove(134)
            $scope.nodes.remove(135)
            $scope.nodes.remove(136)
            $scope.nodes.remove(137)
            $scope.nodes.remove(138)
            $scope.nodes.remove(139)
            $scope.nodes.remove(140)
            $scope.nodes.remove(141)
            $scope.nodes.remove(142)
            $scope.nodes.remove(143)
            $scope.nodes.remove(144)
            $scope.nodes.remove(145)
            $scope.nodes.remove(146)
            $scope.nodes.remove(147)
            $scope.nodes.remove(148)
            $scope.nodes.remove(149)
            $scope.nodes.remove(150)
            $scope.nodes.remove(151)
            $scope.nodes.remove(152)
            $scope.nodes.remove(153)
            $scope.nodes.remove(154)
            $scope.nodes.remove(155)
            $scope.nodes.remove(156)
            $scope.nodes.remove(157)
            $scope.nodes.remove(158)
            $scope.nodes.remove(159)
            $scope.nodes.remove(160)
            $scope.nodes.remove(161)
            $scope.nodes.remove(162)
            $scope.nodes.remove(163)
            $scope.nodes.remove(164)
            $scope.nodes.remove(165)
            $scope.nodes.remove(166)
            $scope.nodes.remove(167)
            $scope.nodes.remove(168)
            $scope.nodes.remove(169)
            $scope.nodes.remove(170)
            $scope.nodes.remove(171)
            $scope.nodes.remove(172)
            $scope.nodes.remove(173)
            $scope.nodes.remove(174)
            $scope.nodes.remove(175)
            $scope.nodes.remove(176)
            $scope.nodes.remove(177)
            $scope.nodes.remove(1777)
            $scope.nodes.remove(178)
            $scope.nodes.remove(179)
            $scope.nodes.remove(180)
            $scope.nodes.remove(181)
            $scope.nodes.remove(182)
            $scope.nodes.remove(183)
            $scope.nodes.remove(184)
            $scope.nodes.remove(185)
            $scope.nodes.remove(186)
            $scope.nodes.remove(187)
            $scope.nodes.remove(188)
            $scope.nodes.remove(189)
            $scope.nodes.remove(190)
            $scope.nodes.remove(191)
            $scope.nodes.remove(192)
            $scope.nodes.remove(193)
            $scope.nodes.remove(194)
            $scope.nodes.remove(195)
            $scope.nodes.remove(196)
            $scope.nodes.remove(197)
            $scope.nodes.remove(198)
            $scope.nodes.remove(199)
            $scope.nodes.remove(1333)
            $scope.nodes.update([{id:61,label:'oo', x: 999, y: 213}]);
            $scope.nodes.update([{id:80,label:'oo', x: 999, y: 274}]);
            $scope.nodes.update([{id:7,label:'oo', x: 999, y: 0}]);
            $scope.nodes.update([{id:35,label:'oo', x: 999, y: 152}]);
        }, 3000);
    }, 1000 );


    $scope.iniciaVariaveis=function()
    {
        $scope.cortemanual=0;
        $scope.impactoNaLinha = {
            CSVPA: 0.7,
            CMRO2: 0.7,
            CQ138: 0.6,
            CQ69: 0.58,
            CLIV2: 0.21
        };

        dia = new Date();
        $scope.entraumavez=0;
        $scope.contMin=0;
        $scope.contgReal = {
            CSVPA: 0,
            CMRO2: 0,
            CQ138: 0,
            CQ69: 0,
            CLIV2: 0,
            Melo: 0
            //CSVPA: parseInt($scope.randomiza(0,299)),
            //CMRO2: parseInt($scope.randomiza(0,299)),
            //CQ138: parseInt($scope.randomiza(0,299)),
            //CQ69: parseInt($scope.randomiza(0,299)),
            //CLIV2: parseInt($scope.randomiza(0,299)),
            //Melo: parseInt($scope.randomiza(0,299))
        };
        $scope.gReal = {
            CSVPA: [411.11, 414.85, 419.22, 419.64, 422.53, 422.14, 425.49, 430.29, 431.53, 430.22, 431.22, 431.59, 437.00, 439.88, 443.43, 444.76, 446.30, 448.49, 449.33, 452.79, 460.67, 469.18, 470.37, 470.21, 475.35, 489.46, 490.35, 478.83, 468.29, 445.32, 435.50, 425.22, 415.14, 407.20, 401.22, 398.51, 398.57, 402.82, 409.44, 425.78, 423.51, 432.61, 441.06, 430.69, 419.91, 414.05, 433.76, 459.59, 465.30, 461.09, 448.82, 455.50, 443.75, 436.87, 466.73, 466.61, 450.61, 435.87, 419.17, 412.35, 415.33, 428.64, 433.25, 426.43, 404.99, 394.62, 391.37, 390.62, 398.09, 386.24, 394.88, 408.10, 426.71, 423.74, 403.08, 390.57, 396.65, 400.17, 410.07, 413.15, 410.77, 408.01, 398.82, 397.47, 394.03, 398.03, 402.55, 416.70, 409.24, 396.38, 391.17, 391.26, 391.56, 391.43, 406.32, 411.55, 415.33, 411.27, 406.75, 414.35, 411.93, 389.20, 382.23, 378.16, 373.78, 374.34, 389.22, 409.50, 413.08, 409.48, 406.00, 405.26, 403.44, 377.70, 370.85, 388.88, 399.48, 398.08, 394.60, 388.29, 392.47, 405.25, 414.99, 413.82, 423.16, 428.64, 429.64, 433.11, 448.19, 452.23, 469.32, 474.39, 465.77, 448.28, 428.01, 412.12, 403.86, 394.62, 387.91, 378.09, 369.30, 373.34, 373.47, 370.09, 379.32, 379.63, 361.49, 357.09, 354.43, 361.49, 368.41, 378.05, 388.93, 405.64, 407.14, 405.24, 405.43, 394.67, 390.28, 381.65, 380.41, 375.84, 368.91, 365.58, 368.09, 365.73, 372.94, 379.53, 405.29, 428.52, 440.53, 434.14, 417.87, 375.80, 359.41, 355.36, 361.75, 371.58, 367.42, 360.95, 359.15, 357.00, 348.53, 342.15, 343.46, 353.46, 362.36, 391.39, 409.69, 397.34, 384.89, 378.99, 365.84, 334.46, 336.12, 329.34, 335.82, 357.30, 359.36, 366.77, 351.94, 335.83, 328.90, 327.97, 337.54, 339.88, 341.13, 353.51, 372.96, 372.46, 340.09, 315.32, 310.61, 313.06, 309.38, 312.46, 352.83, 397.86, 412.19, 412.89, 404.89, 388.20, 377.46, 386.59, 386.64, 402.18, 400.86, 390.27, 376.46, 354.82, 353.87, 358.32, 359.39, 371.44, 383.30, 366.42, 362.62, 372.47, 371.89, 358.13, 347.57, 349.31, 359.52, 346.69, 336.17, 335.29, 336.52, 327.67, 326.11, 326.51, 314.04, 305.29, 310.35, 297.03, 298.75, 287.87, 276.95, 279.18, 289.12, 300.45, 300.85, 303.49, 327.46, 333.02, 358.80, 359.19, 372.15, 382.26, 387.41, 410.89, 411.31, 395.65, 396.89, 431.34, 424.35, 441.20, 453.85, 471.57, 471.20, 473.05, 475.00, 487.05, 494.08, 497.69, 496.04, 498.66, 508.67, 515.55, 515.82, 509.92, 515.65, 521.59, 529.70, 538.73, 539.31, 531.66, 521.16, 515.38, 509.66, 502.64],
            CMRO2: [152.16, 157.20, 157.56, 157.34, 159.57, 155.25, 156.90, 160.64, 161.48, 158.54, 159.39, 162.20, 163.96, 161.83, 162.70, 167.44, 169.80, 169.72, 165.14, 168.37, 170.33, 174.46, 177.59, 178.48, 179.41, 181.58, 181.55, 180.38, 173.32, 166.58, 162.91, 159.17, 157.73, 149.80, 150.59, 149.57, 150.83, 148.54, 152.45, 159.11, 160.53, 162.75, 163.90, 160.31, 154.48, 154.12, 165.03, 170.04, 176.38, 170.72, 165.28, 168.87, 163.96, 162.78, 172.86, 177.35, 166.16, 163.59, 157.96, 155.03, 154.44, 157.43, 160.51, 160.80, 153.72, 145.03, 146.65, 143.90, 146.55, 143.05, 147.57, 151.85, 157.93, 160.35, 151.82, 146.59, 150.45, 148.21, 152.23, 155.33, 154.28, 153.73, 148.20, 147.16, 146.91, 151.34, 151.80, 154.64, 151.21, 147.89, 145.99, 145.01, 146.28, 144.68, 150.69, 156.26, 154.60, 151.55, 151.20, 156.15, 155.42, 143.85, 143.56, 138.98, 137.92, 137.72, 145.45, 152.89, 151.51, 154.05, 150.27, 152.36, 152.06, 141.81, 136.66, 144.07, 147.70, 147.38, 149.43, 143.47, 146.86, 149.99, 155.81, 157.18, 159.87, 162.59, 160.57, 163.46, 166.83, 170.08, 176.38, 177.28, 172.97, 168.14, 162.24, 153.92, 151.63, 145.27, 146.35, 143.41, 140.13, 139.39, 139.39, 138.31, 140.53, 139.48, 133.66, 133.98, 134.85, 136.09, 139.00, 139.92, 145.16, 154.07, 151.34, 151.04, 152.76, 149.86, 147.89, 143.72, 140.14, 139.48, 137.50, 136.49, 138.78, 138.68, 141.18, 139.16, 150.26, 160.51, 162.99, 163.69, 156.84, 141.83, 135.21, 132.41, 136.98, 140.85, 137.40, 135.16, 132.48, 135.01, 129.73, 128.85, 128.69, 131.00, 134.21, 145.29, 152.24, 151.12, 146.39, 139.75, 135.49, 123.25, 124.15, 122.26, 124.75, 132.64, 135.90, 138.17, 132.54, 123.71, 123.07, 120.78, 124.22, 126.26, 125.12, 130.49, 137.99, 136.75, 128.40, 116.78, 118.06, 116.99, 115.69, 117.32, 129.50, 149.08, 156.77, 152.61, 151.07, 147.20, 143.37, 146.00, 146.91, 148.25, 148.17, 148.43, 142.75, 134.23, 133.04, 133.77, 136.74, 137.47, 142.20, 136.48, 134.62, 138.13, 138.06, 132.24, 128.55, 129.54, 134.26, 128.44, 127.90, 125.72, 126.84, 121.76, 123.99, 122.84, 115.96, 115.33, 114.90, 109.42, 110.24, 109.41, 104.73, 102.67, 108.04, 113.47, 113.37, 115.31, 123.50, 122.80, 135.37, 134.14, 139.54, 140.49, 146.12, 154.63, 154.63, 146.93, 150.54, 162.47, 156.22, 163.73, 172.15, 174.48, 173.70, 178.30, 175.21, 181.29, 183.11, 186.49, 182.12, 187.82, 187.26, 189.86, 189.70, 190.38, 192.07, 197.38, 196.64, 204.83, 202.96, 196.51, 196.33, 192.53, 192.16, 186.16],
            CQ138: [77.46, 77.90, 80.18, 80.07, 77.67, 80.44, 78.45, 78.88, 82.18, 80.71, 82.59, 82.55, 80.52, 80.91, 81.35, 82.22, 85.65, 82.61, 85.57, 86.46, 88.26, 89.59, 89.58, 90.03, 90.49, 91.61, 93.22, 91.80, 89.00, 81.80, 80.00, 79.58, 78.17, 77.62, 76.64, 76.12, 74.74, 75.62, 78.28, 79.55, 79.55, 81.37, 84.16, 80.88, 77.24, 77.75, 80.32, 86.57, 87.41, 85.36, 84.14, 85.19, 83.47, 80.65, 86.43, 87.89, 86.10, 83.25, 77.57, 78.89, 79.30, 78.71, 82.42, 78.96, 74.82, 73.83, 73.32, 74.56, 73.27, 74.12, 75.10, 77.98, 78.96, 78.05, 76.58, 74.60, 74.56, 75.45, 75.43, 77.66, 77.14, 74.82, 74.77, 75.57, 72.79, 76.34, 77.25, 78.01, 78.35, 73.28, 74.97, 71.85, 74.44, 73.65, 74.66, 76.05, 77.99, 75.77, 76.28, 76.68, 78.39, 71.92, 71.78, 69.49, 68.96, 68.86, 74.02, 75.75, 78.51, 75.65, 76.50, 74.82, 74.01, 70.90, 69.57, 72.68, 76.53, 75.03, 74.05, 71.73, 74.74, 74.32, 77.90, 76.50, 79.22, 80.57, 82.45, 79.56, 84.16, 85.04, 88.19, 87.05, 85.70, 85.57, 78.96, 76.26, 75.81, 72.63, 72.53, 69.80, 70.68, 69.06, 71.58, 69.78, 70.90, 71.00, 68.04, 68.18, 66.83, 69.26, 68.88, 70.59, 71.92, 77.71, 74.99, 74.84, 75.70, 74.26, 71.98, 71.86, 70.07, 70.36, 69.37, 67.63, 68.77, 69.95, 69.96, 69.58, 77.16, 80.25, 81.49, 81.12, 79.82, 70.29, 66.40, 67.99, 69.10, 71.05, 69.92, 66.37, 67.44, 65.71, 65.45, 64.42, 63.20, 67.27, 67.10, 71.99, 76.80, 73.55, 73.84, 69.87, 67.13, 63.86, 63.20, 62.78, 64.06, 66.92, 66.14, 67.85, 65.08, 64.10, 62.63, 61.48, 64.37, 62.56, 63.70, 65.24, 70.86, 68.37, 63.63, 60.51, 59.55, 57.45, 56.81, 58.66, 64.75, 74.54, 77.69, 79.08, 74.85, 72.95, 72.32, 71.06, 74.10, 74.12, 76.77, 72.24, 72.00, 67.71, 65.33, 66.88, 67.76, 69.98, 73.02, 67.62, 69.12, 69.69, 68.40, 66.12, 66.61, 64.19, 67.13, 65.96, 64.51, 61.73, 61.73, 62.52, 61.44, 61.42, 59.03, 56.13, 57.45, 54.71, 55.12, 53.25, 51.90, 51.33, 54.98, 57.23, 55.67, 56.12, 60.11, 63.63, 67.08, 68.26, 69.77, 71.52, 72.41, 78.69, 75.93, 72.80, 73.27, 79.07, 80.95, 82.60, 86.83, 89.59, 86.85, 86.78, 90.79, 91.46, 92.38, 91.58, 94.37, 93.08, 93.63, 98.38, 94.85, 94.33, 96.90, 99.56, 99.20, 103.32, 103.29, 100.04, 99.92, 94.55, 93.53, 94.77],
            CQ69 : [45.64, 47.30, 47.83, 49.17, 48.01, 47.98, 48.49, 47.33, 47.57, 49.00, 50.71, 49.24, 48.31, 48.54, 50.28, 50.83, 51.09, 49.56, 49.54, 50.05, 51.10, 51.86, 55.00, 55.28, 55.56, 53.98, 53.97, 53.14, 53.09, 50.57, 50.91, 49.74, 48.85, 44.94, 44.37, 45.40, 44.04, 47.26, 48.07, 48.30, 49.72, 47.95, 48.72, 50.55, 47.74, 48.59, 49.65, 54.10, 51.50, 54.32, 52.59, 53.24, 49.18, 49.86, 53.43, 54.93, 51.36, 49.66, 46.54, 48.44, 45.91, 50.09, 49.16, 47.38, 46.25, 44.82, 43.21, 43.17, 43.96, 45.51, 46.11, 45.14, 48.81, 48.24, 44.33, 45.81, 45.27, 44.46, 45.25, 47.15, 46.83, 46.25, 44.06, 45.07, 45.00, 45.53, 46.08, 47.36, 45.36, 45.30, 46.03, 44.41, 43.10, 44.72, 46.15, 48.40, 48.74, 48.22, 46.31, 47.40, 48.13, 43.15, 43.58, 42.95, 43.88, 43.82, 44.15, 46.83, 46.83, 46.76, 46.44, 46.25, 44.40, 43.05, 42.24, 45.43, 44.31, 46.89, 46.28, 45.65, 43.27, 45.94, 48.69, 48.68, 48.10, 50.36, 47.73, 47.73, 51.10, 50.11, 51.97, 53.81, 52.98, 49.54, 50.25, 48.53, 47.38, 43.58, 45.33, 41.88, 40.92, 41.44, 43.95, 43.61, 41.78, 44.38, 42.52, 40.67, 41.76, 41.31, 41.82, 42.86, 45.77, 47.72, 47.72, 46.26, 47.31, 45.09, 45.80, 42.34, 42.04, 42.72, 42.11, 40.58, 40.53, 42.95, 41.23, 41.74, 46.02, 48.72, 51.86, 49.25, 49.01, 43.93, 41.04, 41.75, 42.43, 41.13, 42.93, 42.23, 40.94, 40.62, 38.57, 37.96, 39.06, 41.30, 42.70, 43.19, 48.00, 46.80, 42.75, 43.19, 41.50, 36.97, 37.24, 36.34, 38.21, 40.63, 40.89, 40.71, 39.05, 38.23, 38.46, 38.43, 37.26, 38.67, 39.81, 40.33, 41.02, 43.51, 37.49, 37.15, 34.47, 34.47, 36.15, 34.56, 41.20, 45.25, 48.55, 48.55, 46.27, 45.59, 41.87, 45.22, 42.90, 45.82, 45.79, 45.97, 42.95, 41.57, 40.38, 39.41, 41.14, 42.49, 44.83, 43.03, 42.44, 42.31, 41.04, 39.67, 40.90, 38.51, 39.56, 39.34, 37.35, 37.04, 37.04, 36.20, 37.30, 38.38, 36.89, 34.70, 35.51, 33.82, 35.07, 31.95, 32.44, 31.73, 31.83, 35.14, 35.43, 35.71, 36.06, 39.07, 41.93, 39.52, 42.36, 44.70, 42.67, 48.32, 45.56, 43.68, 45.29, 47.44, 49.70, 51.62, 51.79, 55.01, 55.26, 53.64, 52.56, 57.16, 54.44, 54.94, 56.29, 54.85, 59.58, 60.41, 56.91, 60.03, 58.83, 59.39, 60.23, 63.44, 61.61, 58.95, 57.84, 60.16, 57.82, 59.23],
            CLIV2: [150.77, 151.64, 151.93, 154.53, 153.92, 155.25, 154.05, 156.33, 157.15, 158.54, 159.39, 157.86, 158.11, 161.83, 162.70, 161.46, 165.29, 163.71, 165.14, 165.34, 167.23, 169.75, 169.73, 173.74, 173.05, 176.67, 179.91, 175.55, 170.20, 160.63, 158.55, 154.91, 153.54, 149.80, 146.56, 145.56, 146.82, 148.54, 151.08, 154.85, 154.85, 159.85, 162.42, 157.42, 151.67, 151.34, 160.65, 166.95, 168.57, 169.16, 163.78, 165.83, 160.98, 158.38, 172.86, 172.64, 163.14, 160.67, 152.32, 149.49, 150.27, 154.56, 157.62, 157.93, 149.64, 145.03, 141.41, 141.28, 145.22, 140.45, 143.61, 150.49, 156.50, 153.26, 146.45, 142.67, 143.80, 148.21, 148.12, 152.55, 148.77, 148.29, 146.87, 144.51, 142.94, 147.32, 149.09, 151.85, 151.21, 145.23, 144.68, 141.09, 141.05, 143.36, 149.33, 149.35, 151.81, 150.18, 149.84, 150.57, 149.91, 141.24, 138.43, 138.98, 137.92, 137.72, 142.85, 151.51, 150.13, 148.55, 150.27, 146.92, 148.02, 136.74, 134.17, 141.48, 145.02, 144.70, 142.81, 143.47, 142.93, 148.64, 153.03, 150.22, 152.79, 156.84, 156.23, 157.67, 163.82, 167.04, 170.08, 170.95, 171.41, 165.14, 157.93, 152.53, 148.92, 143.95, 141.17, 139.61, 135.17, 136.88, 138.13, 134.57, 136.73, 136.94, 133.66, 131.59, 131.27, 133.66, 134.08, 137.40, 142.55, 149.98, 147.25, 148.32, 146.00, 145.88, 143.96, 138.59, 140.14, 138.22, 133.79, 134.03, 133.87, 135.00, 134.93, 139.16, 148.90, 154.78, 161.51, 159.34, 152.64, 135.56, 132.80, 128.83, 132.14, 135.86, 134.94, 131.54, 130.07, 129.03, 128.56, 126.55, 125.25, 129.82, 134.21, 141.37, 148.13, 144.43, 141.20, 138.48, 133.05, 123.25, 121.89, 120.06, 121.38, 131.45, 129.89, 134.47, 130.17, 121.46, 118.68, 119.68, 123.09, 125.12, 125.12, 128.12, 136.75, 134.26, 124.99, 114.66, 114.92, 113.86, 113.63, 114.17, 128.32, 143.75, 152.61, 151.22, 146.98, 143.29, 137.03, 139.54, 143.01, 146.91, 145.47, 144.49, 138.96, 129.48, 129.48, 130.18, 131.90, 134.97, 139.63, 134.02, 130.98, 134.40, 135.57, 129.83, 128.55, 126.04, 131.86, 127.29, 122.24, 121.23, 123.47, 118.47, 119.60, 119.55, 113.85, 112.27, 113.86, 108.42, 110.24, 106.51, 100.10, 101.74, 104.18, 109.45, 109.32, 111.23, 118.04, 122.80, 129.38, 129.35, 135.80, 140.49, 140.94, 151.87, 150.49, 144.28, 145.22, 155.28, 153.38, 160.78, 167.58, 169.76, 170.54, 170.41, 172.03, 176.39, 178.16, 183.16, 182.12, 182.84, 183.85, 188.13, 186.25, 185.24, 186.88, 192.14, 194.87, 197.58, 197.52, 192.94, 189.32, 185.66, 185.36, 184.47],
            Melo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        };
        
        $scope.contfRealLinha=0;
        //$scope.contfRealLinha=parseInt($scope.randomiza(0,299));
        $scope.fRealLinha = [274.72, 276.08, 277.72, 277.70, 278.26, 278.26, 278.54, 278.26, 278.26, 277.43, 277.71, 277.71, 277.71, 278.27, 277.44, 278.25, 280.99, 283.13, 284.71, 286.67, 289.05, 289.63, 295.30, 295.81, 295.22, 298.25, 299.86, 300.37, 302.80, 302.50, 302.00, 302.10, 300.99, 296.15, 295.26, 296.88, 298.08, 296.08, 296.16, 296.76, 293.96, 292.93, 293.23, 291.55, 291.03, 288.84, 289.19, 288.67, 287.00, 285.62, 285.96, 284.59, 282.41, 283.78, 283.50, 282.45, 280.52, 278.91, 278.66, 278.13, 278.69, 278.69, 278.98, 279.79, 279.79, 278.12, 279.24, 278.96, 277.07, 273.84, 274.67, 272.23, 274.95, 273.30, 274.40, 271.72, 270.90, 276.59, 276.29, 277.11, 278.75, 278.20, 276.31, 275.50, 277.42, 278.21, 282.01, 282.82, 283.11, 280.40, 278.76, 283.12, 283.85, 286.04, 287.37, 291.24, 291.47, 291.76, 293.61, 293.54, 296.04, 297.58, 298.39, 299.88, 299.08, 296.35, 295.46, 298.28, 297.69, 296.67, 295.27, 294.98, 294.98, 295.36, 292.35, 291.18, 291.48, 291.19, 293.10, 297.52, 297.44, 298.55, 298.85, 299.96, 301.59, 301.19, 305.34, 305.74, 308.27, 310.08, 312.63, 313.76, 313.76, 313.45, 315.38, 315.88, 316.69, 317.18, 320.74, 323.98, 324.31, 323.98, 327.88, 328.69, 327.71, 331.09, 338.09, 337.42, 343.89, 344.70, 349.10, 349.56, 349.56, 351.18, 353.86, 355.68, 357.66, 358.56, 360.54, 361.99, 361.63, 361.63, 361.72, 360.11, 360.92, 361.01, 361.01, 360.57, 360.93, 361.21, 361.30, 360.67, 363.46, 365.36, 364.27, 364.27, 364.92, 369.49, 371.48, 371.86, 371.12, 375.59, 379.63, 382.05, 384.82, 384.86, 386.48, 392.55, 394.15, 394.98, 396.20, 401.43, 401.04, 403.86, 410.76, 411.55, 411.53, 414.39, 416.45, 415.20, 417.26, 417.66, 420.87, 424.53, 426.11, 426.11, 429.82, 432.14, 435.00, 435.81, 436.68, 436.25, 436.25, 438.31, 441.03, 449.28, 447.04, 450.46, 450.01, 450.01, 448.66, 448.66, 451.36, 450.92, 449.12, 450.47, 451.64, 453.96, 457.40, 456.95, 458.11, 459.49, 457.20, 458.36, 461.35, 465.74, 466.67, 465.27, 469.44, 470.72, 472.07, 475.11, 482.39, 485.30, 484.82, 489.03, 488.06, 489.36, 490.98, 493.23, 494.04, 496.46, 504.74, 505.24, 510.11, 518.21, 519.37, 523.65, 527.17, 529.32, 527.73, 532.00, 532.00, 531.75, 530.69, 531.77, 533.38, 539.03, 537.42, 539.03, 539.84, 540.38, 540.92, 543.61, 547.12, 549.00, 551.72, 552.74, 556.83, 558.14, 562.25, 561.69, 561.94, 565.98, 570.59, 568.88, 573.49, 576.83, 584.57, 584.57, 584.79, 588.17, 590.60, 594.65, 592.87, 592.28, 593.08, 595.08, 598.31, 602.54];
        
        $scope.contlistaEqps=parseInt($scope.randomiza(0,15));
        $scope.listaEqps=["LT 230 kV Povo Novo / Quinta", "TF1 525/15/13,8 kV SE Marmeleiro 2", "CS1 SE Marmeleiro 2 15 kV", "CS2 SE Marmeleiro 2 15 kV", "LT 230 kV Alegrete 2 / Livramento 2", "LT 230 kV Camaquã 3 / Guaíba 2", "LT 230 kV Camaquã 3 / Nova Santa Rita", "LT 230 kV Camaquã 3 / Pelotas 3", "LT 230 kV Camaquã 3 / Povo Novo", "LT 230 kV Pelotas 3 / Quinta", "LT 230 kV Presidente Médici / Quinta", "LT 230 kV Presidente Médici / Santa Cruz 1", "LT 230 kV Bagé 2 / Livramento 2", "LT 230 kV Bagé 2 / Presidente Médici", "LT 230 kV Pelotas 3 / Presidente Médici", "UG5 UTE Candiota III"];
       
        $scope.conteqpIndisponivel=parseInt($scope.randomiza(0,299));
        $scope.eqpIndisponivel = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1];

        $scope.min = ['00:01', '00:02', '00:03', '00:04', '00:05', '00:06', '00:07', '00:08', '00:09', '00:10', '00:11', '00:12', '00:13', '00:14', '00:15', '00:16', '00:17', '00:18', '00:19', '00:20', '00:21', '00:22', '00:23', '00:24', '00:25', '00:26', '00:27', '00:28', '00:29', '00:30', '00:31', '00:32', '00:33', '00:34', '00:35', '00:36', '00:37', '00:38', '00:39', '00:40', '00:41', '00:42', '00:43', '00:44', '00:45', '00:46', '00:47', '00:48', '00:49', '00:50', '00:51', '00:52', '00:53', '00:54', '00:55', '00:56', '00:57', '00:58', '00:59', '01:00', '01:01', '01:02', '01:03', '01:04', '01:05', '01:06', '01:07', '01:08', '01:09', '01:10', '01:11', '01:12', '01:13', '01:14', '01:15', '01:16', '01:17', '01:18', '01:19', '01:20', '01:21', '01:22', '01:23', '01:24', '01:25', '01:26', '01:27', '01:28', '01:29', '01:30', '01:31', '01:32', '01:33', '01:34', '01:35', '01:36', '01:37', '01:38', '01:39', '01:40', '01:41', '01:42', '01:43', '01:44', '01:45', '01:46', '01:47', '01:48', '01:49', '01:50', '01:51', '01:52', '01:53', '01:54', '01:55', '01:56', '01:57', '01:58', '01:59', '02:00', '02:01', '02:02', '02:03', '02:04', '02:05', '02:06', '02:07', '02:08', '02:09', '02:10', '02:11', '02:12', '02:13', '02:14', '02:15', '02:16', '02:17', '02:18', '02:19', '02:20', '02:21', '02:22', '02:23', '02:24', '02:25', '02:26', '02:27', '02:28', '02:29', '02:30', '02:31', '02:32', '02:33', '02:34', '02:35', '02:36', '02:37', '02:38', '02:39', '02:40', '02:41', '02:42', '02:43', '02:44', '02:45', '02:46', '02:47', '02:48', '02:49', '02:50', '02:51', '02:52', '02:53', '02:54', '02:55', '02:56', '02:57', '02:58', '02:59', '03:00', '03:01', '03:02', '03:03', '03:04', '03:05', '03:06', '03:07', '03:08', '03:09', '03:10', '03:11', '03:12', '03:13', '03:14', '03:15', '03:16', '03:17', '03:18', '03:19', '03:20', '03:21', '03:22', '03:23', '03:24', '03:25', '03:26', '03:27', '03:28', '03:29', '03:30', '03:31', '03:32', '03:33', '03:34', '03:35', '03:36', '03:37', '03:38', '03:39', '03:40', '03:41', '03:42', '03:43', '03:44', '03:45', '03:46', '03:47', '03:48', '03:49', '03:50', '03:51', '03:52', '03:53', '03:54', '03:55', '03:56', '03:57', '03:58', '03:59', '04:00', '04:01', '04:02', '04:03', '04:04', '04:05', '04:06', '04:07', '04:08', '04:09', '04:10', '04:11', '04:12', '04:13', '04:14', '04:15', '04:16', '04:17', '04:18', '04:19', '04:20', '04:21', '04:22', '04:23', '04:24', '04:25', '04:26', '04:27', '04:28', '04:29', '04:30', '04:31', '04:32', '04:33', '04:34', '04:35', '04:36', '04:37', '04:38', '04:39', '04:40', '04:41', '04:42', '04:43', '04:44', '04:45', '04:46', '04:47', '04:48', '04:49', '04:50', '04:51', '04:52', '04:53', '04:54', '04:55', '04:56', '04:57', '04:58', '04:59', '05:00'];

        $scope.fImpactadoLinha = ($scope.impactoNaLinha.CSVPA*$scope.gReal.CSVPA)+($scope.impactoNaLinha.CMRO2*$scope.gReal.CMRO2)+($scope.impactoNaLinha.CQ138*$scope.gReal.CQ138)+($scope.impactoNaLinha.CQ69*$scope.gReal.CQ69)+($scope.impactoNaLinha.CLIV2*$scope.gReal.CLIV2);

        $scope.cInstalada = {
            CSVPA: 583,
            CMRO2: 207,
            CQ138: 108,
            CQ69: 64,
            CLIV2: 217
        };

        $scope.gForc = {
            CSVPA: [],
            CMRO2: [],
            CQ138: [],
            CQ69: [],
            CLIV2: []
        };
        $scope.sliderCSVPA=0;
        $scope.sliderCMRO2=0;
        $scope.sliderCQ138=0;
        $scope.sliderCQ69=0;
        $scope.sliderCLIV2=0;
        mudarLabelEolicasPisca();
    }
    $scope.randomiza=function(max,min)
    {
        var random = (Math.random() * (+max - +min) + +min).toFixed(2);; 
        return String(random);
    }
    var mudarLabelEolicasPisca=function() {
        //console.log($scope.contMin,$scope.contgReal.CSVPA,$scope.contgReal.CMRO2,$scope.contgReal.CQ138,$scope.contgReal.CQ69,$scope.contgReal.CLIV2,$scope.contgReal.Melo,$scope.contfRealLinha);
        //minuto
        $scope.minutocorrente = dia.getDate() + "/" + (dia.getMonth()+1) + "/" + dia.getFullYear() + "  " + $scope.min[$scope.contMin];
        //CSVPA
        $scope.nodes.update([{id:388,label: $scope.gReal.CSVPA[$scope.contgReal.CSVPA].toString(), group: 'pisca'}]);
        //CMRO2
        $scope.nodes.update([{id:444,label: $scope.gReal.CMRO2[$scope.contgReal.CMRO2].toString(), group: 'pisca'}]);
        //CQ138
        $scope.nodes.update([{id:422,label: $scope.gReal.CQ138[$scope.contgReal.CQ138].toString(), group: 'pisca'}]);
        //CQ69
        $scope.nodes.update([{id:411,label: $scope.gReal.CQ69[$scope.contgReal.CQ69].toString(), group: 'pisca'}]);
        //CLIV2
        $scope.nodes.update([{id:400,label: $scope.gReal.CLIV2[$scope.contgReal.CLIV2].toString(), group: 'pisca'}]);
        //MLO
        $scope.nodes.update([{id:322,label: $scope.gReal.Melo[$scope.contgReal.Melo].toString(), group: 'pisca'}]);
        //linha
        $scope.edges.update([{id:61,label: $scope.fRealLinha[$scope.contfRealLinha].toString(),"color":{"color":"red"},"font":{"face":"arial","size":7,"strokeWidth":0,"color":"rgb(178, 166, 247)","background":"black"}}]);
        //epqindiponivel
        if(($scope.eqpIndisponivel[$scope.conteqpIndisponivel]==1) && ($scope.entraumavez==0)) {
            $scope.entraumavez=1;
            $scope.estado_eqp = "Indisponivel";
            $scope.minuto_eqp = $scope.min[$scope.contMin];
            $scope.descricao_eqp = $scope.listaEqps[$scope.contlistaEqps];
        } else if ($scope.eqpIndisponivel[$scope.conteqpIndisponivel]==0) {
            $scope.entraumavez=0;
            $scope.estado_eqp = "";
            $scope.minuto_eqp = "";
            $scope.descricao_eqp = "";
        }
        
        $scope.limiteNaLinha=$scope.verificaLimiteLinha($scope.gReal.Melo[$scope.contgReal.Melo],$scope.eqpIndisponivel[$scope.conteqpIndisponivel]);
        /*
        if ($scope.limiteNaLinha<$scope.fRealLinha[contfRealLinha]) {
            set();
            getData();
        }
        */
        if($scope.cortemanual==0){
            $scope.atualizaGrafico();
        }
        else {
            $scope.atualizaGraficoPosCorte();
        }
        
        if($scope.contMin==299) {
            $scope.contMin=0;
        }
        else {
            $scope.contMin=$scope.contMin+1;
        }
        if($scope.contgReal.CSVPA==299) {
            $scope.contgReal.CSVPA=0;
        }
        else {
            $scope.contgReal.CSVPA=$scope.contgReal.CSVPA+1;
        }
        if($scope.contgReal.CMRO2==299) {
            $scope.contgReal.CMRO2=0;
        }
        else {
            $scope.contgReal.CMRO2=$scope.contgReal.CMRO2+1;
        }
        if($scope.contgReal.CQ138==299) {
            $scope.contgReal.CQ138=0;
        }
        else {
            $scope.contgReal.CQ138=$scope.contgReal.CQ138+1;
        }
        if($scope.contgReal.CQ69==299) {
            $scope.contgReal.CQ69=0;
        }
        else {
            $scope.contgReal.CQ69=$scope.contgReal.CQ69+1;
        }
        if($scope.contgReal.CLIV2==299) {
            $scope.contgReal.CLIV2=0;
        }
        else {
            $scope.contgReal.CLIV2=$scope.contgReal.CLIV2+1;
        }
        if($scope.contgReal.Melo==299) {
            $scope.contgReal.Melo=0;
        }
        else {
            $scope.contgReal.Melo=$scope.contgReal.Melo+1;
        }
        if($scope.contfRealLinha==299) {
            $scope.contfRealLinha=0;
        }
        else {
            $scope.contfRealLinha=$scope.contfRealLinha+1;
        }
        if($scope.conteqpIndisponivel==299) {
            $scope.conteqpIndisponivel=0;
        }
        else {
            $scope.conteqpIndisponivel=$scope.conteqpIndisponivel+1;
        }

        if($scope.cortemanual==0){
            $timeout(mudarLabelEolicas, 4500);
        }
        else {
            $timeout(mudarLabelEolicasPosCorte, 4500);
        }
    }
    var mudarLabelEolicas=function () {
        //CSVPA
        $scope.nodes.update([{id:388, group: 'geracao'}]);
        //CMRO2
        $scope.nodes.update([{id:444, group: 'geracao'}]);
        //CQ138
        $scope.nodes.update([{id:422, group: 'geracao'}]);
        //CQ69
        $scope.nodes.update([{id:411, group: 'geracao'}]);
        //CLIV2
        $scope.nodes.update([{id:400, group: 'geracao'}]);
        //MLO
        $scope.nodes.update([{id:322, group: 'geracao'}]);
        //linha
        $scope.edges.update([{id:61,"color":{"color":"red"},"font":{"face":"arial","size":6,"strokeWidth":0,"color":"rgb(122,112,186)","background":"black"}}]);
        if($scope.cortemanual==0){
            $timeout(mudarLabelEolicasPisca, 1500);
        }
        else {
            $timeout(mudarLabelEolicasPiscaPosCorte, 1500);
        }
    }
    $scope.verificaLimiteLinha=function(geracaoMelo,eqpIndis) {
        if((geracaoMelo==0)&&(eqpIndis==0)) {
            //op normal
            return 560;
        }
        if((geracaoMelo==0)&&(eqpIndis==1)) {
            //indisponibilidade de eqp
            return 330;  
        }
        if((geracaoMelo<350)&&(eqpIndis==0)) {
            //op normal+importação<350
            return 510;
        }
        if((geracaoMelo>=350)&&(eqpIndis==0)) {
            //op normal+importação>350
            return 540;
        }
        if((geracaoMelo>0)&&(eqpIndis==1)) {
            //indisponibilidade de eqp+importação
            return 300;
        }
    }
    $scope.atualizaGrafico=function() {
        myChartGeracao.data.labels.push($scope.min[$scope.contMin]);
        myChartFluxo.data.labels.push($scope.min[$scope.contMin]);
        myChartGeracao.data.datasets[0].data.push($scope.gReal.CSVPA[$scope.contgReal.CSVPA]);
        myChartGeracao.data.datasets[1].data.push($scope.gReal.CMRO2[$scope.contgReal.CMRO2]);
        myChartGeracao.data.datasets[2].data.push($scope.gReal.CQ138[$scope.contgReal.CQ138]);
        myChartGeracao.data.datasets[3].data.push($scope.gReal.CQ69[$scope.contgReal.CQ69]);
        myChartGeracao.data.datasets[4].data.push($scope.gReal.CLIV2[$scope.contgReal.CLIV2]);
        myChartGeracao.data.datasets[5].data.push($scope.gReal.Melo[$scope.contgReal.Melo]);
        myChartFluxo.data.datasets[0].data.push($scope.fRealLinha[$scope.contfRealLinha]);
        myChartFluxo.data.datasets[1].data.push($scope.limiteNaLinha);
        myChartGeracao.update();
        myChartFluxo.update();
    }
    $scope.atualizaGraficoPosCorte=function() {
        myChartGeracao.data.labels.push($scope.min[$scope.contMin]);
        myChartFluxo.data.labels.push($scope.min[$scope.contMin]);
        myChartGeracao.data.datasets[0].data.push($scope.sliderCSVPA);
        myChartGeracao.data.datasets[1].data.push($scope.sliderCMRO2);
        myChartGeracao.data.datasets[2].data.push($scope.sliderCQ138);
        myChartGeracao.data.datasets[3].data.push($scope.sliderCQ69);
        myChartGeracao.data.datasets[4].data.push($scope.sliderCLIV2);
        myChartGeracao.data.datasets[5].data.push($scope.gReal.Melo[$scope.contgReal.Melo]);
        myChartFluxo.data.datasets[0].data.push($scope.fRealLinhaPosCorte);
        myChartFluxo.data.datasets[1].data.push($scope.limiteNaLinha);
        myChartGeracao.update();
        myChartFluxo.update();
    }
    $scope.corteManual=function() {
        $scope.cortemanual=1;
        // primeira entrada geracao real
        $scope.gReal.CSVPA[$scope.contgReal.CSVPA];
        $scope.gReal.CMRO2[$scope.contgReal.CMRO2];
        $scope.gReal.CQ138[$scope.contgReal.CQ138];
        $scope.gReal.CQ69[$scope.contgReal.CQ69];
        $scope.gReal.CLIV2[$scope.contgReal.CLIV2];
        // geracao desejada pelos sliders
        $scope.sliderCSVPA;
        $scope.sliderCMRO2;
        $scope.sliderCQ138;
        $scope.sliderCQ69;
        $scope.sliderCLIV2;
        // fluxo na linha
        $scope.fRealLinha[$scope.contfRealLinha];
        //calculo
        $scope.fImpactadoLinhaAtual = ($scope.impactoNaLinha.CSVPA*$scope.gReal.CSVPA[$scope.contgReal.CSVPA])+($scope.impactoNaLinha.CMRO2*$scope.gReal.CMRO2[$scope.contgReal.CMRO2])+($scope.impactoNaLinha.CQ138*$scope.gReal.CQ138[$scope.contgReal.CQ138])+($scope.impactoNaLinha.CQ69*$scope.gReal.CQ69[$scope.contgReal.CQ69])+($scope.impactoNaLinha.CLIV2*$scope.gReal.CLIV2[$scope.contgReal.CLIV2]);
        $scope.fImpactadoLinhaSlider = ($scope.impactoNaLinha.CSVPA*$scope.sliderCSVPA)+($scope.impactoNaLinha.CMRO2*$scope.sliderCMRO2)+($scope.impactoNaLinha.CQ138*$scope.sliderCQ138)+($scope.impactoNaLinha.CQ69*$scope.sliderCQ69)+($scope.impactoNaLinha.CLIV2*$scope.sliderCLIV2);
        //alert($scope.fImpactadoLinhaAtual);
        //alert($scope.fImpactadoLinhaSlider);
        //fluxo novo
        $scope.fRealLinhaPosCorte=($scope.fImpactadoLinhaSlider).toFixed(2);
        mudarLabelEolicasPiscaPosCorte();
        
    }
    var mudarLabelEolicasPiscaPosCorte=function() {
        //minuto
        $scope.minutocorrente = dia.getDate() + "/" + (dia.getMonth()+1) + "/" + dia.getFullYear() + "  " + $scope.min[$scope.contMin];
        //CSVPA
        $scope.nodes.update([{id:388,label: $scope.sliderCSVPA.toString(), group: 'pisca'}]);
        //CMRO2
        $scope.nodes.update([{id:444,label: $scope.sliderCMRO2.toString(), group: 'pisca'}]);
        //CQ138
        $scope.nodes.update([{id:422,label: $scope.sliderCQ138.toString(), group: 'pisca'}]);
        //CQ69
        $scope.nodes.update([{id:411,label: $scope.sliderCQ69.toString(), group: 'pisca'}]);
        //CLIV2
        $scope.nodes.update([{id:400,label: $scope.sliderCLIV2.toString(), group: 'pisca'}]);
        //MLO
        $scope.nodes.update([{id:322,label: $scope.gReal.Melo[$scope.contgReal.Melo].toString(), group: 'pisca'}]);
        //linha
        $scope.edges.update([{id:61,label: $scope.fRealLinhaPosCorte.toString(),"color":{"color":"red"},"font":{"face":"arial","size":7,"strokeWidth":0,"color":"rgb(178, 166, 247)","background":"black"}}]);
        //epqindiponivel
        if(($scope.eqpIndisponivel[$scope.conteqpIndisponivel]==1) && ($scope.entraumavez==0)) {
            $scope.entraumavez=1;
            $scope.estado_eqp = "Indisponivel";
            $scope.minuto_eqp = $scope.min[$scope.contMin];
            $scope.descricao_eqp = $scope.listaEqps[$scope.contlistaEqps];
        } else if ($scope.eqpIndisponivel[$scope.conteqpIndisponivel]==0) {
            $scope.entraumavez=0;
            $scope.estado_eqp = "";
            $scope.minuto_eqp = "";
            $scope.descricao_eqp = "";
        }
        $scope.limiteNaLinha=$scope.verificaLimiteLinha($scope.gReal.Melo[$scope.contgReal.Melo],$scope.eqpIndisponivel[$scope.conteqpIndisponivel]);
        $scope.atualizaGraficoPosCorte();
        if($scope.contMin==299) {
            $scope.contMin=0;
        }
        else {
            $scope.contMin=$scope.contMin+1;
        }
        if($scope.contgReal.Melo==299) {
            $scope.contgReal.Melo=0;
        }
        else {
            $scope.contgReal.Melo=$scope.contgReal.Melo+1;
        }
        if($scope.conteqpIndisponivel==299) {
            $scope.conteqpIndisponivel=0;
        }
        else {
            $scope.conteqpIndisponivel=$scope.conteqpIndisponivel+1;
        }
    
        $timeout(mudarLabelEolicasPosCorte, 4500);
    }
    var mudarLabelEolicasPosCorte=function () {
        //CSVPA
        $scope.nodes.update([{id:388, group: 'geracao'}]);
        //CMRO2
        $scope.nodes.update([{id:444, group: 'geracao'}]);
        //CQ138
        $scope.nodes.update([{id:422, group: 'geracao'}]);
        //CQ69
        $scope.nodes.update([{id:411, group: 'geracao'}]);
        //CLIV2
        $scope.nodes.update([{id:400, group: 'geracao'}]);
        //MLO
        $scope.nodes.update([{id:322, group: 'geracao'}]);
        //linha
        $scope.edges.update([{id:61,"color":{"color":"red"},"font":{"face":"arial","size":6,"strokeWidth":0,"color":"rgb(122,112,186)","background":"black"}}]);
        $timeout(mudarLabelEolicasPiscaPosCorte, 1500);
    }


    $scope.valorsliderCSVPA=function() {$scope.sliderCSVPA = $('#sliderCSVPA').slider("value");}
    $scope.valorsliderCMRO2=function() {$scope.sliderCMRO2 = $('#sliderCMRO2').slider("value");}
    $scope.valorsliderCQ138=function() {$scope.sliderCQ138 = $('#sliderCQ138').slider("value");}
    $scope.valorsliderCQ69=function() {$scope.sliderCQ69 = $('#sliderCQ69').slider("value");}
    $scope.valorsliderCLIV2=function() {$scope.sliderCLIV2 = $('#sliderCLIV2').slider("value");}

    $( function() {
        $( "#sliderCSVPA" ).slider(
            {
                orientation: "vertical",
                range: "min",
                min: 0,
                max: $scope.cInstalada.CSVPA,
                value: 0
        }).slider("pips");
    });
    
    $( function() {
        $( "#sliderCMRO2" ).slider(
            {
                orientation: "vertical",
                range: "min",
                min: 0,
                max: $scope.cInstalada.CMRO2,
                value: 0
        }).slider("pips");
    });
    
    $( function() {
        $( "#sliderCQ138" ).slider(
            {
                orientation: "vertical",
                range: "min",
                min: 0,
                max: $scope.cInstalada.CQ138,
                value: 0
        }).slider("pips");
    });
    
    $( function() {
        $( "#sliderCQ69" ).slider(
            {
                orientation: "vertical",
                range: "min",
                min: 0,
                max: $scope.cInstalada.CQ69,
                value: 0
        }).slider("pips");
    });
    
    $( function() {
        $( "#sliderCLIV2" ).slider(
            {
                orientation: "vertical",
                range: "min",
                min: 0,
                max: $scope.cInstalada.CLIV2,
                value: 0
        }).slider("pips");
    });
});