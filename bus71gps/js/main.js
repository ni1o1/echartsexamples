//创建两个图表
var dom = document.getElementById("container");
var dom2 = document.getElementById("container2");
var myChart = echarts.init(dom);
var myChart2 = echarts.init(dom2);
var app = {};
//planePath是公交车图标
var planePath = 'path://M1024 476.279467c0 0 0 33.4848 0 41.591467 0 72.362667 0 136.6528 0 136.6528 0 15.479467-12.100267 28.040533-27.016533 28.040533l-41.284267 0c0-56.610133-45.8752-102.5024-102.4512-102.5024s-102.4512 45.8752-102.4512 102.5024L290.304 682.564267c-0.017067-56.610133-45.8752-102.5024-102.468267-102.5024-56.558933 0-102.434133 45.8752-102.4512 102.5024L27.0336 682.564267c-14.916267 0-27.016533-12.544-27.016533-28.040533L0.017067 318.173867C0.017067 290.423467 17.988267 273.066667 44.100267 273.066667c0 0 811.3152 0 844.032 0s98.4576 43.281067 124.125867 101.870933C1025.655467 406.289067 1024 476.279467 1024 476.279467zM170.786133 324.317867 78.574933 324.317867c-15.086933 0-27.323733 12.219733-27.323733 27.306667l0 81.834667c0 15.086933 12.2368 27.2896 27.323733 27.2896l92.2112 0L170.786133 324.317867zM324.471467 324.317867l-119.534933 0 0 136.413867 119.534933 0L324.471467 324.317867zM477.610667 324.317867l-119.005867 0 0 136.413867 119.005867 0L477.610667 324.317867zM631.210667 324.317867l-119.005867 0 0 136.413867 119.005867 0L631.210667 324.317867zM784.896 324.317867l-119.534933 0 0 136.413867 119.534933 0L784.896 324.317867zM784.8448 524.919467c0-7.0144-7.645867-12.6976-17.083733-12.6976s-17.066667 5.6832-17.066667 12.6976l0 25.361067c0 7.0144 7.6288 12.6976 17.066667 12.6976s17.083733-5.6832 17.083733-12.6976L784.8448 524.919467zM966.024533 404.155733c-11.008-46.728533-71.3728-79.837867-88.1152-79.837867-41.0112 0-58.845867 0-58.845867 0l0 136.413867L971.741867 460.8C971.741867 460.8 974.848 441.719467 966.024533 404.155733zM187.835733 614.2464c37.717333 0 68.3008 30.600533 68.3008 68.352 0 37.7344-30.583467 68.334933-68.3008 68.334933-37.7344 0-68.3008-30.600533-68.3008-68.334933C119.534933 644.846933 150.101333 614.2464 187.835733 614.2464zM853.265067 614.2464c37.717333 0 68.3008 30.600533 68.3008 68.352 0 37.7344-30.583467 68.334933-68.3008 68.334933-37.7344 0-68.317867-30.600533-68.317867-68.334933C784.9472 644.846933 815.530667 614.2464 853.265067 614.2464z'; //公交车
//myChart是百度地图的部分
myChart.setOption(option = {
		title: {
        text: "公交GPS可视化",
        left: 10,
        top: 10,
        textStyle: {
            color: 'rgba(18,89,147,1)',
            fontSize: 40
        }
    },
		animation: false,
		//bmap组件是百度地图的参数
		bmap: {
			center: [121.401206, 31.203083],
			zoom: 14,
			roam: true,
			//地图个性化设置
			mapStyle: {
				'styleJson': [{
						"featureType": "all",
						"elementType": "all",
						"stylers": {
							"lightness": 10,
							"saturation": -100
						}
					}, {
						"featureType": "subway",
						"elementType": "labels.icon",
						"stylers": {
							"color": "#022338",
							"visibility": "off"
						}
					}, {
						"featureType": "poi",
						"elementType": "labels",
						"stylers": {
							"color": "#022338",
							"visibility": "off"
						}
					}, {
						"featureType": "highway",
						"elementType": "labels.icon",
						"stylers": {
							"color": "#022338",
							"visibility": "off"
						}
					},
					{
						"featureType": "all",
						"elementType": "labels",
						"stylers": {
							"visibility": "off"
						}
					}
				]
			}
		},
		series: [
		]
	});
