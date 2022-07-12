
 function sideNavigation(){
    var a=document.getElementById("div2");
    var b=document.getElementById("div1");
    if(a.style.display=="block"){
        b.style.display="block";
        a.style.display = "none";
    }

    else{
        b.style.display = "none";
        a.style.display="block";
    }
}

let img_a = ["brahmi1.gif","brahmi2.gif","allu3.gif"]
let i=0;
function slideprev() {
    if(i==0)
        i=2;
    else
        i--;
    document.getElementById("slides").src=img_a[i];
}
function slidenext(){

    if (i==2)
        i=0;
    else
        i++
    document.getElementById("slides").src=img_a[i];
}
function currentSlide(k){
    document.getElementById("slides").src=img_a[k];
}



function filtering() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("mainsearch1");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function mapOpener(){
    document.getElementById("map-division").style.display="none";
    document.getElementById("Faculty-validity").style.display="none";
    document.getElementById("Student-validity").style.display="none";
    document.getElementById("login-validity").style.display="none";
    document.getElementById("f-div1").style.display="none";
    document.getElementById("divss").style.display = "none";
    document.getElementById("map-division").style.display="block";
}

function homeMenu(){
    document.getElementById("map-division").style.display="none";
    document.getElementById("Faculty-validity").style.display="none";
    document.getElementById("Student-validity").style.display="none";
    document.getElementById("map-division").style.display="none";
    document.getElementById("login-validity").style.display="none";
    document.getElementById("f-div1").style.display="none";
    document.getElementById("divss").style.display = "block";
}

function StudentVisibility(){
    document.getElementById("map-division").style.display="none";
    document.getElementById("Faculty-validity").style.display="none";
    document.getElementById("map-division").style.display="none";
    document.getElementById("login-validity").style.display="none";
    document.getElementById("f-div1").style.display="none";
    document.getElementById("divss").style.display = "none";
    document.getElementById("Student-validity").style.display="block";
}

function studentValid(){
    var a=document.getElementById("sid-val").value;
    var pattern=/^[N|n](1)[0-9](0|1)\d{3}$/;
    if(pattern.test(a)){
        document.getElementById("Student-validity").innerText="Valid";
        }
    else{
        document.getElementById("sid-val").style.border = "3px solid orange";
        return false;
    }
}

function FacultyVisibility(){
    document.getElementById("map-division").style.display="none";
    document.getElementById("Student-validity").style.display="none";
    document.getElementById("map-division").style.display="none";
    document.getElementById("login-validity").style.display="none";
    document.getElementById("f-div1").style.display="none";
    document.getElementById("divss").style.display = "none";
    document.getElementById("Faculty-validity").style.display="block";
}

function FacultyValid(){
    var a=document.getElementById("fid-val").value;
    var pattern=/^[N|n](1)[0-9](0|1)\d{3}$/;
    if(pattern.test(a)){
        document.getElementById("Faculty-validity").innerText="Valid";
        }
    else{
        document.getElementById("fid-val").style.border = "3px solid red";
        return false;
    }
}

function signupFormOpener(){
    document.getElementById("map-division").style.display="none";
    document.getElementById("Faculty-validity").style.display="none";
    document.getElementById("Student-validity").style.display="none";
    document.getElementById("map-division").style.display="none";
    document.getElementById("login-validity").style.display="none";
    document.getElementById("divss").style.display = "none";
    document.getElementById("f-div1").style.display="block";
}

// login form

function loginFormOpener(){
    document.getElementById("map-division").style.display="none";
    document.getElementById("Faculty-validity").style.display="none";
    document.getElementById("Student-validity").style.display="none";
    document.getElementById("map-division").style.display="none";
    document.getElementById("f-div1").style.display="none";
    document.getElementById("divss").style.display = "none";
    document.getElementById("login-validity").style.display="block";
}

function loginValid(){
    if(document.getElementById("lid-val").value==="Idris" && document.getElementById("21").value==="mdidrisbaig55@")
        document.getElementById("login-validity").innerText="Valid";
    else
        document.getElementById("login-validity").innerText="Invalid";

}



// signup form 

