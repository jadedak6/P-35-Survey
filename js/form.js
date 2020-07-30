class Form{
    constructor(){

    }
    display(){
        var title = createElement("h1");
        title.html("Tech Survey");
    title.position(510,0);
    var greeting = createElement("h3");
  
    var input= createInput("");
   input.position(250,500);
   var button= createButton("Vote");
   button.position(450,500);
   button.mousePressed(function(){
       input.hide();
       button.hide();
       var mail = input.value();
       playerCount = playerCount+1;
       player.update(mail);
       player.updateCount(playerCount);
       greeting.html(" Thanks "+mail+" for voting.");
       greeting.position(450,600);
   })
    var button1 = createButton("Chrome")
    button1.position(150,110);
    button1.mousePressed(function(){
        button3.hide();
        button2.hide();
        button4.hide();
    })
    var button2 = createButton("Mozilla Firefox")
    button2.position(250,110);
    button2.mousePressed(function(){
        button3.hide();
        button1.hide();
        button4.hide();
    })
    var button3 = createButton("Bing")
    button3.position(400,110);
    button3.mousePressed(function(){
        button2.hide();
        button1.hide();
        button4.hide();
    })
    var button4 = createButton("Other")
    button4.position(500,110);
    button4.mousePressed(function(){
        button2.hide();
        button1.hide();
        button3.hide();
    })
    var button5 = createButton("iOS")
    button5.position(150,190);
    button5.mousePressed(function(){
        button6.hide();
        button7.hide();
        button8.hide();
    })
    var button6 = createButton("Android")
    button6.position(250,190);
    button6.mousePressed(function(){
        button5.hide();
        button7.hide();
        button8.hide();
    })
    var button7 = createButton("Flyme")
    button7.position(386,190);
    button7.mousePressed(function(){
        button5.hide();
        button6.hide();
        button8.hide();
    })
    var button8 = createButton("Other")
    button8.position(506,190);
    button8.mousePressed(function(){
        button5.hide();
        button6.hide();
        button7.hide();
    })
    var button9 = createButton("1-2 hours")
    button9.position(150,270);
    button9.mousePressed(function(){
        button10.hide();
        button11.hide();
        button12.hide();
    })
    var button10 = createButton("30 minutes")
    button10.position(250,270);
    button10.mousePressed(function(){
        button9.hide();
        button11.hide();
        button12.hide();
    })
    var button11 = createButton("More than 2 hours")
    button11.position(380,270);
    button11.mousePressed(function(){
        button9.hide();
        button10.hide();
        button12.hide();
    })
    var button12 = createButton("I don't use any phone")
    button12.position(555,270);
    button12.mousePressed(function(){
        button9.hide();
        button10.hide();
        button11.hide();
    })
    var button13 = createButton("Apple")
    button13.position(150,326);
    button13.mousePressed(function(){
        button14.hide();
        button15.hide();
        
    })
    var button14 = createButton("Samsung")
    button14.position(250,326);
    button14.mousePressed(function(){
        button13.hide();
        button15.hide();
       
    })
    var button15 = createButton("One plus")
    button15.position(350,326);
    button15.mousePressed(function(){
        button13.hide();
        button14.hide();
       
    })
    var button16 = createButton("Other")
    button16.position(450,326);
    button16.mousePressed(function(){
        button17.hide();
        button18.hide();
        button19.hide();
       
    })
    
    var button17 = createButton("Instagram")
    button17.position(150,390);
    button17.mousePressed(function(){
        button16.hide();
        button18.hide();
        button19.hide();
      
    })
    var button18 = createButton("Facebook")
    button18.position(250,390);
    button18.mousePressed(function(){
        button16.hide();
        button17.hide();
        button19.hide();
      
    })
    var button19 = createButton("Twitter")
    button19.position(350,390);
    button19.mousePressed(function(){
        button16.hide();
        button17.hide();
        button18.hide();
      
    })
    var button20 = createButton("Yes,it was very useful")
    button20.position(150,460);
    button20.mousePressed(function(){
        button21.hide();
        button22.hide();
       })
       var button21 = createButton("Sometimes")
       button21.position(350,460);
       button21.mousePressed(function(){
           button20.hide();
           button22.hide();
          })
          var button22 = createButton("No, not at all")
          button22.position(500,460);
          button22.mousePressed(function(){
              button20.hide();
              button21.hide();
             })
}


}