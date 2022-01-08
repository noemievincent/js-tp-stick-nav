(function (){
    const oScroll = {
        init(){
            document.documentElement.classList.add('js-enabled');
            this.eBody = document.body;
            this.eNav = document.querySelector('#main');
            window.addEventListener('scroll', (event)=>{
                if (scrollY>this.eNav.offsetTop){
                    this.eBody.classList.add('fixed-nav');
                } else if (scrollY<=this.eNav.offsetTop){
                    this.eBody.classList.remove('fixed-nav');
                }
            })
        }
    }
    oScroll.init();
})();