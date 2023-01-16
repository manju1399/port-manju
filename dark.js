
        let style=document.getElementById('s')
        let x=document.getElementById('z')

        
        // let z=document.getElementById('x')
        // console.log(x);
        let form=document.getElementById('mfrm')
        
        form.addEventListener('click',dark);

       function dark(q){

           q.preventDefault();

           if (x.className=='bi bi-moon') {
                // console.log('running');
                style.href="./style1.css"
                x.className='bi bi-sun';
                // x.style.color="rgb(119, 107, 224)"
                // document.body.style.transition="10s"
            } 
            else if(x.className=='bi bi-sun') {
                // console.log('not running');
                style.href="./style.css"
                x.className='bi bi-moon';
                // x.style.color="rgb(119, 107, 224)"
                // document.body.style.transition="10s"

            }
        }
       