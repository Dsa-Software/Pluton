function save(file: string, value:string) {
    let texto = document.getElementById("code").value;
    let titulo = document.getElementById("in").value;
    let blob = new Blob([texto], { type: "text/plain;charset=utf-8" });
    saveAs(blob, titulo);
}