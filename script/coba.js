let namaPacar = [
    "Vindy",
    "Karin",
    "Winda",
    "Bella",
    "Susy",
    "Eka"
];

function showPacar() {
    let listPacar = document.getElementById("list-pacar")
    listPacar.innerHTML = "";
    for(let i=0; i<namaPacar.length; i++) {
        var btnEdit = "<a href='#' onclick='editNama("+i+")'>Edit</a>"
        var btnHapus = "<a href='#' onclick='hapusNama("+i+")'>Hapus</a>"
        listPacar.innerHTML += "<li>"+ namaPacar[i] + " " + " " + ""+btnEdit+"  "+btnHapus+" " + "</li>"
    }
}

function addPacar(){
    let input = document.getElementById("nama");
    //console.log(input)
    namaPacar.push(input.value);
    showPacar();
}
function editNama(id) {
    let newNama = prompt("Ubah Nama Pacar ", namaPacar[id]);
    namaPacar[id] = newNama;
    showPacar();
}

function hapusNama(id){
    namaPacar.splice(id, 1);
    showPacar();
}

showPacar();
