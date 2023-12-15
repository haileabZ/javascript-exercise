let quiz=[{question:'who is prime minister of Ethiopia?',
            a:'mengistu haileamariam',
            b:'abiy ahmed',
            c:'meles zenawi',
            d:'hailemariam desalegn',
            answer:'b'},
            {question:'what is js stand for?',
            a:'jquery science',
            b:'jquery script',
            c:'java script',
            d:'java science',
            answer:'c'},
            {question:'which programming language used for developing games?',
            a:'CSS',
            b:'HTML',
            c:'react',
            d:'C#',
            answer:'d'},
            {question:'what does html stand for?',
            a:'hyper text markeup language',
            b:'hyper trust markeup language',
            c:'hyper trust makeup language',
            d:'hyper text makeup language',
            answer:'a'},
            {question:'how much is 1MB in KB?',
            a:'1000',
            b:'1024',
            c:'10',
            d:'100',
            answer:'b'},
            {question:'who invent facebook?',
            a:'jeff bezos',
            b:'elon musk',
            c:'mark zuckberg',
            d:'bil gets',
            answer:'c'}];

            let count=0;
            let answered=0;
            function submit(){
                let val=document.querySelectorAll('input');
                  for(var i=0;i<val.length;i++){
                    if(val[i].checked===true){
                        if(val[i].id===quiz[count].answer){
                            answered++;
                            
                        }
                        val[i].checked=false;
                    }
                  }
                  count++;
                  display(count,answered);
               
            
            }
       

            function display(i,answered){
              if(i===quiz.length){
                document.getElementById('quiz-container').innerHTML='';
                document.getElementById('quiz-container').classList.add('demo');
                document.getElementById('quiz-container').innerHTML="you got "+answered+" answers out of "+quiz.length+" question";
              }
                document.getElementById('question').innerHTML=quiz[i].question ;
                document.getElementById('choice-a').innerHTML=quiz[i].a ;
                document.getElementById('choice-b').innerHTML=quiz[i].b ;
                document.getElementById('choice-c').innerHTML=quiz[i].c ;
                document.getElementById('choice-d').innerHTML=quiz[i].d ;
     
        
   
            }
