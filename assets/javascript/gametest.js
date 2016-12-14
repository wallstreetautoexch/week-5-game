  <!-- 
   //  Week 4 Homework Game 
  // Variables
       
      
  // Individual Variables

     // Indexes and COunters

      var qAndAIndex = 0;
      var answerIndex = 0;
      var wins = 0;
      var gameCounter = 0;
      var losses = 0;
      var timeOuts = 0;
      var number = 0;
      var timeerr;
      var hNumber = 0;

      
      // Data Variables For the Game Box

      var reStartMode = "1";
      var gameBoxHeader = $("<h2></h2>").addClass("gameBoxHdr").text("Time Remaining   :" + number);
      var fillerHeader = $("<p></p>").text("    ");
      var fillerHeader2 = $("<p></p>").text("    ");
      var startButton = $("<button></button>").addClass("guess").text("START");
      var restartButton = $("<button></button>").addClass("guess").text("RESTART GAME");
      var answerVal = "Time"
      var questionText  
      var answerTextOut
      var answerRight = "The Answer is Correct !!!!"
      var answerWrong = "The Answer is Wrong !!!!"
      var answerTimeOut = "You Timed Out !!!!!!"
      var headerInit = $("<p></p>").text(" Car Trivia Game Rules:");
      var questionInit = $("<p></p>").text(" The Game will automatically Pose a Question");
      var answer1Init = $("<p></p>").text(" Only one answer is right");
      var answer2Init = $("<p></p>").text(" The Game will set a timer for alloted time to answer");
      var answer3Init = $("<p></p>").text(" You answer 8 Questions .. ");
      var answer4Init = $("<p></p>").text(" At end your score will appear");
      var question = $("<p></p>").text(questionText);
      // var answer1 = $("<p></p>").text(answerText).attr("data-answer-value", answerValueOut);
      // var answer2 = $("<p></p>").text(answerText).attr("data-answer-value", answerValueOut);
      // var answer3 = $("<p></p>").text(answerText).attr("data-answer-value", answerValueOut);
      // var answer4 = $("<p></p>").text(answerText).attr("data-answer-value", answerValueOut);
      



      // Data Object Variables For Questions and Answers and Values


       var questionAndAnswer = [
                            {
           question : "What was the first year of the Mustang?",
           gifImage : "assets/images/mustang65.gif",                   
                  
           answer : [
                    {
                     answerText : "1965 ",
                     answerValue : "True"
                    },
                    {
                     answerText : "1962 ",
                     answerValue : "False"
                    },
                    {
                     answerText : "1979 ",
                     answerValue : "False"
                    },
                    {
                     answerText : "1955 ",
                     answerValue : "False"
                    }
                    ]
                             },
                             {
           question : "The first generation of the Tbird was",
           gifImage : "assets/images/57tbird.gif", 

           answer : [
                    {
                     answerText : "Powered by a 454 engine ",
                     answerValue : "False"
                    },
                    {
                     answerText : "Front Wheel Drive",
                     answerValue : "False"
                    },
                    {
                     answerText : "A Station Wagon ",
                     answerValue : "False"
                    },
                    {
                     answerText : "Built from 1955 to 1957",
                     answerValue : "True"
                    }
                    ]      
                              },
                              {
           question : "The Original Porsche was",
           gifImage : "assets/images/p911.gif",                  
                          
           answer : [
                    {
                     answerText : "A rear engine car",
                     answerValue : "True"
                    },
                    {
                     answerText : "A front engine car ",
                     answerValue : "False"
                    },
                    {
                     answerText : "A water cooled V-8 ",
                     answerValue : "False"
                    },
                    {
                     answerText : "Built by Mercedes",
                     answerValue : "False"
                    }
                    ]
                               },
                               {
           question : "What TV show was the 1970 Charger Used in?",
           gifImage : "assets/images/70charger.gif",                  
                          
           answer : [
                    {
                     answerText : "60 minutes",
                     answerValue : "False"
                    },
                    {
                     answerText : "The Twilight Zone",
                     answerValue : "False"
                    },
                     {
                     answerText : "The Dukes of Hazard",
                     answerValue : "True"
                    },
                    {
                     answerText : "Dennis The Menace",
                     answerValue : "False"
                    }
                    ]
                               },
                               {
           question : "The 1976 Pacer was built by which Company?",
           gifImage : "assets/images/amcpacer.gif",                  
                          
           answer : [
                    {
                     answerText : "Ford ",
                     answerValue : "False"
                    },
                    {
                     answerText : "American Motors ",
                     answerValue : "True"
                    },
                     {
                     answerText : "General Motors",
                     answerValue : "False"
                    },
                    {
                     answerText : "Honda",
                     answerValue : "False"
                    }
                    ]
                               },
                               {
           question : "The Doors on the 1962 Lincoln",
           gifImage : "assets/images/continental.gif",                  
                          
           answer : [
                    {
                     answerText : "Fell off",
                     answerValue : "False"
                    },
                    {
                     answerText : "Did not lock",
                     answerValue : "False"
                    },
                     {
                     answerText : "Were called Suicide Doors ",
                     answerValue : "True"
                    },
                    {
                     answerText : "Were 13 Feet Long",
                     answerValue : "False"
                    }
                    ]
                               },
                               {
           question : "In what Car was used for the Griswalds in the movie Vacation?",
           gifImage : "assets/images/countrysquire.gif",                  
                          
           answer : [
                    {
                     answerText : "1970 Buick Estate Wagon",
                     answerValue : "False"
                    },
                    {
                     answerText : "1967 Mercury Colony Park Wagon",
                     answerValue : "False"
                    },
                    {
                     answerText : "1962 Chrysler New Yorker Wagon",
                     answerValue : "False"
                    },
                    {
                     answerText : "1984 Ford Country Squire Wagon",
                     answerValue : "True"
                    }
                    ]
                               },
                               {
           question : "What Country Manufactures the Rolls Royce?",
           gifImage : "assets/images/rollsr.gif",                  
                          
           answer : [
                    {
                     answerText : "The UK",
                     answerValue : "True"
                    },
                    {
                     answerText : "The US",
                     answerValue : "False"
                    },
                    {
                     answerText : "Iran",
                     answerValue : "False"
                    },
                    {
                     answerText : "Poland",
                     answerValue : "False"
                    }
                    ]
                               }
                    ]
                     
      

     // Functions ---------------------------------------------------------------


      

      function initialize () {


           // Initialize the Game Box with the Timer, Rules and Start Button

           $("#gameBox").html(headerInit);
           $("#gameBox").append(questionInit);
           $("#gameBox").append(answer1Init);
           $("#gameBox").append(answer2Init);
           $("#gameBox").append(answer3Init);
           $("#gameBox").append(answer4Init);
           $("#gameBox").append (startButton);
         }

         function loadQuestionsAndAnswers () 

         {
          number = 5
          $("#gameBox").empty();
          $("#gameBox").append(gameBoxHeader);
          console.log (questionAndAnswer[qAndAIndex].question);
          var questionText = questionAndAnswer[qAndAIndex].question;
          var question = $("<p></p>").text(questionText);
          $("#gameBox").append(question);
          var answerTextOut = questionAndAnswer[qAndAIndex].answer[0].answerText;
          var answerValueOut = questionAndAnswer[qAndAIndex].answer[0].answerValue;
          var answer1 = $("<p></p>").addClass("guess").text(answerTextOut).attr("data-answer-value", answerValueOut);
          $("#gameBox").append(answer1);
          var answerTextOut = questionAndAnswer[qAndAIndex].answer[1].answerText;
          var answerValueOut = questionAndAnswer[qAndAIndex].answer[1].answerValue;
          var answer2 = $("<p></p>").addClass("guess").text(answerTextOut).attr("data-answer-value", answerValueOut);  
          $("#gameBox").append(answer2);
          var answerTextOut = questionAndAnswer[qAndAIndex].answer[2].answerText;
          var answerValueOut = questionAndAnswer[qAndAIndex].answer[2].answerValue;
          var answer3 = $("<p></p>").addClass("guess").text(answerTextOut).attr("data-answer-value", answerValueOut);  
          $("#gameBox").append(answer3);
          var answerTextOut = questionAndAnswer[qAndAIndex].answer[3].answerText;
          var answerValueOut = questionAndAnswer[qAndAIndex].answer[3].answerValue;
          var answer4 = $("<p></p>").addClass("guess").text(answerTextOut).attr("data-answer-value", answerValueOut);  
          $("#gameBox").append(answer4);
          number = 5
          runTimerr ()



        }

            // console.log (questionAndAnswer[0].answer[0].answerText);
            // console.log (questionAndAnswer[0].answer[0].answerValue);
            // console.log (questionAndAnswer[1].question);
            // console.log (questionAndAnswer[1].answer[1].answerText);
            // console.log (questionAndAnswer[1].answer[1].answerValue);

         function determineAnswerStatus (stat)

           {
            console.log("determine")
            var statusTextMessege = "";

            console.log("stat")
            console.log(stat)
            if (stat == "True")
               { wins++;
                 console.log("True")
                 console.log(wins)
                 statusTextMessege = answerRight}
            else
               {if (stat == "False")
                   {losses ++;
                     console.log("loss")
                     console.log(losses)
                    statusTextMessege = answerWrong}
                 else
                     {timeOuts ++;
                      console.log("time")
                      console.log(timeOuts)
                     statusTextMessege = answerTimeOut}
                 };

            var statusAnswerText;    
            var statusMessege = $("<p></p>").text(statusTextMessege);
            var statusQuestionText = questionAndAnswer[qAndAIndex].question;
            var statusQuestion = $("<p></p>").text(statusQuestionText);
            var statusRightAnswer = $("<p></p>").text("The Correct Answer is:");
            var statusAnswer = $("<p></p>").text(statusAnswerText); 
            if (questionAndAnswer[qAndAIndex].answer[0].answerValue == "True")
                {
                 statusAnswerText = questionAndAnswer[qAndAIndex].answer[0].answerText;
                };
            if (questionAndAnswer[qAndAIndex].answer[1].answerValue == "True")
                {
                 statusAnswerText = questionAndAnswer[qAndAIndex].answer[1].answerText;
                };
            if (questionAndAnswer[qAndAIndex].answer[2].answerValue == "True")
                {
                 statusAnswerText = questionAndAnswer[qAndAIndex].answer[2].answerText;
                };
            if (questionAndAnswer[qAndAIndex].answer[3].answerValue == "True")
                {
                 statusAnswerText = questionAndAnswer[qAndAIndex].answer[3].answerText;
                };
            var statusAnswer = $("<p></p>").text(statusAnswerText);    
            $("#gameBox").empty();
            $("#gameBox").append(gameBoxHeader);
            $("#gameBox").append(statusQuestion);
            $("#gameBox").append(statusRightAnswer);
            $("#gameBox").append(statusAnswer);     
            $("#gameBox").append(statusMessege);
           
             // answerText = answerRight;         
             var gifCar = $("<img>").addClass("imageLine").attr("src","" + questionAndAnswer[qAndAIndex].gifImage + "")            
             $("#gameBox").append (gifCar);
             console.log("determine out")

           }

           function runTimerr ()

            {

             timerr = setInterval(countAndReplaceHeader , 1000)
              

            }

            function stop ()

            {
              clearInterval(timerr)
            }

           function countAndReplaceHeader ()  {        
                console.log("CountandReplace Start")
                answerVal = "Time"
                number --
                console.log("NUMBER " + number)
                hNumber ++

                $("#gameBox").empty();
 //               $("#gameBox").append(gameBoxHeader);
                $("#gameBox").addClass("gameBoxHeader").html("<h2>Time Remaining :" + number +"</h2>");
                console.log (questionAndAnswer[qAndAIndex].question);
                var questionText = questionAndAnswer[qAndAIndex].question;
                var question = $("<p></p>").text(questionText);
                $("#gameBox").append(question);
                var answerTextOut = questionAndAnswer[qAndAIndex].answer[0].answerText;
                var answerValueOut = questionAndAnswer[qAndAIndex].answer[0].answerValue;
                var answer1 = $("<p></p>").addClass("guess").text(answerTextOut).attr("data-answer-value", answerValueOut);
                $("#gameBox").append(answer1);
                var answerTextOut = questionAndAnswer[qAndAIndex].answer[1].answerText;
                var answerValueOut = questionAndAnswer[qAndAIndex].answer[1].answerValue;
                var answer2 = $("<p></p>").addClass("guess").text(answerTextOut).attr("data-answer-value", answerValueOut);  
                $("#gameBox").append(answer2);
                var answerTextOut = questionAndAnswer[qAndAIndex].answer[2].answerText;
                var answerValueOut = questionAndAnswer[qAndAIndex].answer[2].answerValue;
                var answer3 = $("<p></p>").addClass("guess").text(answerTextOut).attr("data-answer-value", answerValueOut);  
                $("#gameBox").append(answer3);
                var answerTextOut = questionAndAnswer[qAndAIndex].answer[3].answerText;
                var answerValueOut = questionAndAnswer[qAndAIndex].answer[3].answerValue;
                var answer4 = $("<p></p>").addClass("guess").text(answerTextOut).attr("data-answer-value", answerValueOut);  
                $("#gameBox").append(answer4);

                // $(".gameBoxHdr").remove()
                // $("#gameBox").addClass("gameBoxHeader").html("<h2>" + number +"</h2>");
                if (number == 0)
                  {
                    determineAnswerStatus (answerVal)
                    setTimeout("crappo ()", 5 * 1000)
                    console.log("stop")
                    stop()
                  }
                // else
                //   {
                //   answerVal = ($(this).data("answer-value"))
                //   stop()
                //   }
                //   console.log("TIMER = " + timerr)     
             console.log("count and replace end")                          
           }

           function crappo () {
            console.log("crappo")
            qAndAIndex ++;
            console.log("On Guess INDEX is " + qAndAIndex)
           $("#gameBox").empty();
           if (qAndAIndex > 7)
              {
               gameCounter ++
               endOfGame ()
               console.log("end")
               reStartMode = "1"}
           else
               {
               loadQuestionsAndAnswers ()
               console.log("end guess ---------")}
           }

           function endOfGame ()
              {
               $("#gameBox").empty();
               var TotalGames = $("<p></p>").text("Total Games = " + gameCounter);
               var Wins = $("<p></p>").text("Total Wins =  " + wins);
               var Loose = $("<p></p>").text("Total Losses =  " + losses);
               var Times = $("<p></p>").text("Total Time Outs =  " + timeOuts);

               $("#gameBox").append (gameBoxHeader);
               $("#gameBox").append (fillerHeader2);
               $("#gameBox").append (TotalGames);
               $("#gameBox").append (Wins);
               $("#gameBox").append (Loose);
               $("#gameBox").append (Times);
               $("#gameBox").append (restartButton);
  
  
              }
        //    // $(document).on("click",".carImage",function() {
        //    //    wins ++;
        //    //       console.log("wins ");
        //    //       console.log(wins);
        //    //       $("#cars").empty();
        //    //       gameCounter = 0;
                 
          

        // //  function writeCountersToPage () {

        // //   $("#Wins").text(wins);
        // //   $("#Losses").text(losses);
        // //   $("#totalScoreNumber").text(gameCounter);
        // // }
                          
        

