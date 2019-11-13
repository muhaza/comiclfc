document.getElementById("hamburger-button").style.display = "block";

document.getElementById("pesanan").innerHTML =
    `Siapa kata komik hanya boleh dilukis oleh pelukis komik atau kartunis. 
    Kami di Comic LFC menerima semua bentuk kartun dan kami menggalakkan bukan pelukis untuk 
    bersama-sama memeriahkan task kami! Yahuu`;

document.getElementById("update-button").innerHTML =
    `<a class="btn btn-sm btn-secondary display-4" href="https://comiclfc.web.app/_Comic_LFC_1.14.apk">DOWNLOAD</a>`;
// `<a class="align-center btn btn-sm btn-secondary display-4">Versi Anda : BETA</a>`;

document.getElementById("footer-tab").innerHTML =
    `<div class="media-container-row align-center mbr-white">
<div class="row row-links" id="footer-button">
    <ul class="foot-menu">
        <div class="mbr-section-btn">
            <a class="btn btn-sm btn-secondary display-4" onclick="bacaButton()">BACA</a>
            <a class="btn btn-sm btn-white-outline display-4" onclick="submitButton()">HANTAR</a>
        </div>
    </ul>
</div>
</div>`;