export const arrErr=[
    {
        errorringName:""
    },
    {
        errorringPhone:""
    },
    {
        errorringEmail:""
    },
    {
        errorringMsg:""
    },
]

const validate=(ee)=>{
    // -----------------------NAME---------------------
        if(!ee._name_){     
            arrErr[0]="Enter Name!!!";  
        }
        else{
            arrErr[0]=null;
        }
    // -----------------------PHONE---------------------

        if(!ee._phone_){
            arrErr[1]="Enter Phone!!!";

        }
        else{

            arrErr[1]=null;

            if(isNaN(ee._phone_)){
                arrErr[1]="Proper Phone!!!";
            }

        }

    // -----------------------EMAIL---------------------


        const regexing=  /\S+@+\S+.+\S+/ ;
        if(!ee._email_){
            arrErr[2]="Enter Email!!!";

        }
        else{
            
            if(ee._email_.match(regexing)){
                arrErr[2]=null
            }
            else{

            arrErr[2]="Proper Email!!!";


        }
    // -----------------------MESSAGE---------------------

        }

        if(!ee._message_){
            arrErr[3]="Enter Message";

        }
        else{
            arrErr[3]=null;
        }
        

        
    }

   

export default validate;
