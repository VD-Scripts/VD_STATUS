window.addEventListener("message", function(event){
    let data = event.data
    if(data.action == "updateHud") {
        switch(data.thirst) {
            case 0: 
                $(".acerc1").css("background", "gray")
                $(".acerc2").css("background", "gray")
                $(".acerc3").css("background", "gray")
                $(".acerc4").css("background", "gray")
                $(".acerc1").css("box-shadow", "none",)
                $(".acerc2").css("box-shadow", "none",)
                $(".acerc3").css("box-shadow", "none",)
                $(".acerc4").css("box-shadow", "none",)
                break
            case 25:
                $(".acerc1").css("background", "lightblue")
                $(".acerc1").css("box-shadow", "0 0 1vh lightblue")
                $(".acerc2").css("background", "gray")
                $(".acerc3").css("background", "gray")
                $(".acerc4").css("background", "gray")
                $(".acerc2").css("box-shadow", "none",)
                $(".acerc3").css("box-shadow", "none",)
                $(".acerc4").css("box-shadow", "none",)
                break
            case 50:
                $(".acerc1").css("background", "lightblue")
                $(".acerc2").css("background", "lightblue")
                $(".acerc1").css("box-shadow", "0 0 1vh lightblue")
                $(".acerc2").css("box-shadow", "0 0 1vh lightblue")
                $(".acerc3").css("background", "gray")
                $(".acerc4").css("background", "gray")
                $(".acerc3").css("box-shadow", "none",)
                $(".acerc4").css("box-shadow", "none",)
                break
            case 75:
                $(".acerc1").css("background", "lightblue")
                $(".acerc2").css("background", "lightblue")
                $(".acerc3").css("background", "lightblue")
                $(".acerc1").css("box-shadow", "0 0 1vh lightblue")
                $(".acerc2").css("box-shadow", "0 0 1vh lightblue")
                $(".acerc3").css("box-shadow", "0 0 1vh lightblue")
                $(".acerc4").css("background", "gray")
                $(".acerc4").css("box-shadow", "none",)
                break
            case 100:
                $(".acerc1").css("background", "lightblue")
                $(".acerc2").css("background", "lightblue")
                $(".acerc3").css("background", "lightblue")
                $(".acerc4").css("background", "lightblue")
                $(".acerc1").css("box-shadow", "0 0 1vh lightblue")
                $(".acerc2").css("box-shadow", "0 0 1vh lightblue")
                $(".acerc3").css("box-shadow", "0 0 1vh lightblue")
                $(".acerc4").css("box-shadow", "0 0 1vh lightblue")
                break
        }
        // Hunger
        switch(data.hunger) {
            case 0:
                $(".mcerc1").css("background", "gray")
                $(".mcerc2").css("background", "gray")
                $(".mcerc3").css("background", "gray")
                $(".mcerc4").css("background", "gray")
                $(".mcerc1").css("box-shadow", "none")
                $(".mcerc2").css("box-shadow", "none")
                $(".mcerc3").css("box-shadow", "none")
                $(".mcerc4").css("box-shadow", "none")
                break
            case 25:
                $(".mcerc1").css("background", "yellow")
                $(".mcerc1").css("box-shadow", "0 0 1vh yellow")
                $(".mcerc2").css("background", "gray")
                $(".mcerc3").css("background", "gray")
                $(".mcerc4").css("background", "gray")
                $(".mcerc2").css("box-shadow", "none")
                $(".mcerc3").css("box-shadow", "none")
                $(".mcerc4").css("box-shadow", "none")
                break
            case 50:
                $(".mcerc1").css("background", "yellow")
                $(".mcerc2").css("background", "yellow")
                $(".mcerc1").css("box-shadow", "0 0 1vh yellow")
                $(".mcerc2").css("box-shadow", "0 0 1vh yellow")
                $(".mcerc3").css("background", "gray")
                $(".mcerc4").css("background", "gray")
                $(".mcerc3").css("box-shadow", "none")
                $(".mcerc4").css("box-shadow", "none")
                break
            case 75:
                $(".mcerc1").css("background", "yellow")
                $(".mcerc2").css("background", "yellow")
                $(".mcerc3").css("background", "yellow")
                $(".mcerc1").css("box-shadow", "0 0 1vh yellow")
                $(".mcerc3").css("box-shadow", "0 0 1vh yellow")
                $(".mcerc3").css("box-shadow", "0 0 1vh yellow")
                $(".mcerc4").css("background", "gray")
                $(".mcerc4").css("box-shadow", "none")
                break
            case 100:
                $(".mcerc1").css("background", "yellow")
                $(".mcerc2").css("background", "yellow")
                $(".mcerc3").css("background", "yellow")
                $(".mcerc4").css("background", "yellow")
                $(".mcerc1").css("box-shadow", "0 0 1vh yellow")
                $(".mcerc2").css("box-shadow", "0 0 1vh yellow")
                $(".mcerc3").css("box-shadow", "0 0 1vh yellow")
                $(".mcerc4").css("box-shadow", "0 0 1vh yellow")
                break
        }
    }

    if(data.action === "updateTime") {
        document.getElementById("data").innerHTML = "" + data.timp;
    }

    if(data.action === "updatePayday") {
        document.getElementById("payday").innerHTML = data.m;
    }

    if(data.action === "updateStrada") {
        document.getElementById("strada").innerHTML = '' + data.strada;
    }

    if(data.action === "updatePos") {
        // console.log(data.pos.width);
        document.getElementById("rama").style.width = data.pos.width;
    }

    if(data.action === "arNebunIntergalactic") {
        if(data.ar === 1.25) {
            document.getElementById("rama").style.width = "20.5vw";
            document.getElementById("rama").style.height = "17vh";
            document.getElementById("rama").style.left = "11.5%";

            document.getElementById("paydayAurit").style.left = "24%";
            document.getElementById("stradademutat").style.left = "24%";
            document.getElementById("datademutat").style.left = "24%";
        } else if(data.ar === 1.77777779102325) {
            document.getElementById("rama").style.width = "14vw";
            document.getElementById("rama").style.left = "8.5%";

            document.getElementById("paydayAurit").style.left = "18%";
            document.getElementById("stradademutat").style.left = "18%";
            document.getElementById("datademutat").style.left = "18%";
        }
    }


    // VIATA ARMURA INTERESANTA ALA DARIUSMEN MAFIOTU' TARI ROMANESTI

    if(data.type === "updateViataArmura") {
        switch(data.viata) {
            case 20:
                $(".vcerc1").css("background", "gray")
                $(".vcerc2").css("background", "gray")
                $(".vcerc3").css("background", "gray")
                $(".vcerc4").css("background", "gray")
                $(".vcerc1").css("box-shadow", "none")
                $(".vcerc2").css("box-shadow", "none")
                $(".vcerc3").css("box-shadow", "none")
                $(".vcerc4").css("box-shadow", "none")
                break
            case 40:
                $(".vcerc1").css("background", "#FF3131")
                $(".vcerc1").css("box-shadow", "0 0 1vh #FF3131")
                $(".vcerc2").css("background", "gray")
                $(".vcerc3").css("background", "gray")
                $(".vcerc4").css("background", "gray")
                $(".vcerc2").css("box-shadow", "none",)
                $(".vcerc3").css("box-shadow", "none",)
                $(".vcerc4").css("box-shadow", "none",)
                break
            case 65:
                $(".vcerc1").css("background", "#FF3131")
                $(".vcerc2").css("background", "#FF3131")
                $(".vcerc1").css("box-shadow", "0 0 1vh #FF3131")
                $(".vcerc2").css("box-shadow", "0 0 1vh #FF3131")
                $(".vcerc3").css("background", "gray")
                $(".vcerc4").css("background", "gray")
                $(".vcerc3").css("box-shadow", "none",)
                $(".vcerc4").css("box-shadow", "none",)
                break
            case 85:
                $(".vcerc1").css("background", "#FF3131")
                $(".vcerc2").css("background", "#FF3131")
                $(".vcerc3").css("background", "#FF3131")
                $(".vcerc1").css("box-shadow", "0 0 1vh #FF3131")
                $(".vcerc2").css("box-shadow", "0 0 1vh #FF3131")
                $(".vcerc3").css("box-shadow", "0 0 1vh #FF3131")
                $(".vcerc4").css("background", "gray")
                $(".vcerc4").css("box-shadow", "none",)
                break
            case 100:
                $(".vcerc1").css("background", "#FF3131")
                $(".vcerc2").css("background", "#FF3131")
                $(".vcerc3").css("background", "#FF3131")
                $(".vcerc4").css("background", "#FF3131")
                $(".vcerc1").css("box-shadow", "0 0 1vh #FF3131")
                $(".vcerc2").css("box-shadow", "0 0 1vh #FF3131")
                $(".vcerc3").css("box-shadow", "0 0 1vh #FF3131")
                $(".vcerc4").css("box-shadow", "0 0 1vh #FF3131")
                break
        }
        // Armura
        switch(data.armour) {
            case 0: 
                $(".amcerc1").css("background", "gray")
                $(".amcerc2").css("background", "gray")
                $(".amcerc3").css("background", "gray")
                $(".amcerc4").css("background", "gray")
                $(".amcerc1").css("box-shadow", "none")
                $(".amcerc2").css("box-shadow", "none")
                $(".amcerc3").css("box-shadow", "none")
                $(".amcerc4").css("box-shadow", "none")
                break
            case 25:
                $(".amcerc1").css("background", "rgb(89, 250, 89)")
                $(".amcerc1").css("box-shadow", "0 0 1vh rgb(89, 250, 89)")
                $(".amcerc2").css("background", "gray")
                $(".amcerc3").css("background", "gray")
                $(".amcerc4").css("background", "gray")
                $(".amcerc2").css("box-shadow", "none")
                $(".amcerc3").css("box-shadow", "none")
                $(".amcerc4").css("box-shadow", "none")
                break
            case 50:
                $(".amcerc1").css("background", "rgb(89, 250, 89)")
                $(".amcerc2").css("background", "rgb(89, 250, 89)")
                $(".amcerc1").css("box-shadow", "0 0 1vh rgb(89, 250, 89)")
                $(".amcerc2").css("box-shadow", "0 0 1vh rgb(89, 250, 89)")
                $(".amcerc3").css("background", "gray")
                $(".amcerc4").css("background", "gray")
                $(".amcerc3").css("box-shadow", "none")
                $(".amcerc4").css("box-shadow", "none")
                break
            case 75:
                $(".amcerc1").css("background", "rgb(89, 250, 89)")
                $(".amcerc2").css("background", "rgb(89, 250, 89)")
                $(".amcerc3").css("background", "rgb(89, 250, 89)")
                $(".amcerc1").css("box-shadow", "0 0 1vh rgb(89, 250, 89)")
                $(".amcerc3").css("box-shadow", "0 0 1vh rgb(89, 250, 89)")
                $(".amcerc3").css("box-shadow", "0 0 1vh rgb(89, 250, 89)")
                $(".amcerc4").css("background", "gray")
                $(".amcerc4").css("box-shadow", "none")
                break
            case 100:
                $(".amcerc1").css("background", "rgb(89, 250, 89)")
                $(".amcerc2").css("background", "rgb(89, 250, 89)")
                $(".amcerc3").css("background", "rgb(89, 250, 89)")
                $(".amcerc4").css("background", "rgb(89, 250, 89)")
                $(".amcerc1").css("box-shadow", "0 0 1vh rgb(89, 250, 89)")
                $(".amcerc2").css("box-shadow", "0 0 1vh rgb(89, 250, 89)")
                $(".amcerc3").css("box-shadow", "0 0 1vh rgb(89, 250, 89)")
                $(".amcerc4").css("box-shadow", "0 0 1vh rgb(89, 250, 89)")
                break
        }
    }

});