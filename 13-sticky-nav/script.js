const topbtn= document.querySelector('.topbtn');
  window.addEventListener('scroll',()=>{
      if(window.scrollY >200){
        topbtn.style.display='block';
      }
      else{
        topbtn.style.display='none';
      }
  })
  topbtn.addEventListener('click',()=>{
    window.scrollTo({top:0, behavior:"smooth"})
  })