//myChart2是公交运行图的部分
myChart2.setOption(option = {

		animation: false,
		grid: [{}
		],
		dataZoom: [{
				type: 'slider',
				yAxisIndex: 0,
				start: 0,
				end: 20,
				filterMode: 'empty',
				textStyle: {
					color: '#000'
				},
				borderColor: '#000',
				handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
				handleSize: '80%',
				handleStyle: {
					color: '#000',
					shadowBlur: 3,
					shadowColor: 'rgba(0, 0, 0, 0.6)',
					shadowOffsetX: 2,
					shadowOffsetY: 2
				}
			}, {
				type: 'inside',
				yAxisIndex: 0,
				start: 0,
				end: 30,
				filterMode: 'empty'
			}
		],

		tooltip: {
			trigger: 'axis',
			formatter:function (params, ticket, callback) {
				return '时间'+params[0].axisValueLabel
return ''
}

		},
		axisPointer: {
			type:'shadow',
			triggerTooltip:false
		},
		//设置坐标轴
		xAxis: [{
				gridIndex: 0,

				name: '时间',
				axisLine: {
					lineStyle: {
						color: '#000'
					}
				},
				axisLabel: {
					margin: 2,
					textStyle: {
						color: '#000'
					}
				}
			}
		],
		yAxis: [{
				gridIndex: 0,
				name: '时间',
				type: 'time',
				axisLine: {
					lineStyle: {
						color: '#000'
					}
				},
				axisLabel: {
					margin: 2,
					textStyle: {
						color: '#000'
					}
				}
			}
		],
//设置运行图，这时候还没传入数据
		series: [{
				zlevel: 2,
				type: 'line',

				showSymbol: false,
				lineStyle: {
					normal: {

						opacity: 0.8,
						width: 3
					}
				},
				xAxisIndex: 0,
				yAxisIndex: 0,
				data: []
			}
		]
	});
if (!app.inNode) {
	// 添加百度地图插件
	var bmap = myChart.getModel().getComponent('bmap').getBMap();
	bmap.addControl(new BMap.MapTypeControl());
}
//读取数据
$.getJSON('data/data.json', function (gpsdata) {
	var series1 = []
	//整理数据，让数据能够在运行图上可视化
	for (var k = 0; k < gpsdata[0].length; k += 1) {
		var linedata = []
		for (var i = 0; i < gpsdata[0][k].length; i += 1) {
			linedata.push([gpsdata[0][k][i][3], gpsdata[0][k][i][2]])
		}
		console.log()
		//运行图的设置
		series1.push({
			name: gpsdata[1][k],
			zlevel: 2,
			type: 'line',

			showSymbol: false,
			symbolSize: 10,
			lineStyle: {
				normal: {

					opacity: 0.8,
					width: 3
				}
			},
			xAxisIndex: 0,
			yAxisIndex: 0,
			data: linedata
		})
	}

	myChart.hideLoading();
	//更新运行图
	myChart2.setOption({

		series: series1
	});
	//每次鼠标位置更新的时候，执行以下操作
	myChart2.on('showtip', function (params) {
		var series2 = []
		for (var k = 0; k < gpsdata[0].length; k += 1) {
			try{
				//获得时间
		var stdtime = params.dataByCoordSys[0].dataByAxis[0].value
		//获得公交车位置
			var dataindex = gpsdata[0][k].findIndex(function (value, index, arr) {

				var timestamp = Date.parse(value[2]);

				return timestamp > stdtime;
			})
					//添加散点，散点的图标是公交车
				series2.push({type: 'scatter',
						coordinateSystem: 'bmap',
						symbol:planePath,
						symbolSize: 15,
		data: [{
								name: gpsdata[1][k],
								//value是公交车经纬度
								value: [gpsdata[0][k][dataindex][0], gpsdata[0][k][dataindex][1]]
							}
				]})
			}
			catch(err){
				series2.push({})
			}
		}
		//更新图表
		myChart.setOption({
		
			series:series2})})


});
