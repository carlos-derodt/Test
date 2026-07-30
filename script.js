const iframe = document.getElementById("api-frame");

const client = new Sketchfab("1.12.1", iframe);

client.init("0ecaee8288954da18dd6dad09faf673a",{

    autostart:1,
    preload:1,

    ui_infos:0,
    ui_controls:0,
    ui_stop:0,
    ui_watermark:0,
    ui_watermark_link:0,

    success:function(api){

        api.start();

        api.addEventListener("viewerready",function(){

            const target=[0,0.55,0];

            let angle=0;

            function animate(){

                angle+=0.003;

                //-----------------------------------------
                // RADIO DE LA ORBITA
                //-----------------------------------------

                const radius=3.4;

                //-----------------------------------------
                // GIRO HORIZONTAL
                //-----------------------------------------

                const x=Math.cos(angle)*radius;

                const z=Math.sin(angle)*radius;

                //-----------------------------------------
                // MOVIMIENTO VERTICAL
                //-----------------------------------------

                const y=1.1+Math.sin(angle*0.55)*1.25;

                //-----------------------------------------
                // ZOOM AUTOMATICO
                //-----------------------------------------

                const zoom=
                radius+
                Math.sin(angle*2.0)*0.25;

                const xx=Math.cos(angle)*zoom;

                const zz=Math.sin(angle)*zoom;

                api.setCameraLookAt(
                    [xx,y,zz],
                    target,
                    0
                );

                requestAnimationFrame(animate);

            }

            animate();

        });

    },

    error:function(){

        console.log("Error cargando Sketchfab");

    }

});
