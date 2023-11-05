window.onload = function(){        
    // MENÚ LATERAL
    // ------------
    function MenuLateral(){
        var dis     = this;
        dis.menu    = document.getElementById('menu-area');
        dis.btn     = document.getElementById('menu-btn');
        // 만질 수 있는지 없는지를 판단
        dis.touchsi = 'ontouchstart' in window;
        // 이벤트를 저장하기 위한 변수
        dis.empieza;
        dis.mientras;
        dis.termina;
        dis.moviendo = false;
        dis.puntoPartida;
        dis.movido;
        dis.pos;
        dis.abierto = false;
        dis.winH = window.innerHeight / 2;
        
        // 모바일용 터치를 지원하는지 묻고 이벤트를 변수에 할당
        if (dis.touchsi) {
            dis.empieza  = 'touchstart';
            dis.mientras = 'touchmove';
            dis.termina  = 'touchend';
        }else{
            dis.empieza  = 'mousedown';
            dis.mientras = 'mousemove';
            dis.termina  = 'mouseup';
        }

        // 시작 
        
        dis.menu.addEventListener(dis.empieza, function(event){
            console.log("11" + dis.empieza);

            event.preventDefault;
            // 움직임 여부
            dis.moviendo = true;

            // 터치가 있으면 이것을 사용하고 클릭이 아니면 사용
            if (dis.touchsi) {
                // console.log('punto de partida '+event.touches[0].clientX);
                dis.puntoPartida = event.touches[0].clientY;
                // console.log('pos inicial '+dis.menu.offsetLeft);
                dis.pos = dis.menu.offsetTop * -1;
            }else{
                // console.log('punto de partida '+event.touches[0].clientX);
                dis.puntoPartida = event.clientY;
                // console.log('pos inicial '+dis.menu.offsetLeft);
                dis.pos = dis.menu.offsetTop * -1;
            }

        });
        
        ;
        document.addEventListener(dis.mientras, function(event){
            console.log("22" + dis.mientras)

            event.preventDefault();

            if(dis.moviendo){
                console.log(dis.moviendo);
                if(dis.touchsi){
                    dis.movido = event.touches[0].clientY - dis.puntoPartida;
                    console.log('movido: '+dis.movido);

                }else{
                    dis.movido = event.clientY - dis.puntoPartida;
                    console.log('movido: '+dis.movido);
                    }

                dis.menu.style.top = (dis.movido - dis.pos)+'px';
            }
        });

        document.addEventListener(dis.termina, function(event){
            console.log("33" + dis.mientras)

            dis.moviendo = false;
            event.preventDefault();
            //if(dis.touchsi){

            if ( dis.movido < 0 ) {
                if(dis.movido > -100){
                    console.log(">>>111", dis.movido, dis.winH)
                    dis.menu.style.top = 'calc(100% - 50px)';
                    dis.abierto  = true;
                } else if (dis.movido > -dis.winH) {
                    console.log(">>>222", dis.movido, -dis.winH)
                    dis.menu.style.top = '50%';
                    dis.abierto = false;
                } else if(dis.movido > -dis.winH){
                    console.log(">>>333", dis.movido, -dis.winH)
                    dis.menu.style.top = 0+'px';
                    dis.abierto = false;
                }else{
                    if(dis.abierto){
                        dis.menu.style.top = 0+'px';
                    }else{
                        dis.menu.style.top = 0+'px';
                    }
                }
            } else {

            }
                

        });
    }

    if (document.getElementById('menu-area') != null) {
        var lateral = new MenuLateral();
    }
}