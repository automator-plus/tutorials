#NoEnv
#SingleInstance, Force
SendMode Input
SetWorkingDir, %A_ScriptDir%

zoomInOneStep(zoomIn)
{
    sendInput, =
}

NumpadAdd:: zoomInOneStep("")