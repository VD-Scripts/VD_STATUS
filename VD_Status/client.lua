RegisterNetEvent("vD:updateHud", function(thirst, hunger)
    print(thirst, hunger)
    SendNUIMessage({action="updateHud", thirst=thirst, hunger=hunger})
end)

RegisterNetEvent("vD:updateData", function(time)
    SendNUIMessage({action="updateTime", timp=time})
end)

RegisterNetEvent("vD:updatePayday", function(m, s)
    SendNUIMessage({action="updatePayday", m=m, s=s})
end)

RegisterNetEvent("vD:updateStrada", function(streetName)
    SendNUIMessage({action="updateStrada", strada=streetName})
end)

RegisterNetEvent("vD:updateForSpeedo", function()
    SendNUIMessage({action="updateForSpeedo"})
end)

Citizen.CreateThread(function()
    while true do
        Citizen.Wait(1000)
        local pos = GetEntityCoords(PlayerPedId())
        local aspectRatio = GetAspectRatio()
        SendNUIMessage({action="arNebunIntergalactic", ar=aspectRatio})
        TriggerEvent( "vD:updateStrada", GetStreetNameFromHashKey( GetStreetNameAtCoord( pos.x, pos.y, pos.z ) ) )
        SendNUIMessage({type="updateViataArmura",viata=GetEntityHealth(PlayerPedId()) - 100, armour = GetPedArmour(PlayerPedId())})
    end
end)