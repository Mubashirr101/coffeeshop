function validate ()
{
let letters=/^[A-Z a-z]+$/;
let uid_len=frm.uid.value.length;
let desc_len=frm.desc.value.length;
// let alnum =/^[0-9 A-Z a-z]+$/;
x=0;

if (!(frm.uname.value.match(letters)))
{
 alert('Username must only contain Alphabets.');
 uname.focus();
}
else if (uid_len ==0) 
{
alert('Email ID must not be blank.');
 uid.focus();
}
else if (desc_len==0); 
{
alert('Description must be filled.');
 desc.focus();
}

}
