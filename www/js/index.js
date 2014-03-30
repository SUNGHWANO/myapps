/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
$(document).ready(function(){


	var p = ["허태량" , "한태희" , "김승범" , "송재우" , "김성호" , "유형덕" , "박용범" , "노성화" , "황지선" , "이혜주" , 
           "강성진" , "좌행복" , "한창수" , "이승진" , "오송이" , "이강진" , "차규원" , "정두리" , "이현주" , "전영범" ,
           "서동일" , "최일환" , "김세미" , "유승범" , "구상현" , "이유라" , "박헌웅" , "김종현" , "석지오" , "노의현"];
	var color = ["red" , "orange" , "yellow" , "green" , "blue" , "violet" , "white" , "brown" , "skyblue" , "gray" , "lightgreen" , "silver" , "pink" , "gold" , "wine"];
	var color2 = ["red", "black"];
	var interval;
	var who;
	var input;


	css();



	$("#btn").click(function(){
		start();
	});






	function start(){
		document.getElementById("h1").innerHTML = "과연~~누가??";
	
		$("#btn").css({
			"display" : "none",
			"background-colir" : "white"
		});
		
		input = 3;

		interval = setInterval(function(){
			
			$("#content1").css({
				"font-size" : "100px"
			});
			document.getElementById("content1").innerHTML = input--;
		}, 1000);

		setTimeout(function(){
			clearInterval(interval);
			$("#btn").css({
				"display" : "none"
			});

			
			

			bounse();
		
		}, (input + 1) * 1000);
	}


	function css(){
		setInterval(function(){

			$("#h1").css({
				"color" : color[parseInt(Math.random() * 30)]
			});

			
			$("#content1").css({
				"color" : "red"
			});
			
			$("#st").css({
				"color" : color[parseInt(Math.random() * 30)]
			});

		}, 50);
	}

	
	function bounse(){
		var i = 0;
		var j = 0;
		var k = 0;
		var input = 30;
		var size = 80;
		setInterval(function(){
			who = p[parseInt(Math.random() * 30)];
			
			if(k==0){
			document.getElementById("h1").innerHTML = who;
			document.getElementById("content1").innerHTML = input--;
			$("#content1").css({
				"font-size" :  size -= 1
			});
			}
			
			if(i==0){
				$("#h1").css({
					"font-size" : j += 5
				});
				if(j == 150){
				i += 1;
				}
				}

			if(k==0 && j==150){
				
				document.getElementById("h1").innerHTML = who + "님 축하합니다~";
				document.getElementById("content1").innerHTML = "";
				$("#btn").css({
					"display" : ""
				});
				k++;
			}
			
			
			
		}, 600);
		
		
	}
	




});