// ------------------Main Line Code ---------------------
         
          
            initialize ();
           
           
            // $(document).on("click",".start",function() {

               
               
               $(document).on("click",".guess",function() {

                   if (number != 0)
                   {
                    stop()
                   };
                   if (reStartMode == "1")
                   {
                    qAndAIndex = 0
                    reStartMode = "0"
                    console.log("RESTART MODE WAS 1 -------------")
                    loadQuestionsAndAnswers ()
                    console.log("INDEX = " + qAndAIndex)
                   }
                  else
                   {
                    console.log("RESTART MODE WAS NOT ON ----------")
                    
                    console.log("INDEX = " + qAndAIndex)
                    console.log("start Guess ---------")
        //            number = 5
        //            runTimerr ()
                
                    answerVal = ($(this).data("answer-value"))  
                    console.log(answerVal)
                    determineAnswerStatus (answerVal)

                    setTimeout("crappo ()", 5 * 1000)
                    stop ()
                  }
                   
                  

                 
                


                 });

             // });





           //  console.log (questionAndAnswer[0].question);
           //  console.log (questionAndAnswer[0].answer[0].answerText);
           //  console.log (questionAndAnswer[0].answer[0].answerValue);

           //  console.log (questionAndAnswer[1].question);
           //  console.log (questionAndAnswer[1].answer[1].answerText);
           //  console.log (questionAndAnswer[1].answer[1].answerValue);
           // $("#gameBox").empty();
           // $("#gameBox").append(gameBoxHeader);
           // $("#gameBox").append(question);
           // answerText = answerRight;
           // $("#gameBox").append(answer1);          
           // var gifCar = $("<img>").addClass("imageLine").attr("src","" + questionAndAnswer[0].gifImage + "")            
           // $("#gameBox").append (gifCar);
           // $(document).on("click",".carImage",function() {
           //    wins ++;
           //       console.log("wins ");
           //       console.log(wins);
           //       $("#cars").empty();
           //       gameCounter = 0;
                 
                 

              

            



            
          

        
           



         -->
         
  
