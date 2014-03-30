	
$(document).ready(function(){

	var CheckMember = [];
	var NoCheckMember = [];
	var Couple = [];
	var SaveCount;
	var WhoCheck;
	var WhoNoCheck;
	var Count = 0;
	var AddTextCount = 0;
	var RandomCountMinus = 0;
	var BounceReturn = 0;
	var BounceCount = 0;
	var BounceReturn2 = 0;
	var BounceCount2 = 0;
	
	Bounce();
	
	$("#get").click(function(){
		 Check(); 
	});
	
	$("#shuffle").click(function(){
	   Random(); 
	});
	
	$("#Cancel").click(function(){
		Clear();
	  Reset();
	});
	
	function Check(){
		
		SaveCount = 0;
	    
    $("input[name=box]").attr("class" , 1);
    
    $("input[name=box]:checked").attr("class", 2).each(function(){
      CheckMember[SaveCount++] = $(this).val();
    });
    
    if(CheckMember.length == 15){
			document.getElementById("Who").innerHTML = "";
			Checked();
    	NoCheck();
    }else if(CheckMember.length > 15){
    	alert(CheckMember.length + "명 체크하셨습니다." + (CheckMember.length - 15) + "명 체크 해제해주세요");
    	CheckMember.splice(0, CheckMember.length);
    }else{
      alert(CheckMember.length + "명 체크하셨습니다." + (15 - CheckMember.length) + "명 더 체크해주세요.");
      CheckMember.splice(0, CheckMember.length);
    }
	}
	
	function Checked(){
	    
    CheckMember.forEach(function(value){
       $("#CheckName").append($('<span></span>').html(CheckMember[AddTextCount++] + "<br>"));
    });
    AddTextCount = 0;
  }
	
  function NoCheck() {

    SaveCount = 0;
    
    $(".1").each(function(){
      NoCheckMember[SaveCount++] = $(this).val();
    }); 
    NoChecked();
    
    $("input[name=box]").attr("checked" , false);
    $("#get").css("display","none");
    $("#shuffle").css("display","");
    $("#Cancel").css("display","");
  }
  
  function NoChecked(){
      
    NoCheckMember.forEach(function(value){
       $("#NoCheckName").append($('<span></span>').html(NoCheckMember[AddTextCount++] + "<br>"));
    });
    AddTextCount = 0;
    document.getElementById("TeamList").innerHTML = "";  
  }
  
  function Random(){
	    
    Clear();
    
    if(Count < 15){
    
      WhoCheck = parseInt(Math.random() * (15 - RandomCountMinus));
      WhoNoCheck = parseInt(Math.random() * (15 - RandomCountMinus));
      
      $("#Who").append($('<span></span>').html((RandomCountMinus + 1) + "팀<br>").css("color" , "black"))
      		   .append($('<span></span>').html(CheckMember[WhoCheck]).css("color" , "blue"))
               .append($('<span></span>').html("  ♥  " + NoCheckMember[WhoNoCheck]).css("color" , "red"));
      
      Couple[RandomCountMinus++] = CheckMember[WhoCheck] + "  ♥  " + NoCheckMember[WhoNoCheck];
      
      CheckMember.splice(WhoCheck , 1);
      NoCheckMember.splice(WhoNoCheck , 1);
      
      document.getElementById("CheckName").innerHTML = "";
      document.getElementById("NoCheckName").innerHTML = "";
      
      Checked();
      NoChecked();
      CoupleList();
      
      Count++;
      
      if(Count == 15){
        alert("끝");
        document.getElementById("Who").innerHTML = "축하합니다~^^";
        
        Reset();
      }
    }
  }
		  
  function CoupleList(){
    
     Couple.forEach(function(value){
        $("#TeamList").append($('<span></span>').html((AddTextCount + 1) + "팀 : " + Couple[AddTextCount++] + "<br>"));
     });
     AddTextCount = 0;
  }
	
	function Clear(){
		 document.getElementById("Who").innerHTML = "";
		 document.getElementById("TeamList").innerHTML = "";
     document.getElementById("CheckName").innerHTML = "";
     document.getElementById("NoCheckName").innerHTML = "";
	}
	
	function Reset() {
		Count = 0;
		AddTextCount = 0;
    RandomCountMinus = 0;
    CheckMember.splice(0, CheckMember.length);
    Couple.splice(0, Couple.length);
    $("#get").css("display","");
    $("#shuffle").css("display","none");
    $("#Cancel").css("display","none");
	}
	
  function Bounce(){
    
   var input = setInterval(function() {
    
    if (BounceReturn == 0) {
      $("#Love").css("font-size", BounceCount += 6);
      if (BounceCount == 300) {
    	  BounceReturn = 1;
      }
    }
    
    if (BounceReturn == 1) {
      $("#Love").css("font-size", BounceCount -= 6);
        if (BounceCount == 0) {
        	BounceReturn = 0;
        }
      }
    }, 30);
   
   var input2 = setInterval(function() {
   
   if (BounceReturn2 == 0) {
      $("#Who").css("font-size", BounceCount2 += 1);
      if (BounceCount2 == 60) {
        BounceReturn2 = 1;
      }
    }
    
    if (BounceReturn2 == 1) {
      $("#Who").css("font-size", BounceCount2 -= 1);
        if (BounceCount2 == 40) {
          BounceReturn2 = 0;
        }
      }
    }, 40);
  }
});