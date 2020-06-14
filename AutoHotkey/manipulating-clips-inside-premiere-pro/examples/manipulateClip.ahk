#NoEnv
#SingleInstance, Force
SendMode Input
SetWorkingDir, %A_ScriptDir%

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;OUR MANIPULATE FUNCTIONS
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

addEditPoint(addEdit)
{
    sendInput, ^+k
    sleep 10
}

selectClipAtPlayhead(selectClip)
{
    sendInput, d
    sleep 10
}

moveClipUpOneTrack(moveClip)
{
    selectClipAtPlayhead("")
    sendInput, !{Up}
    sleep 100
}

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;OUR SHORTCUTS
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

Numpad5:: addEditPoint("")
Numpad8:: moveClipUpOneTrack("")