var j;
        function hobbyCheck()
        {
            for(i=document.getElementsByName('vehicle').length-1;i>=0;i--)
            {
                if (document.getElementsByName('vehicle')[i].checked) {
                    document.getElementById("l4").innerText=h.document.getElementsByName('vehicle')[i].value;
                }
            }
        }
        function validate(){
            // alert("hi")
            // document.body.style.backgroundImage = 'linear-gradient('+ left + ', ' + #a445b2 + ', ' + #fa4299 + ')';
            // document.body.style.backgroundImage="-webkit-linear-gradient(left, #a445b2, #fa4299);"
            var a=document.getElementById("fname").value;
            var b=document.getElementById("fname");
            var a1=document.getElementById("lname").value;
            var b1=document.getElementById("lname");
            var pattern=/^[a-z]{3,32}$/i;
            var email = /^[a-z0-9]*\.?([a-z0-9]*)@[a-z]{2,7}((\.)?([a-z]{2}))?\.[a-z]{2,3}$/;
            var emailid = document.getElementById("mailid").value;
            var ph=document.getElementById("phno").value;
            var country_d=document.getElementById("country_data").value;
            var country_pattern1 = /^[6-9][0-9]{9}$/;
            var country_pattern2 = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

            if(pattern.test(a)){
                {
                    if(pattern.test(a1)){
                        
                        if(email.test(emailid))
                        {   
                            let c = 0;
                            for(i=document.getElementsByName('vehicle').length-1;i>=0;i--){
                                if (document.getElementsByName('vehicle')[i].checked) {
                                    c=c+1;
                                }
                            }
                            if(c<2){
                                alert ("Please choose at least two models to compare.");
                                return false;
                            }
                            if(ph=="India")
                            {
                                if(country_pattern1.test(country_d)){
                                    getAge();
                                    document.getElementById("f-div1").innerText="Valid";
                                    return true;
                                }
                                else{
                                    document.getElementById("country_data").style.border = "3px solid  orange";
                                    j="country_data";
                                    setTimeout(clearing,3000);
                                    return false;
                                }
                            }
                            else if(ph=="America"){
                                if(country_pattern2.test(country_d)){

                                    // getAge();
                                    return true;
                                }
                                else{
                                    document.getElementById("country_data").style.border = "3px solid  orange";
                                    j="country_data";
                                    setTimeout(clearing,3000);
                                    return false;
                                }
                            }
                            else {
                                document.getElementById("country_data").style.border = "3px solid  orange";
                                j="country_data";
                                setTimeout(clearing,3000);
                                return false;
                            }
                        }
                        else{
                            document.getElementById("mailid").style.border = "3px solid  orange";
                            j="mailid";
                            setTimeout(clearing,3000);
                            return false;
                        }
                    }
                    else{
                        b1.style.border = "3px solid  orange";
                        j="lname";
                        setTimeout(clearing,3000);
                        return false;
                    }
                }   
            }
            else{
                b.style.border = "3px solid orange";
                j="fname";
                setTimeout(clearing,3000);
                return false;
            }
        }
        function clearing() {
            document.getElementById(j).style.border= "1px solid pink";
        }
        // function myFunction() {
        //      var x = document.getElementById("myInput");
        //      if (x.type === "password") {
        //      x.type = "text";
        //      } 
        //      else{
        //      x.type = "password";
        //      }
        // }
        function resetForm() {
            var r=confirm("Are you sure want to reset?");
            if(r)
                document.getElementById("myForm").reset();
        }
        var today = new Date()
        function getAge() {
            var givenDate = new Date(today);
            var dt1 = document.getElementById('date').value;
            var birthDate = new Date(dt1);
            var years = (givenDate.getFullYear() - birthDate.getFullYear());

            if (givenDate.getMonth() < birthDate.getMonth() ||
         givenDate.getMonth() == birthDate.getMonth() && givenDate.getDate() < birthDate.getDate()) {
                years--;
            }
            document.getElementById("agePrinter").innerText="Age is "+years;
        }   

        function obeyTerms(){
            if(document.getElementById("agree").checked)
            {
                document.getElementById("submitButton").style.opacity = 1;
                document.getElementById("submitButton").disabled = false;
            }
            else{
                document.getElementById("submitButton").style.opacity = 0.5;
                document.getElementById("submitButton").disabled = true;
            }
        }
        function getFullName(){
            var d=document.getElementById("fname").value;
            var d1=document.getElementById("lname").value;
            document.getElementById("fullname").value = d+" "+d1;
            document.getElementById("fullname").readOnly = true;

        }
        function img2(){
            if(document.getElementById("2").type=='password'){
                    document.getElementById("2").type="text";
                    document.getElementById("f-img").src="eye.png";
                    
                }
                else{
                    document.getElementById("2").type="password";
                    document.getElementById("f-img").src="eye1.png";
              }
        }

        function getTitle(){
            var a = document.getElementById("imgimg");

        }
        // function img21(){
        //     if(document.getElementById("21").type =='password'){
        //             document.getElementById("21").type="text";
        //             document.getElementById("f1-img").src="eye.png";
                    
        //         }
        //         else{
        //             document.getElementById("21").type="password";
        //             document.getElementById("f1-img").src="eye1.png";
        //       }
        // }
        let m=document.getElementById("date");
        m.addEventListener('mouseover',getAge);


// hobbies adder

var xy=document.getElementById("add-first");
var ab=document.getElementById("add-two");
function adder(){
    ab.innerHTML+="<li>"+xy.value+"<button onclick=\"dele(this)\"id=\"delete\">x</button></li>";
    document.getElementById("delete").backgroundColor="red";
    return false;
}
function dele(y){
    y.parentElement.remove();
    y.remove();
}





let im=document.getElementById("imageChangerToText");
im.addEventListener('mouseover',getTitle);

let im1=document.getElementById("imageChangerToText1");
im1.addEventListener('mouseout',getTitle1);
function getTitle(){
    document.getElementById("imageChangerToText").style.display="none";
    document.getElementById("imageChangerToText1").style.display="block";
}
function getTitle1(){
    document.getElementById("imageChangerToText1").style.display="none";
    document.getElementById("imageChangerToText").style.display="block";
}