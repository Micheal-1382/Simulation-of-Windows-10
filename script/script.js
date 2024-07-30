//------------naghi mamuly---------------------
function nm(){
    naghimamuly.style.display="none";
}
function naghi(){
    naghimamuly.style.display="block";
}
isdow=false;
function n_1(){
    isdow=true;
}
function n_2(e){
    if(isdow==true){
        X=e.clientX-450;
        Y=e.clientY-15;
        naghimamuly.style.top=Y+"px";
        naghimamuly.style.left=X+"px";
    }
}
function n_3(){
    isdow=false;
}

// -----------mypc script----------------------
        function showing_3(){
            pcbox1.className="";
            pcbox2.className="";
            but_4.className="";
            but_5.className="";
            but_6.className="";
            searchbox.className="";
        }
        note19=0;
        function showing_1(){
            if(note19==0){
                pcbox1.className="show";
                note19=1;
            }
            else if(note19==1){
                pcbox1.className="";
                note19=0;
            }
        }
        note20=0;
        function showing_2(){
            if(note20==0){
                pcbox2.className="show";
                note20=1;
            }
            else if(note20==1){
                pcbox2.className="";
                note20=0;
            }
        }
        function showing_4(){
            mypc.style.display="none";
            ismem=false;
        }
        ismem=false;
        function showing_42(){
            mypc.style.display="none";
            ismem=true;
        }
        function memory(){
            if(ismem==true){
                mypc.style.display="block";
            }
        }
        function showing_5(){
            mypc.style.display="block";
        }
        note21=0
        isbig=false;
        function showing_6(){
            if(note21==0){
                mypc.className="big";
                rd.style.overflowY="";
                dr.style.overflowY="";
                dr.style.height=140+"px";
                mypc.style.top=0+"px";
                mypc.style.left=0+"px";
                note21=1;
                isbig=true;
            }
            else if(note21==1){
                mypc.className="";
                rd.style.overflowY="scroll";
                dr.style.overflowY="scroll";
                todesktop.style.overflowY="scroll";
                dr.style.height=280+"px";
                mypc.style.top=80+"px";
                mypc.style.left=350+"px";
                note21=0;
                isbig=false;
            }
        }
        note22=0
        function changing_1(){
            if(note22==0){
                but_4.className="show";
                note22=1;
            }
            else if(note22==1){
                but_4.className="";
                note22=0;
            }
        }
        note23=0
        function changing_2(){
            if(note23==0){
                but_5.className="show";
                note23=1;
            }
            else if(note23==1){
                but_5.className="";
                note23=0;
            }
        }
        note24=0
        function changing_3(){
            if(note24==0){
                but_6.className="show";
                note24=1;
            }
            else if(note24==1){
                but_6.className="";
                note24=0;
            }
        }
        note25=0
        function changing_4(){
            if(note25==0){
                searchbox.className="show";
                note25=1;
            }
            else if(note25==1){
                searchbox.className="";
                note25=0;
            }
        }
        note26=0
        function changing_5(){
            if(note26==0){
                tothispc.className="show";
                note26=1;
            }
            else if(note26==1){
                tothispc.className="";
                note26=0;
            }
        }
        note27=0
        function changing_6(){
            if(note27==0){
                tothispc_1.className="show";
                note27=1;
            }
            else if(note27==1){
                tothispc_1.className="";
                note27=0;
            }
        }
        note28=0
        function changing_7(){
            if(note28==0){
                dr.className="";
                dr.style.height=0+"px";
                arro.style.transform= "rotateZ(0deg)"
                note28=1;
            }
            else if(note28==1){
                dr.className="show";
                dr.style.height=140+"px";
                arro.style.transform= "rotateZ(90deg)"
                note28=0;
            }
        }
        note29=0
        function changing_8(){
            if(note29==0){
                rd.className="";
                arro_1.style.transform= "rotateZ(0deg)"
                note29=1;
            }
            else if(note29==1){
                rd.className="show";
                arro_1.style.transform= "rotateZ(90deg)"
                note29=0;
            }
        }
        ismousedown=false;
        function down(){
            if(isbig==false){
                ismousedown=true;
            }
        }
        function changing_9(e){
            if(ismousedown==true){
                X=e.clientX-450;
                Y=e.clientY-15;
                mypc.style.top=Y+"px";
                mypc.style.left=X+"px";
            }
        }
        function up(){
            ismousedown=false;
        }
        note30=0
        function changing_10(e){
            X=e.clientX-300;
            Y=e.clientY-40;
            oncont.style.top=Y+"px";
            oncont.style.left=X+"px";
            oncont.className="show";
            note30=0;
        }
        function changing_11(){
            oncont.className="";
        }
        function changing_12(){
            todesktop.className="small";
        }
        function changing_13(){
            todesktop.className="medium";
        }
        function changing_14(){
            todesktop.className="large";
        }
        function changing_15(){
            todesktop.style.display="block";
        }
        function changing_16(){
            todesktop.style.display="none";
        }
        function changing_17(){
            onoff_1.className="hide";
            onoff_2.className="hide";
            onoff_3.className="show";
            setTimeout("onoff.className='hide'",1500)
        }
        function changing_18(){
            onoff_1.className="";
            onoff_2.className="";
            onoff_3.className="";
            onoff.className="";
            win.className="hide";
            mypc.style.display="none";
            naghimamuly.style.display="none";
        }
