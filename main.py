import PySimpleGUI as sg

sg.theme('DarkAmber')

file="salve.png"
cancel="cancel.png"

layout = [ [sg.Text("PyIDE", font=("Helvetica", 25))],
    [sg.Text("Nome do arquivo"), sg.InputText(size=(30,90))],
            [sg.Output(size=(190,50))],
            [sg.Button('', image_filename=file, image_size=(35, 35), image_subsample=4), sg.Button(" ", image_filename=cancel, image_size=(100,30), image_subsample=1)]
]

window = sg.Window('PyIDE', layout, no_titlebar=True).Finalize()
window.Maximize()
# Event Loop to process "events" and get the "values" of the inputs
while True:
    event, values = window.read()
    if event == sg.WIN_CLOSED or event == ' ': # if user closes window or clicks cancel
        break
    print(values)
    arq = open(values[0], 'w')
    arq.write(values[1])
    arq.flush()