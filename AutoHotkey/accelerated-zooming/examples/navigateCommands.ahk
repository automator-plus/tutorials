#NoEnv
#SingleInstance, Force
SendMode Input
SetWorkingDir, %A_ScriptDir%

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

NumpadAdd:: zoomInOneStep("")
NumpadSub:: zoomOutOneStep("")
^NumpadAdd:: zoomInThreeSteps("")
^NumpadSub:: zoomOutThreeSteps("")