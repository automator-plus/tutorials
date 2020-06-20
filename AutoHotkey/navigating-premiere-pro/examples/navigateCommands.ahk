#NoEnv
#SingleInstance, Force
SendMode Input
SetWorkingDir, %A_ScriptDir%

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;OUR ZOOM FUNCTIONS
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

zoomInOneStep(zoomIn)
{
    sendInput, =
    sleep 100
}

zoomOutOneStep(zoomOut)
{
    sendInput, -
    sleep 100
}

zoomOutThreeSteps(zoomOut)
{
    loop, 3
    {
        zoomOutOneStep("")
    }
}

zoomInThreeSteps(zoomIn)
{
    loop, 3
    {
        zoomInOneStep("")
    }
}

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;OUR NAVIGATE FUNCTIONS
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

movePlayheadForward(movePlayhead)
{
    loop, 5
    {
        sendInput, +{right}
        sleep 10
    }
}

movePlayheadBackwards(movePlayhead)
{
    loop, 5
    {
        sendInput, +{left}
        sleep 10
    }
}

movePlayheadNextMarker(movePlayhead)
{
    sendInput, +m
    sleep 10
}

movePlayheadPreviousMarker(movePlayhead)
{
    sendInput, ^+m
    sleep 10
}

movePlayheadNextEdit(movePlayhead)
{
    sendInput, {down}
    sleep 10
}

movePlayheadPreviousEdit(movePlayhead)
{
    sendInput, {up}
    sleep 10
}

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;OUR SHORTCUTS
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

NumpadAdd:: zoomInOneStep("")
NumpadSub:: zoomOutOneStep("")
^NumpadAdd:: zoomInThreeSteps("")
^NumpadSub:: zoomOutThreeSteps("")
Numpad6:: movePlayheadForward("")
Numpad4:: movePlayheadBackwards("")
^Numpad6:: movePlayheadNextMarker("")
^Numpad4:: movePlayheadPreviousMarker("")
!Numpad6:: movePlayheadNextEdit("")
!Numpad4:: movePlayheadPreviousEdit("")