// -----------Body script----------------------
        function show_3(event){
            event.preventDefault(),
            x=event.clientX;
            y=event.clientY;
                rightclick.className="show";
                rightclick.style.top=y+"px";
                rightclick.style.left=x+"px";
            if(x>850){
                onrightclick.style.left=-240+"px";
                underonrightclick.style.left=-200+"px";
                neww.style.left=-290+"px";
                rightclick.style.left=x-400+"px";
            }
            else{
                onrightclick.style.left=100+"%";
                underonrightclick.style.left=100+"%";
                neww.style.left=100+"%";
                rightclick.style.left=x+"px";
            }
            if(y>400){
                onrightclick.style.top=-140+"px";
                underonrightclick.style.top=-90+"px";
                neww.style.top=-347+"px";
                rightclick.style.top=y-300+"px";
            }
            else{
                onrightclick.style.top=-10+"px";
                underonrightclick.style.top=0+"px";
                neww.style.top=0+"px";
                rightclick.style.top=y+"px";
            }
            if(y<400){
                onrightclick.style.top=-10+"px";
                underonrightclick.style.top=0+"px";
                neww.style.top=-250+"px";
                rightclick.style.top=y+"px";
            }
        }
        function show_4(){
            onrightclick.className="show";
        }
        function show_45(){
            onrightclick.className="hide";
        }
        function show_5(){
            underonrightclick.className="show";
        }
        function show_55(){
            underonrightclick.className="hide";
        }
        function show_6(){
            neww.className="show";
        }
        function show_66(){
            neww.className="hide";
        }
        function hi(){
            rightclick.className="hide";
            // win.className="hide";
        }
        function fo(){
            win.className="hide";
            leftbar.className="leftmenu hide";
            smallbox.className="";
        }
// -----------Bodyitems script----------------------
        function tosmall(){
            itemsize.className="items small";
        }
        function tomedium(){
            itemsize.className="items medium";
        }
        function tolarge(){
            itemsize.className="items large";
        }
// -----------Smallbox script----------------------
        note18=0;
        function mini(){
            if(note18==0){
                smallbox.className="show";
                note18=1;
            }
            else if(note18==1){
                smallbox.className="";
                // inculmn1.className="hide";
                note18=0;
            }
        }
// -----------W1 script----------------------
        note1=0;
        function show_1(){
            if(note1==0){
                win.className="show";
                note1=1;
            }
            else if(note1==1){
                win.className="hide";
                // inculmn1.className="hide";
                note1=0;
            }
        }
        note2=0;
        function show_2(){
            if(note2==0){
                inculmn1.className="show";
                note2=1;
            }
            else if(note2==1){
                inculmn1.className="hide";
                note2=0;
            }
        }
        function hideshow_2(){
            inculmn1.className="hide";
        }
// -----------W2 script----------------------
        function show_7(){
            serchbar.style.border="3px solid rgb(2, 128, 255)"
        }
        function show_8(){
            serchbar.style.border="3px solid #fff"
        }
// -----------W2 script----------------------
        note3=0;
        function show_9(){
            if(note3==0){
                ab1.className="item sel";
                note3=1;
            }
            else if(note3==1){
                ab1.className="item hide";
                note3=0;
            }
        }
        note4=0;
        function show_10(){
            if(note4==0){
                ab2.className="item sel";
                note4=1;
            }
            else if(note4==1){
                ab2.className="item hide";
                note4=0;
            }
        }
        note5=0;
        function show_11(){
            if(note5==0){
                ab3.className="item sel";
                note5=1;
            }
            else if(note5==1){
                ab3.className="item hide";
                note5=0;
            }
        }
        note6=0;
        function show_12(){
            if(note6==0){
                ab4.className="item sel";
                note6=1;
            }
            else if(note6==1){
                ab4.className="item hide";
                note6=0;
            }
        }
        note7=0;
        function show_13(){
            if(note7==0){
                ab5.className="item sel";
                note7=1;
            }
            else if(note7==1){
                ab5.className="item hide";
                note7=0;
            }
        }
        note8=0;
        function show_14(){
            if(note8==0){
                ab6.className="item sel";
                note8=1;
            }
            else if(note8==1){
                ab6.className="item hide";
                note8=0;
            }
        }
        note9=0;
        function show_15(){
            if(note9==0){
                ab7.className="item sel";
                note9=1;
            }
            else if(note9==1){
                ab7.className="item hide";
                note9=0;
            }
        }
        note10=0;
        function show_16(){
            if(note10==0){
                ab8.className="item sel";
                note10=1;
            }
            else if(note10==1){
                ab8.className="item hide";
                note10=0;
            }
        }
        note11=0;
        function show_17(){
            if(note11==0){
                ab9.className="item sel";
                note11=1;
            }
            else if(note11==1){
                ab9.className="item hide";
                note11=0;
            }
        }
        note12=0;
        function show_18(){
            if(note12==0){
                ab10.className="item sel";
                note12=1;
            }
            else if(note12==1){
                ab10.className="item hide";
                note12=0;
            }
        }
        note13=0;
        function show_19(){
            if(note13==0){
                ab11.className="item sel";
                note13=1;
            }
            else if(note13==1){
                ab11.className="item hide";
                note13=0;
            }
        }
        note14=0;
        function show_20(){
            if(note14==0){
                ab12.className="item sel";
                note14=1;
            }
            else if(note14==1){
                ab12.className="item hide";
                note14=0;
            }
        }
        note15=0;
        function show_21(){
            if(note15==0){
                ab13.className="item sel";
                note15=1;
            }
            else if(note15==1){
                ab13.className="item hide";
                note15=0;
            }
        }
        note16=0;
        function show_22(){
            if(note16==0){
                ab14.className="item sel";
                note16=1;
            }
            else if(note16==1){
                ab14.className="item hide";
                note16=0;
            }
        }
        note17=0;
        function show_23(){
            if(note17==0){
                leftbar.className="leftmenu show";
                note17=1;
            }
            else if(note17==1){
                leftbar.className="leftmenu hide";
                note17=0;
            }
        }
// ------------------------------------------
